const bingo = [1, 6, 9, 11, 14, 18, 20, 23, 25, 29, 31, 34, 38, 41, 45, 47]

let timer;
let random;

// START・STOPボタンクリックのイベント

let button = document.getElementById("button")
let number = document.getElementById("number")

button.addEventListener('click', function(){
    if (this.textContent == "START") {
        this.textContent = "STOP"

        timer = setInterval(function () {
            random = Math.floor(Math.random() * bingo.length);
            let result = document.getElementById("result")
            console.log(bingo[random])
            console.log("before")
            result.textContent = bingo[random];
            console.log("after")
        }, 10);
    }else{
        this.textContent="START"
        clearInterval(timer);
        result = bingo[random];
        bingo.splice(random, 1);

        let num = document.createElement("li");
        num.classList.add('centering')
        
        num.innerHTML = result

        number.appendChild(num)
    }
});

