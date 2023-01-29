
const User = document.querySelector(".form");
const UserInput = document.querySelector(".form input");


const User_PcScore = document.getElementById('User_PcScore')
const User_Score = User_PcScore.getElementsByTagName("span")[0];
const PC_Socre = User_PcScore.getElementsByTagName("span")[1];
const INTERVAL = User_PcScore.getElementsByTagName("span")[2];




function UserSubmit(event) {

    event.preventDefault();

    let User_value = null;
    User_value = UserInput.value;

    const MAx_Num = 1000;
    let RandomValue = Math.floor(Math.random() * MAx_Num);
    
    let Num_Interval = null;
    Num_Interval = Math.abs(User_value - RandomValue);

    if (User_value !== null) {
        User_Score.innerText = `Your number is ${User_value}`;
        PC_Socre.innerText = `Random number is ${RandomValue}`;
        INTERVAL.innerText = `Number interval is ${Num_Interval}`;
    }

}



User.addEventListener('submit', UserSubmit);







//사용자가 값을 입력해야 하는 것과 RandomNum값을 비교.
//두 값을 빼서 무조건 양수화 시키던가, 아니면 둘 사이의 근사치가 얼마나 되는지 알아보는 함수가 있는지 찾아보자
