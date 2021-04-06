var nar = {
  
  //first point in story
  point1: {
      text: "Around five hours from Tokyo in the western Nagano Prefecture lies a perfect forest, isolated and calm, it's a favourite among campers wanting to hole up in nature and experience the beauty of the outdoors. Your name is Maeko Caramel, and you are visiting a middle school friend that owns a cabin in these mountains. Your friends are often-times busy, but you're secretly scared of the woods and don't want to drive there alone. Think of all the spooky creatures!",
    
    //option1
    buttons: [{
    option: "Ask your friends to come with you",
    optionid: "askfriends"
  },
    //option2
    {
    option: "Proclaim in fear that you will go alone",
    optionid: "alone"
  },
     //option3
    {
    option: "Fall onto the floor and beg your friends to come with you",
    optionid: "askfriends"
  }]
  },
  
  //You took your friends
    askfriends: {
      text: "Taro who is your best friend rolls her eyes at you and blows a stray strand of hair out of her face. 'You know, you're not a child anymo-' she tries to say and is quickly cut off by your other friend, Yuuji placing a palm over her mouth. 'Of course we'll come with you, Maeko!' He practically shouts, but somehow manages to still maintain the dopey tone that is the most prominent quirk of his voice.'",
      
    //option1
    buttons: [{
    option: "Thank your friends",
    optionid: "thankfriends"
  },
    //option2
    {
    option: "Give Taro a big hug, thanking the wrong person",
    optionid: "tarohug"
  }]
  
  },
  
  
    //You went alone
    alone: {
      text: "You shiver at the thought of going alone to the woods, but that is what you've decided to do, even though it's Taro's friend you're visiting in the first place. Oh well. It'll do. You're too shy to ask your best friends Taro and Yuuji to come with you- even though you're sure they'd agree. You don't want to bother them, after all. They're busy busy bees!",
      
    //option1
    buttons: [{
    option: "Go on your merry way",
    optionid: "leave"
  },
    //option2
    {
    option: "Ask your friends anyways",
    optionid: "askfriends"
  }]
  
  },
  
  //You leave
    leave: {
      text: "After everyone is ready and packed, they gather up at your place and you start your car (even though Taro is a better driver than you) and get ready to leave. Should you go get snacks first?",
      
    //option1
    buttons: [{
    option: "Yes",
    optionid: "snacks"
  },
    //option2
    {
    option: "No",
    optionid: "nosnacks"
  }]
  
  },
  
  
    //thank friends
    thankfriends: {
      text: "You beam brightly at your friends for agreeing to go with you. 'Thank you!' You proclaim.",
      
    //option1
    buttons: [{
    option: "Time to get ready and leave! Time is ticking...",
    optionid: "leave"
  },
    //option2
    {
    option: "Give your friend Taro a hug!",
    optionid: "tarohug"
  }]
  
  },

    //hug
    tarohug: {
      text: "You tackle Taro with a big hug as she tries to push you away, ignoring her noise of irritation at her perfectly-ironed button up getting wrinkled.",
      
    //option1
    buttons: [{
    option: "Time to get ready and leave! Time is ticking...",
    optionid: "leave"
  },
    //option2
    {
    option: "We have time for a snack first, don't we?",
    optionid: "snacks"
  }]
  
  }  
  
  
  
  
} //end of optionstuff


//clear an element
  function clearthis(elementID)
{
  var x = "'" + elementID + "'";
  document.getElementById("buttons").innerHTML = "";
}

function clearclass(){
    document.getElementById("buttons").className = "nothing";
}

//function from https://stackoverflow.com/questions/16976904/javascript-counting-number-of-objects-in-object/16976927 <-- gets number of objects an an object
function ObjectLength( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
}

//where are we at
var varid = "";
var classn = "";

function countthru(number){
  
}

function buttonempty(){
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

//letucce start the start function!
function start(startpoint){
  var starter = nar.point1.text;
  document.getElementById("storytext").innerHTML = starter;
  
  //how many buttons shall we make!
  var buttonlength = ObjectLength(nar.point1.buttons);

  //creating the buttons
  for (x = 0; x < buttonlength; x++){
    var currentid= String('opt'+(x+1));
    var currentclass = String(nar.point1.buttons[x].optionid);
    var currentclassq = String("." + nar.point1.buttons[x].optionid);
    
    //change text of button
    document.getElementById(currentid).innerHTML = nar.point1.buttons[x].option;
    
    //change class of button
        document.getElementById(currentid).className = currentclass;

} //end of button creation
  

  
////////////////////////////////////////////
  
  
//ASK FRIENDS OPTION
     document.querySelector(".askfriends").onclick = function(){
      document.getElementById("storytext").innerHTML = nar.askfriends.text;
       
       //empty buttons
       buttonempty();
       
      //new buttons
    var buttonlength = ObjectLength(nar.askfriends.buttons);
       
    
    for (x = 0; x < buttonlength; x++){
      var currentid= String('opt'+(x+1));
      var currentclass = String(nar.askfriends.buttons[x].optionid);
      document.getElementById(currentid).className = nar.askfriends.buttons[x].optionid;
      document.getElementById(currentid).innerHTML = nar.askfriends.buttons[x].option;
    }     
  } 
     
     
////////////////////////////////////////////////
  
     
     
     
     
     
////////////////////////////////////////////
  
  
//THANK FRIENDS OPTION
     document.querySelector(".alone").onclick = function(){
      document.getElementById("storytext").innerHTML = "thank friends option";
       
       //empty buttons
       buttonempty();
       
      //new buttons
    var buttonlength = ObjectLength(nar.thankfriends.buttons);
       
    
    for (x = 0; x < buttonlength; x++){
      var currentid= String('opt'+(x+1));
      var currentclass = String(nar.thankfriends.buttons[x].optionid);
      document.getElementById(currentid).className = nar.thankfriends.buttons[x].optionid;
      document.getElementById(currentid).innerHTML = nar.thankfriends.buttons[x].option;
    }     
  } 
     
     
////////////////////////////////////////////////
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
console.log("Starting Button HTML ----> " + document.getElementById("buttons").innerHTML);
//end of starter function
} //end of starter function


