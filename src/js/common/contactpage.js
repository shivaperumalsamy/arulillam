var ContactAnimationObject = function(){

    var slideIn = function(){
        console.log("SlideIn");
        var contactTab = document.getElementsByClassName('contactBarWrapper');
        contactTab[0].style.marginRight = '100px';
        
    }

    var slideOut = function(){
        var contactTab = document.getElementsByClassName('contactBarWrapper');
        contactTab[0].style.marginRight = '-35%';
    }

    return {
        slideIn : slideIn,
        slideOut : slideOut
    }
}();

export default ContactAnimationObject;