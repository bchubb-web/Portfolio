function openEmail(){
    var project = document.getElementById("project");
    var email = document.getElementById("email");
    
    project.style.display = "none";
    email.style.display = "flex";
}
function closeEmail(){
    var project = document.getElementById("project");
    var email = document.getElementById("email");
    
    project.style.display = "flex";
    email.style.display = "none";
}
function copyText() {
    /* Get the text field */
    var copyText = document.getElementById("email-copy");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
    }

function openLinks(){
    var button = document.getElementById("links-button");
    var links = document.getElementById("links");

    if (links.style.display === "none"){
        button.style.display = "none";
        links.style.display = "flex";

    }
    else{
        links.style.display = "none";
        button.style.display = "block";

    }
}
function explode(bubble){
    bubble.classList.add("is-popping");
}

function open(plan){
    var plan =  document.getElementById("plan-"+plan);
    plan.style.display="none";

}