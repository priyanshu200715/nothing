function checkPassword() {
    var password = document.getElementById("password").value;
    // Change "yourpassword" to your actual password
    if (password === "iloveyou") {
      window.location.href = "nazz.html";
    } else {
      document.getElementById("message").innerHTML = "Incorrect password. Please try again.";
    }
  }
  
  // Generate snowflakes
  function generateSnowflakes() {
    const container = document.getElementById("snowflakes-container");
    const numSnowflakes = 50; // Adjust this number as needed
  
    for (let i = 0; i < numSnowflakes; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`; // Adjust speed range as needed
      container.appendChild(snowflake);
    }
  }
  
  // Generate snowflakes when the page loads
  window.onload = generateSnowflakes;
  