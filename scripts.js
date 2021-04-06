function buttonempty() {
  //empty buttons
  document.querySelector("#opt1").className = "nothing";
  document.querySelector("#opt2").className = "nothing";
  document.querySelector("#opt3").className = "nothing";
  document.querySelector("#opt4").className = "nothing";
  document.querySelector("#opt5").className = "nothing";

  document.querySelector("#opt1").innerHTML = "";
  document.querySelector("#opt2").innerHTML = "";
  document.querySelector("#opt3").innerHTML = "";
  document.querySelector("#opt4").innerHTML = "";
  document.querySelector("#opt5").innerHTML = "";
}




function start(){
  
  
  
  
  
  
  
  
/////////////////the beginning//////////////////
  
    document.getElementById("storytext").innerHTML = "Around five hours from Tokyo in the western Nagano Prefecture lies a perfect forest, isolated and calm, it's a favourite among campers wanting to hole up in nature and experience the beauty of the outdoors. Your name is Maeko Caramel, and you are visiting a middle school friend that owns a cabin in these mountains. Your friends are often-times busy, but you're secretly scared of the woods and don't want to drive there alone. Think of all the spooky creatures!";
  
  //button options
  document.querySelector("#opt1").className = "askfriends";
  document.querySelector("#opt2").className = "beg";

  
  document.querySelector("#opt1").innerHTML = "Ask your friends to come with you!";
  document.querySelector("#opt2").innerHTML = "Beg your friends to come with you.";

  
  
/////////////////////BEGINNNN///////////////////////////
  
  
  
  
  
  
  
  
  
  
/////////// ASK YOUR FRIENDS ///////////////////
  
  
 document.querySelector(".askfriends").onclick = function askfriends(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro who is your best friend rolls her eyes at you and blows a stray strand of hair out of her face. 'You know, you're not a child anymo-' she tries to say and is quickly cut off by your other friend, Yuuji placing a palm over her mouth. 'Of course we'll come with you, Maeko!' He practically shouts, but somehow manages to still maintain the dopey tone that is the most prominent quirk of his voice.'"; 

  //button options
  document.querySelector("#opt1").className = "thank";
  document.querySelector("#opt2").className = "headpat";
  
  document.querySelector("#opt1").innerHTML = "Thank your friends!";
  document.querySelector("#opt2").innerHTML = "Give Taro headpats, acknowledging the wrong person";
   
   
   
   
   
    /////////// THANK YOUR FRIENDS ///////////////////

  
 document.querySelector(".thank").onclick = function thank(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You beam brightly at your friends for agreeing to go with you. 'Thank you!' you proclaim in delight, grabbing their hands to drag them off. 'We have to be there at five' you say, not realising this is the shortest of short notices!"; 

  //button options
  document.querySelector("#opt1").className = "snacks";
  document.querySelector("#opt2").className = "ready";
  
  document.querySelector("#opt1").innerHTML = "Get some snacks first";
  document.querySelector("#opt2").innerHTML = "Get ready immediately";

 } ////////END OF THANK
 
 
 

 ///START OF HEADPAT
 document.querySelector(".headpat").onclick = function headpat(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You tackle Taro with a big hug as she tries to push you away, ignoring her noise of irritation at her perfectly-ironed button up getting wrinkled. 'I knew you'd come with me, Taro!' you shout into her ears despite being right next to her."; 

  //button options
  document.querySelector("#opt1").className = "snacks";
  document.querySelector("#opt2").className = "ready";
  
  document.querySelector("#opt1").innerHTML = "Get some snacks first";
  document.querySelector("#opt2").innerHTML = "Get ready immediately";

 } ///END OF HEADPAT
 
  
///////////////////////END OF ASK STORYLINE///////////////////////////    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
   
   
 }
 
 ////////////// or you BEGGED them ///////////
 
  document.querySelector(".beg").onclick = function begfriends(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro who is your best friend rolls her eyes at your begging and blows a stray strand of hair out of her face. 'You know, you're not a child anymo-' she tries to say and is quickly cut off by your other friend, Yuuji placing a palm over her mouth. 'Of course we'll come with you, Maeko!' He practically shouts, but somehow manages to still maintain the dopey tone that is the most prominent quirk of his voice.' Taro rolls her eyes but doesn't say anything in retaliation. After all, she is your best friend."; 

  //button options
  document.querySelector("#opt1").className = "thank";
  document.querySelector("#opt2").className = "headpat";
  
  document.querySelector("#opt1").innerHTML = "Thank your friends!";
  document.querySelector("#opt2").innerHTML = "Give Taro headpats, acknowledging the wrong person";
    

    /////////// THANK YOUR FRIENDS ///////////////////

  
 document.querySelector(".thank").onclick = function thank(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You beam brightly at your friends for agreeing to go with you. 'Thank you!' you proclaim in delight, grabbing their hands to drag them off. 'We have to be there at five' you say, not realising this is the shortest of short notices!"; 

  //button options
  document.querySelector("#opt1").className = "snacks";
  document.querySelector("#opt2").className = "ready";
  
  document.querySelector("#opt1").innerHTML = "Get some snacks first";
  document.querySelector("#opt2").innerHTML = "Get ready immediately";

  
  
 }
////////////END OF BEG STORYLINE///////////////////////

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    
    
    
 }

  
//////////////////////////////////////////////////

  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}