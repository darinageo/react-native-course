import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
    state = { albums: [] }; // intial state, albums is an array
    
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
            // .then(response => console.log(response));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
         //album from the row above is passed as a prop here
        <AlbumDetail key={album.title} album={album} /> 
        // <Text key={album.title}>{album.title}</Text>);
        );
    }

    render() {
        console.log(this.state);

         return (
        <ScrollView style={{ flex: 1 }}>
            {/* <Text>AlbumList</Text> */}
            {this.renderAlbums()}
        </ScrollView>
        ); 
    }
}

export default AlbumList;
