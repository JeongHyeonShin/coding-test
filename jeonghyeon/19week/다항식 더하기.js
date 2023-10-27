function solution(polynomial) {
    let xnum = 0; // x 계수 저장
    let n = 0; // 상수 저장
    let answer = ''; // 결과 문자열
    const poly = polynomial.split(" + ");
    
    poly.forEach((num) => {
        if(num === "x") { // 1x
            xnum++;
        } else if(num.includes("x")) { // x 계수  
            xnum += parseInt(num);
        } else { // 상수만 있을 때
            n += parseInt(num);
        }
    });
    
    if(xnum !== 0) { // x 계수가 0이 아닐 때
        if(xnum === 1) {
            answer += "x"; // 1x는 x 표시
        } else {
            answer += xnum + "x";
        }
    }
    
    if(n !== 0) { // 상수 부분
        if(xnum !== 0) { // x가 존재
            answer += " + " + n;
        } else {
            answer += n;
        }
    }
    
    return answer;
}