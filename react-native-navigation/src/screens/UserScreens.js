import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import styled from "styled-components";

const StyledView = styled.View`
    flex:1;
    justify-content : center;
    align-items : center;
`

const StyledText = styled.Text`
    font-size:20px;
    margin-bottom: 20px;
`


export const UserHome = ({ navigation }) => {
    return (
        <StyledView>
            <StyledText>유저 프로필 앱</StyledText>
            <Pressable
                onPress={() => navigation.navigate('UserList')}>
                <Text>유저 목록 보기</Text>
            </Pressable>
        </StyledView>
    )
}



export const UserList = ({ navigation }) => {
    const users = [
        { id: '1', name: 'John Doe', email: 'john@example.com' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
        { id: '3', name: 'Alice Johnson', email: 'alice@example.com' },
    ];


    const _onPress = users => {
        navigation.navigate('UserProfile', { id: users.id, name: users.name, email: users.email })
    };

    return (
        <ScrollView style={{flex:1, padding:20}}>
            <StyledText>유저 목록</StyledText>
            {users.map((users) => (
                <View 
                    key={users.id}
                    style={{
                        padding:10,
                        borderBottomWidth:1,
                        borderBottom: 10
                    }}
                >
                    <Text style={{
                        fontSize:20,
                        alignItems:"center",
                        marginBottom:10,
                        textAlign : "center"
                    }}>
                        {users.name}
                    </Text>
                    <Pressable
                        onPress={() => _onPress(users)}
                        style={{
                            paddingHorizontal: 10,
                            paddingVertical:5,
                            backgroundColor:'#3498db',
                            borderRadius: 5,
                            alignItems: "center"
                        }}
                        >
                        <Text style={{color:'white'}}>유저 프로필 보기</Text>
                    </Pressable>
                </View>
            ))}
        </ScrollView>
    )
}

export const UserProfile = ({route}) => {
    return(
        <View style={{flex: 1, padding:20}}>
            <Text style={{fontSize:12, marginBottom : 10}}>회원 번호 : {route.params.id}</Text>
            <Text style={{fontSize:24, fontWeight:"bold" , marginBottom : 10}}>회원 이름 : {route.params.name}</Text>
            <Text style={{fontSize:15, fontStyle:"italic" , marginBottom : 10}}>회원 이메일 : {route.params.email}</Text>
        </View>
    )
}

