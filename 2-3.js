function solution(s) {
  const elements = s.split("Z");

  let result = 0;

  for (let i = 0; i < elements.length; i++) {
    if (elements[i] !== "") {
      result += parseInt(elements[i]);
    }
  }

  return result;
}
