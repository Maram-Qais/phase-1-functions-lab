
function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
        return 25; 
    } else {
        return 'cannot travel that far'; 
    }
}


console.log(distanceFromHqInBlocks(34)); 
console.log(distanceFromHqInFeet(34)); 
console.log(distanceTravelledInFeet(38, 34)); 
console.log(calculatesFarePrice(38, 34)); 
console.log(calculatesFarePrice(24, 34)); 
console.log(calculatesFarePrice(43, 23));
console.log(calculatesFarePrice(3000, 34)); 
