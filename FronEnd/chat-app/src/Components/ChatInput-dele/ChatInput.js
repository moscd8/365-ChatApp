import React, { useState } from 'react';

const ChatInput = (props) => {
    const [message, setMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const isUserProvided = props.userName && props.userName !== '';
        const isMessageProvided = message && message !== '';

        if (isUserProvided && isMessageProvided) {            
            props.sendMessage(props.userName, message);
        }
        else {
            alert('Please insert an user and a message.');
        }
    }
 
    const onMessageUpdate = (e) => {
        setMessage(e.target.value);
    }

    return (
        <form 
            onSubmit={onSubmit}>           
            <label htmlFor="message">Message:</label>
            <br />
            <input 
                type="text"
                id="message"
                name="message" 
                value={message}
                onChange={onMessageUpdate} />
            <br/><br/>
            <button>Submit</button>
        </form>
    )
};

export default ChatInput;