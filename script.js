    function moveButton() {
            const btn = document.getElementById('noBtn');
            // Randomly move the button within the container
            const x = Math.random() * (window.innerWidth - btn.offsetWidth);
            const y = Math.random() * (window.innerHeight - btn.offsetHeight);
            
            btn.style.left = x + 'px';
            btn.style.top = y + 'px';
        }