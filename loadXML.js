function loadXMLDoc(){
	var input = document.getElementById("userInput").value;
	//console.log(input);
	var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) 
				{
					//document.getElementById("json").innerHTML = this.responseText;
					//tabulate(this.responseText, ['login','public_repos'])
					console.log(this.responseText);
					loadBaiscInfo(this.responseText);
					mutualFollowers(this.responseText);
				}
			};
			xhttp.open("GET", "https://api.github.com/users/" + input, true);
			xhttp.send();
}

function loadBaiscInfo(jsonText){
	//take the info we want from the JSON and turn it into variables
	var obj = JSON.parse(jsonText);
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