import React from "react";
import { Alert, Button } from "react-native";
import styled from "styled-components";

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

export const HomeScreen = () => {
    return (
        <Container>
            <StyledText>Welcome to ShopApp</StyledText>
        </Container>
    )
}

export const CartScreen = () => {
    return (
        <Container>
            <StyledText>Your Cart is Empty</StyledText>
            <Button title="add Item" onPress={() => Alert.alert('Item','Item added')} />
        </Container>
    )
}

export const ProfileScreen = () => {
    return (
        <Container>
            <StyledText>Your Profile</StyledText>
        </Container>
    )
}