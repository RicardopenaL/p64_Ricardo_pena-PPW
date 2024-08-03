document.getElementById('loadButton1').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const img = document.createElement('img');
    img.src = 'Campeon.png'; 
    img.alt = 'IMAGEN 1';
    imageContainer.innerHTML = ''; 
    imageContainer.appendChild(img);
});

document.getElementById('loadButton2').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const img = document.createElement('img');
    img.src = 'Escudo.png';  
    img.alt = 'IMAGEN 2';
    imageContainer.innerHTML = ''; 
    imageContainer.appendChild(img);
});

document.getElementById('removeButton').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; 
});
