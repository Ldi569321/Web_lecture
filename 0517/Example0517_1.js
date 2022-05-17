const login_menu = document.querySelector("#login-link");

function askId() {
    const userId = prompt("아이디를 입력해 주세요");
    alert(`${userId}님 환영합니다.`);
}

login_menu.addEventListener("click", askId);

