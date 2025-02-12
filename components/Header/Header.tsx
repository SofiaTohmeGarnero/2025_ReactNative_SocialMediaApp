import {Text, TouchableOpacity, View} from 'react-native';
import {Title} from '../Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {style} from './style';
import {useNavigation} from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';

export const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={style.mainContainer}>
      <Title title={"Let's Explore"} />
      <TouchableOpacity style={style.messageIconAndNumberContainer}>
        <FontAwesomeIcon icon={faEnvelope} color={'#898DAE'} size={20} />
        <View style={style.messageNumberContainer}>
          <Text style={style.messageNumber}>2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
