import React from 'react';
import { Link } from "react-router-dom";
import { CatHeader, CatFooter } from './cat';
import './post.css';
import firebase from '../config/firebase.js';
import { db, auth , ds } from '../config/firebase.js';


class Post extends React.Component
{
    render()
    {
        const { data } = this.props.location
        console.log(auth.currentUser.displayName);
        return(
            <div>
             <CatHeader />
             <AdForm cat={data} />
             <CatFooter />
            </div>
        )
    }
}

class AdForm extends React.Component
{    
    state= {
            cat: this.props.cat,
            file: null,
            city: " ",
            desc: " ",
           detDesc: [],
           condition: "",
           type:"",
           province: " ",
            price: " ",
            sellerName: auth.currentUser.displayName,
            sellerMem: " ",
            picurl : " "
  
   
    }

   addNewItem = () =>
   {
       db.collection('items')
       .add({
           price: this.state.price,
           city: this.state.city,
           desc: this.state.desc,
           details:[this.state.condition,this.state.type],
           detDesc: this.state.detDesc,
          province: this.state.province,
           sellerName: auth.currentUser.displayName,
           sellerMem: this.state.sellerMem,
           picurl: this.state.picurl
       })
   }


   upload_file =()=>
   {
       var uploadTask = ds.ref().child(`${this.state.file.name}`).put(this.state.file)
       console.log(this.state.file)
       uploadTask.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, (error) => {
        // Handle unsuccessful uploads
      }, () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
         this.setState(
             {
                 picurl : downloadURL
             }
         )

        });

      });
   }

    render()

    {
        return(
            <div>
             <center>
                    <h3 className="postTitle">POST YOUR AD</h3>
                    <div className="postform">
                     <div className="subtitles">
                         <h3>SELECTED CATEGORY</h3>
                         <h6>{this.state.cat}</h6>
                         <br/>
                     </div>
                     <div className="subtitles">
                         <h3>INCLUDE SOME DETAILS</h3>
                         <h6>Condition*</h6>
                         <button style={{marginLeft:30, marginRight:15}} onClick={( ) => this.setState({condition:"New"})}>New</button>
                         <button  onClick={() => this.setState({condition:"Used"})}>Used</button> <br/> <br/>
                         <h6>Type*</h6>
                         <input type="text" name="type" className="postloc" required onChange={(e) => this.setState({type: e.target.value})}/>
                         <h6>Ad title*</h6>
                         <input type="text" name="type" className="posttitle"  onChange={(e) => this.setState({desc: e.target.value})} required />
                         <h6 className="postcap">Mention the key features of your item (e.g. brand, model, age, type) &emsp; 0/70</h6>
                         <h6>Description*</h6>
                         <textarea name="description" cols="47" rows="4" onChange={(e) => this.setState({detDesc: [e.target.value]})}></textarea>
                         <h6 className="postcap" >
Include condition, features and reason for selling <span style={{marginLeft:99}}>0/4096</span> 
</h6>
                     </div> 
                     <div className="subtitles">
                         <h3>SET A PRICE</h3>
                         <h6>Price*</h6>
                         <div className="priceBox">
                         <h6>Rs |</h6>
                         <input type="text" name="price" id="price" style={{marginLeft:10}} onChange={(e) => this.setState({price:e.target.value})} required/>
                         </div>
                     </div>
                     <div className="subtitles">
                         <h3>UPLOAD PHOTO</h3>
                         <input type="file" onChange={(e)=> this.setState({file: e.target.files[0]})} name="postImg" required className="postImg"/>
                         <button onClick={this.upload_file}>Upload</button>
                         <h6 style={{color:"red", marginBottom:30}}>This field is mandatory</h6>
                     </div>
                     <div className="subtitles">
                         <h3>CONFIRM YOUR LOCATION</h3>
                         <h6>State*</h6>
                         <input type="text" name="province" className="postloc" onChange={(e) => this.setState({province:e.target.value})} required />
                         <h6>City*</h6>
                         <input type="text" name="city" className="postloc" required onChange={(e) => this.setState({city:e.target.value})}/>
                     </div>
                     <div className="subtitles">
                         <h3>REVIEW YOUR DETAILS</h3>
                         <div style={{display:"flex", flexDirection:"row", marginLeft:30, marginTop:20}}>
                             <div><img src={auth.currentUser.photoURL} alt="" style={{borderRadius:50 + '%'}}/></div>
                         <div>
                         <h6>Name</h6>
                         <input type="text" value={auth.currentUser.displayName}  className="postName"/>
                         </div>
                         </div>
                        
        <h6>Your phone number <span></span><input  className="postName" type="text" value={auth.currentUser.phoneNumber}/></h6>
                     </div>
                     <div className="subtitles">
                        <button type="submit" className="submitBtn" onClick={this.addNewItem}>Post now</button>
                     </div>
                    </div>
                    </center>
            </div>
        )
    }
}

export default Post;