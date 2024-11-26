import React, { useContext, useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { BoardContext } from '../context/BoardContext';
import axios from 'axios';

const WriteScreen = ({navigation}) => {
    const { boardList, setBoardList } = useContext(BoardContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');


    const handleSave = async () => {
        if (!title || !author || !content) {
            alert('모든 필드를 입력해 주세요');
            return;
        }
        const newBoardItem = {
            id: boardList.length + 1,
            title,
            author,
            content,
            writingTime: new Date().toISOString(),
        }
        try {
            // 서버에 POST 요청
            const response = await axios.post('http://10.0.2.2:9090/api/board/write', newBoardItem);

            // 서버에서 생성된 ID 및 정보를 포함한 새 게시물 추가
            const savedItem = { ...newBoardItem, id: response.data.id };
            setBoardList([...boardList, savedItem]);

            alert('게시물이 저장되었습니다.');
            navigation.navigate('Main');
        } catch (error) {
            console.error('게시물 저장 실패:', error);
            alert('게시물을 저장하는 데 실패했습니다.');
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable style={{ marginRight: 20 }} onPress={handleSave}>
                    <View style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>등록</Text>
                    </View>
                </Pressable>
            )
        })
    },[navigation,handleSave]);

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.label}>제목</Text>
                <TextInput
                    style={styles.input}
                    placeholder="제목을 입력하세요"
                    placeholderTextColor="#aaa"
                    onChangeText={setTitle}
                />
                <Text style={styles.label}>작성자</Text>
                <TextInput
                    style={styles.input}
                    placeholder="작성자를 입력하세요"
                    placeholderTextColor="#aaa"
                    onChangeText={setAuthor}
                />
                <Text style={styles.label}>내용</Text>
                <TextInput
                    style={[styles.input, styles.contentInput]}
                    placeholder="내용을 입력하세요"
                    placeholderTextColor="#aaa"
                    multiline
                    onChangeText={setContent}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        padding: 16,
    },
    contentContainer: {
        flex: 1,
    },
    label: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: '#2e2e2e',
        padding: 12,
        borderRadius: 8,
        color: '#fff',
        marginBottom: 16,
    },
    contentInput: {
        height: 100,
        textAlignVertical: 'top',
        padding: 12,
    },
    saveButton:{
        backgroundColor: '#2ecc71',
        paddingVertical:8,
        paddingHorizontal:16,
        borderRadius:8,
    },
    saveButtonText:{
        color:'#fff',
        fontSize:16,
    },
});

export default WriteScreen;
