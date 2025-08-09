function submitform(){
    let sname=document.getElementById("name").value;
    let semail=document.getElementById("email").value;
    let sphone=document.getElementById("phone").value;
    let saddress=document.getElementById("address").value;
    let sphoto=document.getElementById("photo").value;
    
    let signupData ={
        "name":sname,
        "email":semail,
        "phone":sphone,
        "address":saddress,
        "photo":sphoto,
    };

    let img=document.getElementById("photo")
    let uploadfile = img.files[0];

    let file = new FileReader();
    file.onload = function  (event){
        debugger
        alert(event)
        console.log(event)
        let img46={
            img:event.target.result
        }

        localStorage.setItem("imgData64",JSON.stringify(img46))
    }  



    console.log(signupData);
    localStorage.setItem("data",JSON.stringify(signupData));
    file.readAsDataURL(uploadfile);
    window.location.href="1Marpreview.html";
    
}