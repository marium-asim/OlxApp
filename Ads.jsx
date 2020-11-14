import React from 'react';
import {Header, Footer, Categories} from './Home';
import IMG1 from '../images/img22.webp';
import './Ads.css';
import { Link } from "react-router-dom";



class Sell extends React.Component
{
    render()
    {
        return(
            <div>
                <Header/>
                <Categories />
                <StartSelling />
                <Footer />
            </div>
        )
    }
}

class StartSelling extends React.Component
{
    render()
    {
        return(
            <div>
             <h5 className="title">ADS</h5>
              <center>
                  <div>
                    <img src={IMG1} alt="" width="220" height ="220"/>
                    <h5 className="txt">You haven't listed anything yet.</h5>
                    <p>Let go of what you <br/>don't use anymore</p>
                    <Link to="/cat"><button className="startSellBtn">start selling</button></Link>
                  </div>
              </center>
            </div>
        )
    }
}

export default Sell;