// import React from "react";
// import { Button } from "react-native";
// import styled from "styled-components";

// const Container = styled.View`
//     flex: 1;
//     justify-content : center;
//     align-items : center;
// `

// const StyledText = styled.Text`
//     font-size:20px;
//     margin-bottom: 10px;
// `

// const users = [
//     { id: '1', name: 'John Doe', email: 'john@example.com' },
//     { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
//     { id: '3', name: 'Alice Johnson', email: 'alice@example.com' },
// ];

// const UserList = ({navigation}) => {

//     const _onPress = users => {
//         navigation.navigate('UserProfile', {id: users.id, name: users.name, email:users.email})
//     };

//     return (
//         <Container>
//             {users.map(users => (
//                 <>
//                 <StyledText key={users.id}>
//                     {users.name}
//                 </StyledText>
//                 <Button
//                     key={users.id}
//                     title={"프로필 보기"}
//                     onPress={() => _onPress(users)}
//                     />
//                 </>
//             ))}
//         </Container>
//     )

// }

// export default UserList