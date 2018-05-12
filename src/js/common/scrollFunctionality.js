var scrollFunctionalityObject = function(){
    var constructTimeLine = function(data){
       let timelineComponentdiv =  document.createElement('div');
       let timelineDatediv = document.createElement('div');
       let timelineContentdiv =  document.createElement('div');
       let monthElement = document.createElement('p');
       let dateElement = document.createElement('p');
       timelineComponentdiv.className = 'timeline-component';
       timelineDatediv.className = 'timeline-date';
       timelineContentdiv.className = 'timeline-content';
       monthElement.innerHTML = data.month;
       dateElement.innerHTML = data.date;
       timelineDatediv.appendChild(monthElement);
       timelineDatediv.appendChild(dateElement);
       timelineContentdiv.innerHTML = data.content;
       timelineComponentdiv.appendChild(timelineDatediv);
       timelineComponentdiv.appendChild(timelineContentdiv);  
       return timelineComponentdiv;
       

    }
    var slideNext = function(flag,data){
        console.log("Slide Next" + flag);        
        let count;
        let fragment = document.createDocumentFragment();
        // let componentArray = document.getElementsByClassName('timeline-component');
        let componentLength = flag * 4;
        if((data.length - componentLength) < 4){
             count = data.length;
             let scrollRightElement = document.getElementsByClassName('scrollContainer__scrollRight')[0];
             let scrollLeftElement = document.getElementsByClassName('scrollContainer__scrollLeft')[0];
             scrollRightElement.style.display = 'none';
             scrollLeftElement.style.display = 'block';
             
        }else{
             count =  componentLength+4;
        }
        for(let i = componentLength ; i < count; i++){
          
           // console.log(data[i]);
           fragment.appendChild(constructTimeLine(data[i]));
        }
        var prevElement = document.querySelectorAll('.timeline-component');

        prevElement.forEach(function(Element){
               Element.remove();
        });
        
        var parentElement = document.getElementsByClassName('timeline-viewpane')[0];

        parentElement.appendChild(fragment);  
          
    }
    var slidePrevious = function(flag,data){
        flag = flag-1;
        console.log("Slide Previous " + flag);
        let scrollRightElement = document.getElementsByClassName('scrollContainer__scrollRight')[0];
        scrollRightElement.style.display = 'block';
        if(flag==0){
            console.log("display flag");
            let scrollLeftElement = document.getElementsByClassName('scrollContainer__scrollLeft')[0];
            scrollLeftElement.style.display = 'none';
        }
        slideNext(flag,data); 
        
     }


    return {
        slideNext : slideNext,
        constructTimeLine : constructTimeLine,
        slidePrevious : slidePrevious
    }
}();

export default scrollFunctionalityObject;