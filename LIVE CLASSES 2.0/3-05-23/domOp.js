function readData() {
    // alert('event fired')

    //READ BY NAME
    // var fname = document.getElementsByName("fname")[0].value;
    // var title = document.getElementsByName("fname")[1].value;
    // // alert("fname is " + title + ". " + fname)

    //READ BY ID- unique
    var fname = document.getElementById("n1").value;
    var title = document.getElementById("n2").value;
    var full_name = title + ". " + fname
    // alert("Welcome, "+ full_name)
    document.getElementById("n3").value = full_name

    //Clear values of text inputs on click
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";

    //This value I guess AFTER the div tag, before its close for the first div
    //This sets whats between the tag, not create a tag
    document.getElementsByTagName("div")[0].innerHTML = full_name;

    //READ the innerhtml
    var h1Val = document.getElementsByTagName("h1")[0].innerHTML;
    // alert(h1Val)
    // var h1tags = document.getElementsByTagName("h1");
    // alert(h1tags.length)



}

function domOp() {
    var pTag = document.createElement("p"); //make a p tag
    var pTagContent = document.createTextNode("DOM Operation funciton wrote this");
    pTag.appendChild(pTagContent);
    // Add to DOM
    // document.getElementById("result").appendChild(pTag)

    // NOTE this adds to the end of the existing HTML. Where does it decide to input?
    document.getElementsByTagName("body")[0].appendChild(pTag)
}