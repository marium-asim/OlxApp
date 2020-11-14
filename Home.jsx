import React from 'react';
import { Component } from 'react';
import { MDBCol,MDBIcon } from "mdbreact";
import  Nav from 'react-bootstrap/Nav';
import './Home.css';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import IMG1 from '../images/img1.PNG';
import IMG2 from '../images/img2.jpg';
import IMG3 from '../images/img3.webp';
import IMG4 from '../images/img4.webp';
import IMG5 from '../images/img5.webp';
import IMG6 from '../images/img6.webp';
import IMG7 from '../images/img7.png';
import IMG8 from '../images/img8.webp';
import IMG9 from '../images/img9.webp';
import IMG10 from '../images/img10.webp';
import IMG11 from '../images/img11.png';
import CardColumns from 'react-bootstrap/CardColumns';
import { Link } from "react-router-dom";
import firebase from '../config/firebase.js';
import { db, auth , dt } from '../config/firebase.js';
import PIMG from '../images/profile.png';


class Home extends Component{
constructor()
{
  super()
  this.state={
    loc : ""
  }
}
get_props =(props) =>
{
  this.setState({
    loc: props
  })
}

  render()
  {
    return(
      <div>
        <Header get_props={this.get_props}/>

  <Categories />
  <Ads />
  <LastSearch />
  <Recommendations />
  <OLXApp />
  <Footer />
      </div>
    )
  }
}

class Header extends Component{
  constructor(props)
  {
    super(props);
    this.myDropdown = React.createRef();
    this.Dropdown = React.createRef();
    this.loginBtn = React.createRef();
    this.signInPic= React.createRef();
    this.arrow= React.createRef();
    this.state={
      value:"",
      name:"",
      currentUserKey:"",
      
    }
  }

  open = (e) => {
    this.myDropdown.current.classList.toggle("show");
  }

  openMenu = (e) => {
    this.Dropdown.current.classList.toggle("show");
  }

  set_value=(e) =>
  { 
     this.setState({value: e.target.value}) 
  }

  set_name=(e) =>
  { 
     this.setState({name: e.target.value}) 
  }


 signIn = ()=>
{
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    
}

signOut = () =>
{
    auth.signOut();

}

onFirebaseStateChanged = () =>
{
   auth.onAuthStateChanged(this.onStateChanged);
}

onStateChanged = (user) =>
{
    if (user)
    {
        //alert(firebase.auth().currentUser.email + '\n' + firebase.auth().currentUser.displayName);
        
        var userProfile ={ email: '', name: '', photoURL: ''};
        userProfile.email = auth.currentUser.email;
        userProfile.name = auth.currentUser.displayName;
        userProfile.photoURL = auth.currentUser.photoURL;

        var dba=dt.ref('users');
        var flag = false;
        dba.on('value', (users) =>
        {
            users.forEach( (data) =>
            {
                var user = data.val();
                if (user.email === userProfile.email)
                {
                    this.state.currentUserKey = data.key;
                flag=true;
                }
            });

        
            if (flag === false)
            {
                dt.ref('users').push(userProfile,this.callback);
            }
         
          
           else {
                this.signInPic.current.src=auth.currentUser.photoURL;
               
          
               this.loginBtn.current.style='display:none';
                this.signInPic.current.style='';
                this.arrow.current.style='';

            }

        }); 
    }
    else{
        
        this.signInPic.current.style='display:none';
        this.arrow.current.style='display:none';
        this.loginBtn.current.style='';
    }
}

componentDidMount() {
this.onFirebaseStateChanged();
}

callback = (error) =>
{
    if (error)
    {
        alert(error);
    }

    else{
    this.signInPic.current.src=auth.currentUser.photoURL;
      
    this.loginBtn.current.style='display:none';
    this.signInPic.current.style='';
    this.arrow.current.style='';
    }
}



  render()
  {  
    console.log("value",this.state.value)
  return(
    <div className="main">
        <div className="searchBar">
          <div>
            <Link to='/'>
     <img src={IMG11} alt="" className="logo"/></Link>
     </div>
     
   <div>
   <div class="flexContainer">
   <Link to={{
                 pathname: "/SearchResults",
                 data: this.state.value
                 }}>
<i class="fas fa-search locSrch" ></i>
</Link>
     <input type="text" placeholder="Search city, area or local" className="inputField" id="Iloc" onChange={ (e) => this.set_value(e)}/>
    <button id="locBtn"><MDBIcon icon="chevron-down" onClick={this.open} /></button> 
    </div>
     <div ref={this.myDropdown} class="dropdown-content">
    <h6>POPULAR LOCATIONS</h6>   
    <Link to={{
                 pathname: "/SearchResults",
                 data: "Punjab"
                 }}>Punjab</Link>
    <Link to={{
                 pathname: "/SearchResults",
                 data: "Sindh"
                 }}>Sindh</Link>
     <Link to={{
                 pathname: "/SearchResults",
                 data: "Balochistan"
                 }}>Balochistan</Link>
     <Link to={{
                 pathname: "/SearchResults",
                 data: "KPK"
                 }}>KPK</Link>
  </div>
 
   </div>

      <div id="searchItem">
     <input className="bar" type="text" placeholder="Find Cars, Mobile Phones and more.." aria-label="Search" onChange={ (e) => this.set_name(e)}/>
     <Link to={{
                 pathname: "/SearchResults",
                 data: this.state.name
                 }}><i class="fas fa-search itemSearches"></i></Link> 
     </div>

    </div>
    <div className="login">
      <a href="#" ref={this.loginBtn} onClick={this.signIn} style={{fontSize:25}}>Login</a>

 <img src={PIMG} alt="" width="50" height="40" className="userimg" ref={this.signInPic}/>

<div ref={this.Dropdown} class="dropdown-content">
  <a href="" onClick={this.signOut}>Logout</a>
  <Link to="/Ads" target="blank">My Ads</Link>

</div>
<button className="parrow" ref={this.arrow}><MDBIcon icon="chevron-down"  onClick={this.openMenu} /></button> 

     
      <button onClick={this.signIn} className="sellBtn">+SELL</button>{' '}
      </div>
    </div>

  )
}
}

class Categories extends Component
{
    render()
    {
        return(
            
        <Nav defaultActiveKey="/home" as="ul" className="cat">
        <NavDropdown title="All Categories" id="nav-dropdown" >
        <NavDropdown.Item href="/Productcat/MobilePhones" eventKey="4.1">Mobile Phones</NavDropdown.Item>
        <NavDropdown.Item href="/Productcat/Cars" eventKey="4.2">Cars</NavDropdown.Item>
        <NavDropdown.Item href="/Productcat/Houses" eventKey="4.3">Houses</NavDropdown.Item>
        <NavDropdown.Item href="/Productcat/TV-Video-Audio" eventKey="4.4">TV-Video-Audio</NavDropdown.Item>
        <NavDropdown.Item   href="/Productcat/Tablets" eventKey="4.4">Tablets</NavDropdown.Item>
        <NavDropdown.Item  href="/Productcat/LandsandPlots" eventKey="4.4">Lands 	&amp; Plots</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item as="li">
    <Nav.Link href="/Productcat/MobilePhones" eventKey="link-1" style={{color:"black"}}>Mobile Phones</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/Productcat/Cars" eventKey="link-1" style={{color:"black"}}>Cars</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/Productcat/Motorcycles" eventKey="link-2" style={{color:"black"}}>Motorcycles</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link  href="/Productcat/Houses" eventKey="link-3" style={{color:"black"}}>Houses</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link  href="/Productcat/TV-Video-Audio" eventKey="link-4" style={{color:"black"}}>TV-Video-Audio</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link  href="/Productcat/Tablets" eventKey="link-5" style={{color:"black"}}>Tablets</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link  href="/Productcat/LandsandPlots" eventKey="link-6" style={{color:"black"}}>Lands 	&amp; Plots</Nav.Link>
  </Nav.Item>
</Nav>

        )
    }
}

class Ads extends Component{
  render()
  {
    return(
      
      <div>
      <div>
        <img src={IMG1} alt=""/>
      </div>
      <div>
       <img src={IMG2} alt="" className="ad"/>
      </div>
      </div>
    )
  }
}


class LastSearch extends Component{
  render()
  {
    return(
      <div className="lastSearchSuggestions">
       <div className="heading">
         <h4><strong>Based on your last search</strong></h4>
         <a href="" style={{paddingLeft:850}}>View more</a>
       </div>
       <div>
       <CardDeck>
  <Card>
    <Card.Img variant="top" className="cardImage" src={IMG3} />
    <Card.Body>
      <Card.Title>Rs 2,350,000</Card.Title>
      <Card.Text>
      2 Bds-2 Ba-900 Sq ft.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">OCT 03</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" className="cardImage" src={IMG4} />
    <Card.Body>
      <Card.Title>Rs 15,000</Card.Title>
      <Card.Text>
       Snow White
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">SEP 27</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" className="cardImage" src={IMG5} />
    <Card.Body>
      <Card.Title>Rs 1,000</Card.Title>
      <Card.Text>
       Lawn 2pc
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">OCT 04</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" className="cardImage" src={IMG6} />
    <Card.Body>
      <Card.Title>Rs 500,000</Card.Title>
      <Card.Text>
        Al Noor Orchard - Project of AL Jalil Developers
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">OCT 13</small>
    </Card.Footer>
  </Card>
</CardDeck>

       </div>
      </div>
    )
  }
}

class Recommendations extends Component{
  state = {
    items: null,
 
  }
  


  signIn = ()=>
{
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    
}


  componentDidMount()

  {
    db.collection ('items')
    .get()
    .then( snapshot => {
      const items = []
      snapshot.forEach( doc => {
        const data = doc.data()
        data.id= doc.id
        items.push(data)
      })
      this.setState({ items: items })
    })
    .catch( error => console.log(error))
  }

  
render()
{ 
  console.log(this.state.items)
  return(
    <div>
    <div className="recommendation">
      <h3><strong>Fresh Recommendations</strong></h3>
   
    <div>
       
    <CardColumns>
    {
      this.state.items &&
      this.state.items.map( items => {
        return(
          <div>
            <Link to={{
              pathname: "/Product",
              data: items.id
              }}>
          <Card>
    <Card.Img variant="top" className="recImg" src={items.picurl} />
    <Card.Body>
        <Card.Title><h4>Rs {items.price}</h4>
        </Card.Title>
      <Card.Text>
      <h6>{items.desc}</h6>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
            <small className="adLoc">{items.city}, {items.province}</small>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Link>
          </div>
        )
      })
    }
    
  
  <Card bg="primary" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <center>
        <h4><strong>Want to see your stuff here?</strong></h4>
        <p>Make some extra cash by selling things in your community. Go on, it's quick and easy.</p>
      </center>
      <footer className="blockquote-footer">
      <Button variant="primary" size="lg" id="ssBtn" onClick={this.signIn}>
     Start Selling
    </Button>{' '}
      </footer>
    </blockquote>
  </Card>
</CardColumns>
    </div>
    <center>
    <Button variant="outline-dark" className="loadMoreBtn">Load More</Button>
    </center>
    </div>

     <div>
       <center>
     <a><img src={IMG7} alt=""/></a>
     </center>
   </div>
  </div>
  )
}
}

class OLXApp extends Component{
  render()
  {
    return(
      <div className="OLX">
        <div style={{width:37 + '%'}}>
<img src={IMG8} alt=""/>
        </div>
        <div style={{width:37 + '%'}}> 
          <h2><strong>TRY THE OLX APP</strong></h2>
          <h4>Buy, sell and find just about anything using the app on your mobile.</h4>
        </div>
        <div style={{width:26 + '%'}} className="app">
        <div class="vl"></div>
        <div>
          <h6 style={{paddingTop:60, paddingLeft:20}}><strong>GET YOUR APP TODAY</strong></h6>
          <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home" target="_blank"><img className="appImg" src={IMG9} alt=""/></a>
          <a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home" target="_blank"><img className="appImg" src={IMG10} alt=""/></a>
          </div>
        </div>
      </div>
    )
  }
}

class Footer extends Component{
  render()
  {
    return(
      <div>
  <div className="footer">
    <div>
      <h5><strong>POPULAR CATEGORIES</strong></h5>
      <a href=""><h6>Cars</h6></a>
      <a href=""><h6>Flats for rent</h6></a>
      <a href=""><h6>Jobs</h6></a>
      <a href=""><h6>Mobile Phones</h6></a>
    </div>
    <div>
      <h5>
        <strong>TRENDING SEARCHES</strong></h5>
      <a href=""><h6>Bikes</h6></a>
      <a href=""><h6>Watches</h6></a>
      <a href=""><h6>Books</h6></a>
      <a href=""><h6>Dogs</h6></a>
    </div>
    <div>
      <h5><strong>ABOUT US</strong></h5>
      <a href="https://www.olxgroup.com/" target="blank"><h6>About OLX Group</h6></a>
      <a href="https://blog.olx.com.pk/" target="blank"><h6>OLX Blog</h6></a>
      <Link to="/contactUs" target="blank"><h6>Contact Us</h6></Link>
      <Link to="/olxBusiness" target="blank"><h6>OLX for Businesses</h6></Link>
    </div>
    <div>
      <h5><strong>OLX</strong></h5>
      <Link to="/help" target="blank">Help</Link><br/>
      <a href="">Site Map</a><br/>
      <a href="">Legal and Privacy Information</a>
    </div>
    <div>
      <h5><strong>FOLLOW US</strong></h5>
      <div className="socialMedia">
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-youtube"></i>
      <i class="fab fa-instagram"></i>
      </div>

    </div>
  </div>

   <div class="copyright">
     <div><h6><strong>Other Countries <a>India</a>-<a>South Africa</a>-<a>Indonesia</a></strong></h6></div>
     <div><h6><strong>Free Classifieds in Pakistan .  &#169; 2016-2020 OLX</strong></h6></div>

 </div>
</div>
    )}

}

export default Home;

export 
{
  Header,
  Categories,
Footer
};
