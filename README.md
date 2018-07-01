In this section, I introduced you to the syntax for creating scales in D3...

    var x = d3.scaleLinear()
        .domain(0, 5000)    // INPUT!
        .range(0, height);  // OUTPUT!

I added in the margin convention that we'll be using going forward...

    var margin = { left:40, right:20, top:10, bottom:30 };
    var width = 600 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;
        
    var g = d3.select("#chart-area")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", "translate(" + margin.left 
                    + ", " + margin.top + ")");

And I taught you how to use D3's axis generators for your visualizations...

    var topAxisCall = d3.axisTop(x)
     
    g.append("g")
        .attr("class", "top axis")
        .call(topAxisCall);

You should now be ready to build your own bar chart using what you’ve learned so far. 
