function postcodesearch() {
    var postcode = document.getElementById("postcode-input").value;
    var result;

    if (postcode === "4110" || postcode === "4510") {
        result = "Yes! Clint's Skips currently services this suburb."; 
    } else {
        result = "Unfortunately we do not currently service this suburb.";
    }
    document.getElementById("postcode-result").innerHTML = result;
}