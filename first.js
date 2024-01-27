let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#Reset");
let newb=document.querySelector("#n-b");
let msgc=document.querySelector(".msg");
let message=document.querySelector("#d")

let t=true;
let po=0;
const winp=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let r=()=>{
    t=true;
    p=0;
    enable();
    msgc.classList.add("hide");

}
let enable=()=>{
    for(let b of boxes){
        b.disabled=false;
        b.innerText="";
    }
}
boxes.forEach((b)=>{
    b.addEventListener("click",()=>{
        // console.log(2);
        if(t===true){
            b.innerText="O";
            t=false;
        }else{
            b.innerText="X";
            t=true; 
        }
        po++;
        b.disabled=true;
        let f=checkw();
        if(po===9 && f===false){
            message.innerText=`Draw`
            msgc.classList.remove("hide");
            dis();
        }
    });
});
let checkw=()=>{
    for(let p of winp){
        let p1=boxes[p[0]].innerText;
        let p2=boxes[p[1]].innerText;
        let p3=boxes[p[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
                showw(p1);
                return true;
            }
        }

    }
    return false;
}
let dis=()=>{
    for(let b of boxes){
        b.disabled=true;
    }
}
let showw=(w)=>{
    message.innerText=`Congratulations, Winner is ${w}`
    msgc.classList.remove("hide");
    dis();
}
newb.addEventListener("click",r);
reset.addEventListener("click",r);
