import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { BoardContext } from "./context/BoardContext";
import BoardStack from "./navigation/BoardStack";

const App = () => {

    const [boardList, setBoardList] = useState([]);

    return (
        <NavigationContainer>
            <BoardContext.Provider value={{ boardList, setBoardList }}>
                <BoardStack />
            </BoardContext.Provider>
        </NavigationContainer>
    );
}
export default App