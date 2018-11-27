 function handleMouseOver(d, i) {  // Add interactivity

			 var svg = d3.select("g")
			 console.log(svg);
            // Use D3 to select element, change color and size
            d3.select(this).attr({
              //fill: "orange",
              //r: radius * 2
            });
			document.getElementById("arc").innerHTML = d.data.repo_name + " commits: " + d.data.commits;
			/*
            // Specify where to put label of text
            svg.append("text").attr({
               id: "t" + d.repo_name + "-" + d.commits + "-" + i,  // Create an id for text so we can select it later for removing on mouseout
                x: function() { return d.x; },
                y: function() { return d.y; }
            })
			.text(function() {
              return [d.repo_name, d.commits];  // Value of the text
            });
			*/
          }

      function handleMouseOut(d, i) {
            // Use D3 to select element, change color back to normal
            d3.select(this).attr({
              //fill: "white",
              //r: radius
            });

            // Select text by id and then remove
            d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();  // Remove text location
          }