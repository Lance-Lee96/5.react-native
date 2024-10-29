import React,{useState,useEffect} from "react";
import { View,Text } from "react-native";

export default Total = ({arr}) => {
    const [sum, setSum] = useState(0);

    useEffect(()=>{
        let total = arr.reduce((total, num)=>total+num,0);
        setSum(total)
    },[arr])
    
    return(
        <View>
            <Text>sum : {sum}</Text>
        </View>
    )
}