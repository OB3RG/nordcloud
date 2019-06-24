
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
]


const findDistance = (pointA, pointB) => {
  return Math.sqrt(Math.pow(Math.abs(pointA[0] - pointB[0]), 2) + Math.pow(Math.abs(pointA[1] - pointB[1]), 2));
};

const findPower = (point , station) => {
  const distance = findDistance(point, station);

  if (distance > station ) {
    return 0;
  } else{
  return Math.pow(Math.abs(station[2] - distance) ,2);
  }
}

console.log(findPower(points[2], stations[1]));