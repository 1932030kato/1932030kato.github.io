var init = function() {

  var width = 1200,
      height = 900;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

  var torusGeometry1 = new THREE.TorusGeometry( 0.5, 0.2, 6, 12 );
  var torusGeometry2 = new THREE.TorusGeometry( 0.5, 0.2, 6, 12 );
  var torusGeometry3 = new THREE.TorusGeometry( 0.5, 0.2, 6, 12 );
  var torusGeometry4 = new THREE.TorusGeometry( 0.5, 0.2, 6, 12 );
  var torusGeometry5 = new THREE.TorusGeometry( 0.5, 0.2, 6, 12 );
  var torusGeometry6 = new THREE.TorusGeometry( 0.5, 0.2, 16, 75 );
  //材質の要素
  var torusMaterial1 = new THREE. MeshPhongMaterial( { color: 0xff8800 } );
  var torusMaterial2 = new THREE. MeshPhongMaterial( { color: 0xff8800,wireframe: true} );
  var torusMaterial3 = new THREE. MeshStandardMaterial( { color: 0xff8800} );
  var torusMaterial4 = new THREE. MeshLambertMaterial( { color: 0xff8800} );
  var torusMaterial5 = new THREE. MeshPhongMaterial( { color: 0xff8800} );
  var torus1 = new THREE.Mesh( torusGeometry1, torusMaterial3 );
  var torus2 = new THREE.Mesh( torusGeometry2, torusMaterial1 );
  var torus3 = new THREE.Mesh( torusGeometry3, torusMaterial2 );
  var torus4 = new THREE.Mesh( torusGeometry4, torusMaterial4 );
  var torus5 = new THREE.Mesh( torusGeometry5, torusMaterial5 );
  var torus6 = new THREE.Mesh( torusGeometry6, torusMaterial2 );
  torus1.position.set( 2, 1, -5);
  torus2.position.set( 0, 1, -5);
  torus3.position.set( -2, 1, -5);
  torus4.position.set( 2, -1, -5);
  torus5.position.set( 0, -1, -5);
  torus6.position.set( -2, -1, -5);
  scene.add( torus1 );
  scene.add( torus2 );
  scene.add( torus3 );
  scene.add( torus4 );
  scene.add( torus5 );
  scene.add( torus6 );

  var directionalLight1 = new THREE.DirectionalLight(0xffffff);
  directionalLight1.position.set(1, 1, 1);
  scene.add(directionalLight1);

  var directionalLight2 = new THREE.DirectionalLight(0xffffff);
  directionalLight2.position.set(-1, 1, 1);
  scene.add(directionalLight2);

  var update = function() {
    requestAnimationFrame(update);

    torus1.rotation.y += 0.001;
    torus2.rotation.y += 0.001;
    torus3.rotation.y += 0.001;
    torus4.rotation.y += 0.001;
    torus5.rotation.y += 0.001;
    torus6.rotation.y += 0.001;

    renderer.render(scene, camera);
  };
  update();
}
window.addEventListener('DOMContentLoaded', init);
