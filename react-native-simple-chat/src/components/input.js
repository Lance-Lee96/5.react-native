import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//스타일 컴포넌트 만들기

//모든 요소를 감싸는 컴포넌트
const Container = styled.View`
    flex-direction : column;
    width: 100%;
    margin: 10px 0;
`

//TextInput 안에 쓰이는 글씨
const Label = styled.Text`
    font-size: 14px;
    font-weight : 600;
    margin-bottom: 6px;
    color : ${({ theme, isFocused }) => (isFocused ? theme.text : theme.label)};
`

//TextInput 컴포넌트
const StyledTextInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.inputPlaceholder,
}))`
    background-color : ${({ theme, editable }) => editable ? theme.background : theme.inputDisabledBackground};
    color: ${({ theme }) => theme.text};
    padding : 20px 10px;
    font-size : 16px;
    border : 1px solid ${({ theme, isFocused }) => (isFocused ? theme.text : theme.inputBorder)};
    border-radius : 4px;
`

//forwardRef()
//React 에서 특정 컴포넌트가 받은 ref를 자식 컴포넌트의 특정 DOM 요소나 
//React Native 컴포넌트로 전달할 수 있도록 하는 기능.
//forwardRef((props,ref)=>{});

const Input = forwardRef(
    (
        {
            label,
            value,
            onChangeText,
            onSubmitEditing,
            onBlur,
            placeholder,
            isPassword,
            returnKeyType,
            maxLength,
            disabled,
        },
        ref
    ) => {
        const [isFocused, setIsFocused] = useState(false);
        return (
            <Container>
                <Label isFocused={isFocused}>{label}</Label>
                <StyledTextInput
                    ref={ref} // Login에서 정의된 useRef를 전달
                    isFocused={isFocused} //해당 Input이 포커스가 된 상태냐
                    value={value} // 호출한 쪽에서 넘어온 값
                    onChangeText={onChangeText} //호출한 쪽에서 넘어온 함수
                    onSubmitEditing={onSubmitEditing} //호출한 쪽에서 넘어온 함수
                    onFocus={() => setIsFocused(true)} //Input에 포커스가 잡힐 때 실행
                    onBlur={() => { //Input에 포커스가 안될 때 실행
                        setIsFocused(false);
                        onBlur(); //PropType에 디폴트로 설정한 값이 실행
                    }}
                    placeholder={placeholder}
                    secureTextEntry={isPassword} // 비밀번호면 ●로 표시
                    returnKeyType={returnKeyType} // 키보드의 완료 버튼의 표시
                    maxLength={maxLength}
                    autoCapitalize="none"// 첫글자 대문자로 안나오게
                    autoCorrect={false} // 단어 추천 안뜨게
                    textContentType="none" // ios에서만 사용하는 옵션, 옵션따라 뜨는 키보드가 달라짐
                    underlineColorAndroid="transparent"// 컴포넌트의 밑줄 색상 설정
                    editable={!disabled} //해당 컴포넌트를 수정할 수 있냐(true) 없냐 (false)
                />
            </Container>

        );
    }
)

Input.defaultProps = {
    onBlur: () => { },
    onChangeText: () => { },
    onSubmitEditing: () => { },
};


Input.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func,
    onSubmitEditing : PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    isPassword: PropTypes.bool,
    returnKeyType: PropTypes.oneOf(['done', 'next']),
    maxLength: PropTypes.number,
    editable : PropTypes.bool,
}

export default Input