// // HomeComponent.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Home.css';
// const HomeComponent = () => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   const handleRegister = () => {
//     navigate('/register');
//   };

//   return (
//     <div className="home-container">
//       <div className="home-section project-info">
//         <h1>Toxicity Analytics</h1>
//         <p>This is a brief description of the project. Explore toxicity analysis with ease.</p>
//       </div>
//       <div className="home-section empty-section"></div>
//       <div className="home-section home-buttons">
//         <button className="home-button" onClick={handleLogin}>Login</button>
//         <button className="home-button" onClick={handleRegister}>Register</button>
//       </div>
//     </div>
//   );
// };

// export default HomeComponent;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const HomeComponent = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="home-container flex justify-between p-4">
      <div className="home-section project-info">
        <h1 className="text-3xl font-bold">Toxicity Analytics</h1>
        <p className="mt-2">This is a brief description of the project. Explore toxicity analysis with ease.</p>
      </div>
      <div className="home-section empty-section"></div>
      <div className="home-section home-buttons flex flex-col">
        <button className="home-button mb-2" onClick={handleLogin}>Login</button>
        <button className="home-button" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default HomeComponent;
