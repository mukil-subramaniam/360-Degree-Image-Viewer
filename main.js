// Create 360° panoramas for different areas
const frontView = new PANOLENS.ImagePanorama("images/front.jpg");
const entranceView = new PANOLENS.ImagePanorama("images/entrance.jpg");
const livingRoomView = new PANOLENS.ImagePanorama("images/living_room.jpg");
const bedroomView = new PANOLENS.ImagePanorama("images/bedroom.jpg");
const kitchenView = new PANOLENS.ImagePanorama("images/kitchen.jpg");

// Initialize the viewer
const imageContainer = document.querySelector(".image-container");
const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: true,
    enableVR: true, // Enable VR Mode
    autoRotate: false, // User controls the navigation
    cameraFov: 120 // Increased FOV to zoom out
});

// Function to add hotspots (navigation points)
function addHotspot(fromPanorama, toPanorama, position, label) {
    const hotspot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Arrow);
    hotspot.position.set(position.x, position.y, position.z);
    hotspot.addHoverText(label); // Add label when hovered
    hotspot.addEventListener("click", () => {
        viewer.setPanorama(toPanorama); // Switch to the next panorama
    });
    fromPanorama.add(hotspot);
}

// Add navigation hotspots
addHotspot(frontView, entranceView, { x: 5000, y: 0, z: 0 }, "Enter Guest House");
addHotspot(entranceView, livingRoomView, { x: 5000, y: 0, z: 0 }, "Go to Living Room");
addHotspot(entranceView, frontView, { x: -5000, y: 0, z: 0 }, "Go Outside");
addHotspot(livingRoomView, bedroomView, { x: 5000, y: 0, z: 0 }, "Go to Bedroom");
addHotspot(livingRoomView, kitchenView, { x: -5000, y: 0, z: 0 }, "Go to Kitchen");
addHotspot(kitchenView, entranceView, { x: 5000, y: 0, z: 0 }, "Back to Entrance");
addHotspot(bedroomView, livingRoomView, { x: -5000, y: 0, z: 0 }, "Back to Living Room");

// Add panoramas to the viewer
viewer.add(frontView, entranceView, livingRoomView, bedroomView, kitchenView);
viewer.setPanorama(frontView); // Start from the front of the guest house

// Adjust camera position when frontView loads to prevent zoom-in
frontView.addEventListener("enter", () => {
    viewer.getCamera().position.set(0, 0, 5000); // Move camera back
    viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0); // Reset camera orientation
});
