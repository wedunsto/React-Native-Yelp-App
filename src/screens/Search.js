import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import Yelp from '../api/Yelp';

const Search =()=>{
    //Used to create search term
    const [search, setSearch] = useState('');
    //Used to generate search results
    const [results, setResults] = useState([]);

    //Helper function to generate search results
    const searchApi =async()=>{
        //send search query to API with parameters
        const response = await Yelp.get('/search',
        {params:{
            limit:50,
            term: {search},
            location: 'Raleigh'
        }});
        //Store search results in the results array
        setResults(response.data.businesses);
    };

    return(
        <View>
            <SearchBar
                searchTerm={search}
                onSearchChange={(newValue)=> setSearch(newValue)}
                //Call helper function when searching
                onSearchEnd={()=> searchApi()}/>
            <Text>{`Found ${results.length} search results`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Search;