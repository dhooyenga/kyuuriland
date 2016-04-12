/*
        Server status stuff
*/

$.getJSON("https://mcapi.ca/query/5.255.85.210:26263/list", function(serverStatus)
	{
		if(serverStatus.Status == true)
	  {
	  	console.log("server is online")
	  } else {
	  	console.log("server is offline")
	  };
	  $('.online-title').append(" (" + serverStatus.Players.online + "/" + serverStatus.Players.max + ")");
	  if(serverStatus.Players.list != false){
	    for (var i = 0; i < serverStatus.Players.list.length; i++) {
	   		$('.online-players').append("<li class='player' style='background-image:url(https://mcapi.ca/avatar/2d/"+serverStatus.Players.list[i]+")'>"+serverStatus.Players.list[i]+"</li>")
		}
	  }
	});