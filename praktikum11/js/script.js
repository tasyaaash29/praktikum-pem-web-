document.querySelectorAll("#option a").forEach((a) => {
    // jika di klil akan menjalankan sebuah fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
}) 

function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    //menangkap element hasil komputer dengan queryselesctor
    let pilihanKomputer = document.querySelector("#result");

    //mengisi pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    //pilihan komputer secara random 
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihanKomputer =  pilihanKomputer.innerHTML;

    // jika pilhan user == pilihan komputer (DRAW)
    if(pilihanUser == pilihanKomputer){
        alert("DRAW");
    }

    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("User WIN");
    } else if (pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("User WWIN");
    } else if (pilihanUser == "scissors" && pilihanKomputer == "Paper"){
        alert("User Win");
    }

    //jika piihan komputer menang
}