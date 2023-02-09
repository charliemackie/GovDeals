import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import '../css/ChatBot.css';

export function ChatBot() {
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(process.env.REACT_APP_HOST + '/contracts/getContracts' , {
        input: chatInput
    })
    .then(async data  => {
        var data = data.data
        let jsonString = JSON.stringify(data)
        setChatHistory([...chatHistory, { user: chatInput, bot: jsonString }]);
        setChatInput('');
    })  
  };

  return (
    <div className="chat-bot">
      <div className="chat-history">
        {chatHistory.map((message) => (
            <div className="message-container">
                <div className="user message">
                  {message.user}
                </div>
                <div className="bot message">
                  {message.bot}
                </div>
            </div>
        ))}
      </div>
      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          className="chat-input"
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Type your message here..."
        />
        <button className="chat-submit" type="submit">Send</button>
      </form>
    </div>
  );
};

