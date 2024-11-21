import React, {useEffect, useState} from 'react';
import { BoardContext } from './context/BoardContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BoardList from './pages/BoardList';
import WritePost from './pages/WritePost';
import PostDetail from './pages/PostDetail';
import EditPost from './pages/EditPost';
import axios from 'axios';

function App() {

  // const [items, setItems] = useState([])


  // useEffect(() => {
  //   axios.get("http://localhost:9090/api/board", {
  //     headers: {
  //         "Content-Type": "application/json"
  //     }
  //   })
  //   .then(response => {
  //       setItems(response.data); // response.data를 통해 서버에서 반환된 데이터를 처리
  //   })
  //   .catch(error => {
  //       console.error("There was an error!", error); // 에러 처리
  //   });
  // },[])

  const [boardList, setBoardList] = useState([]);

  return (
    <BoardContext.Provider value={{boardList, setBoardList}}>
      <Router>
        <Routes>
          <Route path='/' element={<BoardList />} />
          <Route path='/write' element={<WritePost />} />
          <Route path='/post/:id' element={<PostDetail />} />
          <Route path='/edit/:id' element={<EditPost />} />
        </Routes>
      </Router>
    </BoardContext.Provider>

  );
}

export default App;
