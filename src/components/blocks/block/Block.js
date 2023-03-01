import React, { Component } from 'react'
import './Block.css'
import Window from './Window';
import { Row, Col, Container } from "react-bootstrap";



 class Block extends Component {
  render() {
    return (
        <Container>
            <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
     <div className='main_block'>
        
        
        <div >
          
          <h1>
            <strong>Здравствуйте</strong>, Человек №3596941
        </h1>
        
        </div>
        <Window/>
        
        <div className='div_back_2'>
            <p className='p_text_2'>
                Прежде чем действовать, надо понять
            </p>
        </div>
        
      </div>
      </Col>
      </Row>
      </Container>
    )
  }
}
export default Block

