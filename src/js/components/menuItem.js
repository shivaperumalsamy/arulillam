import React, { Component } from 'react';


{
  /*
     Class Name: MenuIcon
     Return : @component
  */
}
class MenuIcon extends Component{

  constructor(){
    super();
    this.state = {
      isActive : false
    };
  }
  
  addClassTo = (color,isActive) =>{
    let menuHoverEffect = document.getElementById("menu-hover-effect");
    menuHoverEffect.style.background = color;
    if(isActive!=null && isActive === true){
      this.setState({
        isActive : true
      });
    }
  }
  removeClassTo = (color) =>{
    if(this.state.isActive !== true){
      let menuHoverEffect = document.getElementById("menu-hover-effect");
      menuHoverEffect.style.background = "";
    }
	}


 
  
	render(){
    const sectionid="#"+this.props.sectionId;
    console.log('menuitem props',this.props)
    
      return(
        <a id={"menuicon-"+this.props.counter} className = "menuBar__menuIcon" 
        href={sectionid}
        onClick={(e)=>{this.props.onClick(this.props.counter);{this.props.setBorder("menuicon-"+this.props.counter,"#"+this.props.color)}}}>
          <span></span>
        </a>   
      );
	}
}

export default MenuIcon;