function solution(array) {
  let frequencyMap = {};

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (frequencyMap[num] === undefined) {
      frequencyMap[num] = 1;
    } else {
      frequencyMap[num]++;
    }
  }

  let maxFrequency = 0;
  let mode = -1;
  let isMultipleModes = false;

  for (let num in frequencyMap) {
    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      mode = parseInt(num);
      isMultipleModes = false;
    } else if (frequencyMap[num] === maxFrequency) {
      isMultipleModes = true;
    }
  }

  if (isMultipleModes) {
    return -1;
  }

  return mode;
}

// for 문과 조건문 위주로 사용해서 문제 풀이 접근  .. 1차
