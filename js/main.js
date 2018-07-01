/*
*    main.js
*    Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

var margin = { left:100, right:10, top:10, bottom:150 };
var width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

d3.json("data/revenues.json").then(
    data => {
        data.forEach( d=> {
          d.revenue = +d.revenue;
          d.profit = +d.profit;
          
        });
        //console.log(data) ; 

// create canvas
var canvas = d3.select("#chart-area")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height",  height +margin.top +margin.bottom)

// create groupe 
var g = canvas.append("g")
              .attr("transform", "translate("+margin.left+","+margin.top+")")
// x scale 
var xScale = d3.scaleBand()
              .domain(data.map(d=>{return d.month}))
              .range([0, width])
              .paddingInner(0.3)
              .paddingOuter(0.3);
// y scale
var yScale = d3.scaleLinear()
                .domain([0, d3.max(data, d => {return d.revenue;})])
                .range([height, 0]);

                console.log(d3.max(data, d=>{return d.revenue}))

// x axis
var bottom_axis = d3.axisBottom(xScale);

// y axis
var left_axis = d3.axisLeft(yScale);


// append x axis to groupe
 g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0,"+height+")")
      .call(bottom_axis)

 // append y axis to groupe
 g.append("g")
      .attr("class", "y axis")
      .call(left_axis)  
      
// x axis label
g.append("text")
.attr("class", "yxaxis-label")
.attr("x", width/2)
.attr("y", height+50 )
.attr("font-size", 20+"px")
.attr("text-anchor", "middle")
.text("Month")

// Y axis label
g.append("text")
	 .attr("class", "y axis-label")
	 .attr("x", -height/2)
	 .attr("y", -50 )
	 .attr("text-anchor", "middle")
	 .attr("font-size", 20+"px")
	 .attr("transform", "rotate(-90)")
     .text("Revenue")


var rects = g.selectAll("rect")
   .data(data)
   .enter()
   .append("rect")
	.attr("x", (d,i)=>{
		return xScale(d.month);
	})
	.attr("y",d=>{return yScale(d.revenue);})
	.attr("width", xScale.bandwidth)
	.attr("height", (d)=>{
		return  height- yScale(d.revenue);
	})
	.attr("fill","grey");

    }
)
.catch( error => {console.log(error); }
);