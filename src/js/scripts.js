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
            document.getElementById('removeBtn').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('removeBtn').addEventListener('click', function () {
    document.getElementById('imagePreview').src = '';
    document.getElementById('previewContainer').style.display = 'none';
    document.getElementById('uploadBtn').innerText = 'Upload Image';
    document.getElementById('removeBtn').style.display = 'none';
});

document.getElementById('enhanceBtn').addEventListener('click', function () {
    alert('Enhancement model not deployed yet.');
});

document.getElementById('uploadVideoBtn').addEventListener('click', function () {
    document.getElementById('videoFileInput').click();
});

document.getElementById('videoFileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('videoPreview').src = e.target.result;
            document.getElementById('videoPreviewContainer').style.display = 'block';
            document.getElementById('uploadVideoBtn').innerText = 'Change Video';
            document.getElementById('removeVideoBtn').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('removeVideoBtn').addEventListener('click', function () {
    document.getElementById('videoPreview').src = '';
    document.getElementById('videoPreviewContainer').style.display = 'none';
    document.getElementById('uploadVideoBtn').innerText = 'Upload Video';
    document.getElementById('removeVideoBtn').style.display = 'none';
});

document.getElementById('enhanceVideoBtn').addEventListener('click', function () {
    alert('Enhancement model not deployed yet.');
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Open the default tab
document.getElementById("defaultOpen").click();
