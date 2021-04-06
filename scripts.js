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
   
              ///START OF ready
 document.querySelector(".ready").onclick = function ready(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "After dropping off Taro and Yuuji, you start getting ready to leave. You put your favourite pin in your hair and pick out your best comfy clothes to put into your suitcase. Leggings? Sweatpants? What will the weather be like? You're not sure, so you throw them all in there. Better safe than sorry, you think."; 

  //button options
  document.querySelector("#opt1").className = "pickup";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Pick up Taro and Yuuji for your trip.";
  document.querySelector("#opt2").innerHTML = "Call Taro and Yuuji to bring their baggage and come on over. It's time to leave!";
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call

   
                 ///START OF pickup
 document.querySelector(".pickup").onclick = function pickup(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'They should be ready by now...' you proclaim to yourself, satisfied with your set of unfolded luggage, complete with the zipper not fully zipped and clothes draping out of the sides. 'Good enough' you think. It's only been thirty minutes, but of course, everyone packs their luggage like this! Taro and Yuuji should definitely be ready at this point."; 

  //button options
  document.querySelector("#opt1").className = "pickup2";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Leave to go pick them up";
  document.querySelector("#opt2").innerHTML = "On second thought... Maybe you should call them instead?";
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call


 } ///END OF pickup

 } ///END OF ready
   
   
        ///START OF snack
 document.querySelector(".snacks").onclick = function snacks(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You decide to stop at a convienience store to get some snacks before you take your friends to their houses so you can all get ready, but when you look at your watch, you realise you're quickly running out of time before you have to leave. Tick tock! Time is ticking by. Do you want to keep searching for snacks, or go home and get ready?"; 

  //button options
  document.querySelector("#opt1").className = "snacks2";
  document.querySelector("#opt2").className = "ready";
  
  document.querySelector("#opt1").innerHTML = "Keep searching for snacks";
  document.querySelector("#opt2").innerHTML = "Go home and get ready";
   
           ///START OF ready
 document.querySelector(".ready").onclick = function ready(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "After dropping off Taro and Yuuji, you start getting ready to leave. You put your favourite pin in your hair and pick out your best comfy clothes to put into your suitcase. Leggings? Sweatpants? What will the weather be like? You're not sure, so you throw them all in there. Better safe than sorry, you think."; 

  //button options
  document.querySelector("#opt1").className = "pickup";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Pick up Taro and Yuuji for your trip.";
  document.querySelector("#opt2").innerHTML = "Call Taro and Yuuji to bring their baggage and come on over. It's time to leave!";
   
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call

                 ///START OF pickup
 document.querySelector(".pickup").onclick = function pickup(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'They should be ready by now...' you proclaim to yourself, satisfied with your set of unfolded luggage, complete with the zipper not fully zipped and clothes draping out of the sides. 'Good enough' you think. It's only been thirty minutes, but of course, everyone packs their luggage like this! Taro and Yuuji should definitely be ready at this point."; 

  //button options
  document.querySelector("#opt1").className = "pickup2";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Leave to go pick them up";
  document.querySelector("#opt2").innerHTML = "On second thought... Maybe you should call them instead?";
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call


 } ///END OF pickup

 } ///END OF ready
   

 } ///END OF snacks
   

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
   
   
              ///START OF ready
 document.querySelector(".ready").onclick = function ready(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "After dropping off Taro and Yuuji, you start getting ready to leave. You put your favourite pin in your hair and pick out your best comfy clothes to put into your suitcase. Leggings? Sweatpants? What will the weather be like? You're not sure, so you throw them all in there. Better safe than sorry, you think."; 

  //button options
  document.querySelector("#opt1").className = "pickup";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Pick up Taro and Yuuji for your trip.";
  document.querySelector("#opt2").innerHTML = "Call Taro and Yuuji to bring their baggage and come on over. It's time to leave!";
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call

   
   
   
              ///START OF pickup
 document.querySelector(".pickup").onclick = function pickup(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'They should be ready by now...' you proclaim to yourself, satisfied with your set of unfolded luggage, complete with the zipper not fully zipped and clothes draping out of the sides. 'Good enough' you think. It's only been thirty minutes, but of course, everyone packs their luggage like this! Taro and Yuuji should definitely be ready at this point."; 

  //button options
  document.querySelector("#opt1").className = "pickup2";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Leave to go pick them up";
  document.querySelector("#opt2").innerHTML = "On second thought... Maybe you should call them instead?";
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call


 } ///END OF pickup

 } ///END OF ready
   
   
        ///START OF snack
 document.querySelector(".snacks").onclick = function snacks(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You decide to stop at a convienience store to get some snacks before you take your friends to their houses so you can all get ready, but when you look at your watch, you realise you're quickly running out of time before you have to leave. Tick tock! Time is ticking by. Do you want to keep searching for snacks, or go home and get ready?"; 

  //button options
  document.querySelector("#opt1").className = "snacks2";
  document.querySelector("#opt2").className = "ready";
  
  document.querySelector("#opt1").innerHTML = "Keep searching for snacks";
  document.querySelector("#opt2").innerHTML = "Go home and get ready";
   
              ///START OF ready
 document.querySelector(".ready").onclick = function ready(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "After dropping off Taro and Yuuji, you start getting ready to leave. You put your favourite pin in your hair and pick out your best comfy clothes to put into your suitcase. Leggings? Sweatpants? What will the weather be like? You're not sure, so you throw them all in there. Better safe than sorry, you think."; 

  //button options
  document.querySelector("#opt1").className = "pickup";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Pick up Taro and Yuuji for your trip.";
  document.querySelector("#opt2").innerHTML = "Call Taro and Yuuji to bring their baggage and come on over. It's time to leave!";
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call

   
                 ///START OF pickup
 document.querySelector(".pickup").onclick = function pickup(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'They should be ready by now...' you proclaim to yourself, satisfied with your set of unfolded luggage, complete with the zipper not fully zipped and clothes draping out of the sides. 'Good enough' you think. It's only been thirty minutes, but of course, everyone packs their luggage like this! Taro and Yuuji should definitely be ready at this point."; 

  //button options
  document.querySelector("#opt1").className = "pickup2";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Leave to go pick them up";
  document.querySelector("#opt2").innerHTML = "On second thought... Maybe you should call them instead?";
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call


 } ///END OF pickup

 } ///END OF ready

 } ///END OF snacks
   

 } ///END OF HEADPAT
 
  
///////////////////////END OF ASK STORYLINE///////////////////////////    

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //DO THIS LATER FOCUS ON FIRST ONE FIRST
   
   
 }
 
 ////////////// or you BEGGED them STORYLINE ///////////
 
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
   
              ///START OF ready
 document.querySelector(".ready").onclick = function ready(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "After dropping off Taro and Yuuji, you start getting ready to leave. You put your favourite pin in your hair and pick out your best comfy clothes to put into your suitcase. Leggings? Sweatpants? What will the weather be like? You're not sure, so you throw them all in there. Better safe than sorry, you think."; 

  //button options
  document.querySelector("#opt1").className = "pickup";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Pick up Taro and Yuuji for your trip.";
  document.querySelector("#opt2").innerHTML = "Call Taro and Yuuji to bring their baggage and come on over. It's time to leave!";
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call

   
                 ///START OF pickup
 document.querySelector(".pickup").onclick = function pickup(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'They should be ready by now...' you proclaim to yourself, satisfied with your set of unfolded luggage, complete with the zipper not fully zipped and clothes draping out of the sides. 'Good enough' you think. It's only been thirty minutes, but of course, everyone packs their luggage like this! Taro and Yuuji should definitely be ready at this point."; 

  //button options
  document.querySelector("#opt1").className = "pickup2";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Leave to go pick them up";
  document.querySelector("#opt2").innerHTML = "On second thought... Maybe you should call them instead?";
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call


 } ///END OF pickup
 
               ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call

 } ///END OF ready

          ///START OF snack
 document.querySelector(".snacks").onclick = function snacks(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You decide to stop at a convienience store to get some snacks before you take your friends to their houses so you can all get ready, but when you look at your watch, you realise you're quickly running out of time before you have to leave. Tick tock! Time is ticking by. Do you want to keep searching for snacks, or go home and get ready?"; 

  //button options
  document.querySelector("#opt1").className = "snacks2";
  document.querySelector("#opt2").className = "ready";
  
  document.querySelector("#opt1").innerHTML = "Keep searching for snacks";
  document.querySelector("#opt2").innerHTML = "Go home and get ready";
   
              ///START OF ready
 document.querySelector(".ready").onclick = function ready(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "After dropping off Taro and Yuuji, you start getting ready to leave. You put your favourite pin in your hair and pick out your best comfy clothes to put into your suitcase. Leggings? Sweatpants? What will the weather be like? You're not sure, so you throw them all in there. Better safe than sorry, you think."; 

  //button options
  document.querySelector("#opt1").className = "pickup";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Pick up Taro and Yuuji for your trip.";
  document.querySelector("#opt2").innerHTML = "Call Taro and Yuuji to bring their baggage and come on over. It's time to leave!";
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call

   
                 ///START OF pickup
 document.querySelector(".pickup").onclick = function pickup(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'They should be ready by now...' you proclaim to yourself, satisfied with your set of unfolded luggage, complete with the zipper not fully zipped and clothes draping out of the sides. 'Good enough' you think. It's only been thirty minutes, but of course, everyone packs their luggage like this! Taro and Yuuji should definitely be ready at this point."; 

  //button options
  document.querySelector("#opt1").className = "pickup2";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Leave to go pick them up";
  document.querySelector("#opt2").innerHTML = "On second thought... Maybe you should call them instead?";
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call


 } ///END OF pickup

 } ///END OF ready

 } ///END OF snacks
  
 }
////////////END OF BEG STORYLINE///////////////////////

 
  ///START OF HEADPAT
 document.querySelector(".headpat").onclick = function headpat(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You tackle Taro with a big hug as she tries to push you away, ignoring her noise of irritation at her perfectly-ironed button up getting wrinkled. 'I knew you'd come with me, Taro!' you shout into her ears despite being right next to her."; 

  //button options
  document.querySelector("#opt1").className = "snacks";
  document.querySelector("#opt2").className = "ready";
  
  document.querySelector("#opt1").innerHTML = "Get some snacks first";
  document.querySelector("#opt2").innerHTML = "Get ready immediately";
   
              ///START OF ready
 document.querySelector(".ready").onclick = function ready(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "After dropping off Taro and Yuuji, you start getting ready to leave. You put your favourite pin in your hair and pick out your best comfy clothes to put into your suitcase. Leggings? Sweatpants? What will the weather be like? You're not sure, so you throw them all in there. Better safe than sorry, you think."; 

  //button options
  document.querySelector("#opt1").className = "pickup";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Pick up Taro and Yuuji for your trip.";
  document.querySelector("#opt2").innerHTML = "Call Taro and Yuuji to bring their baggage and come on over. It's time to leave!";
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call

   
                 ///START OF pickup
 document.querySelector(".pickup").onclick = function pickup(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'They should be ready by now...' you proclaim to yourself, satisfied with your set of unfolded luggage, complete with the zipper not fully zipped and clothes draping out of the sides. 'Good enough' you think. It's only been thirty minutes, but of course, everyone packs their luggage like this! Taro and Yuuji should definitely be ready at this point."; 

  //button options
  document.querySelector("#opt1").className = "pickup2";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Leave to go pick them up";
  document.querySelector("#opt2").innerHTML = "On second thought... Maybe you should call them instead?";
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call


 } ///END OF pickup

 } ///END OF ready
   
           ///START OF snack
 document.querySelector(".snacks").onclick = function snacks(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You decide to stop at a convienience store to get some snacks before you take your friends to their houses so you can all get ready, but when you look at your watch, you realise you're quickly running out of time before you have to leave. Tick tock! Time is ticking by. Do you want to keep searching for snacks, or go home and get ready?"; 

  //button options
  document.querySelector("#opt1").className = "snacks2";
  document.querySelector("#opt2").className = "ready";
  
  document.querySelector("#opt1").innerHTML = "Keep searching for snacks";
  document.querySelector("#opt2").innerHTML = "Go home and get ready";
   
              ///START OF ready
 document.querySelector(".ready").onclick = function ready(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "After dropping off Taro and Yuuji, you start getting ready to leave. You put your favourite pin in your hair and pick out your best comfy clothes to put into your suitcase. Leggings? Sweatpants? What will the weather be like? You're not sure, so you throw them all in there. Better safe than sorry, you think."; 

  //button options
  document.querySelector("#opt1").className = "pickup";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Pick up Taro and Yuuji for your trip.";
  document.querySelector("#opt2").innerHTML = "Call Taro and Yuuji to bring their baggage and come on over. It's time to leave!";
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call

   
                 ///START OF pickup
 document.querySelector(".pickup").onclick = function pickup(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'They should be ready by now...' you proclaim to yourself, satisfied with your set of unfolded luggage, complete with the zipper not fully zipped and clothes draping out of the sides. 'Good enough' you think. It's only been thirty minutes, but of course, everyone packs their luggage like this! Taro and Yuuji should definitely be ready at this point."; 

  //button options
  document.querySelector("#opt1").className = "pickup2";
  document.querySelector("#opt2").className = "call";
  
  document.querySelector("#opt1").innerHTML = "Leave to go pick them up";
  document.querySelector("#opt2").innerHTML = "On second thought... Maybe you should call them instead?";
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";

 } ///END OF call


 } ///END OF pickup

 } ///END OF ready

 } ///END OF snacks

 } ///END OF HEADPAT
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    
    
    
 }

  
//////////////////////////////////////////////////

  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}