var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
movemybar(n)
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Finish Posting";
  } else {
    document.getElementById("nextBtn").innerHTML = "Save & Continue";
  }

  // ... and run a function that displays the correct step indicator:
  SideStepIndicator(n)
  
}

///Moving bar
function movemybar(n) {
        var elem = document.getElementById("progressbarcount");
        var width = 0
        if (n == 0) {
            console.log(n);
            width=0
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
            document.getElementById("progresstext").innerHTML = width;

        }
        else if (n == 1) {
            console.log(n)
            width = 20
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
            document.getElementById("progresstext").innerHTML = width;

        }
        else if (n == 2) {
            console.log(n);
            width = 40
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
            document.getElementById("progresstext").innerHTML = width;

        }
        else if (n == 3) {
            console.log(n);
            width = 60
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
            document.getElementById("progresstext").innerHTML = width;

        }
        else if (n == 4) {
            console.log(n);
            width = 80
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
            document.getElementById("progresstext").innerHTML = width;

        }
        else if (n == 5) {
            console.log(n);
            width = 100
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
            document.getElementById("progresstext").innerHTML = width

        }




    }

function getTab(n) {
    var x = document.getElementsByClassName("tab");
    if (n==0){
        x[1].style.display = "none"
        x[2].style.display = "none"
        x[3].style.display = "none"
        x[4].style.display = "none"
        x[5].style.display = "none"
        showTab(n)
    }
    else if (n==1){
        if (n == 1 && !validateForm()) return false;
        x[0].style.display = "none"
        x[2].style.display = "none"
        x[3].style.display = "none"
        x[4].style.display = "none"
        x[5].style.display = "none"
        showTab(n)
    }
    else if (n==2){
      if (n == 2 && !validateForm()) return false;
        x[1].style.display = "none"
        x[0].style.display = "none"
        x[3].style.display = "none"
        x[4].style.display = "none"
        x[5].style.display = "none"
        showTab(n)
    }
    else if (n==3){
      if (n == 3 && !validateForm()) return false;
        x[1].style.display = "none"
        x[2].style.display = "none"
        x[0].style.display = "none"
        x[4].style.display = "none"
        x[5].style.display = "none"
        showTab(n)
    }
    else if(n==4){
      if (n == 4 && !validateForm()) return false;
        x[1].style.display = "none"
        x[2].style.display = "none"
        x[3].style.display = "none"
        x[0].style.display = "none"
        x[5].style.display = "none"
        showTab(n)
    }
    else if(n==5){
      if (n == 5 && !validateForm()) return false;
        x[1].style.display = "none"
        x[2].style.display = "none"
        x[3].style.display = "none"
        x[4].style.display = "none"
        x[0].style.display = "none"
        showTab(n)
    }
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("addnewproperty").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
    if (valid) {
    document.getElementsByClassName("step-side")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}


function SideStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step-side");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}