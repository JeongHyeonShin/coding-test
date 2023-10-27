function solution(a, b, c, d) {  
    // 다 같음
    if(a === b && b === c && c === d) return 1111 * a;
    
    // 세 숫자 같고 하나 다름
    if (a === b && b === c && a !== d) return (10 * a + d) ** 2;
    if (a === b && b === d && a !== c) return (10 * a + c) ** 2;
    if (a === c && c === d && a !== b) return (10 * a + b) ** 2;
    if (b === c && c === d && b !== a) return (10 * b + a) ** 2;
    
    // 두 개씩 같음
    if (a === b && c === d && a !== c) return (a + c) * Math.abs(a - c);
    if (a === c && b === d && a !== b) return (a + b) * Math.abs(a - b);
    if (a === d && b === c && a !== b) return (a + b) * Math.abs(a - b);
    
    // 두 주사위 같은 숫자, 나머지 두 개 다른 숫자
    if (a === b && c !== d) return c * d;
    if (a === c && b !== d) return b * d;
    if (a === d && b !== c) return b * c;
    if (b === c && a !== d) return a * d;
    if (b === d && a !== c) return a * c;
    if (c === d && a !== b) return a * b;
    
    // 다 다름
    return Math.min(a,b,c,d);
}