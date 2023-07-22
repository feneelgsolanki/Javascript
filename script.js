function findMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      throw new Error('Input must be a non-empty array.');
    }
  
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
  }
  const numbers = [3, 7, 11, 9, 2, 6];
  const maxNumber = findMax(numbers);
  console.log(maxNumber); 
    