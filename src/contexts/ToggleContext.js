import {createContext,useContext} from 'react';

// Craete the blue print of context

export const ToggleContext=createContext({
  state:false,
  toggleState:(state)=>{}
});

// Function to use context

export const useToggleContext=()=>{
  return useContext(ToggleContext);
}

// Export the provider

export const ToggleProvider=ToggleContext.Provider;