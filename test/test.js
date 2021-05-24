var init = function() {

  var width = 1200,
      height = 900;

  // レンダラーを作成
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

  // シーンを作成
  var scene = new THREE.Scene();

  // カメラを作成
  var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

  // 箱を作成
  //var geometry = new THREE.BoxGeometry(1, 1, 1);
  //var material = new THREE.MeshPhongMaterial({ color: 0x0000ff });
  //var box = new THREE.Mesh(geometry, material);
  //box.position.z = -5;
  //scene.add(box);

  //ドーナツ１を追加
  var torusGeometry1 = new THREE.TorusGeometry( 0.5, 0.2, 6, 12 );
  var torusGeometry2 = new THREE.TorusGeometry( 1.5, 0.2, 6, 12 );
  var torusGeometry3 = new THREE.TorusGeometry( 2.5, 0.2, 6, 12 );
  //半径、ドーナッツの太さ、ドーナッツのチューブ方向の分割数、水平方向の分割数
  var torusMaterial1 = new THREE. MeshPhongMaterial( { color: 0x0000ff } );
  var torusMaterial2 = new THREE. MeshPhongMaterial( {color: 0xff8800,wireframe: true} );
  var torus1 = new THREE.Mesh( torusGeometry1, torusMaterial1 );
  var torus2 = new THREE.Mesh( torusGeometry2, torusMaterial2 );
  var torus3 = new THREE.Mesh( torusGeometry3, torusMaterial1 );
  torus1.position.set( 0, 0, -5);
  torus2.position.set( 0, 0, -5);
  torus3.position.set( 0, 0, -5);
  scene.add( torus1 );
  scene.add( torus2 );
  scene.add( torus3 );

  // 平行光源1
  var directionalLight1 = new THREE.DirectionalLight(0xffffff);
  directionalLight1.position.set(1, 1, 1);
  // シーンに追加
  scene.add(directionalLight1);
  // 平行光源2
      var directionalLight2 = new THREE.DirectionalLight(0xffffff);
  directionalLight2.position.set(-1, 1, 1);
  // シーンに追加
  scene.add(directionalLight2);

  // 初回実行
  var update = function() {
    requestAnimationFrame(update);

    // 箱を回転させる
    //box.rotation.x += 0.01;
    //box.rotation.y += 0.01;

    torus1.rotation.x += 0.01;
    torus2.rotation.y += 0.01;
    torus3.rotation.x += 0.01;

    renderer.render(scene, camera);
  };
  update();
}
window.addEventListener('DOMContentLoaded', init);
