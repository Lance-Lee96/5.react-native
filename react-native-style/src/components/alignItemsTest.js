import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { box_styles } from '../styles';

const AlignItemsTest = () => {
    const [alignItem, setAlignItems] = useState('flex-start');


    return (
        <View style={box_styles.container}>
            <Text style={box_styles.title}> AlignItems: {alignItem}</Text>
            {/* 아래의 View에 감싸진 요소들을 flexDirection */}
            <View style={[box_styles.boxContainer, { alignItems: alignItem }]}>
                <View style={box_styles.box}><Text style={box_styles.boxText}>1</Text></View>
                <View style={box_styles.box}><Text style={box_styles.boxText}>2</Text></View>
                <View style={box_styles.box}><Text style={box_styles.boxText}>3</Text></View>
            </View>
            <ScrollView horizontal>
                <View style={box_styles.buttons}>
                    <Button title="Flex Start" onPress={() => setAlignItems('flex-start')} />
                    <Button title="Center" onPress={() => setAlignItems('center')} />
                    <Button title="Flex End" onPress={() => setAlignItems('flex-end')} />
                    <Button title="Stretch" onPress={() => setAlignItems('stretch')} />
                    
                </View>
            </ScrollView>
        </View>

    );
};

export default AlignItemsTest