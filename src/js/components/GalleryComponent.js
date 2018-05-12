import React, { Component } from 'react';
import '../../css/galleryComponent.css';
import commonObj from '../common/data.js';
import Utility from '../common/utility';

{
  /*
     Class Name: GalleryComponent
     Return : @component
  */
}

class GalleryComponent extends Component{

  constructor(){
    super();
    this.state = {
       galleryData :[]
    }; 
  }

  updateContent = (response) =>{
    console.log("Gallery page");
    console.log(response);
    this.setState({
      galleryData : response.data
    });
    console.log(this.state.galleryData);
  } 

  //Hit the service for content
  componentWillMount(){
    Utility.hitTheService('https://sirius-smiles-cms.herokuapp.com/Gallery', this.updateContent)
  }
  /**
   * function Name : renderGalleryObjects
   * return : array of components
   */
        
  renderGalleryObjects = () => {
   
    let galleryItems = this.state.galleryData.map((menu, index)=>{
      var style = {
        backgroundImage: 'url(' + menu.img + ')',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#eee',
        boxShadow: '0 0 15px 5px rgba(33,32,28,0.5)',
        borderRadius: '2%',
      }		
    return <li key={index} style={style} onClick = {(e) => {window.open(menu.url)}}>
                  <span className="img-container item-month-year page-content">{menu.month} {menu.day}</span>
                  <span className="img-container item-description page-content">{menu.description}</span>
            </li>	
    });
    return galleryItems;
  }

	render(){
		return(
            <div className="gallery-wrapper">
            <header className="page-header">Gallery</header>
            <section>
                <div id="gallery-carousel">
                    <ul>
                        {this.renderGalleryObjects()}
                    </ul>
                </div>
            </section>
          </div>
	   );
	}
}

export default GalleryComponent;