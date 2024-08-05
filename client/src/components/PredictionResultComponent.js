import React from "react";

const PredictionResultComponent = ({ history, singleItem }) => {
  const renderPredictions = (predictions) => {
    return predictions.map((prediction, index) => (
      <tr key={index} className="hover:bg-gray-100">
        <td className="border-b p-2 text-center">{prediction.label}</td>
        <td className="border-b p-2 text-center">
          {prediction.results[0].match ? "Toxic" : "Not Toxic"}
        </td>
        <td className="border-b p-2 text-center">
          {(prediction.results[0].probabilities[1] * 100).toFixed(2)}%
        </td>
      </tr>
    ));
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-3 text-center">
        {singleItem ? "Prediction Details" : "Prediction History"}
      </h2>
      <div className="flex justify-between mb-2">
        <p className="text-sm text-gray-500">
          <strong>Text:</strong> {singleItem ? singleItem.input : history.text}
        </p>
        {(singleItem || history) && (
          <p className="text-xs text-gray-400">
            {new Date(
              singleItem ? singleItem.timestamp : history.timestamp
            ).toLocaleString()}
          </p>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-50 border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              {!singleItem && !history && (
                <th className="border p-2 text-left">Input Text</th>
              )}
              <th className="border p-2 text-left">Label</th>
              <th className="border p-2 text-left">Prediction</th>
              <th className="border p-2 text-left">Toxicity (%)</th>
            </tr>
          </thead>
          <tbody>
            {history
              ? renderPredictions(history.predictions)
              : renderPredictions(singleItem.predictions)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PredictionResultComponent;
