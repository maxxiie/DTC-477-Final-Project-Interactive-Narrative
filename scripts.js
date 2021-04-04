var nar = {
  
  //first point in story
  point1: {
      text: "Around five hours from Tokyo in the western Nagano Prefecture lies a perfect forest, isolated and calm, it's a favourite among campers wanting to hole up in nature and experience the beauty of the outdoors. Your name is Maeko Caramel, and you are visiting a middle school friend that owns a cabin in these mountains. Your friends are often-times busy, but you're secretly scared of the woods and don't want to drive there alone. Think of all the spooky creatures!",
    
    //option1
    buttons: [{
    option: "Ask your friends to come with you!",
    optionid: "askfriends"
  },
    //option2
    {
    option: "Go alone.... :(",
    optionid: "alone"
  },
     //option3
    {
    option: "Fall onto the floor and beg your friends to come with you, sobbing dramatically",
    optionid: "askfriends"
  }]
  },
  
  //You took your friends
    askfriends: {
      text: "Taro who is your best friend rolls her eyes at you and blows a stray strand of hair out of her face. 'You know, you're not a child anymo-' she tries to say and is quickly cut off by your other friend, Yuuji placing a palm over her mouth. <br> 'Of course we'll come with you, Maeko!' He practically shouts, but somehow manages to still maintain the dopey tone that is the most prominent quirk of his voice.'",
      
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
  
  }
  
}


//clear an element
  function clearthis(elementID)
{
  var x = "'" + elementID + "'";
  document.getElementById("buttons").innerHTML = "";
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




//letucce start the start function!
function start(startpoint){
  var starter = nar.point1.text;
  document.getElementById("storytext").innerHTML = starter;
  
  
  //how many buttons shall we make!
  var buttonlength = ObjectLength(nar.point1.buttons);
  clearthis(buttons); //also clear thems buttonsy buttons
  
  //creating the buttons
  for (x = 0; x < buttonlength; x++){
    currentid= "opt"+(x+1);
      document.getElementById("buttons").innerHTML += "<button id= " + currentid +" onclick = optionclick(" + currentid + ")" + ">" + "Option: " + nar.point1.buttons[x].option + "</button>"  
} //end of button creation
 
console.log("Starting Button HTML ----> " + document.getElementById("buttons").innerHTML);
  
  return varid;
}
 //end of starter function


//clicking on new buttons
function optionclick(optid){
  document.getElementById("buttons").innerHTML = "OPTIONCLIICKK";
}