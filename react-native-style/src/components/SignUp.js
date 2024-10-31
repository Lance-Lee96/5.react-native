import React from "react";
import { View, Text, TextInput,StyleSheet } from "react-native";

export const SignUp = () =>{
    return (
        <View>
            
            <Text>회원가입</Text>  
            <Text>이름</Text>
            <TextInput>이름을 입력하세요</TextInput>
            <Text>비밀번호</Text>
            <TextInput>이름을 입력하세요</TextInput>
            <Text>비밀번호 확인</Text>
            <TextInput>이름을 입력하세요</TextInput>
            
        </View>
    )
}