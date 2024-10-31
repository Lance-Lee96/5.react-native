import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { textStyles, viewStyles } from './styles';
import { Header, Contents, Footer } from './components/Layout';
import FlexDirectionTest from './components/flexDirectionTest';
import JustifyContentTest from './components/justifyContentTest';
import AlignItemsTest from './components/alignItemsTest';
import ShadowBox from './components/shadowBox';
import { Styled } from './components/StyledComponent';
import Button from './components/Button';
import styled, { ThemeProvider } from 'styled-components';
import { SignUp } from './components/SignUp';
import Input from './components/input';
import { theme ,lightTheme, darkTheme } from './theme';
import { Switch } from 'react-native';


const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
    align-items: center;
    justify-content:center;
`

export default function App() {
    const[isDark,setIsDark] = useState(false);
    const _toggleSwitch = () => {
        setIsDark(!isDark);
    }

    return (
        // ThemeProvider에 정의한 props는 하위 컴포넌트에서 받아서 사용할 수 있다.
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Container>
                <Switch value={isDark} onValueChange={_toggleSwitch} />
                <Button title="Hanbit" />
                <Button title="React Native" />
                <Input borderColor="#3498db" />
                <Input borderColor="#9b59b6" />
            </Container>
        </ThemeProvider>



    );
}


// 객체 리터럴
// const person = { key:value, key:value, ...}
// key -> 보통 프로퍼티라고 부른다
// value -> 프로퍼티의 값 이라고 부른다
// 프로퍼티 값에 들어갈 수 있는 타입
// 문자열, 숫자(정수, 실수 포함), boolean, null, 객체, 배열, 함수(객체 안에 정의된 함수를 메서드라고 한다.)

// const user = {
//     name : "Alice",
//     age : 30,
//     isMarried : true,
//     address : null,
//     contact : {email : "alice@exapmple.com", phone:"123-456-7890"},
//     hobbies:["reading","sports"],
//     greet(){
//         console.log();
//     }
// }