
const points = [
  [0, 0],
  [100, 100],
  [15, 10],
  [18, 18]
];

const stations = [
  [0, 0, 10],
  [20, 20, 5],
  [10, 0, 12]
];


const findDistance = (pointA, pointB) => {
  return Math.sqrt(Math.pow(Math.abs(pointA[0] - pointB[0]), 2) + Math.pow(Math.abs(pointA[1] - pointB[1]), 2));
};

const findPower = (point , station) => {
  const distance = findDistance(point, station);
  if (distance > station[2] ) {
    return 0;
  } else{
  return Math.pow(Math.abs(station[2] - distance) ,2);
  }
};

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
