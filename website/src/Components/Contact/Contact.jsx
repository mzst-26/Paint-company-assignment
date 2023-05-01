// import React from "react";
// import { useState } from "react";

// function Contact() {
// const [name, setName]= useState('');
// const [email, setEmail] = useState('');
// const [subject, setSubject]= useState('');
// const [message, setMessage]= useState('');

// const handleSubmit = (event) => {
//     event.preventDefault();

//     fetch("sendContent.php", {
//         method: "POST",
//         body: JSON.stringify({name, email, subject, message})
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         if (data.success) {
//             alert("Message sent!");
//             } else {
//                 alert("Error sending message");
//                 }
//                 })
//                 .catch((error) => {
//                     console.error(error);
//                     alert("There was an error submitting the form.");
//                   });

            
                

// }
//   return (
//     <div className="App">
//         <header>
//              Contact form
//         </header>

//      <div>
//       <form onSubmit={handleSubmit}>
//         <div className="inputs">
//             <input type="text"  placeholder="Full name" onChange={(e) =>setName(e.target.value)} />
//             <input type="email" placeholder="Email" onChange={(e) =>setEmail(e.target.value)}/>
//             <input type="text" placeholder="Subject" onChange={(e) =>setSubject(e.target.value)}/>
//             <textarea type="text" placeholder="Message" onChange={(e) =>setMessage(e.target.value)}/>
//             <button type="submit">Submit</button>
//         </div>
//       </form>
      
//      </div>
//     </div>
//   );
// }

// export default Contact;
// import React, { useState } from "react";

// function App() {
//   const [inputValue, setInputValue] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send input value to server
//     fetch("/sendContent.php", {
//       method: "POST",
//       body: JSON.stringify({ value: inputValue }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.log(error));

//     // Clear input field
//     setInputValue("");
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Enter your input here"
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import axios from 'axios';

// function Contact() {
//   const [Message, setMessage] = useState('');

//   function handleSubmit(event) {
//     event.preventDefault();
//     axios.post('insert_message.php', { Message })
//       .then(response => {
//         console.log(response.data);
//         setMessage('');
//       })
//       .catch(error => console.error(error));
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Message:
//         <input
//           type="text"
//           value={Message}
//           onChange={(event) => setMessage(event.target.value)}
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Contact;
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://mz-x-26.000webhostapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ message })
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      setMessage('');
    })
    .catch(error => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send message</button>
      </form>
    </div>
  );
}

export default App;
