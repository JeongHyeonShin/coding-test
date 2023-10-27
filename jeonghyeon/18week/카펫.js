function solution(brown, yellow) {
    var answer = [];
    let sum = brown + yellow;
    for(let x = 3; x <= sum / x; x++) {
        let y = sum / x;
        if((x-2)*(y-2) === yellow) {
            answer = [Math.max(x, y), Math.min(x, y)];  // 큰 수가 가로 작은 수가 세로
        }
    }
    return answer;
}


// 가로 세로 최소 길이 3
// 가로 x >= 세로 y
// brown + yello == x * y