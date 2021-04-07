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



//toggle start button
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
   
                     ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

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
   
                     ///START OF pickup2 WORKING ON THIS RN
 document.querySelector(".pickup2").onclick = function pickup2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You decide to go pick them up, so you drive on over to Taro's house first. Taro looks visibly annoyed, but knows that once you're here, you're going to bug her till she leaves, so she makes you wait a moment as she hastily throws the rest of her bag together and bedgrudgingly agrees to come with you. You're clueless to her annoyance. Yuuji, on the other hand, doesn't seem to mind you too much, and he's already got a backpack ready. All good now! You head into your car."; 

  //button options
  document.querySelector("#opt2").className = "cont1";
  
  document.querySelector("#opt2").innerHTML = "Begin your trip to your destination";
   
   ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

 } ///END OF pickup2
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";
   
   ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

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
   
           ///START OF snacks2
 document.querySelector(".snacks2").onclick = function snacks2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I think we have some extra time to get snacks' Yuuji chimes in. You agree. Snacks are important for an important trip! So searching for snacks, it shall be. You pick out a banana, some gummy worms, and a bottle of lemonade. Taro grabs a single apple, and Yuuji practically fills up his basket with junk food. Perfect. Your tummies will all be satisfied on the way there, no need to worry about stopping through a drive-through."; 

  //button options

  document.querySelector("#opt2").className = "ready";
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
   
   
///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function end(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1
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
   
                        ///START OF pickup2
 document.querySelector(".pickup2").onclick = function pickup2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You decide to go pick them up, so you drive on over to Taro's house first. Taro looks visibly annoyed, but knows that once you're here, you're going to bug her till she leaves, so she makes you wait a moment as she hastily throws the rest of her bag together and bedgrudgingly agrees to come with you. You're clueless to her annoyance. Yuuji, on the other hand, doesn't seem to mind you too much, and he's already got a backpack ready. All good now! You head into your car."; 

  //button options
  document.querySelector("#opt2").className = "cont1";
  
  document.querySelector("#opt2").innerHTML = "Begin your trip to your destination";
   
   ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

 } ///END OF pickup2
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

 }


 } ///END OF pickup

 } ///END OF ready
   
 } //end of snacks2
   
   
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
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

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
   
                        ///START OF pickup2
 document.querySelector(".pickup2").onclick = function pickup2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You decide to go pick them up, so you drive on over to Taro's house first. Taro looks visibly annoyed, but knows that once you're here, you're going to bug her till she leaves, so she makes you wait a moment as she hastily throws the rest of her bag together and bedgrudgingly agrees to come with you. You're clueless to her annoyance. Yuuji, on the other hand, doesn't seem to mind you too much, and he's already got a backpack ready. All good now! You head into your car."; 

  //button options
  document.querySelector("#opt2").className = "cont1";
  
  document.querySelector("#opt2").innerHTML = "Begin your trip to your destination";

 } ///END OF pickup2
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";
   
   ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

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
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

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
   
    ///START OF pickup2 WORKING ON THIS RN
 document.querySelector(".pickup2").onclick = function pickup2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You decide to go pick them up, so you drive on over to Taro's house first. Taro looks visibly annoyed, but knows that once you're here, you're going to bug her till she leaves, so she makes you wait a moment as she hastily throws the rest of her bag together and bedgrudgingly agrees to come with you. You're clueless to her annoyance. Yuuji, on the other hand, doesn't seem to mind you too much, and he's already got a backpack ready. All good now! You head into your car."; 

  //button options
  document.querySelector("#opt2").className = "cont1";
  
  document.querySelector("#opt2").innerHTML = "Begin your trip to your destination";
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

 } ///END OF pickup2
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";
   
   ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

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
   
   ///START OF snacks2
 document.querySelector(".snacks2").onclick = function snacks2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I think we have some extra time to get snacks' Yuuji chimes in. You agree. Snacks are important for an important trip! So searching for snacks, it shall be. You pick out a banana, some gummy worms, and a bottle of lemonade. Taro grabs a single apple, and Yuuji practically fills up his basket with junk food. Perfect. Your tummies will all be satisfied on the way there, no need to worry about stopping through a drive-through."; 

  //button options

  document.querySelector("#opt2").className = "ready";
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
   
   ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

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
   
                        ///START OF pickup2
 document.querySelector(".pickup2").onclick = function pickup2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You decide to go pick them up, so you drive on over to Taro's house first. Taro looks visibly annoyed, but knows that once you're here, you're going to bug her till she leaves, so she makes you wait a moment as she hastily throws the rest of her bag together and bedgrudgingly agrees to come with you. You're clueless to her annoyance. Yuuji, on the other hand, doesn't seem to mind you too much, and he's already got a backpack ready. All good now! You head into your car."; 

  //button options
  document.querySelector("#opt2").className = "cont1";
  
  document.querySelector("#opt2").innerHTML = "Begin your trip to your destination";

 } ///END OF pickup2
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";
   
   ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

 } ///END OF call


 } ///END OF pickup

 } ///END OF ready
   
 } //end of snacks2
   
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
   
   ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

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
   
    ///START OF pickup2 WORKING ON THIS RN
 document.querySelector(".pickup2").onclick = function pickup2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You decide to go pick them up, so you drive on over to Taro's house first. Taro looks visibly annoyed, but knows that once you're here, you're going to bug her till she leaves, so she makes you wait a moment as she hastily throws the rest of her bag together and bedgrudgingly agrees to come with you. You're clueless to her annoyance. Yuuji, on the other hand, doesn't seem to mind you too much, and he's already got a backpack ready. All good now! You head into your car."; 

  //button options
  document.querySelector("#opt2").className = "cont1";
  
  document.querySelector("#opt2").innerHTML = "Begin your trip to your destination";
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

 } ///END OF pickup2
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

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
   
   
                     ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1
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
   
    ///START OF pickup2 WORKING ON THIS RN
 document.querySelector(".pickup2").onclick = function pickup2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You decide to go pick them up, so you drive on over to Taro's house first. Taro looks visibly annoyed, but knows that once you're here, you're going to bug her till she leaves, so she makes you wait a moment as she hastily throws the rest of her bag together and bedgrudgingly agrees to come with you. You're clueless to her annoyance. Yuuji, on the other hand, doesn't seem to mind you too much, and he's already got a backpack ready. All good now! You head into your car."; 

  //button options
  document.querySelector("#opt2").className = "cont1";
  
  document.querySelector("#opt2").innerHTML = "Begin your trip to your destination";
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

 } ///END OF pickup2
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

 } ///END OF call


 } ///END OF pickup
 
               ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

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
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

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
   
    ///START OF pickup2 WORKING ON THIS RN
 document.querySelector(".pickup2").onclick = function pickup2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You decide to go pick them up, so you drive on over to Taro's house first. Taro looks visibly annoyed, but knows that once you're here, you're going to bug her till she leaves, so she makes you wait a moment as she hastily throws the rest of her bag together and bedgrudgingly agrees to come with you. You're clueless to her annoyance. Yuuji, on the other hand, doesn't seem to mind you too much, and he's already got a backpack ready. All good now! You head into your car."; 

  //button options
  document.querySelector("#opt2").className = "cont1";
  
  document.querySelector("#opt2").innerHTML = "Begin your trip to your destination";
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

 } ///END OF pickup2
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

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
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

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
   
    ///START OF pickup2 WORKING ON THIS RN
 document.querySelector(".pickup2").onclick = function pickup2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You decide to go pick them up, so you drive on over to Taro's house first. Taro looks visibly annoyed, but knows that once you're here, you're going to bug her till she leaves, so she makes you wait a moment as she hastily throws the rest of her bag together and bedgrudgingly agrees to come with you. You're clueless to her annoyance. Yuuji, on the other hand, doesn't seem to mind you too much, and he's already got a backpack ready. All good now! You head into your car."; 

  //button options
  document.querySelector("#opt2").className = "cont1";
  
  document.querySelector("#opt2").innerHTML = "Begin your trip to your destination";
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

 } ///END OF pickup2
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

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
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

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
   
    ///START OF pickup2 WORKING ON THIS RN
 document.querySelector(".pickup2").onclick = function pickup2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "You decide to go pick them up, so you drive on over to Taro's house first. Taro looks visibly annoyed, but knows that once you're here, you're going to bug her till she leaves, so she makes you wait a moment as she hastily throws the rest of her bag together and bedgrudgingly agrees to come with you. You're clueless to her annoyance. Yuuji, on the other hand, doesn't seem to mind you too much, and he's already got a backpack ready. All good now! You head into your car."; 

  //button options
  document.querySelector("#opt2").className = "cont1";
  
  document.querySelector("#opt2").innerHTML = "Begin your trip to your destination";
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

 } ///END OF pickup2
   
                  ///START OF call
 document.querySelector(".call").onclick = function call(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'I guess it's best to call them, so I don't force them out of their houses too early and leave them without their undies, or something like that' you decide. Maybe we will get there a little late, but we were probably going to be late anyway. In the end, all is well. You pick up your phone and ring both Taro and Yuuji, one after the other, asking them to come over as soon as they are ready. The road trip to the (spooky) cabin will soon begin."; 

  //button options
  document.querySelector("#opt1").className = "cont1";
  
  document.querySelector("#opt1").innerHTML = "Continue...";
   
                        ///START OF cont1
 document.querySelector(".cont1").onclick = function cont1(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "About an hour later, Taro and Yuuji show up at your place in a bright yellow taxicab. Taro has a bright pink luggage bag, neatly packed, and Yuuji has one that pretty much matches yours. Basically, it's a mess! You're glad somebody understands you- in the sense of luggage anyways. Yuuji, however, is a lot more... Eccentric than you, so that is the only sense, you should say."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  document.querySelector("#opt2").className = "invitein";
  
  document.querySelector("#opt1").innerHTML = "Time to go";
  document.querySelector("#opt2").innerHTML = "Invite them in for a cup of tea";
   
                      ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
   
///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt2").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3
 
 } ///END OF cont2
 
    ///START OF invitein
 document.querySelector(".invitein").onclick = function invitein(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "'Would you like to come in for a cup of tea first?' you ask, tilting your head to the side and smiling. 'Not really,' Taro says. Oh well! You tried. All the better for heading to your destination, of course. Time is still ticking."; 

  //button options
  document.querySelector("#opt1").className = "cont2";
  
  document.querySelector("#opt1").innerHTML = "Ask if they're ready";
   
                         ///START OF cont2
 document.querySelector(".cont2").onclick = function cont2(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "It's finally time to leave. 'Are you ready?' you ask excitedly. Taro gives a nonchalant shrug, and Yuuji nods at you. 'Good! Great!' you chant, and grab both of their bags of luggage like it's nothing, walking out of your door and past them towards your car that is neatly parked on the street. You place them down for a second and fish your keys out of your pocket. After you use them to open the trunk up, you pick both back up and throw them in. "; 

  //button options
  document.querySelector("#opt1").className = "cont3";
  
  document.querySelector("#opt1").innerHTML = "Into the car and away";
   
                         ///START OF cont3
 document.querySelector(".cont3").onclick = function cont3(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Your road trip has finally begun. You've been excited for this the whole day. Well.... With the exception of being scared at first, but your generous friend, Taro, gracefully agreed to go with you. How kind of her! <br> Now you are ready to make your way there! <br> Since you live in Kofu, the trip takes around two or three hours in total. Honestly, around some point during that you might've lost track of when you left. Not that you were really paying attention in the first place. <br> Yuuji's been napping on and off, and talking Taro's ear off in-between, and Taro's already eaten the apple she brought with her. The core now sits in a bag. <br> Taro is pretty quiet most of the time, as that's her nature, unless she's angry at something. <br> In the end, you eventually make it to your destination, but you're very late. The sun's already set, and the sky is dark! <br> As you are getting the luggage out of your car, you notice something peculiar happen in the sky. A shooting star! It streaks across the blue of the sky, and starts dipping down, burning up quick and landing somewhere just ahead of you in the forest. <br> Now you're extra interested. If you go look, you could have a new souvenir!"; 

  //button options
  document.querySelector("#opt1").className = "shootingstar";
  document.querySelector("#opt2").className = "ignore";
  
  document.querySelector("#opt1").innerHTML = "Go Inspect it!";
  document.querySelector("#opt2").innerHTML = "Ignore it. You have to get to the cabin! It's late!";
   
          ///START OF shootingstar
 document.querySelector(".shootingstar").onclick = function shootingstar(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Of course, inspecting it would be the course of action. You drop the suitcase you're holding next to the car, and saying nothing, start running towards the forest where it landed. <br> 'Maeko!' Taro shouts, sounding exasperated. 'Where are you goin?' She too, drops her suitcase. She's probably thinking she has to look after you. She's probably right. You get lost too easily to be alone, and you'd ruin their vacation. She's smart. You can hear her light footprints crunching through the greenery behind you. Yuuji seems to have woken up from his fiftieth nap of the day and taken off after her. A train of running. <br> By luck, despite Taro complaining behind you and saying that you wouldn't be able to find where the shooting star landed, you finally come across the crater it made. Cautiously, you peek inside. <br> SURPRISE! A small, pink, fluffy creature leaps out of the crater towards you and tackles you to the ground. You're confused, but after a long discussion with your friends, you decide the creature is now yours. Sometimes being late to a place brings great surprises! Now you have a new friend."; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";
   
               ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end

 } ///END OF star
 
           ///START OF ignore
 document.querySelector(".ignore").onclick = function ignore(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Taro convinces you to ignore it. It's the most logical path of action. It's probably burnt up already at this point, and in the end, it's just a rock. You don't even know where it landed. She's probably right, so you drop the subject. Your day is almost over, so you pick up your luggage and start heading down the trail that leads to the cabin. I guess you'll never know the secrets that were in lie behind the meteor.... Oh well! You've almost forgotten about it, and you're sleepy. Maybe you could have gone towards it if you were already at the cabin, instead of being late!"; 

  //button options
  document.querySelector("#opt1").className = "theend";
  
  document.querySelector("#opt1").innerHTML = "The end!";

 } ///END OF ignore

            ///START OF end
 document.querySelector(".theend").onclick = function theend(){
  
      buttonempty();
     document.getElementById("storytext").innerHTML = "Thank you for playing! Click the restart button to refresh the page, or the start button to go back to the first option again."; 

 } ///END OF end
 
 } ///END OF cont3

 } ///END OF cont2


 } ///END OF  invitein
 

 } ///END OF cont1

 } ///END OF call


 } ///END OF pickup

 } ///END OF ready

 } ///END OF snacks

 } ///END OF HEADPAT
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    
    
    
 }

  
//////////////////////////////////////////////////

  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}