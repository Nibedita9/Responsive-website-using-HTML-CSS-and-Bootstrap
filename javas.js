 //get the button
      mybutton = document.getElementById('myBtn');

       //When the wear scrolls down 20px from of the document , show the button

       window.onscroll=function(){
        scrollFunction()};

       function scrollFunction(){
        if(document.body.scrollTop >20 || document.documentElement.scrollTop>20){
          mybutton.style.display ="block" ;
        }

        else{
          mybutton.style.display = 'none';
        }
       }

       // when the user clicks on the button , scroll to the top of the document

       function topFunction(){
        document.body.scrollTop=0;
        document.documentElement.scrollTop>0;
       }