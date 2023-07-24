function filterGallery(category) {
    var galleryItems = document.getElementsByClassName("gallery-item");
    if (category === "all") {
        for (var i = 0; i < galleryItems.length; i++) {
            galleryItems[i].classList.add("show");
        }
    } else {
        for (var i = 0; i < galleryItems.length; i++) {
            galleryItems[i].classList.remove("show");
            if (galleryItems[i].classList.contains(category)) {
                galleryItems[i].classList.add("show");
            }
        }
    }
}

// Function to open the image preview
function openPreview(imgElement) {
    var modal = document.getElementById("previewModal");
    var previewImage = document.getElementById("previewImage");
    modal.style.display = "block";
    previewImage.src = imgElement.src;
    // Event listener to close the preview if clicked outside the image
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closePreview();
        }
    });
}
  
// Function to close the image preview
function closePreview() {
    var modal = document.getElementById("previewModal");
    modal.style.display = "none";
}