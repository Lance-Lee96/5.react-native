import React, { useState } from "react";
import { View,Text, Button } from "react-native";


const Counter = () =>{
    const [count,setCount] = useState(0);
    return(
    <View style={{
        alignItems: 'center',
    }}>
        <Text style={{
            fontSize : 30
        }}>{count}</Text>
        <Button title="+1" onPress= {() => {setCount(count +1)}}/>
    
    </View>
    )
}

export default Counter