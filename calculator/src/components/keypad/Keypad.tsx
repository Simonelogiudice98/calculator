
import PushButton from '../PushButton/PushButton';
import styles from './Keypad.module.scss'
import { IKeypad } from "./KeypadProps";

export default function Keypad(props:IKeypad):JSX.Element{

   const setResult = (value:number|string) => {
        props.updateRes(value);
   }



    return(
        <div className={styles.keypadContainer}>
            {
                props.buttonValue.map((value,i)=>{
                    return(
                        <PushButton
                            key={i} 
                            value={value}
                            onClick={() => {
                                
                                if(typeof value === "number"){
                                    setResult(value);
                                    console.log(value); 

                                }else if(typeof value === "string"){
                                    switch(value){

                                        case "=":
                                            props.calculate();
                                            break;
    
                                        case "+/-":
                                            props.changeSymbol()
                                            break;
    
                                        case "AC":
                                            props.emptyDisplay();
                                            break;

                                        case "%":
                                            props.percentage();
                                            break;
                                        
                                        default:
                                            if(props.result.includes("+") || props.result.includes("-") || props.result.includes("/") || props.result.includes("*")){
                                                props.calculate(value);
                                                
                                            }else{

                                                setResult(value);
                                            }
                                            break;
                                            
                                    }
                                    
                                     
                                }
                               
                                
                                
                            }}
                        />
                    )
                })
            }
        </div>
    );
};