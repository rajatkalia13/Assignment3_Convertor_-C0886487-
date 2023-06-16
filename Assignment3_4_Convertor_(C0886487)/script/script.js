function convert_currency() {
    var cad_input = document.getElementById("cad_input").value;
    var usd_input = document.getElementById("usd_input").value;
    var error = document.getElementById("validation");
    
    // Data validation
    if (cad_input === "" && usd_input === "") {
      error.textContent = "Please enter a value in CAD or USD field.";
      return;
    }
    
    if (cad_input !== "" && usd_input !== "") {
      error.textContent = "Please enter a value in either CAD or USD field, not both.";
      return;
    }
    
    if (cad_input !== "") {
      // validation
      if (isNaN(cad_input) || parseFloat(cad_input) < 0) {
        error.textContent = "Please enter a valid CAD amount.";
        return;
      }
      
      var rate = 0.8; // Hard-coded conversion rate (1 CAD = 0.8 USD)
      var usd_amount = parseFloat(cad_input) * rate;
      
      document.getElementById("usd_input").value = usd_amount.toFixed(3);
      error.textContent = "";
    } else if (usd_input !== "") {
      // Convert USD to CAD
      // Data validation
      if (isNaN(usd_input) || parseFloat(usd_input) < 0) {
        error.textContent = "Please enter a valid USD amount.";
        return;
      }
      
      var rate = 1.25; // exchange rate 1= 1.25
      var cadAmount = parseFloat(usd_input) * rate;
      
      document.getElementById("cad_input").value = cadAmount.toFixed(3);
      error.textContent = "";
    }
  }
  