// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../../utils/axios";

// export default function CreateNews() {
//   const [title, setTitle] = useState("");
//   const [introduction, setIntroduction] = useState("");
//   const [price, setPrice] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const navigate = useNavigate();

//   const newDish = async (e) => {
//     e.preventDefault();

//     try {
//       await api.post("/dish", {
//         title: title,
//         introduction: introduction,
//         price: price,
//         imageUrl: imageUrl,
//       });
//       setSuccess("Dish created successfully!");
//       setError("");
//       setTitle("");
//       setIntroduction("");
//       setPrice("");
//       setImageUrl("");
      
//       navigate("/menu");
//     } catch (err) {
//       setError("Failed to create dish.");
//       setSuccess("");
//     }
//   };

//   return (
//     <>
    
//    <div className="flex flex-col gap-10 items-center">
//    <h1 className="">Create </h1>
//         <form onSubmit={newDish} className="space-y-6">
//           <div>
//             < input
//               type="text"
//               placeholder="Image URL"
//               value={imageUrl}
//               onChange={(e) => setImageUrl(e.target.value)}
//             />
//             < input
//               type="text"
//               placeholder="D"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>
//           <div>
//             < input
//               type="text"
//               placeholder="D"
//               value={introduction}
//               onChange={(e) => setIntroduction(e.target.value)}
//             />
//           </div>
//           <div>
//             < input
//               type="text"
//               placeholder="D"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//           >
//             Create
//           </button>
//           {error && <p className="text-red-500 text-center mt-2">{error}</p>}
//           {success && (
//             <p className="text-green-500 text-center mt-2">{success}</p>
//           )}
//         </form>
//    </div>
//     </>
//   );
// }


import React, { useState } from 'react';

export default function CreateNews() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your Telegram bot URL
    const botId = "6720982027:AAGtHQ0XmbVn11r_Eu3oFxhzJGcBQrrx31o";
    const chatId = '5135714918';

    const text = `
      *Name:* ${name}
      *Email:* ${email}
      *Message:* ${message}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botId}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      message
    )}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chat_id: chatId, text }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Handle successful message sending, e.g., show success message or clear the form
     alert('Message sent successfully!');
      setName('');
      setEmail('');
      // setSubject('');
      setMessage('');
    } catch (error) {
      alert('Error sending message:', error.message);
      // You can add more sophisticated error handling here, e.g., show a user-friendly error message
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Send me a message:</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Your Name:
            </label>
            <input
             color='black'
              type="text"
              id="name"
              value={name}
              onChange={handleChange(setName)}
              required
              className="border-[3px] appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-black-500 text-black-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1"
              placeholder="Enter your name..."
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Your Email address:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange(setEmail)}
              required
              className="border-[3px]  appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1"
              placeholder="Enter your email..."
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Your Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleChange(setMessage)}
              rows={4}
              required
              className="border-[3px] appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1"
              placeholder="Enter your message..."
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
