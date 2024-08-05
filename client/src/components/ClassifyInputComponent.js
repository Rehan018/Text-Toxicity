// // src/components/ClassifyInputComponent.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ErrorMessage from './ErrorMessage';
// import API_URL from '../config';
// import '../styles/ClassifyInputComponent.css';
// import { useSocket } from './SocketContext';

// const ClassifyInputComponent = ({ setSelectedPrediction }) => {
//   const [text, setText] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const socket = useSocket();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     const token = localStorage.getItem('token');
//     try {
//       const res = await axios.post(
//         `${API_URL}/classify`,
//         { text },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       const newPrediction = {
//         input: text,
//         predictions: res.data.predictions,
//       };
//       setSelectedPrediction(newPrediction);
//       setText('');
  
//       socket.emit('new_classification', newPrediction);
//     } catch (err) {
//       setError('Error classifying text. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (socket) {
//       socket.on('connect', () => {
//         console.log('Connected to socket server');
//       });

//       socket.on('disconnect', () => {
//         console.log('Disconnected from socket server');
//       });
//     }
//   }, [socket]);

//   return (
//     <div className="classify-input-container">
//       {error && <ErrorMessage message={error} />}
//       <form className="classify-input-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={text}
//           className="classify-input-field"
//           placeholder="Enter text to classify"
//           onChange={(e) => setText(e.target.value)}
//           required
//         />
//         <button type="submit" className="classify-submit-button" disabled={loading}>
//           {loading ? 'Classifying...' : 'Classify'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ClassifyInputComponent;



import React, { useState } from 'react';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';
import API_URL from '../config';
import '../styles/ClassifyInputComponent.css';

const ClassifyInputComponent = ({ setSelectedPrediction }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post(
        `${API_URL}/classify`,
        { text },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const newPrediction = {
        input: text,
        predictions: res.data.predictions,
      };
      setSelectedPrediction(newPrediction);
      setText('');
    } catch (err) {
      setError('Error classifying text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="classify-input-container">
      {error && <ErrorMessage message={error} />}
      <form className="classify-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          className="classify-input-field"
          placeholder="Enter text to classify"
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit" className="classify-submit-button" disabled={loading}>
          {loading ? 'Classifying...' : 'Classify'}
        </button>
      </form>
    </div>
  );
};

export default ClassifyInputComponent;
