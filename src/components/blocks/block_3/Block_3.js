import React, { Component } from 'react'
import './Block_3.css'
import { Row, Col, Container } from "react-bootstrap";


 class Block_3 extends Component {
  render() {
    return (
        <Container>
            <Row>
            <Col xl={12} lg={10} md={8} sm={6} xs={12}>
            <div className='main_div_6'>
        <h3>
            Я согласен 
        </h3>
        <div className='p_contant_6'>
           <input type="checkbox" className='input_3'/>
            <p className='p_check'>
                Принимать актуальную информацию на email
            </p> 
        </div>
        
        
      </div>
      </Col>
      </Row>
    </Container>
      
    )
  }
}
export default Block_3