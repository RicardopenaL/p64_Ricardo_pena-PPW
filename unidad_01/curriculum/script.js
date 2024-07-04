document.addEventListener('DOMContentLoaded', function() {
    const sections = ['secundaria', 'primaria', 'superiores', 'experiencias', 'pasantias'];
    
    sections.forEach(section => {
        const item = document.getElementById(section);
        item.addEventListener('click', function() {
            const certificadoImg = document.getElementById(`certificado-${section}`);
            if (certificadoImg) {
                window.open(certificadoImg.src, '_blank');
            }
        });
    });
});

