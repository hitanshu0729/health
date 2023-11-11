import React, { useState } from "react";

export default function DiseasePredictor() {
  const [symptoms, setSymptoms] = useState("");
  const [prediction, setPrediction] = useState("");

  const handleSymptomsChange = (event) => {
    setSymptoms(event.target.value);
  };

  const handlePredictionSubmit = async (event) => {
    event.preventDefault();

    // Send the symptoms to the Flask backend for disease prediction
    try {
      const response = await fetch("http://localhost:5000/predict-disease", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms }),
      });

      if (response.ok) {
        const result = await response.json();
        setPrediction(result.prediction);
      }
    } catch (error) {
      console.error("Error predicting disease:", error);
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl">
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Disease Predictor
      </h1>

      <div className="flex justify-center items-center">
        <form onSubmit={handlePredictionSubmit}>
          <div>
            <label
              htmlFor="symptoms"
              className="block text-sm font-medium text-gray-700"
            >
              Enter Symptoms:
            </label>
            <input
              type="text"
              id="symptoms"
              name="symptoms"
              value={symptoms}
              onChange={handleSymptomsChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-72"
            />
          </div>
          <div className="mt-2">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Predict Disease
            </button>
          </div>
        </form>

        <div className="ml-8">
          {prediction && <p>Predicted Disease: {prediction}</p>}
        </div>
      </div>
    </div>
  );
}
