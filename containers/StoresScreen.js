import React from 'react';
import {StyleSheet, View, Button, FlatList, Text} from 'react-native';


const StoresScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Stores</Text>
            <FlatList
                data={mockData}
                renderItem={({item}) => (
                    <Text style={styles.item}>{item.key}</Text>
                )}
            />
        </View>
    )
}

const mockData = [
    {key: 'Aldi'},
    {key: 'Family Fresh'},
    {key: 'Target'},
    {key: 'County Market'},
    {key: 'Aldi'},
    {key: 'Family Fresh'},
    {key: 'Target'},
    {key: 'County Market'},
    {key: 'Aldi'},
    {key: 'Family Fresh'},
    {key: 'Target'},
    {key: 'County Market'},
    {key: 'Aldi'},
    {key: 'Family Fresh'},
    {key: 'Target'},
    {key: 'County Market'},
]

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
        backgroundColor: '#fff'
    },
    header: {
        fontSize: 36,
        width: '100%',
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 20
    }
})

export default StoresScreen