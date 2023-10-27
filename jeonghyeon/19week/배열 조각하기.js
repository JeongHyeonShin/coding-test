function solution(arr, query) {
    for(let i = 0; i < query.length; i++) {
        if(i % 2 === 0) { // query 짝수 뒷부분 버림
            arr.splice(query[i]+1); // query[i]부터 끝까지 버림
        } else { // 홀수 앞부분 버림
            arr.splice(0,query[i]);
        }
    }
    return arr;
}