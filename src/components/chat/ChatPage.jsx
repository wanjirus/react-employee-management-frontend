import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import './App2.css';

const ChatPage = () =>{

    return(
  <ChatEngine
    height ="100vh"
    projectID="bbd992b7-69f7-4d34-b328-1c4906aa63f1"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed = {(chatAppProps => <ChatFeed {...chatAppProps}/>)}
  />
  
    );


}
    
export default ChatPage;






