import React, {useContext} from "react";
import { View, Text, Button } from "react-native";
import AuthContext from "../contexts/UserContext";

const HomeScreen = () => {
    const {user, login, logout} = useContext(AuthContext)

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical:10}}>
            {user == null && 
            <Button title='로그인' onPress={login}></Button>}
            {user !== null && 
            <><Text style={{fontSize:24}}>Welcome {user.name}</Text><Button title="로그아웃" onPress={logout}></Button></>}
        </View>
    )
}
export default HomeScreen