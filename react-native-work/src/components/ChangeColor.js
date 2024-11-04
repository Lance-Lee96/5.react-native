import React, {useState} from "react";
import styled from "styled-components";

const AppContainer = styled.View`
    flex : 1;
    align-items : center;
    justify-content : center;
    background-color : ${(props) => props.backgroundColor};
`;

const ChangeColorButton = styled.Pressable`
    padding : 16px;
    background-color : #3498db;
    border-radius: 8px;
`;

const ButtonText = styled.Text`
    color : white;
    font-size : 18px;
`;

const ChangeColor = () => {
    const [backgroundColor,setBackgroundColor] = useState('#ffffff');

    const handleChangeColor = () => {
        const rndColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
        setBackgroundColor(rndColor)
    }

    

    return (
        <AppContainer backgroundColor={backgroundColor}>
            <ChangeColorButton onPress={handleChangeColor}>
                <ButtonText>Change BackgroundColor</ButtonText>
            </ChangeColorButton>
        </AppContainer>
    )
}
export default ChangeColor;