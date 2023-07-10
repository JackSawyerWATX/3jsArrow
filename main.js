import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({ 
    color: 0xffffff, 
    linewidth: 1,
	scale: 1,
	dashSize: 3,
	gapSize: 1, 
});

const points = [];
// points.push(new THREE.Vector3(24, 0, -20));
// points.push(new THREE.Vector3(-20, 0, 0));
// points.push(new THREE.Vector3(0, 20, 0));
// points.push(new THREE.Vector3(20, 0, 0));

points.push(new THREE.Vector3(23, 0, -19));
points.push(new THREE.Vector3(-19, 0, 0));
points.push(new THREE.Vector3(0, 19, 0));
points.push(new THREE.Vector3(19, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

scene.add(line);

function animate() {

    requestAnimationFrame(animate);

    scene.add(line);
    renderer.render(scene, camera);
}

if (WebGL.isWebGLAvailable()) {
    // Initiate function or other initializations here
    animate();
} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}

animate();