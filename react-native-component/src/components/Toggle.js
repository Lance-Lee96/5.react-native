import React, { useState } from "react";
import { View,Text } from "react-native";
import MyButton from "./MyComponent";

const ToggleText = () =>{
    const [toggle,setToggle] = useState(true);
    
    return(
        <View>
            {toggle && (<Text>This text can be toggled</Text>)}
            <MyButton title="Toggle Text" onPress ={() => {setToggle(!toggle)}} />
        </View>

    )
}
export default ToggleText