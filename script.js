function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_ppb7i88","template_75wf851",parms).then(alert("Email Sent...!"))
}