const panoramaImage = new PANOLENS.ImagePanorama("https://mukil-subramaniam.github.io/Images/IMG20240426172524.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  controlBar: true,
  enableVR: false,
});

viewer.add(panoramaImage);
