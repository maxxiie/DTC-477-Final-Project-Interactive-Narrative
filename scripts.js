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


var varid = "";

//letucce start
function start(startpoint){
  var starter = nar.point1.text;
  document.getElementById("storytext").innerHTML = starter;
  
  
  return varid;
}