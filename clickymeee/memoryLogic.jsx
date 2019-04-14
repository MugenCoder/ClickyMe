import React from "react";

function memoryLogic(props){
    console.log(props);
    console.log(props.op);
    let answer = 0;
    switch(props.op){
        case "+":
        answer = props.num1 + props.num2; 
        break;
        case "-":
        answer = props.num1 - props.num2; 
        break;
        case "/":
        answer = props.num1 / props.num2; 
        break;
        case "*":
        answer = props.num1 * props.num2; 
        break;
    }
    return <span>{answer}</span>
}

export default memoryLogic;