import { useState } from 'react';
import Lobby from './Components/Lobby/Lobby';
import Chat from './Components/Chat/Chat';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import ConnectionURL from './assests/Common/common';
import './App.css'; 

const App = () => {
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const joinRoom = async (user, room) => {
    try {
          const connection = new HubConnectionBuilder()
          .withUrl(ConnectionURL.hubChat_baseUrl)
          .configureLogging(LogLevel.Information)
          .build();

          connection.on("ReceiveMessage", (user, message) => {
            setMessages(messages => [...messages, { user, message }]);
          });

          connection.on("UsersInRoom", (users) => {
            console.log("User",user);
            setUsers(users);
          });

          connection.onclose(e => {
            setConnection();
            setMessages([]);
            setUsers([]);
          });

          await connection.start();
          await connection.invoke("JoinRoom", { user, room });
          setConnection(connection);
        } 
        catch (e) {
          console.log("exception in joinRoom() , ex=",e);
        }
  }

  const sendMessage = async (message) => {
    try{
      console.log("sendMessage() =",message);
      await connection.invoke("SendMessage", message);
    }
    catch(e) {
      console.log("exception in sendMessage() , ex=",e);
    }
  }

  const closeConnection = async () => {
    try {
      await connection.stop();
    } catch (e) {
      console.log(e);
    }
  }

  return <div className="App">
    <h2>World Cup 2022 ChatApp</h2>
    
    <hr className="Line" />
    {!connection
      ? <Lobby joinRoom={joinRoom} />
      : <Chat sendMessage={sendMessage} messages={messages} users={users} closeConnection={closeConnection} />}
  </div>
}

export default App;
