document.querySelectorAll('.dropdown-content a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Manejo del dropdown
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                dropdown.style.display = 'none';
                dropdown.parentElement.classList.remove('active');
            });
        }
    });
    
    document.querySelectorAll('.dropbtn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const dropdown = this.nextElementSibling;
            const isActive = this.parentElement.classList.contains('active');
            
            document.querySelectorAll('.dropdown-content').forEach(d => {
                if (d !== dropdown) {
                    d.style.display = 'none';
                    d.parentElement.classList.remove('active');
                }
            });
            
            // Alternar el actual
            if (isActive) {
                dropdown.style.display = 'none';
                this.parentElement.classList.remove('active');
            } else {
                dropdown.style.display = 'block';
                this.parentElement.classList.add('active');
            }
        });
    });
    
    // Scroll suave para enlaces del dropdown
    document.querySelectorAll('.dropdown-content a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                // Cerrar el dropdown después de seleccionar
                this.closest('.dropdown-content').style.display = 'none';
                this.closest('.dropdown').classList.remove('active');
                
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Actualizar la URL sin recargar
                history.pushState(null, null, targetId);
            }
        });
    });
});