import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'mario kart', duration: '3:16' },
        { title: 'im used to it', duration: '2:56' },
        { title: 'ill come back to you', duration: '2:15' },
        { title: 'future diary', duration: '2:49' },
    ];
}; 

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});