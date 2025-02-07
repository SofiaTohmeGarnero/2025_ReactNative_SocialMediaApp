import {Image, StyleSheet, Text, View} from 'react-native';
import {IUserPost} from '../../../mocks/userPosts';
import {UserProfileImage} from '../../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faHeart, faMessage } from '@fortawesome/free-regular-svg-icons';

interface userPostProps {
  item: IUserPost;
}

export const UserPost = ({item}: userPostProps) => {
  const {
    firstName,
    lastName,
    location,
    likes,
    comments,
    bookmarks,
    id,
    postImage,
    profileImage,
  } = item;

  return (
    <View style={style.userPostContainer}>
      <View style={style.userPostHeader}>
        <View style={style.userInfoContainer}>
          <UserProfileImage profileImage={profileImage} imageDimensions={48} />
          <View style={style.userTextContainer}>
            <Text style={style.username}>
              {firstName} {lastName}
            </Text>
            {location && <Text>{location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'}/>
      </View>
      <View style={style.postImageContainer}>
        <Image source={postImage} style={{width: '100%', borderRadius: 15}} />
      </View>
      <View style={style.userActionsContainer}>
        <View style={style.userAction}>
            <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
            <Text style={style.textAction}>{likes}</Text>
        </View>
        <View style={style.userAction}>
            <FontAwesomeIcon icon={faMessage} color={'#79869F'}/>
            <Text style={style.textAction}>{comments}</Text>
        </View>
        <View style={style.userAction}>
            <FontAwesomeIcon icon={faBookmark} color={'#79869F'}/>
            <Text style={style.textAction}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  userPostHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfoContainer:{
    flexDirection: 'row', 
    alignItems: 'center',
  },
  userTextContainer: {
    marginLeft: 10,
  },
  username: {
    color: '#000',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    fontFamily: 'Inter',
    fontWeight: '200',
    fontSize: 12,
    marginTop: 5,
  },
  postImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userActionsContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 4,
  },
  userAction:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 27,
  },
  textAction:{
    marginLeft: 3, 
    color: '#79869F'
  }
});
