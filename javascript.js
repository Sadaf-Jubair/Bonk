function bangobang() {
    var passwordInput = document.getElementById("passwordinput");
    var showButton = document.getElementById("showpassword");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showButton.style.backgroundImage = "url('Arakan.svg')";
    } else {
        passwordInput.type = "password";
        showButton.style.backgroundImage = "url('Seattle.svg')";
    }
}
function fanhu() {
    const imal = document.getElementById('emailinput').value;
    const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailpattern.test(imal)) {
        document.getElementById("invalidemailwarning").innerText = "";
        alert('Umm, so it ends here...');
        const video = document.getElementById('kutavido');
    
        video.play().catch((error) => {
            console.error('ESIDESI NOOB!', error);
        });
        video.style.display = "block";
    } else {
        document.getElementById("invalidemailwarning").innerText = "Put a proprer Email address";
    }
}
