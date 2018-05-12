import axios from 'axios';
var Utility = function(){
   
    
    
        var hitTheService = function(url,updateContent){
            
                axios.get(url,{
                    auth: {
                    username: 'siva',
                    password: 'P@ssw0rd'
                }

                })
                .then(function (response) {
                    console.log("Ajax call");
                    updateContent(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
    }

    return {
        hitTheService : hitTheService
    }
}();

export default Utility;