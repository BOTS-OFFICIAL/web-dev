document.getElementById('view-pic').addEventListener('click', function() {
    const profilePicContainer = document.getElementById('profile-pic-container');
    const backgroundImage = profilePicContainer.style.backgroundImage;
    if (backgroundImage) {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        modalImg.src = backgroundImage.slice(5, -2);
        modal.classList.add('show');
    }
});

document.getElementById('modal').addEventListener('click', function() {
    this.classList.remove('show');
});

document.getElementById('upload-device').addEventListener('click', function() {
    document.getElementById('profile-pic').click();
});

document.getElementById('profile-pic').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const profilePicContainer = document.getElementById('profile-pic-container');
            profilePicContainer.style.backgroundImage = `url(${e.target.result})`;
            profilePicContainer.classList.remove('profile-pic-placeholder');
            console.log('Profile pic successfully uploaded');
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('upload-internet').addEventListener('click', function() {
    const url = prompt("Enter image URL:");
    if (url) {
        const profilePicContainer = document.getElementById('profile-pic-container');
        profilePicContainer.style.backgroundImage = `url(${url})`;
        profilePicContainer.classList.remove('profile-pic-placeholder');
        console.log('Profile pic successfully uploaded');
    }
});

// Fetch user data from database.js
async function fetchUserData() {
    const response = await fetch('/path/to/database.js');
    const data = await response.json();
    document.getElementById('username').value = data.username;
    document.getElementById('user-id').value = data.userId;
    const profilePicContainer = document.getElementById('profile-pic-container');
    if (data.profilePic) {
        profilePicContainer.style.backgroundImage = `url(${data.profilePic})`;
        profilePicContainer.classList.remove('profile-pic-placeholder');
    }
}

fetchUserData();