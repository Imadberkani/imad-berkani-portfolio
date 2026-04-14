import React from "react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../context/LanguageContext";

function Type() {
  const { currentLanguage } = useLanguage();
  
  const translations = {
    en: [
      "Data Scientist,",
      "and AI Engineer",
    ],
    fr: [
      "Data Scientist,",
      "et Ingénieur IA",
    ]
  };

  const strings = translations[currentLanguage] || translations.en;

  return (
    <div className="gold">
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;