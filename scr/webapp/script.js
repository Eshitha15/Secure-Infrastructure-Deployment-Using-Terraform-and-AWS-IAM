function submitData() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name === "" || roll === "") {
        alert("Please fill all fields!");
        return;
    }

     //let message = "alert('Welcome " + name + "')";
     //eval(message);   // CodeQL will flag this

    document.getElementById("result").innerHTML =
        "✅ Welcome " + name + " (Roll: " + roll + ")";
    
    

}
