 function handleMouseOver(d, i) {  // Add interactivity

			 var svg = d3.select("g")
			 console.log(svg);
            // Use D3 to select element, change color and size
            d3.select(this).attr({
            });
			document.getElementById("arc").innerHTML = d.data.repo_name + " commits: " + d.data.commits;

          }

      function handleMouseOut(d, i) {
            // Use D3 to select element, change color back to normal
            d3.select(this).attr({  
            });

            // Select text by id and then remove
            d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();  // Remove text location
          }
