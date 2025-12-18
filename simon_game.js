let game_seq = [];
let user_seq = [];
let level = 0;
let color_arr = ["green", "yellow", "red", "blue"];
let start_btn = document.getElementById("start");
let head_2 = document.querySelector("#level");
function blink(btn_obj) {
    btn_obj.classList.add("flash");
    setTimeout(() => {
        btn_obj.classList.remove("flash");

    }, 200);

}
function level_up() {
    level++;
    head_2.innerText = `Level ${level}`;
    let ran = Math.floor(Math.random() * (4));
    let ran_color = color_arr[ran];
    let btn_obj = document.getElementById(ran_color);
    console.dir(btn_obj);
    blink(btn_obj);
    game_seq.push(ran_color);
    console.log(game_seq); // to remove;


}
start_btn.addEventListener("click", function () {
    game_seq = [];
    user_seq = [];
    level = 0;
    level_up();
});
let boxes = document.querySelectorAll(".bord");
for (box of boxes) {
    box.addEventListener("click", function () {
        blink(this);
        user_seq.push(this.getAttribute("id"));
        console.log(user_seq);
        check(user_seq.length);
    });
}
function check(len) {
    if (len === game_seq.length) {
        if (user_seq[len - 1] === game_seq[len - 1]) {
            user_seq = [];
            setTimeout(() => {
                level_up();
            }, 500);
        }
        else {
            game_over();
        }
    }
    else {
        if (user_seq[len - 1] != game_seq[len - 1]) game_over();
        else return;
    }
}
function game_over() {
    document.querySelector("body").classList.add("over");
    setTimeout(() => {
        document.querySelector("body").classList.remove("over");
    }, 300);
    head_2.innerHTML = `Game Over<br><b>Score - ${level}<b><br>Press Start To Play Again`;
    game_seq = [];
    user_seq = [];
    level = 0;
}