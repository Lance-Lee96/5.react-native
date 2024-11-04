import React, {useRef,useEffect, useState} from "react";
import { Text, View } from "react-native";
import Button from "./Button";

const Timer = () => {
    const timer = useRef(0);
    const [count,setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(()=>{
            timer.current += 1;
            console.log("Timer : ", timer.current)
        },1000)

        return () => clearInterval(interval);
    },[]);

    return (
        <View>
            <Text>Count : {count} </Text>
            <Button
                title="+"
                onPress={()=>setCount(prev=>prev+1)}/>
            </View>
    )
}

export default Timer