export function animate(renderer, scene, camera, objects, controls) {
    function render() {
      requestAnimationFrame(render); // Recursive render call
  
      // Animate the robot
      const robot = objects.find((obj) => obj.name === 'Robot');
      if (robot) {
        robot.rotation.y += 0.01; // Rotate the robot on the y-axis
      }
  
      controls.update(); // Update controls
      renderer.render(scene, camera); // Render the scene from the camera's perspective
    }
    render();
  }
  