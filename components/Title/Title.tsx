import React from 'react';
import { Text } from "react-native";
import { style } from "./style";

interface TitleProps{
    title: string
}
export const Title = ({title}:TitleProps) =>{
    return <Text style={style.title}>{title}</Text>  
}