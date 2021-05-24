// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react components
const App = () => {
    const buttonText = { text: 'Continue' };
    const labelText = 'Enter name: '
    
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'orange', color: 'black'}}>
              {buttonText.text}  
            </button>
        </div>
    );
};

// Take the React component and show on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);