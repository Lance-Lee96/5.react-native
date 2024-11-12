import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Image, Input } from "../components";
import { images } from "../utils/images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding: 20px;
`

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef();
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{flex : 1}}
            extraScrollHeight={20}
        >
            <Container>
                <Image url={images.logo} imageStyle={{ borderRadius: 100 }} />
                <Input
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder="Email"
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef}
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    onSubmitEditing={() => { }}
                    placeholder="Password"
                    returnKeyType="done"
                />
            </Container>
            </KeyboardAwareScrollView>
    )
}

export default Login;

// TouchableWithoutFeedback
// 컴포넌트를 클릭했을 때 클릭에 대한 상호작용은 하지만 스타일 작용은 없고, 반드시 하나의 자식 컴포넌트를 가져야 한다.
// 사용자가 요소를 클릭했을 때 시각적인 효과는 없고 단지 터치 이벤트만 처리하는 컴포넌트
// 주로 사용하는 예시
// 배역을 터치해 키보드를 닫는 동작처럼 시각적인 피드백이 필요하지 않을 때

//Keyboard API
//키보드 관련 API로 키보드의 상태를 제어하고 키보드의 이벤트에 반응하는데 사용된다.
//주로 키보드가 화면에 나타나거나 사라질 때 UI를 조정하거나 키보드를 수동으로 닫는 등 다양한 작업을 수행할 수 있다.

//Keyboard.dismiss();
//현재 활성화된 키보드를 닫는 함수.

// npm install react-native-keyboard-aware-scroll-view
// 포커스가 있는 TextInput 컴포넌트의 위치로 자동 스크롤되는 기능이 있는 라이브러리

//오류 메시지
//Input 컴포넌트에 입력되는 값이 올바르게 입력되었는지 확인하고, 잘못된 값이 입력되면 오류 메시지를 보여주는 기능 만들기