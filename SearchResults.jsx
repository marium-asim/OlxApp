import React from 'react';
import {Footer, Categories} from './Home';
import IMG1 from '../images/img11.png'
import { db, auth } from '../config/firebase.js';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import './SearchResults.css';

class SearchBasedOnLoc extends React.Component{

  
    render()
    {
      const { data } = this.props.location 
     console.log(data);
        return(
            <div>

<SearchHeader />
<Categories />
<Search location={data} />
<Footer />

            </div>
        )
    }
}

class SearchHeader extends React.Component
{
  render()
  {
    return(
      <div>
    <div class="catLogo" style={{marginBottom:5}}>
<Link to='/'>
     <img src={IMG1} alt="" className="logo" height="70"/></Link>
     </div>
      </div>
    )
  }
}

class Search extends React.Component{
    state = {
      items: null,
      location: this.props.location
    
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

      console.log("props==>",this.state.location)
      
      return(
        <div>
        <br/>
      <h4 style={{paddingLeft:20}}><strong>{this.state.icat}</strong></h4>
      
      
      <div className="SearchRes">  
     <CardColumns>
     {
       this.state.items && 
       this.state.items.map( items => {
             
return(
              
               
  <div>
  {     items.desc.charAt(0).toUpperCase()==this.state.location.charAt(0).toUpperCase() || items.province.toUpperCase()==this.state.location.toUpperCase() || items.city==this.state.location || items.details[0].toUpperCase()==this.state.location.toUpperCase() ?
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
: null }
  </div>
 
)
})
}     
</CardColumns>

</div>

</div>
)
    }
  }


export default SearchBasedOnLoc;

