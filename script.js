
    function signin(){
        let Username =  document.getElementById("Username").value;
        let Password =  document.getElementById("Pass").value;
        let Email = document.getElementById("Email").value;
        // localStorage.setItem("email", Emailsigin)
        // localStorage.setItem("pass",passwordsigin)

        // alert(`Email = ${Emailsigin} Password = ${passwordsigin}}`);
        // alert("berhasil signin");
        // window.location.href = "login.html";

        const apiUrl = 'http://localhost:8080/user/register';
        const data = { username: `${Username}`, password: `${Password}`, email: `${Email}` };
    
        fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                alert("Registrasi Gagal");  
            throw new Error('Network response was not ok');
            }
            
            return response.json();
        })
        .then(responseData => {

            console.log(responseData);
            alert("berhasil Login")
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
    function LogIn(){
        let Username =  document.getElementById("Username").value;
        let password =  document.getElementById("Pass").value;
        alert(`Email = ${localStorage.getItem("email")} Password = ${localStorage.getItem("pass")}`);
        // if(Email === localStorage.getItem("email") && password === localStorage.getItem("pass")){
        //     alert(`Email = ${Email} Password = ${password}`)
        
        // }else{
        //     alert("Email atau Password salah");
        // }
        const apiUrl = 'http://localhost:8080/user/login';
        const data = { username: `${Username}`, password: `${password}` };
    
        fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                alert("Password atau username salah");  
            throw new Error('Network response was not ok');
            }
            
            return response.json();
        })
        .then(responseData => {

            console.log(responseData);
            alert("berhasil Login")
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    // let url ="http://localhost:8080/user/login"
    // fetch(url)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));

    // const apiUrl = 'http://localhost:8080/user/login';
    // const data = { username: `${username}`, password: `${pass}` };
 
    // fetch(apiUrl, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then(responseData => {
    //     console.log(responseData);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });