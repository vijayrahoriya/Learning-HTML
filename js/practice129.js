let string = "";
let buttons = document.querySelectorAll(".but");
Array.from(buttons).forEach((button)=>{
    // console.log(button)
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            try{
                string = eval(string)
                document.getElementsByTagName('input')[0].value = string;
            }catch(err){
                console.log('blle')
            }
        }
        else if(e.target.innerHTML == "ac"){
            string = ""
            document.getElementsByTagName('input')[0].value = string
        }
        else{
            string = string + e.target.innerHTML
            document.getElementsByTagName('input')[0].value = string;
        }
        
    })
})
