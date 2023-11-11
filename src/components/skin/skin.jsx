import React, { useState } from "react";

export default function SkinDiseasePredictor() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setPrediction(""); // Clear previous prediction when a new image is selected
  };

  const handlePredictionSubmit = async () => {
    if (image) {
      setIsLoading(true); // Show a loading indicator

      const formData = new FormData();
      formData.append("image", image);

      try {
        const response = await fetch("http://localhost:5000/predict", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          setPrediction(result.result);
        } else {
          setError("Error predicting skin disease. Please try again.");
        }
      } catch (error) {
        setError("Error predicting skin disease: " + error.message);
      } finally {
        setIsLoading(false); // Hide the loading indicator
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1>SKIN DISEASE PREDICTOR</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-2"
      />
      <button
        onClick={handlePredictionSubmit}
        disabled={!image || isLoading}
        className={`bg-blue-500 text-white py-2 px-4 rounded ${
          isLoading ? "cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Predicting..." : "Predict Skin Disease"}
      </button>
      {error && <div className="error-message">{error}</div>}
      {prediction && (
        <div>
          <h3 className="text-lg font-semibold">Prediction Result:</h3>
          <p className="text-gray-800">{prediction}</p>
        </div>
      )}
    </div>
  );
}
