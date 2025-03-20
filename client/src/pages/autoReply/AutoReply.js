import React from "react";
import "./AutoReply.css";

const AutoReply = () => {
  return (
    <div className="autoReplyMainContainer">
      {/* Header Section */}
      <div className="autoReplySection-1">
        <h3>Auto Reply</h3>
        <p>You can use Auto Reply on Normal Whatsapp and Business Whatsapp too. 😊</p>
      </div>

      {/* Chat Messages Section */}
      <div className="autoReplySection-2">
        <div className="messageBox sender">
          <p>Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.</p>
        </div>
        <div className="messageBox receiver">
          <p>Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.</p>
        </div>
        <div className="messageBox sender">
          <p>Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.</p>
        </div>
      </div>

      {/* Message Input Section */}
      <div className="autoReplySection-3">
        <input type="text" placeholder="Type your message here..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default AutoReply;
