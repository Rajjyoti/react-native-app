import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {

  const [name, setName] = useState('')

  return (
    <View>
        <SearchBar name={name} 
        onNameChange={newName => setName(newName)}
        onTermSubmit={console.log("submitted")}
        />
        <Text>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
})

export default SearchScreen