(() => {

    let gallery = [
        "/hangman-challenge/assets/Image/Hangman-00.svg",
        "/hangman-challenge/assets/Image/Hangman-01.svg",
        "/hangman-challenge/assets/Image/Hangman-02.svg",
        "/hangman-challenge/assets/Image/Hangman-03.svg",
        "/hangman-challenge/assets/Image/Hangman-04.svg",
        "/hangman-challenge/assets/Image/Hangman-05.svg",
        "/hangman-challenge/assets/Image/Hangman-06.svg",
        "/hangman-challenge/assets/Image/Hangman-07.svg",
        "/hangman-challenge/assets/Image/Hangman-08.svg",
        "/hangman-challenge/assets/Image/Hangman-09.svg",
        "/hangman-challenge/assets/Image/Hangman-10.svg"
    ];
    // value for gallery functioning
    let i = 1;
    // value for word replacing
    let a = 0;

    let img = document.getElementById("image");

    // visible word creation
    let word = document.getElementById("word").innerHTML;
    word = word.split("");

    // hidden word creation
    let hide = document.getElementById("word").innerHTML;
    hide = hide.split("");

    // hide the visible word
    word.forEach(p => {
        word[a] = "_";
        a++;
    });
    document.getElementById("word").innerHTML = word;
    // define each buttons
    let chance = document.querySelectorAll("button")
    chance.forEach(k =>{
        k.addEventListener("click",function(){
            let x = 0;
                hide.forEach(p => {
                    if(p === k.innerHTML){
                        word[x] = hide[x];
                        document.getElementById("word").innerHTML = word;
                    }
                    x++
                })
                console.log(hide)
                if (hide.includes(k.innerHTML) === false){
                    document.getElementById("number").innerHTML = i;
                    k.disabled = true;
                    k.style.opacity = "0.5"
                    img.src = gallery[i];
                    i++;
                    if (i === gallery.length-1){
                        i = 10;
                    }
                } else {
                    k.style.color = "green"
                    k.disabled = "true"
                }
        })
    });


})();