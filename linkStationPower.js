
const points = [
  [0, 0],
  [100, 100],
  [15, 10],
  [18, 18]
]

const findDistance = (pointA, pointB) => {
  return Math.sqrt(Math.pow(Math.abs(pointA[0] - pointB[0]), 2) + Math.pow(Math.abs(pointA[1] - pointB[1]), 2));
};

console.log(findDistance(points[2], points[0]));