
export interface IKeypad{
    buttonValue:(string|number)[];
    result:string;
    isCalculated:boolean;
    updateRes:(value:number|string) => any;
    calculate:(value?:string) => any;
    emptyDisplay:() => any;
    percentage:() => any;
    changeSymbol:() => any;
}