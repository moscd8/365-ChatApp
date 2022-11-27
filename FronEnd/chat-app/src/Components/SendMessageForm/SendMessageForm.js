import { useState } from 'react';

const SendMessageForm = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    return(
        <div className="MessageForm">
        <form onSubmit={e => {
            e.preventDefault();           
            sendMessage(message);
            setMessage('');
        }}>

        <label htmlFor="message">Message:</label>
            <br />
            <input 
                type="text"
                id="message"
                name="message" 
                value={message}
                onChange={e => setMessage(e.target.value)} />
            <br/><br/>
            <button disabled={!message}>Send</button>
    </form>
 
    </div>)
}

export default SendMessageForm;