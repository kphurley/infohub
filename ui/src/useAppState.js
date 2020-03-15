import { useReducer } from "react";

export default function useAppState() {
  const initialAppState = {
    date: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
    weather: {},
    imageUrls: {},
    dataState: "no data",
    error: null
  };

  const appStateReducer = (prevState, action) => {
    switch (action.type) {
      case "TICK":
        return {
          ...prevState,
          date: new Date().toLocaleDateString(
            undefined,
            { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
          ),
          time: new Date().toLocaleTimeString(),
        }
      case "REQUEST":
        return {
          ...prevState,
          dataState: "updating"
        };
      case "RESPONSE":
        return {
          ...prevState,
          dataState: "updated",
          weather: action.data.weather,
          imageUrls: action.data.imageUrls
        };
      case "ERROR":
        return {
          ...prevState,
          dataState: "errored",
          error: action.error
        };
      default:
        // Passing an unknown action type just returns whatever the old state was
        return prevState;
    }
  };

  return useReducer(appStateReducer, initialAppState);
}

