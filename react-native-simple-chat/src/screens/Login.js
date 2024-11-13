import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Image, Input, Button } from "../components";
import { images } from "../utils/images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespace } from "../utils/common";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const Container = styled.View`
    flex : 1;
    align-items : center;
    justify-content : center;
    background-color : ${({ theme }) => theme.background};
    padding: 0 20px;
    padding-top:${({insets:{top}})=> top}px;
    padding-bottom:${({insets:{bottom}})=> bottom}px;
`

const ErrorText = styled.Text`
    align-items : flex-start;
    width : 100%;
    height : 20px;
    margin-bottom : 10px;
    line-height : 20px;
    color : ${({theme}) => theme.errorText};
`

const Login = ({ navigation }) => {
    // useSafeAreaInsets()
    // 화면에 안전 영역을 고려해 레이아웃을 조정할 때 사용하는 Hook
    // iOS장치의 상단 노치나 하단 홈 버튼 영역과 같은 안전 구역을 감안해 레이아웃을 맞추기 위해 사용.
    // hook은  {top,bottom,left,right} 형태의 객체를 반환한다.
    // 안전 영역의 높이나 너피를 픽셀 단위로 제공
    const insets = useSafeAreaInsets();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const passwordRef = useRef();

    const [disabled,setDisabled] = useState(true);

    useEffect(() => {
        //이메일을 입력하고, 비밀번호를 입력하고
        //조건맞게 입력했을 때 false로 바꾼다.
        setDisabled(!(email && password && !errorMessage))
    },[email,password,errorMessage])

    const _handleEmailChange = email => {
        //Input에 적힌 email을 받아와서 모든 공백 제거
        const changedEmail = removeWhitespace(email);
        setEmail(changedEmail);
        setErrorMessage(
            validateEmail(changedEmail) ? '' : 'Please verify your email.'
        )
    }

    const _handlePasswordChange = password => {
        setPassword(removeWhitespace(password));
    }

    //Button 컴포넌트에 전달할 함수 (지금 당장은 기능이 없음)
    const _handleLoginButtonPress = () => {
        alert('버튼 눌림')
    }

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{flex : 1}}
            extraScrollHeight={20}
        >
            <Container insets={insets}>
                <Image url={images.logo} rounded />
                <Input
                    label="Email"
                    value={email}
                    onChangeText={_handleEmailChange}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder="Email"
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef}
                    label="Password"
                    value={password}
                    onChangeText={_handlePasswordChange}
                    onSubmitEditing={_handleLoginButtonPress}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword={true}
                />
                <ErrorText>{errorMessage}</ErrorText>
                {/* 로그인 버튼 */}
                <Button title="Login" 
                        onPress={_handleLoginButtonPress} 
                        disabled={disabled} // 여기서의 disabled는 props의 역할만 한다.
                />
            
                {/* 회원가입 버튼 */}
                <Button title="Sign up with email"
                        onPress={()=> navigation.navigate('Signup')}
                        isFilled={false}
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