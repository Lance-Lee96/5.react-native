import React,{useContext, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BoardContext } from "../context/BoardContext";
import CustomButton from "../components/CustomButton";


const PostDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {boardList, setBoardList} = useContext(BoardContext);
    const [board, setBoard] = useState({});

    useEffect(()  => {
        //배열에 들어있는 게시글들 중 파라미터로 전달받은 id와 일치하는
        //게시글 한 건 찾기
        const post = boardList.find((item) => item.id === parseInt(id))
        if(post) {
            setBoard(post); // 찾은 게시물을 state에 저장
        }else{
            alert("게시글을 찾을 수 없습니다.")
        }
    },[id])

    const moveToBoard = () => {
        navigate("/")
    }

    const handleDelete = () => {
        if(window.confirm("게시글을 삭제하시겠습니까?")){
            //게시글들이 들어있는 배열에서 id에 해당하는 게시글만 빼고
            //다시 배열로 만들어야 됨
            setBoardList((prevList) => prevList.filter((post)=> post.id !== parseInt(id)))
            alert("삭제되었습니다.")
            navigate("/")
        }
    }

    const moveToEdit = () => {
        navigate("/edit/"+id)
    }

    return (
        <div>
            
                <h2>{board.title}</h2>
                <div>
                    <h5>작성자: {board.author}</h5>
                    <p style={{fontSize:"12px", color:"gray"}}>{board.writingTime}</p>
                </div>
                <hr />
                    <p>{board.content}</p>
                <hr />
                <div>
                    <CustomButton label="수정" onClick={moveToEdit} />
                    <CustomButton label="삭제" color="secondary" onClick={handleDelete} />
                    <CustomButton label="목록으로" variant="outlined" onClick={moveToBoard} />
                </div>
                

        </div>
    )
}

export default PostDetail