import React from "react";
import styled from "styled-components";
import { Button } from "react-native";


const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color:#ffffff;
`

const StyledText = styled.Text`
    font-size : 30px;
    color : #000000;
`

export const FriendScreen = () => {
    return (
        <Container>
            <StyledText>친구 목록 입니다.</StyledText>
        </Container>
    )
}

export const ChatListScreen = ({ navigation }) => {
    return (
        <Container>
            <StyledText>채팅 목록</StyledText>
            <Button title="채팅방 들어가기" onPress={() => navigation.navigate('ChatDetail')} />
                
        </Container>
    )
}

export const SettingScreen = () => {
    return (
        <Container>
            <StyledText>설정화면 입니다.</StyledText>
        </Container>
    )
}

export const ChatDetailScreen = () => {
    return (
        <Container>
            <StyledText>채팅창입니다.</StyledText>
        </Container>
    )
}


