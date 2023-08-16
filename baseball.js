// 랜덤 숫자 만들기
let result = ""
while(result.length < 3){
    let num = Math.floor(Math.random() * 10)
    if(!result.includes(num)){
        result += num
    }
}
console.log("숫자 세 개를 입력해주세요.")

// 숫자 뽑고, 결과 비교하기
const readline = require("readline");
const rl = readline.createInterface({
    // 모듈을 이용해 입출력을 위한 인터페이스 객체 생성
    input: process.stdin,
    output: process.stdout
});

const game = () => {
    //시도 횟수
    let cnt = 0;

    //입력된 값이 line에 저장
    rl.on('line', (line) => {  
        cnt ++;
        // 숫자 맞추기 게임
        let strike = 0;
        let ball = 0;
        
        for(let j=0; j<3; j++){
            if(result.includes(line[j])){
                ball += 1
            }
        }
        for(let i=0; i<3; i++){
            if(result[i] === line[i]){
                strike += 1
                ball -= 1
            }       
        }
        
        if(strike === 3){
            console.log(`${cnt}번 째 시도만에 맞히셨습니다.`)
            console.log(`${strike}s`)
            console.log("-------------------")
            rl.close()
            return  // 내일 여기에 왜 리턴이 들어왔는지 파악하기
        }
        console.log(`${cnt}번 째 시도.`)
        if(ball === 3){
            console.log(`${ball}b`)
        }
        console.log(`${strike}s ${ball}b`)
        console.log("-------------------")
        
    })
}

game();

// 게임 완료 후 종료
rl.on('close', ()=>{
console.log("게임을 종료합니다.")
})

