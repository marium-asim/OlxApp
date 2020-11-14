import React from 'react';
import { Link } from "react-router-dom";
import IMG1 from '../images/logo.PNG'
import './help.css'
import Button from 'react-bootstrap/Button'; 
import ListGroup from 'react-bootstrap/ListGroup';
import { MDBCol ,MDBIcon } from "mdbreact";

class Help extends React.Component{
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

                         </div>


                         <div id="cont">
                             <div id="list1">
                             <ListGroup style={{textAlign:"left"}}>
  <ListGroup.Item>
      <a href="#"><i class="fas fa-lock" ></i></a>
      Safety
      <a href="#" className="arr">
      <MDBIcon icon="chevron-down" />
      </a>
      </ListGroup.Item>
  <ListGroup.Item>
  <a href="#"><i class="fas fa-list"></i></a>
  Legal &amp; Privacy information
  <a href="#" className="arr">
  <MDBIcon icon="chevron-down" />
  </a>
  </ListGroup.Item>
  <ListGroup.Item><a href="#"><i class="fas fa-list"></i></a>Featured Ads and Business Packages<a href="#" className="arr">
  <MDBIcon icon="chevron-down" />
  </a></ListGroup.Item>
  <ListGroup.Item><a href="#"><i class="fas fa-list"></i></a>Free Ad Limits<a href="#" className="arr">
  <MDBIcon icon="chevron-down" />
  </a></ListGroup.Item>
  <ListGroup.Item><a href="#"><i class="fas fa-list"></i></a>Boost To Top<a href="#" className="arr">
  <MDBIcon icon="chevron-down" />
  </a></ListGroup.Item>
  <ListGroup.Item><a href="#"><i class="fas fa-list"></i></a>My account / Profile<a href="#" className="arr">
  <MDBIcon icon="chevron-down" />
  </a></ListGroup.Item>
  <ListGroup.Item><a href="#"><i class="fas fa-list"></i></a>Posting &amp; Invoices<a href="#" className="arr">
  <MDBIcon icon="chevron-down" />
  </a></ListGroup.Item>
  <ListGroup.Item><a href="#"><i class="fas fa-list"></i></a>Chat<a href="#" className="arr">
  <MDBIcon icon="chevron-down" />
  </a></ListGroup.Item>
  <ListGroup.Item><a href="#"><i class="fas fa-list"></i></a>How do I buy on OLX?<a href="#" className="arr">
  <MDBIcon icon="chevron-down" />
  </a></ListGroup.Item>
  <ListGroup.Item><a href="#"><i class="fas fa-list"></i></a>About Us!<a href="#" className="arr">
  <MDBIcon icon="chevron-down" />
  </a></ListGroup.Item>

</ListGroup>

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


export default Help;