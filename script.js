var ans_arr=["HEDGEHOG","MISSISSIPPI","MESSI","TRIVANDRUM","UNIVERSITY","ONEPIECE"];
var ques_arr=["H-DG-H--","-IS-IS-IP-I","M-SS-","TR-V--DR--","U-I--R-ITY","O-E-IE--"];
let image=document.getElementById("image-tray");
let ques=document.getElementById("ques");
let tray=document.getElementById("tray");
var count=0;
var error=0;
var ctr=0;


window.onload=function(){
    set_screen();
    set_ques();
}

function set_ques(){
    word=ques_arr[count];
    ques.innerText="";
    console.log(word);
    for(let j=0;j<word.length;j++){
        let let_span=document.createElement('span');
        let_span.id=j;
        if(word[j]==="-"){
            let_span.innerText="_";
        }
        else{

            let_span.innerText=word[j];
        }
        let_span.classList.add("letter");
        ques.appendChild(let_span);
    }
}


function set_screen(){
    for(let i=65;i<=90;i++){
        let char_div=document.createElement('div');
        char_div.id=i;
        let char=String.fromCharCode(i);
        char_div.innerText=char;
        char_div.classList.add("tile");
        span_letter_string='';
        char_div.addEventListener("click",select);
        tray.appendChild(char_div);
    }
}



function select(){
    target=this;
    s=target;
    let elems=document.querySelectorAll(".tile");
    for(let i=0;i<26;i++){
        elems[i].style.backgroundColor="lightgrey";
    }
    target.style.backgroundColor="gray";
    ctr=0;
    update(target);
    
}



function update(element){
    let span_letter=document.querySelectorAll('.letter');
    word_check=ans_arr[count];
    for(let i=0;i<word_check.length;i++){
        if(!word_check.includes(element.innerText)){
            error++;
            update_image(error);
            break;
        }
    }
    for(let i=0;i<word_check.length;i++){ 
        for(let j=0;j<word_check.length;j++){
            if(element.innerText==word_check[j]){
                // console.log(word_check[i]);
                if(span_letter[j].innerText=="_"){
                    span_letter[j].innerText=word_check[j];
                }
            }
        }
        
    }
    for(let i=0;i<span_letter.length;i++){
        if(span_letter[i].innerText=="_"){
            ctr++;
        }
    }
        if(ctr==0){
            count++;
            if(count<=5){
                setTimeout(()=>{
                    set_ques();
                },'500');
                
            }
            if(count>5){
                setTimeout(()=>{
                    alert("You won");
                    window.location.reload();
                },'800');
            }
            }
}



function update_image(err){
    image.style.backgroundImage=`url(${err}.png)`;
    if(err>5){
        setTimeout(()=>{
            alert("You have being hanged");
            window.location.reload();
        },'500');
    }
}
