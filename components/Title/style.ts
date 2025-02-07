import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";  //no funciona

export const style = StyleSheet.create({
    title:{
        color: '#022150',
        fontFamily: 'Inter', //getFontFamily('Inter', '600'),
        fontSize: 24,
        fontWeight: '600'
    }
})