document.getElementById('uploadBtn').addEventListener('click', function () {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('imagePreview').src = e.target.result;
            document.getElementById('imagePreview').style.display = 'block';
            document.getElementById('previewContainer').style.display = 'flex';
            document.getElementById('uploadBtn').innerText = 'Change Image';
            document.getElementById('enhanceBtn').classList.remove('disabled');
            document.getElementById('enhanceBtn').disabled = false;
            resetEnhancedImage();
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('enhanceBtn').addEventListener('click', function () {
    const enhancedImage = document.getElementById('enhancedImage');
    const imagePreviewSrc = document.getElementById('imagePreview').src;
    enhancedImage.src = imagePreviewSrc;
    enhancedImage.style.display = 'block';
    document.getElementById('enhanceOptions').style.display = 'flex';
    document.getElementById('enhanceBtn').style.display = 'none';
    document.getElementById('beforeText').style.display = 'block';
    document.getElementById('afterText').style.display = 'block';
    document.getElementById('clearAllImageBtn').style.display = 'block';
});

document.getElementById('retryImageBtn').addEventListener('click', function () {
    resetEnhancedImage();
    document.getElementById('enhanceBtn').style.display = 'block';
});

document.getElementById('clearAllImageBtn').addEventListener('click', function () {
    resetAllImages();
    document.getElementById('uploadBtn').innerText = 'Upload Image';
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
            document.getElementById('videoPreview').style.display = 'block';
            document.getElementById('videoPreviewContainer').style.display = 'flex';
            document.getElementById('uploadVideoBtn').innerText = 'Change Video';
            document.getElementById('enhanceVideoBtn').classList.remove('disabled');
            document.getElementById('enhanceVideoBtn').disabled = false;
            resetEnhancedVideo();
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('enhanceVideoBtn').addEventListener('click', function () {
    const enhancedVideo = document.getElementById('enhancedVideo');
    const videoPreviewSrc = document.getElementById('videoPreview').src;
    enhancedVideo.src = videoPreviewSrc;
    enhancedVideo.style.display = 'block';
    document.getElementById('enhanceVideoOptions').style.display = 'flex';
    document.getElementById('enhanceVideoBtn').style.display = 'none';
    document.getElementById('beforeVideoText').style.display = 'block';
    document.getElementById('afterVideoText').style.display = 'block';
    document.getElementById('clearAllVideoBtn').style.display = 'block';
});

document.getElementById('retryVideoBtn').addEventListener('click', function () {
    resetEnhancedVideo();
    document.getElementById('enhanceVideoBtn').style.display = 'block';
});

document.getElementById('clearAllVideoBtn').addEventListener('click', function () {
    resetAllVideos();
    document.getElementById('uploadVideoBtn').innerText = 'Upload Video';
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

function resetEnhancedImage() {
    document.getElementById('enhancedImage').style.display = 'none';
    document.getElementById('enhanceOptions').style.display = 'none';
    document.getElementById('beforeText').style.display = 'none';
    document.getElementById('afterText').style.display = 'none';
}

function resetAllImages() {
    document.getElementById('imagePreview').src = '';
    document.getElementById('imagePreview').style.display = 'none';
    document.getElementById('enhancedImage').style.display = 'none';
    document.getElementById('previewContainer').style.display = 'none';
    document.getElementById('enhanceBtn').classList.add('disabled');
    document.getElementById('enhanceBtn').disabled = true;
    document.getElementById('enhanceBtn').style.display = 'block';
    document.getElementById('beforeText').style.display = 'none';
    document.getElementById('afterText').style.display = 'none';
    document.getElementById('enhanceOptions').style.display = 'none';
    document.getElementById('clearAllImageBtn').style.display = 'none';
}

function resetEnhancedVideo() {
    document.getElementById('enhancedVideo').style.display = 'none';
    document.getElementById('enhanceVideoOptions').style.display = 'none';
    document.getElementById('beforeVideoText').style.display = 'none';
    document.getElementById('afterVideoText').style.display = 'none';
}

function resetAllVideos() {
    document.getElementById('videoPreview').src = '';
    document.getElementById('videoPreview').style.display = 'none';
    document.getElementById('enhancedVideo').style.display = 'none';
    document.getElementById('videoPreviewContainer').style.display = 'none';
    document.getElementById('enhanceVideoBtn').classList.add('disabled');
    document.getElementById('enhanceVideoBtn').disabled = true;
    document.getElementById('enhanceVideoBtn').style.display = 'block';
    document.getElementById('beforeVideoText').style.display = 'none';
    document.getElementById('afterVideoText').style.display = 'none';
    document.getElementById('enhanceVideoOptions').style.display = 'none';
    document.getElementById('clearAllVideoBtn').style.display = 'none';
}
