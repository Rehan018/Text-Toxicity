// // import React, { useState } from 'react';
// // import HeaderComponent from './HeaderComponent';
// // import SidebarComponent from './SidebarComponent';
// // import MainContentComponent from './MainContentComponent';
// // import ClassifyInputComponent from './ClassifyInputComponent';
// // import '../styles/MainComponent.css';
// // const MainComponent = () => {
// //   const [selectedPrediction, setSelectedPrediction] = useState(null);
// //   const [classificationResult, setClassificationResult] = useState(null);

// //   const handleNewPrediction = (newPrediction) => {
// //     setClassificationResult(newPrediction);
// //     setSelectedPrediction(newPrediction);
// //   };

// //   return (
// //     <div className="main-container">
// //       <HeaderComponent />
// //       <div className="main-content">
// //         <SidebarComponent setSelectedPrediction={setSelectedPrediction} />
// //         <div className="content-area">
// //           <ClassifyInputComponent setSelectedPrediction={handleNewPrediction} />
// //           <MainContentComponent 
// //           selectedPrediction={selectedPrediction}
// //            classificationResult={classificationResult} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MainComponent;


// import React, { useState } from 'react';
// import HeaderComponent from './HeaderComponent';
// import SidebarComponent from './SidebarComponent';
// import MainContentComponent from './MainContentComponent';
// import ClassifyInputComponent from './ClassifyInputComponent';
// import '../styles/MainComponent.css'; // Only this import is necessary

// const MainComponent = () => {
//   const [selectedPrediction, setSelectedPrediction] = useState(null);
//   const [classificationResult, setClassificationResult] = useState(null);

//   const handleNewPrediction = (newPrediction) => {
//     setClassificationResult(newPrediction);
//     setSelectedPrediction(newPrediction);
//   };

//   return (
//     <div className="main-container">
//       <HeaderComponent />
//       <div className="main-content">
//         <SidebarComponent setSelectedPrediction={setSelectedPrediction} />
//         <div className="content-area">
//           <ClassifyInputComponent setSelectedPrediction={handleNewPrediction} />
//           <MainContentComponent 
//             selectedPrediction={selectedPrediction}
//             classificationResult={classificationResult} 
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainComponent;



import React, { useState } from 'react';
import HeaderComponent from './HeaderComponent';
import SidebarComponent from './SidebarComponent';
import MainContentComponent from './MainContentComponent';
import ClassifyInputComponent from './ClassifyInputComponent';
import '../styles/MainComponent.css';

const MainComponent = () => {
  const [selectedPrediction, setSelectedPrediction] = useState(null);
  const [classificationResult, setClassificationResult] = useState(null);

  const handleNewPrediction = (newPrediction) => {
    setClassificationResult(newPrediction);
    setSelectedPrediction(newPrediction);
  };

  return (
    
    <div className="main-container flex flex-col">
      <HeaderComponent />
      <div className="main-content flex">
        <SidebarComponent setSelectedPrediction={setSelectedPrediction} />
        <div className="content-area flex-1 p-4">
          <ClassifyInputComponent setSelectedPrediction={handleNewPrediction} />
          <MainContentComponent 
            selectedPrediction={selectedPrediction}
            classificationResult={classificationResult} 
          />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
