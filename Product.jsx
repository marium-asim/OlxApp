import React from 'react';
import {Header, Footer, Categories} from './Home';
import IMG1 from '../images/ad.jpg';
import { db, auth } from '../config/firebase.js';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Child from './child';
import './Product.css';

class Product extends React.Component{

  
    render()
    {
      const { data } = this.props.location 
     
        
        return(
            <div>

<Header />
<Categories />
<Adv />
<Item  pID={data}/>
<Footer />


            </div>
        )
    }
}

class Adv extends React.Component
{
    render()
    {
        return(
            <div>
                <center>
                    <a href="https://www.tecno-mobile.com/pk#/" target="_blank">
                <img src={IMG1} alt="" style={{marginTop:10}}/>
                </a>
                </center>
            </div>
        )
    }
}

class Item extends React.Component
{

  state = {
        items: null,
       productID  : this.props.pID
      } 
      componentDidMount()
    
      {
         
        const docRef = db.collection('items').doc(""+this.state.productID);


   docRef.get().then((doc) => {
  const items = []
        if (doc.exists) {
            let data = doc.data();
             items.push(data)
}
  this.setState({ items: items })
})
        .catch( error => console.log(error))
      }

  
    render()
    { 
      console.log(this.state.items)
        return(
            <div>
       <div className="big">
        
<div className="Box">
<p>
  { this.state.items &&
      this.state.items.map( items => { 
        return(
<div>
        <div className="imgBox">
          <center>
          <img src={items.picurl} alt="" width="500" height="400"/>
          </center>
        </div>
          <div className="mainCont">
           
          <div  className="details">
          <h4> <strong>Details</strong></h4>
            <span>Make</span>
        <span style={{paddingLeft:150}}><strong>{items.details[0]}</strong></span>
        <span style={{paddingLeft:150}}>Condition</span>
        <span style={{paddingLeft:150}}><strong>{items.details[1]}</strong></span>
        </div>
<br/>
        <div>
        <h4><strong>Description</strong></h4>
       <ul>
      
         {items.detDesc.map((det,index) =>
         {
           return(
             <div>
              
           <li key={index}>{det}</li>
           </div>
           )
         })}
       </ul>
        </div>



        </div>

</div>
        )
      } )}
     </p>
      
</div>


<div className="descBox">
    
    {
      this.state.items &&
      this.state.items.map( items => {
        return(
          <div>
            <div>
          <Card className="cardDesc">
    <Card.Body>
        <Card.Title> <h2>Rs {items.price}<i className="fas fa-share-alt"></i><i class="far fa-heart"></i></h2></Card.Title>
      <Card.Text>
      <h6>{items.desc}</h6>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <small className="adLoc"></small>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </div>


  <div>
          <Card className="cardDesc cardHeight">
    <Card.Body>
        <Card.Title> <h3>Seller Description</h3></Card.Title>
      <Card.Text>
      <h5>{items.sellerName}</h5>
        <h6>Member since {items.sellerMem}</h6>
      </Card.Text>
      <center>
      <button className="chatBtn" >Chat with Seller</button>
      </center>
    </Card.Body>
    <Card.Footer>
   <center><i className="fas fa-phone-alt"></i>&ensp;** *** **** &ensp;<a href="">Show number</a></center>
    </Card.Footer>
  </Card>
  </div>


  <div>
          <Card className="cardDesc map">
    <Card.Body>
        <Card.Title> <strong><h3>Posted in</h3></strong> </Card.Title>
      <Card.Text>
      <h6>{items.city}, {items.province}</h6>
      </Card.Text>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885924.6463691118!2d68.65635872382897!3d29.84572054717016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1604771169295!5m2!1sen!2s" width="360" height="240" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </Card.Body>
  </Card>
  </div>

          </div>
        )
      })
    }

</div>


</div>


    </div>
        
        )
}
}

export default Product;