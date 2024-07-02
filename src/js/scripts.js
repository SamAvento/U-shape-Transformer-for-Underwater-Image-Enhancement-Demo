document.getElementById('uploadBtn').addEventListener('click', function () {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('imagePreview').src = e.target.result;
            document.getElementById('previewContainer').style.display = 'block';
            document.getElementById('uploadBtn').innerText = 'Change Image';
            document.getElementById('removeBtn').style.display = 'block'; // Show the "X" button
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('removeBtn').addEventListener('click', function () {
    document.getElementById('imagePreview').src = '';
    document.getElementById('previewContainer').style.display = 'none';
    document.getElementById('uploadBtn').innerText = 'Upload Image';
    document.getElementById('removeBtn').style.display = 'none'; // Hide the "X" button
});

document.getElementById('enhanceBtn').addEventListener('click', function () {
    alert('Enhancement model not deployed yet.');
});
