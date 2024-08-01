import React, { useEffect, useState } from 'react';
import { createScene } from './threejs/Scene';
import { createCamera } from './threejs/Camera';
import { createRenderer } from './threejs/Renderer';
import { createObjects } from './threejs/Objects';
import { animate } from './threejs/Animations';
import { createControls } from './threejs/Controls';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let scene, camera, renderer, objects, controls;

    const initializeScene = async () => {
      scene = createScene();
      camera = createCamera();
      renderer = createRenderer();

      try {
        objects = await createObjects();
        objects.forEach((object) => {
          scene.add(object);
        });
        controls = createControls(camera, renderer);
        animate(renderer, scene, camera, objects, controls);
        setLoading(false);
      } catch (error) {
        console.error('Error loading objects:', error);
      }
    };

    initializeScene();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer && renderer.domElement) {
        document.body.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      <h1>My Portfolio Website</h1>
      <p>Welcome to my 3D portfolio website!</p>
    </div>
  );
}

export default App;
