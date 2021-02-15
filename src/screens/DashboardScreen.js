import React from 'react';
import Header from '../layout/Header';
import {Button, Container, Col, Row, Buttton} from 'react-bootstrap';

const DashboardScreen = () => {
    return (

        <>
        
        <Header></Header>
        <Container>
            
            <Row>
                <Col md={12} className='mb-5'><Button className='mt-5 bg-dark'>Load Hotels</Button></Col>
            </Row>

            <Row className='p-3' style={{border:'1px solid #eee'}}>
            <Col md={3}>
                    <p>picture</p>
            </Col>
                <Col md={8}>
                    <div className='hotel p-2'>
                        <div className='d-flex justify-content-between flex-wrap'>
                            <div>
                                <h5 className='hotel-name'>Hotel name</h5>
                                <p className='hotel-city'>City</p>
                            </div>
                                <i className="fas fa-heart text-red"></i>
                            <div>
                                <i className="fas fa-star text-yellow"></i>
                                <i className="fas fa-star text-yellow"></i>
                                <i className="fas fa-star text-yellow"></i>
                                <i className="far fa-star text-yellow"></i>
                            </div>
                            
                        </div>
                        <p className='hotel-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem maiores deleniti 
                        laborum aliquam quasi consequuntur sint accusantium minima dolores!</p>

                    </div>
                </Col>

            </Row>
        </Container>
        
        </>
      
    )
}

export default DashboardScreen
