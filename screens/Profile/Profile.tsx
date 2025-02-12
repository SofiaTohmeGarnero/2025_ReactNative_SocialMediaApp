import { useNavigation } from '@react-navigation/native';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import { globalStyle } from '../../assets/styles/globalStyle';
import style from './style';
import { ProfileTabsNavigation } from '../../navigation/MainNavigation';

function Profile(): React.JSX.Element {
  const navigation = useNavigation();

  /**
   * flexGrow is a style property that determines how much a component
   * should grow relative to its siblings in a flex container.
   * The component with flexgrow 1 will take up
   * as much space as possible along the main axis of the flex container.
   * 
   * Scroll views are used to create
   * a scrollable area that can contain other components.
   * However, sometimes the content inside
   * the scroll view does not stretch and take up the full height of the scroll view,
   * even if the content is smaller than the available space.
   * This issue often arises when using a flex box layout as the scroll view does not
   * automatically stretch to its content to fill the available space.
   * 
   * Using the flex grow one on the content
   * inside the scroll view will help you fix an issue of scroll views    
   */


  return (
    <SafeAreaView  style={[globalStyle.whiteBG, {flex: 1}]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <Text style={style.userName}>Emanuel Robles</Text>
        <View style={style.statContainer}>
          <View>
            <Text style={style.statAmount}>45</Text>
            <Text style={style.statType}>Following</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>30M</Text>
            <Text style={style.statType}>Followers</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>100</Text>
            <Text style={style.statType}>Posts</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
