import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({name, onNameChange, onTermSubmit}) => {
  return (
    <View style={styles.bg}>
        <Feather style={styles.iconStyle} name='search' />
        <TextInput 
        style={styles.inputStyle} 
        placeholder='search'
        value={name}
        onChangeText={newName => onNameChange(newName)}
        onEndEditing={()=>onTermSubmit()}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    bg: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
})

export default SearchBar