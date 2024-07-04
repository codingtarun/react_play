import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EnterButton from "./EnterButton";

export default function Apps(){
    
    const [ selectedValue , setSelectedValue ] = useState('Dynamic Data'); 
    console.log(selectedValue);
    function handleClick(selectedButton){ // function inside a function 
        setSelectedValue(selectedButton)
        console.log(selectedValue);
    }
    
    return (
        <Row>
            <Col xs={6} sm={4} md={3} lg={2}>
                <EnterButton onSelect={() => handleClick('primary')} variant='primary'>Primary</EnterButton>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
                <EnterButton onSelect={() => handleClick('secondary')} variant='secondary'>Secondary</EnterButton>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
               <EnterButton onSelect={() => handleClick('warning')} variant='warning'>Warning</EnterButton>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
                <EnterButton onSelect={() => handleClick('info')} variant='info'>Info</EnterButton>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
                <EnterButton onSelect={() => handleClick('danger')} variant='danger'>Danger</EnterButton>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
                <EnterButton onSelect={() => handleClick('dark')} variant='dark'>Dark</EnterButton>
            </Col>
            <Col>
                {selectedValue}
            </Col>
        </Row>
    );
}