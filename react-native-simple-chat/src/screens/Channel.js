import React from "react";
import styled from "styled-components";
import { Text } from "react-native";

const Container = styled.View`
    flex: 1;
    background-color : ${({theme})=> theme.background};
`

const Channel = () => {
    return(
        <Container>
            <Text style={{fontSize : 24}}>ID</Text>
            <Text style={{fontSize : 24}}>Title</Text>
        </Container>
    )
}

export default Channel