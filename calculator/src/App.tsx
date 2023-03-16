import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Keypad from './components/keypad/Keypad';
import Screen from './components/screen/Screen';


function App() {

  const buttonValue:(string|number)[] = [
    "AC","+/-","%","/",
    7,8,9,"*",
    4,5,6,"-",
    1,2,3,"+",
    0,".","="

  ];

  const [isCalculated,setIsCalculated] = useState<boolean>(false);
  const [result,setResult] = useState<string>("0");


  const updateRes = (value:number|string) => {

    if(result === "0" && typeof value === "number"){
      setResult(value.toString());
      
      
    }else if(result !== "0" && typeof value === "number" && isCalculated === false){
      setResult(result + value.toString())
    }else if(result !== "0" && typeof value === "number" && isCalculated === true){
      setResult(value.toString())
      setIsCalculated(false);
    }
   
    if(result === "0" && typeof value === "string" ){
      setResult(result + value);

    }else if(result !== "0" && typeof value === "string" && isCalculated === false){
      setResult(result + value);

    }else if(result !== "0" && typeof value === "string" && isCalculated === true){
      setResult(result + value);
      setIsCalculated(false)
    }
  };

  const calculate = (value?:string) => {
    if(value !== undefined && value !== "."){
      console.log(value);
      const res:string = eval(result) + value;
      setResult(res);
         
    }else if(value === undefined && isCalculated === false){
      
      setResult(eval(result).toString());
      setIsCalculated(true);
    }else if(value === "." && result.includes(".")){
      setResult(result + value);
    }
    
  }

  const emptyDisplay = () => {
    console.log("empty display");
    
    setResult("");
  }

  const calculatePercentage = (resNum:string[],symbol:string) => {
      let num1:number = parseInt(resNum[0]);
      let num2:number = parseInt(resNum[1]);
      let percentage:number = ((num1 * num2)/100)
      
      
      let res = `${num1.toString()}${symbol}${percentage}`;
      setResult(res);
  }

  const percentage = () => {
     
    if(result.includes("+")){
      let resNum = result.split("+");
      let symbol:string = "+"
      calculatePercentage(resNum,symbol);

    }else if(result.includes("-")){
      let resNum = result.split("-");
      let symbol:string = "-"
      calculatePercentage(resNum,symbol);

    }else if(result.includes("/")){
      let resNum = result.split("/");
      let symbol:string = "/"
      calculatePercentage(resNum,symbol);

    }else if(result.includes("*")){
      let resNum = result.split("*");
      let symbol:string = "*"
      calculatePercentage(resNum,symbol);

    }

  }

  const changeSymbol = () => {
    if(result.includes("+")){
      let splitNum = result.split("+");

      let num1 = splitNum[0];
      let posToNeg = parseInt(splitNum[1]);
      posToNeg = posToNeg * -1;

      let res = `${num1}+${posToNeg.toString()}`;
      setResult(res);
      

    }else if(result.includes("-")){
      let splitNum = result.split("-");

      let num1 = splitNum[0];
      let posToNeg = parseInt(splitNum[1]);
      posToNeg = posToNeg * -1;

      let res = `${num1}-${posToNeg.toString()}`;
      setResult(res);

      

    }else if(result.includes("/")){
      let splitNum = result.split("/");
      
      let num1 = splitNum[0];
      let posToNeg = parseInt(splitNum[1]);
      posToNeg = posToNeg * -1;

      let res = `${num1}/${posToNeg.toString()}`;
      setResult(res);

    }else if(result.includes("*")){
      let splitNum = result.split("*");
      
      let num1 = splitNum[0];
      let posToNeg = parseInt(splitNum[1]);
      posToNeg = posToNeg * -1;

      let res = `${num1}*${posToNeg.toString()}`;
      setResult(res);

    }else{
      let posToNeg = parseInt(result);
      posToNeg = posToNeg * -1;
      setResult(posToNeg.toString());
   }
  }

  return (
    <div className="App">
      <Header />
      <div className="calculator">

        <Screen 
          result={result}
        />
        <Keypad
          isCalculated={isCalculated}
          changeSymbol={changeSymbol}
          percentage={percentage}
          emptyDisplay={emptyDisplay}
          calculate={calculate}
          updateRes={updateRes}
          result={result}
          buttonValue={buttonValue}
        />
      </div>

    </div>
  );
}

export default App;
