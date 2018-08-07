import React, { Component } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import axois from 'axios';
import AlbumDetail from './AlbumDetail';

export class AlbumList extends Component {
    state = { 
        albums: [],
        isLoading: true
     };
    componentWillMount() { 
        axois.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(
            response => {
            this.setState({ 
                albums: response.data,
                isLoading: false
            });
        });
    }

    renderAlbums() {
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} />);
    }

    render() {
        const { indicatorStyle } = styles;
    
        return (
        <ScrollView >
            <ActivityIndicator 
            style={indicatorStyle}
            animating={this.state.isLoading} 
            size="large" 
            color="#0000ff" 
            />
            {this.renderAlbums()}
        </ScrollView>
        );
    }
}

const styles = {
    indicatorStyle: {
        paddingTop: 10,
        position: 'absolute', 
        left: 0,
        right: 0,
        alignItems: 'center'
    }
};
