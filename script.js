function addImage() {
    const galleryContainer = document.getElementById('galleryContainer');
    
    // Ganti URL gambar dengan gambar yang ingin Anda tambahkan
    const imageUrl = prompt("Masukkan URL gambar:");
    
    if (imageUrl) {
        const imgDiv = document.createElement('div');
        imgDiv.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        
        imgDiv.appendChild(img);
        galleryContainer.appendChild(imgDiv);
    } else {
        alert("URL gambar tidak valid.");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const dt = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    document.getElementById("tanggalwaktu").innerHTML = dt.toLocaleString('id-ID', options);
 });
 
