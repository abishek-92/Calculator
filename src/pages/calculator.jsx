import React, { useContext, useState } from 'react'
import { IoBackspaceOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { LuEqual } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { TbDivide } from "react-icons/tb";
import { CalculateValue } from "../context/calculator_context";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculator() {
    const { sum, substract, multiply, divide } = useContext(CalculateValue);
    // console.log("sum",sum, "substract",substract, "multiply",multiply, "divide",divide);
    const [displayValue, setDisplayvalue] = useState(0)

    const appendNumber = (number) => {
        // setDisplayvalue(number)
        setDisplayvalue(prev => (String(prev + number)))
    }

    const appendOperator = (value) => {
        // setDisplayvalue(number)
        const operators = ["+","-","*","/","."];
        const lastChar = displayValue.slice(-1);
        console.log("last char",lastChar)
        if (operators.includes(lastChar)) {
            setDisplayvalue(displayValue.slice(0, -1) + value);
        } else {
            // Otherwise, append the new operator
            setDisplayvalue(displayValue + value);
        }
    }

    const clearDisplay = (operator) => {
        setDisplayvalue(0)
    }

    const cancelNumber = () => {
        setDisplayvalue(displayValue.slice(0, -1))
    }

    const calculateValue = () => {
        setDisplayvalue(eval(displayValue))
    }

    //jsx for the calculator
    return (
        <div className='main_page' >
            <div className='cal_main'>
                <div className='cal_display'>
                    {displayValue}
                </div>
                <div className='cal_btn'>
                    <div className='btn_1'>
                        <div className='btn_grp_u'>
                            <Button className='button' style={{ height: "45px", width: "60px" }} variant="outline-success" onClick={clearDisplay}>C</Button>
                            <Button className='button' style={{ height: "45px", width: "60px" }} variant="outline-success" onClick={() => appendOperator("/")} ><TbDivide size={35} /></Button>
                            <Button className='button' style={{ height: "45px", width: "60px" }} variant="outline-success" onClick={() => appendOperator("*")}><RxCross2 size={35} /></Button>
                        </div>
                        <div className='btn_grp'>
                            <Button className='button' variant="dark" style={{ backgroundColor:"rgba(14, 14, 14, 0.982)",borderRadius:"50%",boxShadow:"5px 5px 5px #888888"}} onClick={() => appendNumber(7)}>7</Button>
                            <Button className='button' variant="dark" style={{ backgroundColor:"rgba(14, 14, 14, 0.982)",borderRadius:"50%",boxShadow:"5px 5px 5px #888888"}} onClick={() => appendNumber(8)} >8</Button>
                            <Button className='button' variant="dark" style={{ backgroundColor:"rgba(14, 14, 14, 0.982)",borderRadius:"50%",boxShadow:"5px 5px 5px #888888"}} onClick={() => appendNumber(9)} >9</Button>
                        </div>
                        <div className='btn_grp'>
                            <Button className='button' variant="dark" style={{ backgroundColor:"rgba(14, 14, 14, 0.982)",borderRadius:"50%",boxShadow:"5px 5px 5px #888888"}} onClick={() => appendNumber(4)} >4</Button>
                            <Button className='button' variant="dark" style={{ backgroundColor:"rgba(14, 14, 14, 0.982)",borderRadius:"50%",boxShadow:"5px 5px 5px #888888"}} onClick={() => appendNumber(5)} >5</Button>
                            <Button className='button' variant="dark" style={{ backgroundColor:"rgba(14, 14, 14, 0.982)",borderRadius:"50%",boxShadow:"5px 5px 5px #888888"}} onClick={() => appendNumber(6)} >6</Button>
                        </div>
                        <div className='btn_grp'>
                            <Button className='button' variant="dark" style={{ backgroundColor:"rgba(14, 14, 14, 0.982)",borderRadius:"50%",boxShadow:"5px 5px 5px #888888"}} onClick={() => appendNumber(1)} >1</Button>
                            <Button className='button' variant="dark" style={{ backgroundColor:"rgba(14, 14, 14, 0.982)",borderRadius:"50%",boxShadow:"5px 5px 5px #888888"}} onClick={() => appendNumber(2)} >2</Button>
                            <Button className='button' variant="dark" style={{ backgroundColor:"rgba(14, 14, 14, 0.982)",borderRadius:"50%",boxShadow:"5px 5px 5px #888888"}} onClick={() => appendNumber(3)} >3</Button>
                        </div>
                        <div className='btn_grp'>
                            <Button className='button' variant="dark" style={{ backgroundColor:"rgba(14, 14, 14, 0.982)",borderRadius:"50%",boxShadow:"5px 5px 5px #888888"}} onClick={() => appendOperator(".")} >.</Button>
                            <Button className='button' variant="dark" style={{ backgroundColor:"rgba(14, 14, 14, 0.982)",borderRadius:"50%",boxShadow:"5px 5px 5px #888888"}} onClick={() => appendNumber(0)} >0</Button>
                            <Button className='button' style={{ backgroundColor:"rgba(14, 14, 14, 0.982)",borderRadius:"50%",boxShadow:"5px 5px 5px #888888"}} variant="dark" onClick={() => appendNumber("00")} >00</Button>
                        </div>
                    </div>
                    <div className='btn_2'>
                        <Button variant="outline-success" onClick={cancelNumber} ><IoBackspaceOutline size={35} /></Button>
                        <Button variant="outline-success" onClick={() => appendOperator("-")} ><FiMinus size={35} /></Button>
                        <Button variant="outline-success" onClick={() => appendOperator("+")}><FaPlus size={35} /></Button>
                        <Button style={{ height: "90px",marginBottom:"15px" }} variant="warning" onClick={calculateValue}><LuEqual size={35} /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator