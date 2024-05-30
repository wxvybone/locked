<script>
    document.getElementById("passwordForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Get the password entered by the user
      var passform = document.getElementById("collect1on").value;

      // Check if the password is correct
      if (passform === "collect1on") { // Replace YOUR_CORRECT_PASSWORD with your actual password
        // Redirect to a new site
        window.location.href = "https://example.com"; // Replace https://example.com with the URL of the site you want to redirect to
      } else {
        // Display an error message or handle incorrect password
        alert("Incorrect password. Please try again."); // You can customize this message
      }
    });
  </script>