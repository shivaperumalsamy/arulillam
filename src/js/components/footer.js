import React,{Component} from 'react';
import '../../css/font-awesome.min.css';
import '../../css/footer.css';

class footer extends Component{
    render(){
        return(
            <div className = "footer">
                <span className = "footer-content"> Sirius <i className = "fa fa-copyright" aria-hidden="true"></i> smiles </span>
            </div>
        )
    }
}
export default footer;