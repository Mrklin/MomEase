

    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const toggleBtn = hamburgerMenu.querySelector('i');
    const togglemenu =document.getElementById('mob-nav')
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const select = document.querySelectorAll('.fas');

     if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            if (toggleBtn.classList.contains('fa-bars')){
                toggleBtn.classList.remove('fa-bars');
                toggleBtn.classList.add('fa-xmark');
                togglemenu.style.left = '0';
                togglemenu.style.transition = 'left 0.3s ease-in-out';
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