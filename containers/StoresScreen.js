import React from 'react';
import {StyleSheet, View, Button} from 'react-native';


const StoresScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
                title="Go to list"
                onPress={() =>
                    navigation.navigate('List', {name: 'Alex'})
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default StoresScreen