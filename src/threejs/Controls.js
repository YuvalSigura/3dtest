import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function createControls(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Enable damping (inertia)
  controls.dampingFactor = 0.25; // Damping inertia factor
  controls.screenSpacePanning = false; // Disable panning
  return controls;
}
