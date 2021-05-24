// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react components
const App = () => {
    return <div> Hi there!</div>;
};

// Take the React component and shoiw on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);