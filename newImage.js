function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}
function newImage(url, left, bottom) {
    let object = document.createElement("img");
    object.src = url;
    object.style.position = "fixed";
    object.style.left = left + "px";
    object.style.bottom = bottom + "px";
    document.body.append(object);
    return object;
  }
function tile(url, left, bottom, width, height) {
    for (let h = 0; h < height; h++) {
      for (let w = 0; w < width; w++) {
        newImage(url, left + w * "100", bottom + h * "100");
      }
    }
  }
  
  let horizon = window.innerHeight / "1.75";
  let heightOfSky = window.innerHeight - horizon;
  let heightOfGrass = horizon;
  
  tile(
    "assets/sky.png",
    "0",
    horizon,
    window.innerWidth / "100",
    heightOfSky / 100
  );
  tile(
    "assets/grass.png",
    "0",
    "0",
    window.innerWidth / "100",
    heightOfGrass / 100
  );
  