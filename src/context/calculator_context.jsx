import React, { createContext } from 'react';

export const CalculateValue = createContext()

const Calculatorcontext = ({children}) => {

    const sum = (a, b) => {
        return (a + b);
    };

    const substract = (a, b) => {
        return (a - b);
    };

    const multiply = (a, b) => {
        return (a * b);
    };

    const divide = (a, b) => {
        return (a / b);
    };

    // const calculate = ()=>{
    //     const sum = a+b;
    //     const substract = a-b;
    //     const multiply= a*b;
    //     const divide = a/b;

    //     return [sum, substract, multiply, divide]
    // }
    // const [sum, substract, multiply, divide] = calculate(a,b);

// console.log("divide",divide(24,6))

    return (
        <CalculateValue.Provider value={{sum,substract,multiply,divide}}>
            {children}
        </CalculateValue.Provider>
   
    )
    
}

export default Calculatorcontext;