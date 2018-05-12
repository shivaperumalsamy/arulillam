import React, { Component } from 'react';
import commonObj from '../common/data.js';
import '../../css/font-awesome.min.css';
// import twitter from '../common/data.js';
// import facebook from '../common/data.js';




{
  /*
     Class Name: contactIcon
     Return : @component
  */
}

class ContactIcon extends Component{

	
		
	render(){
		//console.log("icon image"+this.props.icon);
		//const logo = require('../../assets/img/'+this.props.icon);
		return(
			
				<div className = "contactIcon">

                    
                        
				
							<div className = "contact icon "><i className= {this.props.icon} aria-hidden="true"></i></div>
							<a href={this.props.url} target = {this.props.target}><div className = "contact content page-header">{this.props.value}</div></a>
											
				</div>
			
		);
	}
}

export default ContactIcon;