import React, { Component } from 'react';
import '../../css/homeScreen.css';
import  MenuBar from '../components/menuBar';
import  GalleryComponent from '../components/GalleryComponent';
import commonObj from '../common/data.js';
import ScrollableAnchor from 'react-scrollable-anchor';
import Carousel from './CarouselScreen';
import AboutScreen from './AboutScreen';
import TimelineScreen from './TimelineScreen';
import Contact from '../components/contact';
import '../../css/contact.css';
import Footer from '../components/footer';
import ContactAnimationObject from '../common/contactpage.js';
import { ClipLoader } from 'react-spinners';


/*
     Class Name: HomeScreen
     Return : @component
*/
class HomeScreen extends Component {
  

  constructor(props){
		super(props);
		this.state = {
      loading: true,
			flag : 0,
      prevMenuId : null,
      idHrefsMappingObj : null
    }
    this.setBorderOnScroll = this.setBorderOnScroll.bind(this);
    
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
    setTimeout(this.setIdObject.bind(this), 1500 ); // 1500 delay as loading is set to 1500 delay
    window.addEventListener("hashchange", this.setBorderOnScroll);
}

setIdObject(){
   
  var els = document.getElementsByClassName("menuBar__menuIcon")
  console.log('els',els)
  let idHrefsMapping = {};
      
  Array.prototype.forEach.call(els,function (el) {
    var currLink = el;
    var refHref = currLink.getAttribute("href");
    var refID = currLink.getAttribute("id");
    console.log('testdata'+refHref + refID);
    idHrefsMapping[refHref] = refID;
    console.log(idHrefsMapping);
  });

  this.setState({
    idHrefsMappingObj : idHrefsMapping
  })

}

/**
 * sets border on scrolling
 */
setBorderOnScroll(){
  let component = window.location.hash;
      if (commonObj.sectionIds.indexOf(component.substr(1)) >= 0) {
        
        this.setBorder(this.state.idHrefsMappingObj[component],'#'+commonObj.menuItems[commonObj.sectionIds.indexOf(component.substr(1))].color);
      }
}

  

 /*
	  function Name: handleClick  
	  description : Toggles the Contact component

	*/
	handleClick = (counter) =>{
	  	if(this.state.flag === 0 && counter === 4){
        ContactAnimationObject.slideIn();
        this.state.flag = 1;
		  }else if(counter!== 4){
        ContactAnimationObject.slideOut();
        this.state.flag = 0;
		  }else{
        ContactAnimationObject.slideOut();  
        this.state.flag = 0;
		  }
		
    }
  /*
     function Name : setBorder
     description: Sets border for the menu icon
  */
  setBorder = (id,color)=>{
    
     if(this.state.prevMenuId !== null){
              let prev = document.getElementById(this.state.prevMenuId);
              prev.style.borderLeft = "";
              let menuHoverEffect = document.getElementById("menu-hover-effect");
              menuHoverEffect.style.background = "";
              
      }  
      let element = document.getElementById(id);
      element.style.borderLeft = "5px solid "+color;
      let menuHoverEffect = document.getElementById("menu-hover-effect");
      menuHoverEffect.style.background = color;
      console.log(menuHoverEffect);
      this.setState({prevMenuId: id});
}

  render() {

    const { loading } = this.state;
    
        if(loading) { 
        return <div className = "bounce-loader">
                    <ClipLoader size={100} color={'#296AAC'} loading={true} />
                </div> 
        } 
   
    return (  
    <div>	
       <MenuBar onClick = {this.handleClick} setBorder={this.setBorder} index = "1"></MenuBar>
       <Contact onClick = {this.handleClick} index = "1"></Contact>
       <ScrollableAnchor id={commonObj.sectionIds[0]}>
          <Carousel active="0" className="height-100vh">
          </Carousel>
       </ScrollableAnchor>
       <ScrollableAnchor id={commonObj.sectionIds[1]}>
          <div className="height-100vh" id="abouc">
            <AboutScreen/>
          </div>
      </ScrollableAnchor>
        <ScrollableAnchor id={commonObj.sectionIds[2]}>
          <div className="height-100vh" id = "timec">
            <TimelineScreen />
          </div>
        </ScrollableAnchor>
      <ScrollableAnchor id={commonObj.sectionIds[3]}>
        <div className="height-100vh" id="gallc">
        <GalleryComponent/>
      </div> 
      </ScrollableAnchor>
      <Footer/>
    </div> 
    );
  }
}

export default HomeScreen;