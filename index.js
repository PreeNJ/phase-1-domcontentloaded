document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  document.addEventListener("DOMContentLoaded", function() {
    // Log something if you like, just to confirm it ran
    console.log("The DOM has loaded!");
  
    // Grab the paragraph element by its id
    const textPara = document.getElementById("text");
  
    // Update its text
    textPara.textContent = "This is really cool!";
  });
  