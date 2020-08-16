function readvalue() {

    var userdata;

    userdata = document.querySelector("#cmtdiv").innerHTML = "";
    if (userdata === "") {

        document.querySelector.innerHTML = "Please Enter data";

    }

    else {

        document.querySelector("#cmtdiv").innerHTML = "userdata";

    }
}

function submit() {
    let BtnElement = document.querySelector("#btn");
    document.querySelector("#btn").value = "";


}