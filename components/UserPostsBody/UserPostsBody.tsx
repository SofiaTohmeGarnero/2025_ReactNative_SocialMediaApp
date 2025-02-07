import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {userPosts, IUserPost} from '../../mocks/userPosts';
import {UserPost} from './UserPost/UserPost';
import {pagination} from '../../util/pagination';

export const UserPostsBody = () => {
  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState<IUserPost[]>([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  useEffect(() => {
    setIsLoadingUserPosts(true);
    const getInitialData = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialData);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <View>
      <FlatList
        onEndReachedThreshold={0.5} //It specifies the percentage of the view that needs to be scrolled before triggering the fetch of more data
        onEndReached={() => {
          if (isLoadingUserPosts) return;
          setIsLoadingUserPosts(true);
          const contentToAppend = pagination(
            userPosts,
            userPostsCurrentPage + 1,
            userPostsPageSize,
          );
          if (contentToAppend.length > 0) {
            setUserPostsCurrentPage(userPostsCurrentPage + 1);
            setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
          }
          setIsLoadingUserPosts(false);
        }}
        showsVerticalScrollIndicator={false}
        data={userPostsRenderedData}
        renderItem={item => (
          <View style={style.userPostContainer}>
            <UserPost key={item.index} item={item.item} />
          </View>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  userPostContainer: {
    marginHorizontal: 24,
  },
});
