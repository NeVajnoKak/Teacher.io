import React, { useEffect, useRef, useState } from "react";
import loaderGif from "../../static/gif/loader.gif";
import './Chat.css'
const Chat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const sendMessage = async (event) => {
    event.preventDefault();
    if (!userInput.trim()) return;

    const messageToSend = userInput;
    setUserInput("");
    setLoading(true);

    setChatHistory((prev) => [...prev, { type: "user", text: messageToSend }]);

    try {
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput: messageToSend }),
      });

      const data = await response.json();
      const botMessage = data.response;

      const cleanBotMessage = botMessage.replace(/\*\*/g, "");
      const formattedBotMessage = cleanBotMessage
        .split("*")
        .filter(Boolean)
        .map((phrase, index) => {
          return index % 2 === 0 ? (
            <p key={index}>{phrase}</p>
          ) : (
            <strong key={index}>{phrase}</strong>
          );
        });

      setChatHistory((prev) => [
        ...prev,
        { type: "bot", text: formattedBotMessage },
      ]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="chat-container">
      <h1>Teacher</h1>
      <div
        id="chat-history"
        ref={chatContainerRef}
        style={{
          height: "400px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={message.type === "user" ? "user-message" : "bot-message"}
          >
            {message.type === "user" ? message.text : message.text}
          </div>
        ))}
      </div>
      <form id="chat-form" onSubmit={sendMessage}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your message"
          style={{ width: "70%", padding: "10px" , color: "black"}}
        />
        <button
            className="chat-button"
          type="submit"
          style={{ color: "#fff", padding: "10px" }}
        >
          Send
        </button>
      </form>
      {loading && (
        <div id="loader">
          <img src={loaderGif} width="150px" alt="Loading..." />
        </div>
      )}
    </div>
  );
};

export default Chat;
