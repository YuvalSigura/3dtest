import { loadModel } from './Loaders';
import * as THREE from 'three';

export async function createObjects() {
  const objects = [];

  // Load the robot model
  const robot = await loadModel('/assets/models/robot.glb');
  robot.position.set(0, 0, 0); // Set model position
  objects.push(robot);

  // Add glowing cyber grid
  const gridHelper = new THREE.GridHelper(10, 10, 0x00ff00, 0x00ff00);
  objects.push(gridHelper);

  // Add floating text for ethical hacking, cybersecurity, and AI
  const fontLoader = new THREE.FontLoader();
  fontLoader.load('/assets/fonts/helvetiker_regular.typeface.json', (font) => {
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    const createText = (text, position) => {
      const textGeometry = new THREE.TextGeometry(text, {
        font: font,
        size: 0.5,
        height: 0.1,
      });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.copy(position);
      objects.push(textMesh);
    };

    createText('Ethical Hacking', new THREE.Vector3(-2, 2, 0));
    createText('Cybersecurity', new THREE.Vector3(0, 2, 0));
    createText('AI', new THREE.Vector3(2, 2, 0));
  });

  return objects;
}
