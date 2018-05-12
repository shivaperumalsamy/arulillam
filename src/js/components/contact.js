import React, { Component } from 'react';
import commonObj from '../common/data.js';
import ContactIcon from './contactIcon.js';



{
  /*
     Class Name: ContentBar
     Return : @component
  */
}


class Contact extends Component{

		/*
			function Name : renderContactInfo
			return : array of components
		*/
	renderContactInfo = () => {
		let contactInfo = commonObj['contactObj'].map((contact, index)=>{	
			return <ContactIcon icon = {contact.icon} target = {contact.target} value = {contact.content} url = {contact.refUrl} key = {index} />;			
		  });
		
		  return contactInfo;
	
	} 
	// handleClick = () =>{
	// 	ContactAnimationObject.slideOut();
	// }
		
	render(){
		
		return(
			<div className = "contactBarWrapper">
				<div className = "contactBarWrapper__closeIcon" onClick = {this.props.onClick}></div>
				<div className = "contactBarWrapper__contactInfo">
						<div className = "contactHeader page-header">Get in Touch</div>
						{this.renderContactInfo()}
				</div>
			</div>
		);
	}
}

export default Contact;