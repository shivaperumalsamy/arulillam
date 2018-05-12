import React, { Component } from 'react';
import '../../css/scroll.css';
import data from '../../data/timelineScreenData.json';
import scrollFunctionalityObject from '../common/scrollFunctionality.js';
import '../../css/font-awesome.min.css'



class Scroll extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            flag : 1
        }
    }
     
    handleClick = (flag_index, key) =>{
        if(key == 1){
            console.log("slide Next in handleClick"+flag_index);            
            scrollFunctionalityObject.slideNext(flag_index,data);
            let temp = flag_index+1;
            // this.setState({
            //     flag : temp
            // });
            this.state.flag =temp;
            console.log("Incremented flag", this.state.flag);
        }else{
            let temp = flag_index-1;
           this.state.flag = temp;
            console.log("decremented flag", this.state.flag);            
           // console.log("slide Previous in handleClick"+flag);
            scrollFunctionalityObject.slidePrevious(this.state.flag,data);
            
        }
        
    }
    render(){      
        return(  
            <div className = "scrollContainer">          
               <i className="fa fa-arrow-right scrollContainer__scrollRight" aria-hidden="true" onClick = {()=>this.handleClick(this.state.flag,1)}></i>
               <i className="fa fa-arrow-left scrollContainer__scrollLeft" aria-hidden="true"  onClick = {()=>this.handleClick(this.state.flag,2)}></i>
               <div className = "clear"></div>
            </div>
        );
       }
   }
 
  export default Scroll 