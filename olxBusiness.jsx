import React from 'react';
import { Link } from "react-router-dom";
import IMG12 from '../images/img12.PNG';
import GIF1 from '../images/gif1.gif';
import GIF2 from '../images/gif3.gif';
import GIF3 from '../images/gif3.gif';
import './olxBusiness.css';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class olxBusiness extends React.Component{
    gotohome = () => 
    {
        this.props.history.push('/')
    }
    
    render()
    {
        return(
            <div id="main">
                <center>
               <div id="business">
                   <div>
                       <img src={IMG12} alt=""/>
                   </div>

                   <div id="slider">
                  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={GIF1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={GIF2}
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={GIF3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
                   </div>
                   <div>

<div className="formTxt">
    <h4>Grow Your Business with OLX!</h4>
    <p>Help your business reach its maximum potential by partnering up with Pakistan's No. 1 online marketplace! Promote your products &amp; services to over 6 Million people every month across Pakistan. Please fill your details below:</p>
</div>

<div id="businessForm">
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label className="labl">Name</Form.Label>
      <Form.Control type="text" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridTelephone">
    <Form.Label className="labl">Mobile Number</Form.Label>
    <Form.Control type="telephone" placeholder="03XXXXXXXX" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCat">
      <Form.Label className="labl">Category</Form.Label>
      <Form.Control as="select" defaultValue="-- Please Select --">
      <option>-- Please Select --</option>
        <option>Property for Sale</option>
        <option>Property for Rent</option>
        <option>Vehicles</option>
        <option>Cars on Installments</option>
        <option>Mobiles</option>
        <option>Electronics and Home Appliances</option>
        <option>Services</option>
        <option>Jobs</option>
        <option>Bikes</option>
        <option>Furniture and Home Decor</option>
        <option>Fashion Beauty</option>
        <option>Books, Sports and Hobbies</option>
        <option>Kids</option>
        <option>Animals</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>


  <Form.Row>
  <Form.Group as={Col} controlId="formGridCheckbox">
  <Form.Label className="labl">Interested in</Form.Label>
    <Form.Check type="checkbox" label="More Ads" />
    <Form.Check type="checkbox" label="Featured Ads" />
    <Form.Check type="checkbox" label="Other Business Upgrades" />
    <Form.Check type="checkbox" label="Advertising (Display Banners)" />
  </Form.Group>
  </Form.Row>
<center>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </center>
</Form>
</div>

                   </div>
               </div>
               </center>
            </div>
        )
    }
}

export default olxBusiness;