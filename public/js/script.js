(() => {
    "use strict";
    // Get all forms with the 'needs-validation' class
    const forms = document.querySelectorAll('.needs-validation');
  
    // Apply validation logic using arrow functions
    Array.from(forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        // Prevent form submission if validation fails
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
  
        // Add Bootstrap validation classes
        form.classList.add('was-validated');
      }, false);  // Added closing parenthesis for addEventListener
    });
  })();
  