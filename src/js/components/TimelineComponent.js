import React,{Component} from 'react';
import '../../css/timelinecomponent.css';

class Timelinecomponent extends Component{
    render(){
        console.log("timeline component = ",this.props.timelineData.month,this.props.timelineData.date);
        return(
            <div className = "timeline-component" >
                <div className = "timeline-date">
                    <h1 className = "page-header">{this.props.timelineData.month}</h1>
                    <h1 className = "page-header">{this.props.timelineData.date}</h1>
                </div>
                <div className = "timeline-content-container" >
                    <div className = "timeline-content">
                        {this.props.timelineData.content}
                    </div>
                </div>
            </div>
        )
    }
}
export default Timelinecomponent;