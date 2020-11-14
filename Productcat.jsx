import React from 'react';
import {Header, Footer, Categories} from './Home';
import {withRouter} from 'react-router-dom';
import { db, auth } from '../config/firebase.js';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";

class CustomComponent extends React.Component {
constructor(props) {
   super(props)
   this.state={
    Paramvalue: this.props.match.params.ParamName
   }

   }
  
   render()
   {

    console.log(this.state.Paramvalue);
       return(
           <div>
               <Header />
               <Categories />
               <ItemsinCat icat={this.state.Paramvalue}/>
               <Footer />
           </div>
       )
   }
}


class ItemsinCat extends React.Component{
    state = {
      items: null,
      icat: this.props.icat,
    
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
               {      items.cat==this.state.icat ?
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
  
 export default withRouter(CustomComponent);