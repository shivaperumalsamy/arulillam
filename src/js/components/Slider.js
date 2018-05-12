import React, { Component } from 'react';

import '../../css/slide.css';

class Slide extends Component{
    
       render(){
        return(            
               <div className="slide">
               <img src = {this.props.imgData.imageurl} alt="The content is temporarily unavailable" />
               </div>
           ); 
       }
   }
 
  export default Slide 