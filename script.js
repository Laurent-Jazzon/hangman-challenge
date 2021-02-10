(() => {

    let gallery = [
        "/hangman-challenge/assets/Image/Hangman-00.svg",
        "/hangman-challenge/assets/Image/Hangman-01.svg",
        "/hangman-challenge/assets/Image/Hangman-02.svg",
        "/hangman-challenge/assets/Image/Hangman-03.svg",
        "/hangman-challenge/assets/Image/Hangman-04.svg"
    ];
    let i = 1;
    let img = document.getElementById("image");
    let word = document.getElementById("word").innerHTML;
    let hide = document.getElementById("hide").innerHTML;
    word = word.split("")
 
  /*  document.getElementById("runA").addEventListener("click",function(){
        word.forEach(p => {
            if (p === "A"){
                
            }
        })
    }) */

    // A
    document.getElementById("runA").addEventListener("click",function(){
        let regex = /([A])/g;
        let answer = word.match(regex);
        let A = document.getElementById("runA").innerHTML;

        if (A === answer[0]){
            let n = "A"
            let letters = word.match(n)
            letters.style = "color, rgba(0,0,0,1)"
            console.log(word.match(n))
        } else {
            img.src = gallery[i];
            i++;
            if (i === gallery.length){
                i = 0;
        }
        }
    })
    // B
    document.getElementById("runB").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // C
    document.getElementById("runC").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // D
    document.getElementById("runD").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // E
    document.getElementById("runE").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // F
    document.getElementById("runF").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // G
    document.getElementById("runG").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    //H
    document.getElementById("runH").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // I
    document.getElementById("runI").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // J
    document.getElementById("runJ").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // K
    document.getElementById("runK").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // L
    document.getElementById("runL").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // M
    document.getElementById("runM").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // N
    document.getElementById("runN").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // O
    document.getElementById("runO").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // P
    document.getElementById("runP").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // Q
    document.getElementById("runQ").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // R
    document.getElementById("runR").addEventListener("click",function(){
        let regex = /([R])/g;
        let answer = word.match(regex);
        let R = document.getElementById("runR").innerHTML;

        if (R === answer[0]){
            console.log(word)
        } else {
            img.src = gallery[i];
            i++;
            if (i === gallery.length){
                i = 0;
        }
        }
    })
    // S
    document.getElementById("runS").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // T
    document.getElementById("runT").addEventListener("click",function(){
        let regex = /([T])/g;
        let answer = word.match(regex);
        let T = document.getElementById("runT").innerHTML;

        if (T === answer[0]){
            console.log(word)
        } else {
            img.src = gallery[i];
            i++;
            if (i === gallery.length){
                i = 0;
        }
        }
    })
    // U
    document.getElementById("runU").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // V
    document.getElementById("runV").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // W
    document.getElementById("runW").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // X
    document.getElementById("runX").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // Y
    document.getElementById("runY").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })
    // Z
    document.getElementById("runZ").addEventListener("click",function(){
        img.src = gallery[i];
        i++;
        if (i === gallery.length){
            i = 0;
        }
    })

})();