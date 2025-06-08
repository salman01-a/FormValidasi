    function LogIn(){
        let Email =  document.getElementById("Email").value;
        let password =  document.getElementById("Pass").value;


        // alert(`Email = ${Email} Password = ${password}`)

        if(Email === "Faris@gmail.com" && password === "123"){
            alert(`Email = ${Email} Password = ${password}`)
        
        }else{
            alert("Email atau Password salah")
        }
    }       