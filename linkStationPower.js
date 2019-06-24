//Calculate The Link Station for Every given point.


// Given Data
// Each array on points represent x,y coordinates [x,y].
const points = [
  [0, 0],
  [100, 100],
  [15, 10],
  [18, 18]
];

// Each array on stations represent  x,y coordinates and z the reach of each station [x,y,z].
const stations = [
  [0, 0, 10],
  [20, 20, 5],
  [10, 0, 12]
];

// This function calculates the distance between 2 points using Pythagoras Theorem (a^2 + b^2 = c^2) where a and b
// represent the hypothetical triangle sides and are calculated by subtracting the Xs  and Ys of each point, while
// c is the hypotenuse that represents the distance betwwen the points.
const findDistance = (pointA, pointB) => {
  return Math.sqrt(Math.pow(Math.abs(pointA[0] - pointB[0]), 2) + Math.pow(Math.abs(pointA[1] - pointB[1]), 2));
};

// This function calcutes the power between a point and a station utilizing the given power calculation formula
// and the findDistance function we created above.
const findPower = (point , station) => {
  const distance = findDistance(point, station);
  if (distance > station[2] ) {
    return 0;
  } else{
  return Math.pow(Math.abs(station[2] - distance) ,2);
  }
};


// This is the functionality loop that checks every point for each station and outputs the coordinates of the station
// with the best power for every given point.A bestStation array variable is introduced as a placeholder for the station
// with the best power and its elements represent z the power of station and x,y the coordinates of the station [z,x,y]
for(let i=0; i<points.length; i++){
  let bestStation = [0,0,0];
  for(let j=0; j < stations.length; j++){
    let power = findPower(points[i],stations[j]);
    if( power > bestStation[0]){
      bestStation[0] = power ;
      bestStation[1] = stations[j][0];
      bestStation[2] = stations[j][1];   
    }
  };

  if (bestStation[0] == 0) {
    console.log("No link station within reach for point " + points[i][0] +"," + points[i][1]);
  } else {
    console.log("Best link station for point " + points[i][0]  + "," + points[i][1] + " is " + bestStation[1] + "," + bestStation[2] + " with power " + bestStation[0]);
  };
};
