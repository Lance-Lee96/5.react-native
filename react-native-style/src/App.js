import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { textStyles, viewStyles } from './styles';
import { Header, Contents, Footer } from './components/Layout';
import FlexDirectionTest from './components/flexDirectionTest';
import JustifyContentTest from './components/justifyContentTest';
import AlignItemsTest from './components/alignItemsTest';
import ShadowBox from './components/shadowBox';
import { Styled } from './components/StyledComponent';
import Button from './components/Button';
import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content:center;
`

export default function App() {
    return (
        <Container>
            <Button title={'hanbit'} />
        </Container>




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