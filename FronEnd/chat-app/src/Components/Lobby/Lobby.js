import React, {useState } from 'react';

const Lobby = ({ joinRoom }) => {
    const [username, setUsername] = useState();
    const [room, setRoom] = useState();
   
   
    let handleChangeUserName = (e) => {
        setUsername(e);
    }
     
    let submit = (username,room) => {
        localStorage.setItem('username', JSON.stringify(username),36000000);
        joinRoom(username, room); 
    }

    
    return (
        <div className="Lobby">  
        <h3>choose which room you want to enter</h3> 
        <input className="Input" 
                placeholder='Username...'             
                onChange={(e) => handleChangeUserName(e.target.value)}/>
          
          <select className="Input" onChange={(e) => setRoom(e.target.value)}> 
            <option>-- Select Room --</option>
            <option value='GroupA'>Group A</option>
            <option value='GroupB'>Group B</option>
            <option value='GroupC'>Group C</option>
          </select>
  
          <button className='btn btn-secondary' 
                  style={{ width: '50%' }}
                  onClick={(o) => submit(username, room)}
                  disabled={!username || !room}>
                  Join Room
          </button> 
        </div>
    )
}

export default Lobby;