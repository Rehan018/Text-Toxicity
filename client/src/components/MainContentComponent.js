// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Spinner from './Spinner';
// import PredictionResultComponent from './PredictionResultComponent';

// import '../styles/MainContentComponent.css'; 

// const MainContentComponent = ({ selectedPrediction,classificationResult }) => {
//   const { id } = useParams();
//   const [item, setItem] = useState(null);
//   const [history, setHistory] = useState([]); 
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   console.log(selectedPrediction);
//   useEffect(() => {
//     const fetchItemDetails = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         setError('No token found.');
//         setLoading(false);
//         return;
//       }

//       try {
//         const res = await axios.get(`http://localhost:5000/api/history/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (res.data) {
//           setItem(res.data);
//         } else {
//           setError('Item not found.');
//         }
//       } catch (err) {
//         if (err.response) {
//           setError(`Server responded with status: ${err.response.status}`);
//         } else if (err.request) {
//           setError('No response received from server.');
//         } else {
//           setError(`Error setting up request: ${err.message}`);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchItemDetails();
//     } else {
//       setLoading(false);
//       setItem(null); 
//     }
//   }, [id]);

//   useEffect(() => {
//     const fetchHistory = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         setError('No token found.');
//         setLoading(false);
//         return;
//       }

//       try {
//         const res = await axios.get(`http://localhost:5000/api/history`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (res.data) {
//           setHistory(res.data);
//         } else {
//           setError('History not found.');
//         }
//       } catch (err) {
//         if (err.response) {
//           setError(`Server responded with status: ${err.response.status}`);
//         } else if (err.request) {
//           setError('No response received from server.');
//         } else {
//           setError(`Error setting up request: ${err.message}`);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (!id && !selectedPrediction) {
//       fetchHistory();
//     }
//   }, [id, selectedPrediction]);

//   if (loading) {
//     return <Spinner />;
//   }

//   return (
//     <div className="main-content">
//       {error ? (
//         <p>{error}</p>
//       ) : (classificationResult || selectedPrediction) ? (
//         <PredictionResultComponent history={selectedPrediction} singleItem={classificationResult} />
//       ) : (
//         <p>No history found.</p>
//       )}
//       {/* {error ? (
//         <p>{error}</p>
//       ) : classificationResult ? (
//         <PredictionResultComponent history={[selectedPrediction]} singleItem={classificationResult} />
//       ) : selectedPrediction ? (
//         <PredictionResultComponent history={[selectedPrediction]} />
//       )  : (
//         <p>No history found.</p>
//       )} */}
//     </div>
//   );
// };

// export default MainContentComponent;




import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';
import PredictionResultComponent from './PredictionResultComponent';
import '../styles/MainContentComponent.css';

const MainContentComponent = ({ selectedPrediction, classificationResult }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found.');
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`http://localhost:5000/api/history/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data) {
          setItem(res.data);
        } else {
          setError('Item not found.');
        }
      } catch (err) {
        if (err.response) {
          setError(`Server responded with status: ${err.response.status}`);
        } else if (err.request) {
          setError('No response received from server.');
        } else {
          setError(`Error setting up request: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchItemDetails();
    } else {
      setLoading(false);
      setItem(null); 
    }
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="main-content">
      {error ? (
        <p>{error}</p>
      ) : (classificationResult || selectedPrediction) ? (
        <PredictionResultComponent history={selectedPrediction} singleItem={classificationResult} />
      ) : (
        <p>No history found.</p>
      )}
    </div>
  );
};

export default MainContentComponent;
