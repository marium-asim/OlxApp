import React from 'react';
import { Link } from "react-router-dom";
import IMG1 from '../images/logo.PNG'
import './help.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { MDBCol ,MDBIcon } from "mdbreact";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './contactUs.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'


class Contact extends React.Component
{
    render()
    {
        return(
<div>
<Header />
                <Articles />
                <Footer />
                <Copyright />
</div>
        )
    }
}

class Header extends React.Component{
    render()
    {
        return(
            <div>
                 <div id="header">
                <img src={IMG1} alt="" className="olxLogo"/>
                <Button variant="primary" className="slBtn" >
                <i class="fas fa-camera"></i>&ensp;
               SELL
    </Button>{' '}
                </div>
            </div>
        )
    }
}
class Articles extends React.Component{
    render()
    {
        return(
            <div>
                 <center>
                     <div id="art">
                         <div id="article">
                             <h1>How can we help you?</h1>
                             <div>
     <input className="bar" type="text" placeholder=" Search" aria-label="Search" />
     <i class="fas fa-search itemSearches"></i>
     </div>
     <div id="btnGrp">
     <ButtonGroup aria-label="Basic example">
  <Button variant="light"><i class="fas fa-chevron-left"></i>&ensp;Pakistan Help Center</Button>
  <Button variant="light" disabled="true">Submit a request</Button>
</ButtonGroup>
</div>
    <h2>Help us help you faster!</h2>
    <hr className="line" ></hr>
    
                         </div>


                         <div id="cont">
                             <div id="list1">
                                 <p>Accurately selecting your specific issue from the drop-down lists below will enable us to direct your message to the right department. Once you select your issue, you will be able to contact us.</p>
                             <div id="businessForm">
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label className="labl">Your email address<i class="fas fa-asterisk"></i></Form.Label>
      <Form.Control type="email" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCat">
      <Form.Label className="labl">Category<i class="fas fa-asterisk"></i></Form.Label>
      <Form.Control as="select" defaultValue="-">
      <option>-</option>
        <option>I have an issue about my account</option>
        <option>I have an issue about buying or selling</option>
        <option>I have a question about featured ads and credit cards</option>
        <option>I want to report a fraud</option>
        <option>I have a technical issue</option>
        <option>Suggestions</option>
        
      </Form.Control>
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridDesc">
      <Form.Label className="labl">Description<i class="fas fa-asterisk"></i></Form.Label>
      <Form.Control as="textarea" rows={3} />
      <h6 style={{fontSize:12,paddingTop:15}}>Please enter the details of your request. A member of our support staff will respond as soon as possible.</h6>
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridAd">
      <Form.Label className="labl">Ad ID/ Ad Link</Form.Label>
      <Form.Control type="text" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label className="labl">Name<i class="fas fa-asterisk"></i></Form.Label>
      <Form.Control type="text" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridTelephone">
    <Form.Label className="labl">Mobile Number<i class="fas fa-asterisk"></i></Form.Label>
    <Form.Control type="telephone" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label className="labl">Attachment</Form.Label>
      <Form.Control type="file" />
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

                             <div id="list2" style={{backgroundColor: "#f7f8f9"}}>
                             <ListGroup >
  <ListGroup.Item style={{backgroundColor:"white", fontSize:20, fontWeight:"bolder", lineHeight:2.5}}>Trending Articles</ListGroup.Item>
  <ListGroup.Item style={{backgroundColor: "#f7f8f9"}}><i class="fas fa-star"></i> <a href="#">
  Role of OLX in transactions</a></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor: "#f7f8f9"}}><i class="fas fa-star"></i> <a href="#">All About Free Ad Limits</a></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor: "#f7f8f9"}}><i class="fas fa-star"></i> <a href="#">Boost to Top</a></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor: "#f7f8f9"}}><i class="fas fa-star"></i> <a href="#">Account Merge</a></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor: "#f7f8f9"}}><i class="fas fa-star"></i> <a href="#">How do I post an ad?</a></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor: "#f7f8f9"}}><i class="fas fa-star"></i> <a href="#">How do I contact a seller?</a></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor: "#f7f8f9"}}><i class="fas fa-star"></i> <a href="#">New Search on #Naya OLX</a></ListGroup.Item>
</ListGroup>

                             </div>
                         </div>
                     </div>
                 </center>
            </div>
        )
    }
}

class Footer extends React.Component
{
    render()
    {
        return(
               <div id="hfooter">
                <div id="hlinks">
                    <div className="hlink"><h6>Help</h6></div>
                    <div className="hlink"><h6>Terms of Use</h6></div>
                    <div className="hlink"><h6>Safety Tips</h6></div>
                    <div className="hlink"><h6>SELL</h6></div>
                </div>

               </div>

        )
    }
} 

class Copyright extends React.Component
{
    render()
    {
        return(
            <div class="copyrightHelp">
          
            <div><h6><strong>OLX Free Classifieds in Pakistan -- Copyright &#169; 2006-2020 OLX</strong></h6></div>
       
        </div>
        )
    }
}




export default Contact;

    
