function listFollowers(obj){
	//var obj = JSON.parse(jsonText);
	console.log(obj);
	var follower_logins = [];
	var follower_avatars =[];
	for(var i = 0 ; i < obj.length ; i++)
	{
		follower_logins.push(obj[i].login);
		follower_avatars.push(obj[i].avatar_url);
		
	}
	console.log(follower_avatars);
	console.log(follower_logins);
	
	var follower_table = document.createElement("div");
	follower_table.id  = "F_T";
	
	
	for(var i = 0 ; i < obj.length ; i++){
		var user = document.createElement("div");
		var avatar = document.createElement("img");
		var contents = document.createElement("p");
		avatar.style = "width: 100px;height:100px";
		avatar.id = "avatar";
		contents.id = "followerContents";
		
		avatar.src = follower_avatars[i];	
		contents.innerHTML = "Login: "+ follower_logins[i];
		user.appendChild(avatar);
		user.appendChild(contents);
		follower_table.appendChild(user);
	}
	
	var body = 	document.getElementById("wrapping");
	body.replaceChild(follower_table,document.getElementById("F_T"))
	
	
}