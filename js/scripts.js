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

function getTotalAmount() {
    var totalAmount = (getSizeValue() + getCrust() + getToppings());
    alert("You have placed an order for your selected pizza."  +  ""  +  " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  " Thank you for your order welcome again.");
    prompt("Enter your location")
    alert("You delivery fee is 150/=")
    alert("You order will be delivered shortly")
    alert("Continue shopping with us.")
}
//contact us form validation
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
                alert("Hello " + name + " " + ", your order has been placed successfully! We'll reach out to you soon");
            }
        }
    }