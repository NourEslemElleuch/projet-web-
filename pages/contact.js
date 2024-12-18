function verifier(){
    const name= document.getElementById("name").value;
    const email= document.getElementById("email").value;
    const message= document.getElementById("message").value;
    if(name ==="" || email==="" || message ===""){
        alert("veuillez remplir tous les champs");
        return false;
    }
    alert(" Merci! votre message a été bien reçu");
    return true;
}