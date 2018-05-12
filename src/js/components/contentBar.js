import React, { Component } from 'react';

{
  /*
     Class Name: ContentBar
     Return : @component
  */
}

class ContentBar extends Component{

	render(){
		return(
			<div className = "wrapper__homeWrapper">
      			<div className = "homeWrapper__ContentWrapper">
          			<div className = "page-header">{this.props.contentObj.headerContent}</div>
          			<div className = "content">
            			<p>{this.props.contentObj.mainContent}</p>
      	  			</div>
          			<div className = "detailsView">More...</div> 
        		</div>   
      		</div>	

	   );
	}
}

export default ContentBar;