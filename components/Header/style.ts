import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    mainContainer:{
        marginLeft: 27,
        marginRight: 17,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    messageIconAndNumberContainer:{
        padding: 14, 
        backgroundColor: '#F9FAFB', 
        borderRadius: 100,
    },
    messageNumberContainer:{
        backgroundColor: '#F35BAC',
        borderRadius: 100,
        width: 10,
        height: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 12,
        right: 12,
    },
    messageNumber:{
        color: '#FFFFFF',
        fontSize: 6,
        fontFamily: 'Inter',
        fontWeight: 600
    }
})