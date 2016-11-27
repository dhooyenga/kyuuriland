$.getJSON("https://mcapi.ca/query/5.255.85.210:26263/list", function(serverStatus)
{
	// Server online y/n?
	if(serverStatus.Status == true)
	{
		console.log("server is online")
		//$(".status").append("<span class='online'>online</span>.")
	} else {
		console.log("server is offline")
	};
	// Player count + max
	$('.online-title').append(" (" + serverStatus.players.online + "/" + serverStatus.players.max + ")");
	// Display online players
	if(serverStatus.list != false){
		for (var i = 0; i < serverStatus.list.length; i++) {
			$('.online-players').append(
				"<li class='player' style='background-image:url(https://mcapi.ca/avatar/2d/"+
				serverStatus.list[i]+
				")'>"+
				serverStatus.list[i]+
				"</li>"
			)
	  	}
	} else {
	  	$('.online-players').append("<li class='grijs'>The server is empty :(</li>")
	}
});
