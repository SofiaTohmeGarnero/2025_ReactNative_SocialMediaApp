import { useNavigation } from '@react-navigation/native';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import { globalStyle } from '../../assets/styles/globalStyle';

function Profile(): React.JSX.Element {
  const navigation = useNavigation();

  return (
    <SafeAreaView  style={[globalStyle.whiteBG, {flex: 1}]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color: 'blue'}}>Go Back</Text>
      </TouchableOpacity>
      <Text>Profile page</Text>
    </SafeAreaView>
  );
}

export default Profile;
