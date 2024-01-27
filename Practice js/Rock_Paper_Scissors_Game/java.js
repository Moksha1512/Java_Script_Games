let u_score=0;
let c_score=0;
let user_score=document.querySelector("#user-s");
let comp_score=document.querySelector("#comp-s");
const msg = document.querySelector("#msg");
let generatec=()=>{
    let options=["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
}
let showwin = (uwin,uchoice,cchoice) => {
    if (uwin) { 
        u_score++;
        user_score.innerText=u_score;
        msg.innerText = `You Win! ${uchoice} beats ${cchoice}`;
        msg.style.backgroundColor = "green"; // Change this to the desired color
    } else {
        c_score++;
        comp_score.innerText=c_score;
        msg.innerText = `You lose! ${cchoice} beats ${uchoice}`;
        msg.style.backgroundColor = "red";
    }
}


let playgame=(uchoice)=>{
    let cchoice=generatec();
    if(uchoice==cchoice){
        msg.innerText="Game was Draw.Play Again";
        msg.style.backgroundColor = "#276FBF";
    }else{
        let uwin=true;
        if(uchoice==="rock"){
            uwin=cchoice==="paper"?false:true;
        }else if(uchoice==="paper"){
            uwin=cchoice==="scissor"?false:true;
        }else{
            uwin=cchoice==="rock"?false:true;
        }
        showwin(uwin,uchoice,cchoice);
    }
}
let choices=document.querySelectorAll(".choice");
choices.forEach((e)=>{
    // console.log(e.innerText);
    e.addEventListener("click",()=>{
        let uchoice=e.getAttribute("id");
        console.log(uchoice);
        playgame(uchoice);
    })
})