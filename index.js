const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Using reduce to sum up all battery batches
const totalBatteries = batteryBatches.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

// Logging the result to verify
console.log(totalBatteries); // Should log 31


