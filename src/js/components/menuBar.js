import React, { Component } from 'react';
import MenuIcon from './menuItem';
import commonObj from '../common/data.js';
import Smiles from '../../assets/img/SmileS.png'

{
  /*
     Class Name: MenuBar
     Return : @component
  */
}

class MenuBar extends Component{

		/*
			function Name : renderMenu
			return : array of components
		*/
	renderMenu = () => {
		console.log('props',this.props);
		let menuItems = commonObj['menuItems'].map((menu, index)=>{		
			console.log(index+""+commonObj.sectionIds[index]);	
			return <MenuIcon icon = {menu.icon} onClick = {this.props.onClick} setBorder={this.props.setBorder} color={menu.color} value = {menu.name} counter={index} key = {index} sectionId={commonObj.sectionIds[index]}/>	

		  });
		
		  return menuItems;
	
    } 
	render(){
		
		return(
			<div>
			<div id = "menu-hover-effect"></div>
			<div className = "menuBar">
				{this.renderMenu()}
				<div className = "logo">
					<img className = "logoIcon" src = {Smiles}  alt = "Smiles Logo"/>
				</div>
			</div>
			</div>
		);
	}
}

export default MenuBar;