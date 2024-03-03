function solution(s) {
  let pCount = 0;
  let yCount = 0;

  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      pCount++;
    } else if (s[i] === "y") {
      yCount++;
    }
  }

  return pCount === yCount;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12916 문제 풀이 1차
