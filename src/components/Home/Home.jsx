import React from "react";
import Card from "./Card";
import News from "../News"
export default function Home() {
  return (
    <div className="  p-4 bg-gray-500">
    <div className="mt-8 text-center">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl py-4 font-medium text-white">
          MEDTECH WEBAPP
        </h1>
      </div>
      <div className="flex flex-wrap gap-7 justify-center">
        <Card
          username="Medicine Recommendation"
          btnText="Click me"
          url="src/components/Home/mr.jpeg" btnUrl="/medicine-recommendation"
        />
        <Card username="Disease Predictor" btnText="Click me"
          url="src/components/Home/disease.jpeg" btnUrl="http://127.0.0.1:8000/"
        />
        <Card username="Mental Health Assessment" btnText="Click me" 
          url="src/components/Home/mh.jpeg" btnUrl="http://127.0.0.1:8000/mental/"
        />
        <Card username="Skin Disease Predictor" btnText="Click me" 
          url="src/components/Home/skin.jpeg" btnUrl="http://127.0.0.1:8000/skin"
        />
        <Card username="Pneumonia-Xray" 
          url="src/components/Home/chest.jpeg"  btnUrl="http://127.0.0.1:8000/xray"
        />
        <Card username="Medical Chatbot" 
          url="src/components/Home/assess.jpeg"  btnUrl="http://127.0.0.1:8000/chatbot/"
        />
        
      </div>
      
      <News country="in" key="sports" category="health"/>
    </div>
  );
}
