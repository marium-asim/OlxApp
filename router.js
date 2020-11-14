import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import olxBusiness from '../components/olxBusiness';
import Home from '../components/Home';
import Help from '../components/help';
import Contact from '../components/contactUs';
import Product from '../components/Product';
import SeachBasedOnLoc from '../components/SearchResults';
import Sell from '../components/Ads';
import Cat from '../components/cat';
import Post from '../components/post';
import CustomComponent from '../components/Productcat';

class AppRouter extends React.Component
{
    render()
    {
        return(
            <Router>
                <Route exact path='/' component={Home}/>
                <Route path='/olxBusiness' component={olxBusiness} />
                <Route path='/help' component={Help} />
                <Route path='/contactUs' component={Contact} />
                <Route path='/Product' component={Product} />
                <Route path='/SearchResults' component={SeachBasedOnLoc} />
                <Route path='/Ads' component={Sell} />
                <Route path='/cat' component={Cat} />
                <Route path='/post' component={Post} />
                <Route path='/Productcat/:ParamName' component={CustomComponent}/> 
            </Router>
        )
    }
}

export default AppRouter;