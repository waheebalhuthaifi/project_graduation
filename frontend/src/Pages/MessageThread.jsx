import React, { useState } from 'react';
// import { classNames } from '@emotion/react';

const MessageThread = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const sendMessage = () => {
    if (messageInput) {
      setMessages([...messages, { sender: 'client', content: messageInput }]);
      setMessageInput('');
    }
  };

  return (
    <div className="flex flex-col max-w-3xl mx-auto">
      {/* Service Information Card */}
      <div className="flex flex-col w-full bg-white border border-gray-300 rounded-lg shadow-md mb-4">
        <div className="flex items-center p-4 border-b border-gray-300">
          <h3 className="text-lg font-medium">اسم الخدمة</h3>
          <p className="text-gray-600 ml-2">وصف الخدمة</p>
        </div>
        <div className="flex items-center p-4">
          <img
            src="https://picsum.photos/200" // Replace with actual image
            alt="صاحب الخدمة"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <p className="font-medium">صاحب الخدمة</p>
            <p className="text-gray-600">تقييمات (عدد التقييمات)</p>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex flex-col bg-white border border-gray-300 rounded-lg shadow-md">
        <div className="flex flex-grow overflow-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={classNames(
                'flex items-start mb-2',
                message.sender === 'client' ? 'flex-row-reverse' : 'flex-row'
              )}
            >
              {message.sender === 'client' && (
                <img
                  src="https://picsum.photos/100" // Replace with actual image
                  alt="العميل"
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <div className="flex-grow bg-gray-100 rounded-lg p-2">
                <p className={classNames('text-sm', message.sender === 'client' ? 'text-gray-800' : 'text-blue-500')}>
                  {message.content}
                </p>
              </div>
              {message.sender !== 'client' && (
                <img
                  src="https://picsum.photos/100" // Replace with actual image
                  alt="صاحب الخدمة"
                  className="w-8 h-8 rounded-full ml-2"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center p-4">
          <input
            type="text"
            placeholder="اكتب رسالتك"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-lg"
          />
          <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            إرسال
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageThread;
