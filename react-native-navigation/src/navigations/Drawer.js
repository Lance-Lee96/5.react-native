import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Drawer = createDrawerNavigator();


//props로 전달되는 내용
//navigation, 
//state, : 드로어의 현재 상태에 대한 정보가 담긴 객체, 
//         어떤 스크린이 포함되어 있는지, 현재 활성화된 스크린을 확인하거나 특정 스크린의 상태에 따라 UI를 변경할 때 사용한다.
//description, : 각 스크린에 대한 설정 정보들이 담겨있는 객체, 각 항목에 대한 옵션, 아이콘, 라벨등을 포함
//드로어 항목들
const CustomDrawerContent = (props) => {
    return (
        //DrawercontentScrollView : 드로어 내용을 스크롤 할 수 있는 컴포넌트로
        //기본 드로어 항목을 감싸고 추가 컨텐츠를 넣을 수 있다.
        <DrawerContentScrollView {...props} contentcontainerStyle={styles.drawerContent}>
            {/* 커스텀 드로어의 헤더 영역 */}
            <View style={styles.header}>
                <Text style={styles.headerText}>My Custom Drawer</Text>
            </View>

            {/* 기본 드로어 메뉴 항목 표시 : 드로어에 설정된 스크린 목록을 보여줌 */}
            {/* Drawer.Screen 으로 추가된 목록을 표시해주는 컴포넌트 */}
            <DrawerItemList {...props} />

            {/* 커스텀 버튼 */}
            <TouchableOpacity
                style={styles.customButton}
                onPress={() => alert('Custom Button Pressed')}
            >
                <MaterialCommunityIcons name="star" size={24} color={'white'} />
                <Text style={styles.customButtonText}>CustomButton</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    )
}




const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={({ navigation }) => ({
                drawerStyle: {
                    backgroundColor: '#e6e6e6',
                    width: 200,
                    borderWidth: 5,
                    borderColor: '#d9d9d9'
                },
                drawerLabelStyle: { fontSize: 20, },
                drawerActiveTintColor: '#4CAF50',
                drawerInactiveTintColor: '#757575',
                drawerPosition: "right",
                headerTitle: "드로어테스트",
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: '#4caf50'
                },
                headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: "bold",
                    color: '#fff',
                },
                headerLeft: () => null,
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={{ marginRight: 15 }}
                    >
                        <MaterialCommunityIcons name="menu" size={28} color="black" />
                    </TouchableOpacity>
                ),
                drawerType: "slide" //서랍이 열리면서 뒤 화면도 열림

            })}>
            <Drawer.Screen name="Home" component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Drawer.Screen name="Profile" component={ProfileScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    header: {
        padding: 20,
        backgroundColor: '#4caf50',
        alignItems: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    customButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        margin: 10,
        backgroundColor: '#4caf50',
        borderRadius: 8
    },
    customButtonText: {
        color: 'white',
        marginLeft: 10,
        fontSize: 16,
    }
})




export default DrawerNavigation

