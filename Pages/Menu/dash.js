document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Functionality
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const toggleBtn = hamburgerMenu.querySelector('i');
    const togglemenu =document.getElementById('mob-nav')
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const select = document.querySelectorAll('.fas');

    if (hamburgerMenu && sidebar && overlay) {
        hamburgerMenu.addEventListener('click', () => {
            if (toggleBtn.classList.contains('fa-bars')){
                toggleBtn.classList.remove('fa-bars');
                toggleBtn.classList.add('fa-xmark');
                togglemenu.style.left = '0';
                togglemenu.style.transition = 'left 0.3s ease-in-out';

                sidebar.classList.toggle('active');
                overlay.classList.toggle('active');
            } else{
                toggleBtn.classList.remove('fa-xmark');
                toggleBtn.classList.add('fa-bars');
                togglemenu.style.left = '-40%';
                togglemenu.style.transition = 'left 0.3s ease-in-out';
            }
            

            // Prevent scrolling when sidebar is open
            document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }

    select.forEach(icon => {
    icon.addEventListener('click', () => {
        togglemenu.style.left = '-40%';
        togglemenu.style.transition = 'left 0.3s ease-in-out';
    });
    })


    // Mood Selection Functionality
    const moodButtons = document.querySelectorAll('.mood-button');

    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all mood buttons first
            moodButtons.forEach(btn => btn.classList.remove('active'));
            moodButtons.forEach(btn => btn.classList.remove('lift'));

            // Add 'active' class to the clicked button
            button.classList.add('active');
            button.classList.add('lift');

            // Optional: You can get the selected mood like this
            const selectedMood = button.dataset.mood;
            console.log('Selected mood:', selectedMood);
            // You would typically send this 'selectedMood' to a backend or use it for further logic here
        });
    });

    // You can add logic for the "Submit Mood" button here if needed
    const submitMoodButton = document.querySelector('.submit-mood');
    if (submitMoodButton) {
        submitMoodButton.addEventListener('click', () => {
            const activeMoodButton = document.querySelector('.mood-button.active');
            if (activeMoodButton) {
                const submittedMood = activeMoodButton.dataset.mood;
                alert(`Mood submitted: ${submittedMood}!`);
                // Here you would typically send the mood to a server
            } else {
                alert('Please select a mood before submitting.');
            }
        });
    }
});