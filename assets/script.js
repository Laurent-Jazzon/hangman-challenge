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
        "/hangman-challenge/assets/Image/Hangman-10.svg",
        "/hangman-challenge/assets/Image/Hangman-11.svg"
    ];
    let words = [
        "RANDY","STAN","KENNY","KYLE","CARTMAN","JIMBO","NED","HANKEY","SERVIETSKY","JESUS","SATAN","CHIEF","BUTTERS","LINDA","TOKEN","GARRISON","HIKE","TERRANCE","PHILIPPE","BARBRADY","COON","MYSTERION","MEPHESTO","TWEEK","JIMMY","CLYDE","TIMMY","BEBE","CRAIG","SCOTT"
    ];
    // value for gallery functioning
    let i = 1;
    // fails counter
    let z = 0;
    // value for word replacing
    let a = 0;

    let img = document.getElementById("image");

    // random name
    document.getElementById("word").innerHTML = words[Math.floor(words.length * Math.random())];

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
    document.getElementById("word").innerHTML = word.join(" ");

    // buttons checker
    let chance = document.querySelectorAll("button.btn")
    chance.forEach(k =>{
        k.addEventListener("click",function(){
            let x = 0;
            hide.forEach(p => {
                if(p === k.innerHTML){
                    word[x] = hide[x];
                    document.getElementById("word").innerHTML = word.join(" ");
                }
                x++
            })
            if (word.includes("_") === false){
                img.src = gallery[11];
                chance.forEach(z => z.disabled = true);
            }
            if (hide.includes(k.innerHTML) === false){
                z++;
                document.getElementById("number").innerHTML = z;
                k.disabled = true;
                k.style.opacity = "0.5";
                img.src = gallery[i];
                i++;
            } else {
                k.style.color = "green";
                k.disabled = "true";
            }
            if ((i === 11)){
                chance.forEach(b => b.disabled = true);
                document.getElementsByClassName("rules")[0].innerHTML = "The name was : "+hide.join("")
            }
        })
    });
    // Restart button
    let restart = document.querySelector("button.run")
        restart.addEventListener("click",function(){
            document.location.reload();
        })
})();