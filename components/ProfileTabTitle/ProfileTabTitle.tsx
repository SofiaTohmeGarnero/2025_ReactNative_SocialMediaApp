import {StyleSheet, Text} from 'react-native';

interface ProfileTabTitleProps {
    title: string,
    isFocused: boolean
}

const ProfileTabTitle = ({title, isFocused }: ProfileTabTitleProps ) => {
  return (
    <Text style={[style.title, !isFocused && style.titleNotFocused]}>
      {title}
    </Text>
  );
};

export default ProfileTabTitle;

const style = StyleSheet.create({
    title: {
      color: '#022150',
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: 16,
      padding: 15,
    },
    titleNotFocused: {
      color: '#79869F',
      fontFamily: 'Inter',
      fontWeight: 400,
    },
  });
  
