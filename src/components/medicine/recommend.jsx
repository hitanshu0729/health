import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MedicineRecommendation() {
  const [symptoms, setSymptoms] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleSymptomsChange = (event) => {
    setSymptoms(event.target.value);
  };

  const handleRecommendationSubmit = async (event) => {
    event.preventDefault();

    // Send the symptoms to the Flask backend for recommendation
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms }),
      });

      if (response.ok) {
        const result = await response.json();
        setRecommendation(result.recommendation);
      }
    } catch (error) {
      console.error("Error getting medicine recommendation:", error);
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl">
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Medicine Recommendation System
      </h1>

      <div className="flex justify-center items-center">
        <form onSubmit={handleRecommendationSubmit}>
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
              Get Recommendation
            </button>
          </div>
        </form>

        <div className="ml-8">
          {recommendation && <p>Medicine Recommendation: {recommendation}</p>}
        </div>
      </div>
    </div>
  );
}
