import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const StoresScreen = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const getItems = async () => {
            try {
                const jsonData = await AsyncStorage.getItem('@stores')
                const data = jsonData ? JSON.parse(jsonData) : []
                setItems(data)
            } 
            catch (error) {
                // Error saving data
            }
        }

        getItems()
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Stores</Text>
            <FlatList
                data={items}
                renderItem={({item}) => (
                    <Text style={styles.item}>{item.key}</Text>
                )}
            />
        </View>
    )
}

// TODO - Make sure all these styles are doing something
const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        flex: 1,
        backgroundColor: '#fffbaa',
    },
    item: {
        padding: 20,
        fontSize: 24,
        color: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 36,
        width: '100%',
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 20,
    },
})

export default StoresScreen