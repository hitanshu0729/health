import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container m-auto px-6 text-gray-700 md:px-12 xl:px-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="src/components/Home/poster.jpg"
              alt="Medtech Webapp Poster"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12 mt-6 md:mt-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Welcome to Medtech Webapp
            </h2>
            <p className="text-lg leading-relaxed">
              Medtech Webapp is not just a platform; it's your personal
              healthcare companion. Utilizing cutting-edge technology, powered
              by artificial intelligence and machine learning, we provide a
              range of services tailored to your unique health needs. Our
              mission is to deliver accurate, reliable, and personalized
              information and advice to empower you on your journey to
              well-being.
            </p>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-8 text-gray-900">
              Features Overview:
            </h3>

            <ul className="list-disc list-inside mt-4">
              <li className="mb-2">
                <strong>Medicine Recommendation:</strong> Discover the best
                medicine tailored to your symptoms. Receive detailed
                information, comparisons, side effects, interactions, and user
                reviews.
              </li>

              <li className="mb-2">
                <strong>Disease Predictor:</strong> Predict the likelihood of
                diseases based on your information. Receive risk scores,
                probabilities, and access prevention and treatment options.
              </li>

              <li className="mb-2">
                <strong>Mental Health Assessment:</strong> Assess your mental
                health with a personalized quiz. Receive a comprehensive report,
                recommendations, and access resources and support groups.
              </li>

              <li className="mb-2">
                <strong>Skin Disease Predictor:</strong> Diagnose skin
                conditions by uploading photos. Get expert advice, identify
                causes, treatments, and learn about prevention and management.
              </li>

              <li className="mb-2">
                <strong>Medical Chatbot:</strong> Instant answers to your
                medical questions. Chat with a virtual doctor on symptoms,
                diagnosis, medication, diet, exercise, and more.
              </li>
            </ul>

            <p className="mt-8 text-lg">
              Discover a new era in healthcare. We invite you to explore and
              experience the future of personalized health services. Your
              well-being is our priority. Feel free to reach out with feedback
              or suggestions. Thank you for choosing Medtech Webapp! 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
