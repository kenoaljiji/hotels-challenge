import React, { useContext} from 'react';
import Header from '../layout/Header';
import {Button, Container, Col, Row,Image} from 'react-bootstrap';
import HotelContext from '../context/hotel/hotelContext';
import Spinner from '../layout/Spinner';
import Alert from '../components/Alert';
import Rating from '../components/Rating';

const DashboardScreen = () => {

    const hotelContext = useContext(HotelContext)

    const {hotels, details, loading, allHotels, error,setLoading } = hotelContext

    
    const loadHotelsHandler = () => {
        setLoading();
        allHotels();
    }

    const pictureBox = {
        marginTop:'10px',
        border: '1px solid #eee'
    }

    const showReviewHandler = () => {
        console.log('Clicked')
    }
    

    return (

        <>
        
        <Header></Header>
        <Container>
            <Row>
                <Col md={12} className='mb-5'><Button className='mt-5 bg-primary' onClick={loadHotelsHandler}>Load Hotels</Button></Col>
            </Row>

        </Container>
        {loading ? <Spinner/> : error ? <Alert variant='danger'>{error}</Alert> : (
        
        
        <Container className="mb-50">

            
                <Row className='p-lg-3'>
                
                {hotels.map(hotel => (

                <Col lg={12} key={hotel.id}>
                    <Container>
                    <Row style={pictureBox} className='p-lg-3'>
                        <Col xs={12} md={6}>
                            <Image src={hotel.image} rounded />
                        </Col>
                        <Col xs={12} md={6}>
                            <div className='p-1'>
                                <div className='d-flex flex-column'>
                                    <div>
                                        <h4 className='text-primary font-weight-400'>{hotel.name}</h4>
                                        <p className=''>{hotel.city}</p>
                                    </div>
                                    <p className='hotel-description'>{hotel.description.substr(0, 300)}</p>
                                    <div className='pb-3 text-right'><span style={{fontSize:'23px'}}>{hotel.price}€</span></div>
                                        
                                    <div className='d-flex justify-content-between align-items-center mt-2 mb-3'>
                                        <span>{hotel.date.substr(0, 10)}</span>
                                        <div>
                                            <Button onClick={showReviewHandler}>Show reviews</Button>
                                        </div>
                                    </div>
                                    
                                    <div className='d-flex justify-content-between mt-lg-4 mt-md-2'>
                                        <i className="fas fa-heart text-red"></i>
                                        <Rating
                                            value={hotel.stars}
                                        />
                                    </div>
                                </div>

                            </div>
                        </Col>
                        

                    </Row>
                   

                    </Container>

                </Col>
            ))}
            </Row>
            


        </Container>
        
            )}
        </>
      
    )
}

export default DashboardScreen
