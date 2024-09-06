import { useState, useCallback } from "react";

/**
 * Custom hook for toggling a boolean state.
 *
 * @param {boolean} [initialState=false] - Optional initial state value (true or false).
 * @returns {[boolean, function, function]} - Returns the current state, a function to toggle the state, and a function to reset the state.
 */
const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  // Toggle function
  const toggle = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  // Reset function
  const reset = useCallback(() => {
    setState(initialState);
  }, [initialState]);

  return { state, toggle, reset };
};

export default useToggle;
