// Get the link element for aboutme
var aboutLink = document.getElementById('aboutLink');

// Add click event listener
aboutLink.addEventListener('click', function(event) {
    // Prevent default anchor behavior
    event.preventDefault();

    // Get the target element to scroll to (in this case, the "education" div)
    var targetElement = document.getElementById('Aboutme');

    // Scroll to the target element
    targetElement.scrollIntoView({ behavior: 'smooth' });
});

// Get the link element for Education
var educationLink = document.getElementById('educationLink');

// Add click event listener
educationLink.addEventListener('click', function(event) {
    // Prevent default anchor behavior
    event.preventDefault();

    // Get the target element to scroll to (in this case, the "education" div)
    var targetElement = document.getElementById('education');

    // Scroll to the target element
    targetElement.scrollIntoView({ behavior: 'smooth' });
});


// Get the link element for skills
var skillLink = document.getElementById('skillLink');

// Add click event listener
educationLink.addEventListener('click', function(event) {
    // Prevent default anchor behavior
    event.preventDefault();

    // Get the target element to scroll to (in this case, the "education" div)
    var targetElement = document.getElementById('skill');

    // Scroll to the target element
    targetElement.scrollIntoView({ behavior: 'smooth' });
});

