import React from 'react';
import { Link } from "react-router-dom";
import IMG1 from '../images/img11.png';
import './cat.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { MDBCol ,MDBIcon } from "mdbreact";
import Dropdown from 'react-bootstrap/Dropdown'

class Cat extends React.Component
{
    render()
    {
        return(
            <div>
                <CatHeader />
                <PostAd />
                <CatFooter />
            </div>
        )
    }
}

class CatHeader extends React.Component
{
    render()
    {
        return(
<div>
    <div class="catLogo">
<Link to='/'>
     <img src={IMG1} alt="" className="logo" height="70"/></Link>
     </div>
</div>

        )
    }
}

class PostAd extends React.Component
{
    render()
    {
        return(
        
            <div>
                <center>
                    <h3 className="postTitle">POST YOUR AD</h3>
                    <div className="chooseCat">
                      
      <Dropdown>
  <Dropdown.Toggle variant="info" style={{width:97.5 + '%'}}> <h5 style={{display:"inline-block",paddingRight:30}}><i style={{paddingRight:30}} class="fas fa-mobile-alt"></i>
 Mobiles</h5>
 </Dropdown.Toggle>
  <Dropdown.Menu>
  <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Mobiles/Tablets"
                 }}>Tablets</Link></Dropdown.Item>
  <Dropdown.Item> <Link to={{
                 pathname: "/post",
                 data: "Mobiles/Accessories"
                 }}>Accessories</Link> </Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Mobiles/Mobile Phones"
                 }}>Mobile Phones</Link> </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
 


  <Dropdown>
  <Dropdown.Toggle variant="info" style={{width:97.5 + '%'}}> <h5 style={{display:"inline-block", paddingRight:30}}><i style={{paddingRight:30}} class="fas fa-car-alt"></i>
     Vehicles</h5>
 </Dropdown.Toggle>
  <Dropdown.Menu>
  <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Vehicles/Car"
                 }}>Cars</Link></Dropdown.Item>
  <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Vehicles/Buses, Vans & Trucks"
                 }}>Buses, Vans &amp; Trucks</Link></Dropdown.Item>
  <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Vehicles/Spare Parts"
                 }}>Spare Parts</Link></Dropdown.Item>
  <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Vehicles/Tractors & Trailers"
                 }}>Tractors &amp; Trailers</Link></Dropdown.Item>
  <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Vehicles/Boats"
                 }}>Boats</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
 

  <Dropdown>
  <Dropdown.Toggle variant="info" style={{width:97.5 + '%'}}> <h5 style={{display:"inline-block", paddingRight:30}}><i style={{paddingRight:30}} class="fas fa-home"></i>
    Property For Sale</h5>
 </Dropdown.Toggle>
  <Dropdown.Menu>
  <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Property For Sale/Lands & Plots"
                 }}>Lands &amp; Plots</Link></Dropdown.Item>
  <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Property For Sale/House"
                 }}>Houses</Link></Dropdown.Item>
  <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Property For Sale/Apartments & Flats"
                 }}>Apartments &amp; Flats</Link></Dropdown.Item>
  <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Property For Sale/Offices-Shops-Commercial Space"
                 }}>Offices-Shops-Commercial Space</Link></Dropdown.Item>
  <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Property For Sale/Portions & Floors"
                 }}>Portions &amp; Floors</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


<Dropdown>
  <Dropdown.Toggle variant="info" style={{width:97.5 + '%'}}> <h5 style={{display:"inline-block", paddingRight:30}}><i style={{paddingRight:30}} class="fas fa-desktop"></i>
    Electronics And Home Appliances</h5>
 </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: " Electronics And Home Appliances/Computers & Accessories"
                 }}>Computers &amp; Accessories</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: " Electronics And Home Appliances/TV-Video-Audio"
                 }}>TV-Video-Audio</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: " Electronics And Home Appliances/Cameras & Accessories"
                 }}>Cameras &amp; Accessories</Link></Dropdown.Item>
     <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: " Electronics And Home Appliances/games & Entertainment"
                 }}>Games &amp; Entertainment</Link></Dropdown.Item>
     <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: " Electronics And Home Appliances/Kitchen Appliances"
                 }}>Kitchen Appliances</Link></Dropdown.Item>
     <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: " Electronics And Home Appliances/AC"
                 }}>AC</Link></Dropdown.Item>
     <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: " Electronics And Home Appliances/Fridges"
                 }}>Fridges</Link></Dropdown.Item>
     <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: " Electronics And Home Appliances/Washing Machine & Dyers"
                 }}>Washing Machine &amp; Dyers</Link></Dropdown.Item>
     <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: " Electronics And Home Appliances/Other Home Appliances"
                 }}>Other Home Appliances</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


<Dropdown>
  <Dropdown.Toggle variant="info"style={{width:97.5 + '%'}}> <h5 style={{display:"inline-block", paddingRight:30}}><i style={{paddingRight:30}} class="fas fa-motorcycle"></i>
     Bikes</h5>
 </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Bikes/Motorcycles"
                 }}>Motorcycles</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Bikes/Scooters"
                 }}>Scooters</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Bikes/Bicylces"
                 }}>Bicyles</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Bikes/Spare Parts"
                 }}>Spare Parts</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


 
<Dropdown>
  <Dropdown.Toggle variant="info" style={{width:97.5 + '%'}}> <h5 style={{display:"inline-block", paddingRight:30}}><i style={{paddingRight:30}} class="fas fa-briefcase"></i>
      Business, Industrial &amp; Agriculture</h5>
 </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Business, Industrial & Agriculture/Foods & Restaurants"
                 }}>Foods &amp; Restaurants</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Business, Industrial & Agriculture/Trade & Industrial"
                 }}>Trade &amp; Industrial</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Business, Industrial & Agriculture/Agriculture"
                 }}>Agriculture</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Business, Industrial & Agriculture/Other Business & Industry"
                 }}>Other Business &amp; Industry</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


  
<Dropdown>
  <Dropdown.Toggle variant="info" style={{width:97.5 + '%'}}> <h5 style={{display:"inline-block", paddingRight:30}}><i style={{paddingRight:30}} class="fas fa-cat"></i>
    Animals</h5>
 </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Animals/Cats"
                 }}>Cats</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Animals/Dogs"
                 }}>Dogs</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Animals/Birds"
                 }}>Birds</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Animals/Pets & Accessories"
                 }}>Pets &amp; Accessories</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Animals/Other Animals"
                 }}>Other Animals</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


 
<Dropdown>
  <Dropdown.Toggle variant="info" style={{width:97.5 + '%'}}> <h5 style={{display:"inline-block", paddingRight:30}}><i style={{paddingRight:30}} class="fas fa-lock" ></i>
      Furniture &amp; Home Decor</h5>
 </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Furniture & Home Decor/Sofa & Chairs"
                 }}>Sofa &amp; Chairs</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Furniture & Home Decor/Bed & Wardobes"
                 }}>Beds &amp; Wardobes</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Furniture & Home Decor/Table & Dining"
                 }}>Table &amp; Dining</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Furniture & Home Decor/Rugs & Carpets"
                 }}>Rugs &amp; Carpets</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Furniture & Home Decor/Curtains & Blinds"
                 }}>Curtains &amp; Blinds</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Furniture & Home Decor/Other Household Items"
                 }}>Other Household Items</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


 
<Dropdown>
  <Dropdown.Toggle variant="info"style={{width:97.5 + '%'}}> <h5 style={{display:"inline-block", paddingRight:30}}><i style={{paddingRight:30}} class="fas fa-tshirt"></i>
     Fashion &amp; Beauty </h5>
 </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Fashion & Beauty/Clothes"
                 }}>Clothes</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Fashion & Beauty/Footwear"
                 }}>Footwear</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Fashion & Beauty/Make Up"
                 }}>Make Up</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Fashion & Beauty/Other Fashion"
                 }}>Other Fashion</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


<Dropdown>
  <Dropdown.Toggle variant="info"style={{width:97.5 + '%'}}> <h5 style={{display:"inline-block", paddingRight:30}}><i style={{paddingRight:30}} class="fas fa-couch"></i>
    Books, Sports &amp; Hobbies </h5>
 </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Books, Sports & Hobbies/Books & Magazines"
                 }}>Books &amp; Magazines</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Books, Sports & Hobbies/Musical Instruments"
                 }}>Musical Instruments</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Books, Sports & Hobbies/Sports Equipment"
                 }}>Sports Equipment</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{
                 pathname: "/post",
                 data: "Books, Sports & Hobbies/Other Hobbies"
                 }}>Other Hobbies</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

                    </div>
                </center>
            </div>
        )
    }
}

class CatFooter extends React.Component{
    render()
    {
        return(
           
                <div class="copyright">
     
     <div><h6 style={{paddingLeft:1000}}><strong>Free Classifieds in Pakistan .  &#169; 2016-2020 OLX</strong></h6></div>

            </div>
        )
    }
}

export
{
    CatHeader,
    CatFooter
};

export default Cat;