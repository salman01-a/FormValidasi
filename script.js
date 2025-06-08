    let Emailsigin;
    let passwordsigin
    function signin(){
        Emailsigin =  document.getElementById("Email").value;
        passwordsigin =  document.getElementById("Pass").value;
        alert(`Email = ${Emailsigin} Password = ${passwordsigin}}`);
        alert("berhasil signin");
        window.location.href = "login.html";
    }
    
    function LogIn(){
        let Email =  document.getElementById("Email").value;
        let password =  document.getElementById("Pass").value;
        alert(`Email = ${Emailsigin} Password = ${passwordsigin}`);


        if(Email === Emailsigin && password === passwordsigin){
            alert(`Email = ${Email} Password = ${password}`)
        
        }else{
            alert("Email atau Password salah");
        }
    }