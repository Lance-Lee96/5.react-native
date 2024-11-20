import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import { BoardContext } from "../context/BoardContext";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

const PostDetail = () => {
    const navigate = useNavigate();
    const {boardList, setBoardList} = useContext(BoardContext);
    console.log(boardList)
    return (
        <div>
            
                <h1>{boardList[0].title}</h1>
                <h2>{boardList[0].author}</h2>
                <h2></h2>

        </div>
    )
}

export default PostDetail