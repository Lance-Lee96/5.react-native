import React, {useState} from "react";
import styled from "styled-components";
import Button from "./Button";
import { View } from "react-native";

const StyledText = styled.Text`
    font-size : 24px;
    margin : 10px;
`

const Counter = () => {
    const [count,setCount] = useState(0);

    return(
        <View style={{alignItems:"center"}}>
            <StyledText>{count}</StyledText>
            <Button title="+1" onPress={() => {
                setCount(count => count + 1);
                setCount(count => count + 1);
                console.log(`count : ${count}`)
                }}></Button>
            <Button title="-1" onPress={() => setCount(count - 1)}></Button>
        </View>
    )
}

export default Counter