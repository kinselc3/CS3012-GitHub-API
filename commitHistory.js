function commitHistory(jsonText){
	var data =getData(jsonText);
	console.log(data);
	plot(data);
}


function getData(obj){
	
	var repos = retrieveJson(obj.repos_url);
	var commits = [];
	var commit_count =0;
	//var data = JSON.parse(obj[0]);
	console.log(repos.length);
	var returnData=[];
//	var j = 2;
	for(var i = 0 ; i<repos.length;i++)
	{
		c_url =repos[i].commits_url.substring(0,repos[i].commits_url.length-6) + "?per_page=100";
		
		commits = retrieveJson(c_url);
		commit_count += commits.length;
		/*while(commits != [])
		{
		//console.log(retrieveJson(c_url));
			console.log(commits);
			c_url += repos[i].commits_url.substring(0,repos[i].commits_url.length-6) + "?page="+j+"&per_page=100";
			commit = retrieveJson(c_url);
			commit_count += commits.length
			j++;
		}
		*/
		returnData.push({"repo_name":repos[i].name, "commits":commits.length});
		//j= 2;
		/*
		for(var j = 0 ; j<commits.length;j++)
		{
			console.log(repos[i].name + ":"+ commits[j].commit.committer.date);
			returnData.push({"repo_name":repos[i].name, "commit_date":commits[j].commit.committer.date});
		}
		*/
	}
	console.log(returnData);
	return returnData;
}

function plot(data){
	var names=[];
	var	commits=[];
	console.log(data);
	for(var i = 0 ; i<data.length ; i ++)
	{
		names[i]=data[i].repo_name;
		commits[i]=data[i].commits;
	}
	
	console.log(names[0]);
	//d3.select("svg").remove();
	
		//////////////////////
         var width = 400;
		 var height = 400; 
           

/*		   scaleFactor = 20, 
            barHeight = 30;
         
         var graph = d3.select(".timeline")
            .append("svg")
            .attr("width", width)
            .attr("height", barHeight * commits.length * 2);
         
         var bar = graph.selectAll("g")
            .data(commits)
            .enter()
            .append("g")
            .attr("transform", function(d, i) {
               return "translate(0," + i * barHeight*2 + ")";
            });
         bar.append("rect").attr("width", function(d) {
            return d * scaleFactor;
         })
         
         .attr("height", barHeight - 1);
         
        bar.append("text")
            .attr("x", function(d) { return (d*scaleFactor); })
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .text(function(d) { return d; });
		var i = 0;
		bar.append("text")
            .attr("y", (barHeight/2)+barHeight )
			.data(names)

			.text(function(d) { return d; });
			*/

		console.log(data);
         var svg = d3.select("svg"),
            width = svg.attr("width"),
            height = svg.attr("height"),
            radius = Math.min(width, height) / 2;
        
         var g = svg.append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

         var color = d3.scaleOrdinal([
            'gray', 'green', 'brown', 'orange', 'yellow', 'red', 'purple'
         ]);
         
         var pie = d3.pie().value(function(d) { 
            return d.commits; 
         });
         
         var path = d3.arc()
            .outerRadius(radius - 10).innerRadius(0);
        
         var label = d3.arc()
            .outerRadius(radius).innerRadius(radius - 80);
         
         
            
            var arc = g.selectAll(".arc")
               .data(pie(data))
               .enter()
               .append("g")
               .attr("class", "arc");
            
            arc.append("path")
               .attr("d", path)
               .attr("fill", function(d) { return color(d.data.repo_name); });
        
            console.log(arc)
        
            arc.append("text").attr("transform", function(d) { 
               return "translate(" + label.centroid(d) + ")"; 
            })
            
            .text(function(d) { return d.data.repo_name; });
        
         
         svg.append("g")
            .attr("transform", "translate(" + (width / 2 - 120) + "," + 100 + ")")
            .append("text").text("Commits in repos")
            .attr("class", "title")
}

