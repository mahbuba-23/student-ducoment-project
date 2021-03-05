//funtion

function clkbtn () {
    let input = document.getElementById('stdinput').value;
   
    //convert string number
    input = parseInt(input);
    
    //swith statement

    switch (input){
        case 1 :
         document.write('<img src="images/pic1.jpg"> <br/> roll no : 1 <br/> class : 10 <br/> name: mahmud hasan <br/> mobile no : 01718902308');
         break;

         case 2 :
         document.write('<img src="images/pic2.jpg"> <br/> roll no : 2 <br/> class : 10 <br/> name: tamim hasan <br/> mobile no : 01718902308');
         break;

         case 3 :
         document.write('<img src="images/pic3.jpg"> <br/> roll no : 3 <br/> class : 10 <br/> name: tanvir hasan <br/> mobile no : 01713402308');
         break;

         case 4 :
         document.write('<img src="images/pic4.jpg"> <br/> roll no : 4 <br/> class : 10 <br/> name: jobeyer hasan <br/> mobile no : 01715402308');
         break;

         case 5 :
         document.write('<img src="images/pic5.jpg"> <br/> roll no : 5 <br/> class : 10 <br/> name: masud khan <br/> mobile no : 01716502308');
         break;

         case 6 :
         document.write('<img src="images/pic6.jpg"> <br/> roll no : 6 <br/> class : 10 <br/> name: masom khan <br/> mobile no : 01717602308');
         break;

         case 7 :
         document.write('<img src="images/pic7.jpg"> <br/> roll no : 8 <br/> class : 10 <br/> name: mahmuda hasan <br/> mobile no : 01719802308');
         break;

         case 8 :
         document.write('<img src="images/pic8.jpg"> <br/> roll no : 8 <br/> class : 10 <br/> name: kobir hasan <br/> mobile no : 01712302308');
         break;

         

    }


}