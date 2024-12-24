import React, { useState, useContext, useReducer, useEffect } from "react";
import { appReducer } from "./reducer";

export const AppContext = React.createContext();

const defaultState = {
  activePageId: 2,
  sublinkPageId: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, defaultState);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      info: "Request Information",
      subtitle: "Provide details about the RFQ",
    },
    {
      id: 2,
      info: "Terms and Attachments",
      subtitle: "Payment and delivery terms",
    },
    {
      id: 3,
      info: "Review",
      subtitle: "Confirm all information provided",
    },
  ];

  function handleContinue() {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  }

  useEffect(() => {
    // Add an event listener to update the window width when it changes
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        windowWidth,
        steps,
        handleContinue,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
