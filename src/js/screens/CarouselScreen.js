import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group'

import Slide from '../components/Slider.js';
import Utility from '../common/utility';
import  '../../css/carouselscreen.css';

class Carousel extends Component{ 
    constructor(props) {
        super(props);
        this.state = {
            //items: ['hello', 'world', 'click', 'me'],
            active: this.props.active,
            data:[   
                {
                "imageurl": "https://www.hdwallpapers.in/walls/big_hero_6_movie-wide.jpg",
                "code": "0"
             }]
             
        }
        this.leftClick = this.moveLeft.bind(this)
        this.rightClick = this.moveRight.bind(this)
        this.moveToSlide = this.moveToSlide.bind(this)

      }
      updateContent = (response)=> {
         this.setState({ data : response.data});
         console.log(" Hello " + this.state.data);
      }
      componentDidMount() {
        
        this.timer = setInterval(this.rightClick, 5000);
        window.addEventListener('keydown', this.onKeydown);
        Utility.hitTheService('https://sirius-smiles-cms.herokuapp.com/CarouselData',this.updateContent); 

      }
      
      componentWillUnmount() {
        clearInterval(this.timer);
        window.removeEventListener('keydown', this.onKeydown);
     }

    //fucntion to handle < and > keys
    onKeydown = (e) => {
        const { keyCode } = e;
        var leftArrow = keyCode === 37;
        var rightArrow = keyCode === 39;
        if(leftArrow) 
            this.moveLeft(); 
        else if(rightArrow)
            this.moveRight();
    }
    //Renders the main slide
    renderSlide(){
        return <Slide key={this.state.active} imgData={this.state.data[this.state.active]} />
    }
    //Function to silde left
    moveLeft() {
        clearInterval(this.timer)
        let newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.data.length - 1 : newActive
        })
        this.timer = setInterval(this.rightClick, 5000);
    }
    //Function to silde right
    moveRight() {
        clearInterval(this.timer)
        let newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.data.length
        })
        this.timer = setInterval(this.rightClick, 5000);
    }

    removePreviousLegendClick = () => {
        var clickedSlide = document.getElementsByClassName("circle");
        for(let i=0;i<clickedSlide.length;i++){
            clickedSlide[i].parentNode.removeChild(clickedSlide[i]);
        }
    }


    /**
     * On clicking legend button, the corresponding carousel image has to be shown.
     * Handling the legend buton click event
     * @param {*} index 
     */
    moveToSlide(index) {
        clearInterval(this.timer)
        let newActive = index
        this.setState({
            active: (newActive + 1) % this.state.data.length
        })
        this.removePreviousLegendClick();
        for(let i=0;i<this.state.data.length;i++){
            if(i === index){
                var htmlCircleSpan=React.createElement('span',{className:"circle"},'');
                ReactDOM.render(htmlCircleSpan,document.getElementById("legend_"+index));
            }
        }
        this.timer = setInterval(this.rightClick, 5000);
    }

    
    renderLegendButtons = () =>{
        let legendbtns = this.state.data.map((data,index)=>{
          return  <li className="legend-button" id={'legend_'+index} key={index} data-carousel-active={index} onClick={this.moveToSlide.bind(this,index)}></li>
        })
        return legendbtns;
    }
    
    render() {


       
        return(
            <div className="carouselViewpane">
                <CSSTransitionGroup transitionName='slider'
                transitionEnterTimeout={5}
                    transitionLeaveTimeout={-1}>
                    {this.renderSlide()}
                </CSSTransitionGroup>
                <ul className = "legend-buttons-wrapper">
                    {this.renderLegendButtons()}
                </ul>
            </div>
        )
    }
}
export default Carousel;
