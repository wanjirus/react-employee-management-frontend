import { PictureOutlined, SendOutlined } from "@ant-design/icons";
import React from "react";
import { useState } from "react";
import { isTyping, sendMessage } from "react-chat-engine";

const MessageForm = (props) =>{
    const [value, setValue] = useState('');
    const {chatId, creds } = props;


    const handleSubmit = (event) =>{
        event.preventDefault();
        const text = value.trim();

        if (text.length > 0) sendMessage(creds, chatId, {text});
        setValue('');
    }
    const handleChange = (event) =>{
       setValue(event.target.value);
       isTyping(props, chatId); 
          
    }
    const handleUpload = (event) =>{
    sendMessage(creds, chatId, {files: event.target.files, text: ''})

    }

    return(
        <div>
           <form className = 'message-form' onSubmit={handleSubmit}>
            <input className="message-input"
                placeholder="Send a message ..."
                value={value}
                onChange = {handleChange}
                onSubmit={handleSubmit} /> 

            <label htmlFor='upload-button'>
            <span className = 'image-button'>
                <PictureOutlined className = "picture -icon" style={{color:'blue',height:'100%'}}/>

            </span>    
            </label> 
            <input type='file' 
                    multiple={false}
                     id="upload-button"
                    style={{display: 'none'}}
                    onChange = {handleUpload}   
            />    
            <button type="submit" className="send-button">
                <Send Outlined className="send-icon" style={{color:'blue'}}/>
                </button>      
            </form>   

        </div>

    );
}
export default MessageForm; 