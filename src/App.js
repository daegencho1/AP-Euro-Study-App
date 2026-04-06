import { useState } from "react";
import Sidebar from "./components/Sidebar";
import FlashcardDeck from "./components/FlashcardDeck";
import MCQPractice from "./components/MCQPractice";
import VocabularyList from "./components/VocabularyList";
import Chatbot from "./components/Chatbot";
import EssayGenerator from "./components/EssayGenerator";


export default function App() {
  const [activeFeature, setActiveFeature] = useState("flashcards");
  const [activeUnit, setActiveUnit] = useState(1);

  function renderMain() {
    switch (activeFeature) {
      case "flashcards":
        return <FlashcardDeck unitId={activeUnit} />;
      case "mcq":
        return <MCQPractice unitId={activeUnit} />;
      case "vocabulary":
        return <VocabularyList unitId={activeUnit} />;
      case "chatbot":
        return <Chatbot />;
      case "essays":
        return <EssayGenerator activeUnit={activeUnit} />;
      default:
        return null;
    }
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar
        activeFeature={activeFeature}
        setActiveFeature={setActiveFeature}
        activeUnit={activeUnit}
        setActiveUnit={setActiveUnit}
      />
      <main className="flex-1 overflow-y-auto p-8">
        {renderMain()}
      </main>
    </div>
  );
}
