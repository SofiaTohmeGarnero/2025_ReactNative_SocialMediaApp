import { StyleSheet, Text, View } from "react-native";
import { UserProfileImage } from "../../UserProfileImage/UserProfileImage";

interface UserStoryProps {
    firstName: string,
    //id: number,
    profileImage: any
}
export const UserStory = ( {firstName, profileImage}: UserStoryProps ) =>{
    return (
        <View style={style.userStoryContainer}>
            <UserProfileImage profileImage={profileImage} imageDimensions={65} />
            <Text style={style.firstName}>{firstName}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    userStoryContainer:{
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    firstName:{
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: 14,
        marginTop: 8,
        color: '#022150',
    }

})