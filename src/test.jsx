import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateCount } from './context/countcontext';
// import {Createcount} from "./context/countcontext";
function Test () {
    const {count,increment,decrement} = useContext(CreateCount);
    console.log("count",count,increment,decrement)

    return (
        <div>
            <Button variant="primary" onClick={decrement}>-</Button>
            <h2>count: {count}</h2  >
            <Button variant="success"onClick={increment} >+</Button>
        </div>
    )
}

export default Test;