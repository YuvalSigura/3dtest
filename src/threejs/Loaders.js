import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function loadModel(url) {
  const loader = new GLTFLoader();
  return new Promise((resolve, reject) => {
    loader.load(url, (gltf) => {
      resolve(gltf.scene);
    }, undefined, (error) => {
      reject(error);
    });
  });
}
