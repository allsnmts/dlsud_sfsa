import DragDropFileContainer from "@/containers/DragDropFileContainer";
import React, { useState } from "react";
import Button from "./Buttons/Button";

export default function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    document.body.classList.add("no-scroll");
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const performSentimentAnalysis = async () => {
    try {
      const response = await fetch("/api/server", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to execute Python script");
      }

      const data = await response.json();
      console.log(data); // Handle the response data as needed
    } catch (error) {
      console.error(error);
    }
    
    window.location.reload(false);
  };

  
  return (
    <>
      <Button onClick={performSentimentAnalysis}>Perform Sentiment Analysis</Button>
      
    </>
  );
}
