// 문제 : 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
// 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

function solution(numbers) {
  const stringToNum = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  if

}

// 알고리즘 2-4 풀이 note.

// 1. 인수로 전달받은 문자열을 숫자로 바꿔 출력하는게 목표이다.
// 2. 그렇다면 문자열로 쓰여진 숫자표기를 어떻게 진짜 숫자 데이터 타입으로 변환할수 있을까??
// 3. 따로 변경해주는 메서드는 찾아보니 없는것 같다. 그럼 1-10 까지 지정을 해주어야겠다.
// 4. 1 대 1 로 값을 지정해주는 방식이 필요하니 객체, 즉 키와 값으로 지정해서 숫자의 목록을 만들면 좋을것 같다.
// 5. 그 후 인수로 받은 문자열, numbers 에 생성한 객체의 키 가 존재하면 그 키를 값으로 바꿔주는 함수를 생성한다.
// 6. 문자열 내부의 특정 요소의 유무를 확인하려면 .includes 를 사용해야하나?? 여기서 깨닳은점 한가지- 문자열은 유사배열 객체이므로 string,배열,객체 메서드를 모두 사용할수 있다.
// 따라서 문제에 따라 어떠한 메서드를 적용해 사용할 것인지를 먼저 생각 하는것이 문제 해결 방법의 가장 기초이자 중요한 사항인것 같다. 
// 여기서는 객체

