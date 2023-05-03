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
}