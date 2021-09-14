import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar =({searchTerm, onSearchChange, onSearchEnd})=>{
    return(
        <View style={styles.searchBarStyle}>
            <Feather name='search' style={styles.searchIcon}/>
            <TextInput
                style={styles.searchText}
                placeholder='Search'
                value={searchTerm}
                onChangeText = {(newValue)=> onSearchChange(newValue)}
                onEndEditing={()=> onSearchEnd()}
                autoCapitalize='none'
                autoCorrect={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarStyle:{
        flexDirection: 'row',
        backgroundColor: 'gray',
        height: 35,
        borderRadius: 7,
        margin: 10
    },
    searchText:{
        fontSize: 20,
        padding: 3
    },
    searchIcon:{
        fontSize: 25,
        padding: 4
    }
});

export default SearchBar;