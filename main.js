let fcontainer = document.querySelector("#fliesen");

let w = 20;
let h = 10;

for (let i = 0; i < w; i++) {
  let tfc = document.createElement("div");
  tfc.classList.add("row");
  fcontainer.appendChild(tfc);
  for (let j = 0; j < h; j++) {
    let r = Math.floor(Math.random() * 9);
    console.log(r);
    let f = document.createElement("div");
    f.classList.add(r == 1 ? "dark" : "light");
    f.innerHTML =
      '<svg id="b" data-name="Ebene 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.189 221"><g id="c" data-name="Ebene 1"><polygon points="191.392 0 63.797 0 0 110.5 63.797 221 191.392 221 255.189 110.5 191.392 0"/></g></svg>';
    tfc.appendChild(f);
  }
}
