function solution(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120817 1차
