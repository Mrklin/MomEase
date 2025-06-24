
const loginBtn = document.getElementById('log');
const register = document.getElementById('reg');
const signup = document.getElementById('signup');
const login = document.getElementById('login');
const forgot = document.getElementById('forgot');
const forgot1 = document.getElementById('forgot1');
const back = document.getElementById('back');
const otp_back = document.getElementById('otp_back');
const otp_page = document.getElementById('otp_page');
const signbtn = document.getElementById('signbtn');
const signin = document.getElementById('signin');

loginBtn.addEventListener('click', function () {
    signup.style.display = 'none';
    forgot1.style.display = 'none'
    login.style.display = 'flex'
    
});

register.addEventListener('click', function () {
    login.style.display = 'none'
    forgot1.style.display = 'none'
    signup.style.display = 'flex';
});

forgot.addEventListener('click', function () {
    login.style.display = 'none';
    forgot1.style.display = 'flex'
})


back.addEventListener('click', function () {
    login.style.display = 'flex';
    forgot1.style.display = 'none'
})

otp_back.addEventListener('click', function () {
    otp_page.style.display = 'none';
    forgot1.style.display = 'flex';
})

signbtn.addEventListener('click', () =>{
    otp_page.style.display = 'flex';
    forgot1.style.display = 'none';
    
})

signin.addEventListener('click', ()=>{
    signup.style.display = 'none';
    login.style.display = 'flex'
})