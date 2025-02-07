import {FlatList, View} from 'react-native';
import {style} from './style';
import {userStories, IUserStory} from '../../mocks/userStories';
import {UserStory} from './UserStory/UserStory';
import { useEffect, useState } from 'react';
import { pagination } from '../../util/pagination';

export const UserStoriesNavbar = () => {

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<IUserStory[]>([]);
  const [isLoadingUserStories, setIsLoadingUserStories]= useState(false);

  

  useEffect(()=>{
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

  }, [])

  return (
    <View style={style.userStoriesContainer}>
      <FlatList
        onEndReachedThreshold={0.5}  //It specifies the percentage of the view that needs to be scrolled before triggering the fetch of more data 
        onEndReached={()=>{
          if(isLoadingUserStories) return;
          setIsLoadingUserStories(true);
          const contentToAppend = pagination(userStories,userStoriesCurrentPage + 1,userStoriesPageSize);
          if(contentToAppend.length > 0){
            setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
            setUserStoriesRenderedData( prev => [...prev, ...contentToAppend])
          }
          setIsLoadingUserStories(false);
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={userStoriesRenderedData}
        renderItem={item => (
          <UserStory
            key={item.index}
            firstName={item.item.firstName}
            profileImage={item.item.profileImage}
          />
        )}
      />
    </View>
  );
};
