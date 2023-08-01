function loadFinalImage() {
    // Get the button element
    var downloadButton = document.querySelector('.download-button');
    
    // Add a class to the button on click
    downloadButton.classList.add('final-image-loaded');
  }

function downloadFile() {
  // Fetch the file URL from the server (replace this with your server endpoint)
  fetch("https://raw.githubusercontent.com/Merok23/TPG-Taller-Left4dead-Grupo1/main/installer.sh")
    .then(response => response.text())
    .then(fileURL => {
      var link = document.createElement("a");
      link.href = fileURL;
      link.setAttribute("download", "installer.sh");
      link.click();
    })
    .catch(error => console.error("Error fetching the download URL:", error));
}
