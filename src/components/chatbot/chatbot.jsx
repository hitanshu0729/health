import React, { useState, useEffect } from "react";

export default function MedicalChatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    setChat([...chat, { message, user: true }]);
    setMessage("");

    fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((response) => response.json())
      .then((data) => {
        setChat([...chat, { message: data.response, user: false }]);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="chatbox">
        {chat.map((chatItem, index) => (
          <div key={index} className={chatItem.user ? "user" : "bot"}>
            {chatItem.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message..."
        className="w-full border rounded p-2 mt-2"
      />
      <button
        onClick={handleSendMessage}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
      >
        Send
      </button>
    </div>
  );
}
