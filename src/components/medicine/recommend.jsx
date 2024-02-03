import React, { useState } from "react";
import { Link } from "react-router-dom";
// import imag from "src\components\medicine\recommend.jpeg";
import imag from "./recommend.jpeg";

export default function MedicineRecommendation() {
  const medicines = {
    "Fungal infection": ["Naproxen", "Mekinist", "NP Thyroid 120"],
    Allergy: [
      "Allergy Eye Relief",
      "Brompheniramine Maleate, Pseudoephedrine Hydrochloride and Dextromethorphan Hydrobromide",
    ],
    GERD: ["Famotidine", "OMEPRAZOLE", "Esomeprazole Magnesium"],
    "Chronic cholestasis": ["Glimepiride", "NP Thyroid 120", "ENTRESTO"],
    "Drug Reaction": ["Naproxen", "Moisturizing Antibacterial", "Quick Action"],
    "Peptic ulcer diseae": ["pantoprazole", "Protonix", "famotidine"],
    AIDS: ["Anticavity Rinse", "Dronabinol"],
    "Diabetes ": ["Glimepiride"],
    Gastroenteritis: ["Trimethobenzamide Hydrochloride"],
    "Bronchial Asthma": ["Naproxen", "Tussin CF Non Drowsy Multi Symptom"],
    "Hypertension ": ["Enalapril Maleate"],
    Migraine: ["Divalproex Sodium", "MAXALT", "topiramate", "Sumatriptan"],
    "Cervical spondylosis": ["Metronidazole"],
    "Paralysis (brain hemorrhage)": ["Naproxen", "Mekinist", "Glimepiride"],
    Jaundice: ["Cefazolin", "PHYTONADIONE PHYTONADIONE"],
    Malaria: ["Hydroxychloroquine Sulfate", "doxycycline"],
    "Chicken pox": [
      "Fludrocortisone Acetate",
      "Low Dose Aspirin Enteric Safety-Coated",
    ],
    Dengue: ["Chloramphenicol", "Ciprofloxacin"],
    Typhoid: ["Ciprofloxacin"],
    "hepatitis A": ["SILICEA", "Naproxen"],
    "Hepatitis B": ["Naproxen", "Mekinist", "Methocarbamol"],
    "Hepatitis C": ["Naproxen", "Moisturizing Antibacterial", "Mekinist"],
    "Hepatitis D": ["Mekinist", "Glimepiride", "Pain Reliever Extra Strength"],
    "Hepatitis E": ["Naproxen", "Mekinist"],
    "Alcoholic hepatitis": ["Naproxen", "Glimepiride", "NP Thyroid 120"],
    Tuberculosis: ["dexamethasone", "Dexamethasone Intensol", "De-Sone LA"],
    "Common Cold": ["ChloraPrep One-Step"],
    Pneumonia: ["Azithromycin"],
    "Dimorphic hemmorhoids(piles)": [
      "hydrocortisone",
      "Anucort-HC",
      "Preparation H Maximum Strength",
    ],
    "Heart attack": ["Naproxen", "ENTRESTO"],
    "Varicose veins": [
      "tramadol hydrochloride",
      "Zolpidem",
      "TRAMADOL HYDROCHLORIDE",
    ],
    Hypothyroidism: [
      "NP Thyroid 120",
      "Levothyroxine sodium",
      "CHOLESTYRAMINE LIGHT",
      "levothyroxine sodium",
    ],
    Hyperthyroidism: [
      "Levothyroxine sodium",
      "levothyroxine sodium",
      "Levothyroxine Sodium",
    ],
    Hypoglycemia: ["Levocarnitine", "Levocarnitine", "Zegalogue"],
    Osteoarthristis: ["meloxicam", "Celebrex", "diclofenac", "Mobic"],
    Arthritis: ["Naproxen", "Pain Reliever Extra Strength"],
    "(vertigo) Paroymsal  Positional Vertigo": [
      "meclizine",
      "Antivert",
      "Bonine",
    ],
    Acne: [
      "Quick Action",
      "CeraVe Developed with Dermatologists Acne Control Cleanser",
    ],
    "Urinary tract infection": ["Naproxen", "Mekinist", "NP Thyroid 120"],
    Psoriasis: ["anti itch", "UREA", "PredniSONE"],
    Impetigo: ["Levofloxacin", "Mupirocin", "Levofloxacin"],
    "Peptic ulcer disease": ["Naproxen", "Mekinist"],
    "Dimorphic hemorrhoids(piles)": ["VERADEX-E"],
    Osteoarthritis: ["Naproxen", "Etodolac"],
    "(vertigo) Paroxysmal Positional Vertigo": [
      "Naproxen",
      "Mekinist",
      "Methocarbamol",
    ],
  };

  const [symptoms, setSymptoms] = useState("");
  const [disease, setDisease] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleSymptomsChange = (event) => {
    setSymptoms(event.target.value);
  };

  const handleDiseaseChange = (event) => {
    setDisease(event.target.value);
  };

  const handleRecommendationSubmit = async (event) => {
    event.preventDefault();

    // Check if the selected disease exists in the medicines data
    if (medicines[disease]) {
      setRecommendation(medicines[disease].join("\n"));
    } else {
      setRecommendation("No recommendation available for the selected disease");
    }
  };

  return (
    <div >
    <div ><h1 className="text-center text-3xl sm:text-5xl py-10 font-medium text-blue-500 text-danger" >
  <u>Medicine Recommendation System</u>
</h1></div>
    <div className="mx-auto w-full max-w-7xl p-3 mb-2 bg-dark text-light"       
    style={{
       backgroundImage: `url(${imag})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>



      <div className="flex justify-center items-center h-70 p-3">
      <form
  onSubmit={handleRecommendationSubmit}
  className="card bg-dark text-white p-8 rounded-lg shadow-md"
  style={{  backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <div className="card-body">
    <div className="mb-4 p-3 mb-2 bg-info text-dark">
      <label htmlFor="disease" className="block font-medium text-gray-700">
        Select Disease:
      </label>
      <input
        type="text"
        id="disease"
        name="disease"
        list="diseases"
        value={disease}
        onChange={handleDiseaseChange}
        className="mt-1 p-2 border border-blue-500 rounded-md w-100 focus:outline-none focus:border-blue-700"
      />
      <datalist id="diseases">
        {Object.keys(medicines).map((disease) => (
          <option key={disease} value={disease} />
        ))}
      </datalist>
    </div>
    <div className="mb-4">
      <button type="submit"
        className="btn btn-success "
      >
        Get Recommendation
      </button>
    </div>
  </div>
</form>

        <div className="ml-8">
          {recommendation && (
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-700">
                Medicine Recommendation for {disease}:
              </h3>
              <ul className="list-disc pl-4">
                {recommendation.split("\n").map((medicine, index) => (
                  <li key={index} className="text-success">
                    {medicine}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}