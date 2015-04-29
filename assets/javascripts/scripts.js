$(document).ready(function(){

	$("li.navitem1").hover(
		function() {
			$(this).children().last().slideDown();
		},
		function() {
			$(this).children().last().slideUp();
		}
	)

	// insert cool animation for fadeout of modalbox7

	$("#modal-overlay").click(function() {
		$("#modal-overlay").fadeOut();
		$("#modal-box").hide();
		$("#modal-box2").hide();
		$("#modal-box3").hide();
		$("#modal-box4").fadeOut();
		$("#modal-box5").fadeOut();
		$("#modal-box6").hide();
		$("#modal-box7").hide();
		$(".arrow").hide();
		$(".click").hide();
	})

// object is the whole thing, array item is "sushi" array in general = [...]

	var pageContent = {rachel: ["Real Mexican", "San Jose del Cabo, Mexico", "$$$", "I loved this goddam food.", "<img class = allimage src='assets/image/rachel.jpg'>"],
                  lukas: ["Fried-Chicken Sandwich", "Bakesale Betties, in Denmark", "$", "Look at the photo. No further comments.", "<img class = allimage src='assets/image/sandwich.jpg'>"],
                  lori: ["Fusion", "Redfish Bluefish, at 1006 Wharf Street, Victoria, British Columbia", "$$", "Serendipity comes into play to as I was running errands in Victoria when I was beset with lunchtime hunger pangs.  I happened to be downtown, and happened to be in walking distance of one of my favorite waterside haunts:  Red Fish Blue Fish.  As it was only noon, I thought to myself that the ever present wait line would be a short one.  Plus, it's not tourist season, plus it's a weekday…when I arrived, I counted 50 people in line.  I joined them.  The thing about Red Fish Blue Fish is that even though I waited in line for as many minutes as there were people in the queue, the setting makes it a painless wait.  Today the weather was perfect.  Crisp delicious blue sky, sparking water, views looking toward the Gorge, and the gentle traffic of harbor ferries making way for the float planes.  There are also some docks nearby allowing one to gawk at the ever changing assortment of vessels and yachts.  Okay, now as you wait, other customers are passing by with their orders and I begin to get hungrier and hungrier.  There is a sandwich board menu sign about halfway to the order window which those of us in line get to ponder; we can almost taste the food. At last it was my turn:  One salmon tacone and one bowl of chowder.   I took a seat on one of the little squat turquoise seats and faced the water.  The chowder was the perfect  temperature to warm me up as a crisp wind picked up. The tacone was superb.  Each swallow and bite were delectable and I sat there thinking…this is the best meal I've ever had!.", "<img class = allimage src='assets/image/lori.jpg'>"],
                  claire: ["Italian", "Il Rifugio, in Budoia, Italy", "$$", "It was May of 2008 and we had just arrived in Italy for our first time.  We were traveling with a group led my a good friend of ours, an Italian who had relocated to Southern California several years before.  After settling into our hotel we set out for dinner.  Setting out was a bus ride into the country which was over an hour.  When we finally arrived, it was past dark, and many of our jet-lagged friends had nodded off. Il Rifugio was not much to see.  Plastic tables and chairs outside on the patio and a rustic exterior which looked more like a family home.  I learned later after many trips to Italy this was a give away to what waited inside.  After we were seated the first course of braised ham marinated in chestnut honey was served.  It was the second course that woke me up.  Sformatino di fungi e salvia con fondue di Montasio.  This timbale was similar to a creamy cheese mushroom mousse and like nothing I had ever tasted before.  It literally woke me up to Italian food and to the concept of farm (or garden) to table cooking.  It was a love that has lasted.", "<img class = allimage src='assets/image/italy.jpg'>"],
                  michael: ["Steak", "Craft Steak, at MGM Grand, 3799 Las Vegas Blvd. S., Las Vegas, NV 89109", "$$$$", "My wife and I were at the Consumer Electronics Show in Las Vegas about 15 years ago and had a room there (as a vendor) with a speaker manufacturer. One evening during the show we and some business associates went out to dinner at Craft Steak to celebrate. There were about eight of us in all, all people in the audio industry. One item on the menu was the chef's choice tasting selection, a variety of the best meats that the table shared. It was rather pricey, but we decided to go for it. Everything was delicious. Each course just tasted soooo good, and we have had dinners at some of the top restaurants in Europe, Asia, the U.S. and elsewhere. The side dishes, cauliflower, green beans, potatoes (boil 'em, mash 'em, stick 'em in a stew), and all the rest, were unbelievably delicious as well. I think the cauliflower had a whole stick of butter in it. Then to top it off were were brought a selection of desserts, including a pear sorbet that I will never forget. This was a tasting dinner, so no one selection was huge. I mentioned to the waiter how good the pear sorbet was, and he brought me a huge serving of it. Way too much to eat. But I did. The night was especially great because everyone was happy, having a great time, laughing, talking, and enjoying each other's company. It was one of the best meals of my life.", "<img class = allimage src='assets/image/steak.jpg'>"],
                  bob: ["the Sea Worm", "Aomori, Japan", "$", "Yes, I ate a sea worm. Every piece pulled out of the shell was like a completely new discovery.", "<img class = allimage src='assets/image/worms.png'>"],
                  bill: ["Chef's selection", "Joshu Ya Brasseri, in Berkeley, California", "$$", "Yum Yum.", "<img class = allimage src='assets/image/sushi.jpg'>"],
                  art: ["Kung Pao Chicken", "Back entrance of the Chinese Communist High Ranking Official's restaurant, located in Beijing", "$", "Most amazing arraay of spices!", "<img class = allimage src='assets/image/kungpao.jpg'>"],
                  };

	$(".pin").click(function() {
		var name = $(this).attr("id")

		$(".Modal-Content5 .foodname").text(pageContent[name][0])
		$(".Modal-Content5 .location").text(pageContent[name][1])
		$(".Modal-Content5 .price").text(pageContent[name][2])
		$(".Modal-Content5 .story").text(pageContent[name][3])
		$(".Modal-Content5 .images").html(pageContent[name][4])
		$("#modal-box5").fadeIn();
		$("#modal-overlay").fadeIn();

	})

// I need to make it so that when you click on the scroll contents, the relevant pins stay, and the irrelevant pins disappear.!!


	$("input[type='checkbox']").change(function() {

		var name = $(this).attr("id");

		if (this.checked){
			$(".pin").hide();
			var className = "." + name;
			$(className).show();
		} else {
			$(".pin").show();
		}


// create a variable called name that is the id of the thing you clicked on. then we hide all the pins with class of pin. then we set variable class name which is the . (class) and the string that we got from name (which is the ID). 

	})


	var pinX = 0;
	var pinY = 0;

	var divPos = {};
	var offset = $(".img1").offset();
	$(".img1").click(function(e){

//fix the glitch here//

// var topPosition = e.pageY - imgPos.top - 86
// var leftposition = e.pageX - imgPos.left - 39
// 	pinX = leftposition - 10;
// 	pinY = topposition - 20;

	divPos = {
    left: e.pageX - offset.left,
    top: e.pageY - offset.top
    };

	pinX = divPos["left"] - 10;
	pinY = divPos["top"] - 20;


	    var imgPos = $(".img1").offset();
	    $("#post").css("top", e.pageY - imgPos.top - 86)
	    $("#post").css("left", e.pageX - imgPos.left - 38) 
	    $("#post").show();
	    $()
	});

	// 		var topPosition = divPos["top"] - 86;
	//     var leftPosition = divPos["left"] - 39;

	//     $("#post").css("top", topPosition)
	//     $("#post").css("left", leftPosition) 
	//     $("#post").show();
	//     $()
	// });

/*
		console.log(e)
	    divPos = {
	        left: e.pageX - offset.left,
	        top: e.pageY - offset.top
	    };


	    // these values place the post image on the page. edit to alter where it shows up.

	    pinX = divPos["left"] -10;
	    pinY = divPos["top"] -20;

	    var topPosition = divPos["top"] - 86;
	    var leftPosition = divPos["left"] - 39;
	    */

	// $(".img1").click(function(event) {
	// 	// console.log("test")
	// 	console.log($(this).offset().top)
	// 	$("#post").show()
	// })


	$("#post").click(function() {
		$("#modal-box3").show();
		$("#modal-overlay").fadeIn();
		$("#post").hide();
	})

	$(".pin").click(function() {
		$("#post").hide();
	})

	$("#button2").click(function() {
		$("#modal-box").show();
		$("#modal-box3").hide();
	})

	$("#button0").click(function() {
		$("#modal-box2").hide();
		$("#modal-box").hide();
		$("#modal-box4").show();
	})

	$("#button3").click(function() {
		$("#modal-box2").show();
		$("#modal-box3").hide();
	})

	$("#button1").click(function() {
		$("#modal-box").hide();
		$("#modal-box4").show();
	})

	$("#button5").click(function() {
		$("#modal-box4").fadeOut();
		$("#modal-box2").hide();
		$("#modal-box").hide();
		$("#modal-overlay").fadeOut();

		var imgString = "<img class='added-pin' src='assets/image/pins.png' style='top: " + pinY + "px; left: " + pinX + "px;'/>"

		// creating image string which we use to append. piny and pinx variables added to the inline style tag top and left. separate with semicolon. 

		$("#map").append(imgString);
	})

	$("#question").click(function() {
		$("#modal-box6").show();
		$("#modal-overlay").fadeIn();
	})

	$("#modal-box7").click(function() {
		$("#modal-box7").hide();
		$("#modal-box8").show();
		$("#modal-box8").fadeOut();
		$("#modal-overlay").fadeOut();
		$(".arrow").hide();
		$(".click").hide();
	})


	// $("#modal-box3").click(function() {
	// 	// $("#modal-box").hide();

	// 	})



		// cupcakes turning!!! for logo. 


	



	// $(".pin").hover(function() {
	// })





});