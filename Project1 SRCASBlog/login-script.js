// Predefined user information for demonstration purposes
const userInfo = {
    "24105013@srcas.ac.in": {
        name: "Chendur M",
        email: "24105013@srcas.ac.in",
        dept: "Computer Applications",
        shift: "Morning",
        year: "1rd Year"
    },
    "24105062@srcas.ac.in": {
        name: "Vignesh M",
        email: "24105062@srcas.ac.in",
        dept: "Computer Applications",
        shift: "Morning",
        year: "1nd Year"
    },
    "24105010@srcas.ac.in": {
        name: "Bharath Kumar B",
        email: "24105010@srcas.ac.in",
        dept: "Computer Applications",
        shift: "Morning",
        year: "1nd Year"
    },
    "24105038@srcas.ac.in": {
        name: "Mohammad Shahil O",
        email: "24105038@srcas.ac.in",
        dept: "Computer Applications",
        shift: "Morning",
        year: "1nd Year"
    },
    "24105021@srcas.ac.in": {
        name: "Harish C",
        email: "24105021@srcas.ac.in",
        dept: "Computer Applications",
        shift: "Morning",
        year: "1nd Year"
    },
    "24105026@srcas.ac.in": {
        name: "Jai Akash S",
        email: "24105026@srcas.ac.in",
        dept: "Computer Applications",
        shift: "Morning",
        year: "1nd Year"
    },
    "24105031@srcas.ac.in": {
        name: "Krishna Kumar R",
        email: "24105031@srcas.ac.in",
        dept: "Computer Applications",
        shift: "Morning",
        year: "1nd Year"
    },
    "24105006@srcas.ac.in": {
        name: "Akash S",
        email: "24105006@srcas.ac.in",
        dept: "Computer Applications",
        shift: "Morning",
        year: "1nd Year"
    },
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const domain = 'srcas.ac.in';

    if (email.endsWith(`@${domain}`)) {
        if (userInfo[email]) {
            // Save user info to localStorage for simplicity
            localStorage.setItem('userInfo', JSON.stringify(userInfo[email]));
            window.location.href = 'blog.html';
        } else {
            document.getElementById('errorMessage').textContent = 'User not found. Please contact support.';
        }
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid domain. Please use your college email address ending with @srcas.ac.in.';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('login-container');

    document.addEventListener('mousemove', function(event) {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;

        loginContainer.style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
    });
});
