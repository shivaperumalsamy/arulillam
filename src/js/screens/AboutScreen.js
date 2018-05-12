import React, { Component } from 'react';
import '../../css/aboutscreen.css';
import Utility from '../common/utility';



/*
    Class Name: AboutScreen
    Return : @component
*/

class AboutScreen extends Component{

    constructor(){
        super();
        this.state = {
            aboutData : []
        };
    }
    updateContent = (response) =>{
        console.log(response);
        this.setState({
            aboutData : response.data
        });
        console.log(this.state.aboutData);
    }

    componentWillMount(){
        Utility.hitTheService('https://sirius-smiles-cms.herokuapp.com/AboutScreen',this.updateContent);
    }
    render() {
        
        var style = {
            backgroundImage: 'url(' + this.state.aboutData.aboutImage + ')',
            // backgroundSize: 'cover',
            // backgroundRepeat : 'no-repeat',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'       
        }
        return ( 
            <div className="wrapper_AboutHeaderandContent">
            <div className = "contentHeader page-header"> 
            <p className = "page-header">What we do?</p></div>
            <div className = "wrapper_aboutwrapper">
                <div className = "about_area">
                    
                    <div className = "content page-content">
                        {this.state.aboutData.aboutContent}
                    </div>
                </div>
                <div className = "about_photo">
                    <div  style = {style}></div>
                </div>
            </div>
            </div>
        );
      }

}
export default AboutScreen;