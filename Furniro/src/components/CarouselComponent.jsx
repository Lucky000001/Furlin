// import React from 'react';
import { Row, Col, Carousel, Button, Image } from 'react-bootstrap';
import IMG1 from '../images/413c23f2d7371be94a52ea9020db45cc.png';
import IMG2 from '../images/77d8a98d7cff3b010ba29ad5b60844d7.png';
import './carousel.css';

const CarouselComponent = () => {
  return (
    <Row className="my-5 p-5 carousel-box">
      <Col lg={6} className="d-flex align-items-center">
        <div className="p-4">
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
          <Button className='btn-cr'>Explore More</Button>
        </div>
      </Col>
      <Col lg={6}>
        <Carousel>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={IMG1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>01 — Bed Room</h3>
              <p>Inner Peace</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={IMG2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>02 — Living Room</h3>
              <p>Comfortable Space</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={IMG1}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>03 — Dining Room</h3>
              <p>Elegant Design</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={IMG2}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>04 — Kitchen</h3>
              <p>Modern and Sleek</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={IMG1}
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3>05 — Office</h3>
              <p>Functional Space</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
};

export default CarouselComponent;
