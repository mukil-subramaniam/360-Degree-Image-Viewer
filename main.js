const panoramaImage = new PANOLENS.ImagePanorama("https://as2.ftcdn.net/v2/jpg/01/32/29/01/1000_F_132290171_BB7dc95933jnmExd4j0XvfQYy4N3wCUx.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  controlBar: true,
  enableVR: true,
});

viewer.add(panoramaImage);
