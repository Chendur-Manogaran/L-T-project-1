document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const profileModal = document.getElementById('profileModal');
    const createButton = document.getElementById('createButton');
    const profileButton = document.getElementById('profileButton');
    const closeButton = document.querySelector('.close-button');
    const profileCloseButton = document.querySelector('.profile-close-button');
    const createBlogForm = document.getElementById('createBlogForm');
    const profileForm = document.getElementById('profileForm');
    const blogPosts = document.getElementById('blogPosts');
    const header = document.querySelector('header');

    // Profile data storage
    let profileData = JSON.parse(localStorage.getItem('userInfo')) || {
        name: 'User',
        email: '',
        dept: '',
        shift: '',
        year: ''
    };

    createButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    profileButton.addEventListener('click', () => {
        profileModal.style.display = 'block';
        // Populate profile form with existing data
        document.getElementById('profileName').value = profileData.name;
        document.getElementById('profileEmail').value = profileData.email;
        document.getElementById('profileDept').value = profileData.dept;
        document.getElementById('profileShift').value = profileData.shift;
        document.getElementById('profileYear').value = profileData.year;
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    profileCloseButton.addEventListener('click', () => {
        profileModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        } else if (event.target === profileModal) {
            profileModal.style.display = 'none';
        }
    });

    createBlogForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const blogTitle = document.getElementById('blogTitle').value;
        const blogContent = document.getElementById('blogContent').value;
        const date = new Date().toLocaleDateString();

        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${blogTitle}</h2>
            <p><strong>By ${profileData.name}</strong> on ${date}</p>
            <p class="blog-excerpt">${blogContent.substring(0, 100)}... <span class="read-more">Read More</span></p>
            <p class="blog-full" style="display:none;">${blogContent} <span class="read-less">Read Less</span></p>
        `;
        blogPosts.appendChild(article);

        createBlogForm.reset();
        modal.style.display = 'none';
    });

    blogPosts.addEventListener('click', (event) => {
        if (event.target.classList.contains('read-more')) {
            const fullContent = event.target.closest('article').querySelector('.blog-full');
            const excerpt = event.target.closest('article').querySelector('.blog-excerpt');
            excerpt.style.display = 'none';
            fullContent.style.display = 'block';
        } else if (event.target.classList.contains('read-less')) {
            const fullContent = event.target.closest('article').querySelector('.blog-full');
            const excerpt = event.target.closest('article').querySelector('.blog-excerpt');
            fullContent.style.display = 'none';
            excerpt.style.display = 'block';
        }
    });

    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        profileData.name = document.getElementById('profileName').value;
        profileData.email = document.getElementById('profileEmail').value;
        profileData.dept = document.getElementById('profileDept').value;
        profileData.shift = document.getElementById('profileShift').value;
        profileData.year = document.getElementById('profileYear').value;
        const profilePicture = document.getElementById('profilePicture').files[0];

        // Save updated user info to localStorage
        localStorage.setItem('userInfo', JSON.stringify(profileData));

        // Here you can handle the profile picture upload as needed

        profileForm.reset();
        profileModal.style.display = 'none';
    });

    document.getElementById('logoutButton').addEventListener('click', () => {
        localStorage.removeItem('userInfo');
        window.location.href = 'login.html';
    });

    // Adding the same movement effect for the header
    document.addEventListener('mousemove', function(event) {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;

        header.style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
    });
});
