import { Switch } from "antd";
import CustomCard from "./components/custom-card";
import {ToggleProvider,useToggleContext,ToggleContext} from './contexts';
import "./App.css";
import { useState } from "react";

const App = () => {
  const [checked,setCheecked]=useState(false);

  const toggleState=(state)=>!state;

  const onChange=(checked)=>{
    setCheecked(!checked);
  }
  
  return (
    <ToggleProvider value={{state:checked,toggleState}}>
    <div className="container">
      <div className="comp">
        <Switch onChange={onChange} />
        
        <span>Toggle Theme</span>
      </div>
      <CustomCard />
    </div>
    </ToggleProvider>
  );
};
export default App;
