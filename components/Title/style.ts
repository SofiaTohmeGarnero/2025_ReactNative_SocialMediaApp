import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";  //no funciona
import { scaleFontSize } from "../../util/scaling";

export const style = StyleSheet.create({
    title:{
        color: '#022150',
        fontFamily: 'Inter', //getFontFamily('Inter', '600'),
        fontSize: scaleFontSize(24),
        fontWeight: '600'
    }
})