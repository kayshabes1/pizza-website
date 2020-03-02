function getSizeValue() {
    var selectedValue = document.getElementById("size").value;
    return parseInt(selectedValue);
}
function getCrust() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getToppings() {
    var selectedToppings = document.getElementById("toppings").value;
    return parseInt(selectedToppings);
}
function getQuantity() {
    var selectedQuantity = document.getElementById("quan").value;
    return parseInt(selectedQuantity);
}
function getTotalAmount() {
    var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
    alert("You have Ordered" + getQuantity("")  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  " Thank you for your order welcome again.");
    prompt("enter your location")
    alert("You delivery fee is 150/=")
    alert("You order will be delivered shortly")
    alert("Continue shoppping with us each and every time .")


    function myforms() {
        var buttons = document.getElementById("button");
        buttons.onclick = function (event) {
            var name = document.forms["myForm"]["Name1"].value;
            var email = document.forms["myForm"]["Email2"].value;
            if (name == "" || email == "") {
                alert("Please fill in fields and try again.");
                return false;
            }
            if (name !== "" && email !== "") {
                alert("Hello " + name + " " + ", your message has been sent successfully! We'll reach out to you soon");
            }
        }
    }