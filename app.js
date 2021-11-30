// camera, scene, renderer

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0x000000);
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
camera.position.z = 5;
// camera.position.y = 2;
// camera.position.y = 3;

const points = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(2, 0),
]



const boxGeo = new THREE.BoxGeometry(2, 2, 2)
const material2 = new THREE.MeshBasicMaterial({color: 0xff00ff})
const box = new THREE.Mesh(boxGeo, material2)
scene.add(box)

function animate() {
    requestAnimationFrame(animate);
renderer.render(scene, camera);

box.rotation.x += 0.01
box.rotation.y += 0.01
// box.rotation.z += 0.01
}
animate();
