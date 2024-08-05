


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Sidebar.css"; // Adjust the path if necessary

function Sidebar({ setSelectedPrediction }) {
  const [history, setHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      const token = localStorage.getItem("token");
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/api/history", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setHistory(res.data);
        setFilteredHistory(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  useEffect(() => {
    setFilteredHistory(
      history.filter((item) =>
        item.text.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, history]);

  const handlePrediction = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`http://localhost:5000/api/history/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSelectedPrediction(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:5000/api/history/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHistory(history.filter((item) => item._id !== id));
      setFilteredHistory(filteredHistory.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="sidebar">
      <h3>Search History</h3>
      <input
        type="text"
        placeholder="Search history..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredHistory.length > 0 ? (
          filteredHistory.map((item) => (
            <li key={item._id}>
              <Link to={`/history/${item._id}`} onClick={() => handlePrediction(item._id)}>{item.text}</Link>
              <span className="timestamp">
                {new Date(item.timestamp).toLocaleDateString()}
              </span>
              <button
                className="delete-button"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li>No history found.</li>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
