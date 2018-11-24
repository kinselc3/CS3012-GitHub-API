function loadXMLDoc(){
	document.getElementById("basic info").innerHTML = "loading";
	var input = document.getElementById("userInput").value;
	var output =retrieveJson("https://api.github.com/users/"+input);
	console.log(output);
	loadBaiscInfo(output);
	listFollowers(retrieveJson(output.followers_url));
	commitHistory(output);
	
}

function FollowersloadXMLDoc(input){
	document.getElementById("basic info").innerHTML = "loading";
	var output =retrieveJson("https://api.github.com/users/"+input);
	console.log(output);
	loadBaiscInfo(output);
	listFollowers(retrieveJson(output.followers_url));
	commitHistory(output);
}

function loadBaiscInfo(obj){
	var login = obj.login;
	var avatar_url = obj.avatar_url;
	var public_repos = obj.public_repos;
	var followers = obj.followers;
	var following = obj.following;
	var name = obj.name;
	
	//create tags with the html for the new info
	var info = document.createElement("div");
	info.id  = "basic info";
	var avatar = document.createElement("img");
	var contents = document.createElement("p");
	
	
	avatar.src =  avatar_url;
	avatar.style = "width: 200px;height:200px";
	avatar.id = "avatar"
	contents.id = "basicContents"
	//add to wrapping tag
	contents.innerHTML = 
		"Name :" + name +", Login: "+ login + " Followers:"+followers + ", Following: " +following;
	info.appendChild(avatar);
	info.appendChild(contents);
	
	//replace whatever was there 
	var body = 	document.getElementById("wrapping");
	body.replaceChild(info,document.getElementById("basic info"));
}