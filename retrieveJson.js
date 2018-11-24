function retrieveJson(url){
	
	console.log(url);
	var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
	x = JSON.parse(Httpreq.responseText);
    return x;
}