const back = document.querySelector(".back");

function changebackground() {
  let x = document.getElementById("bkgs").value;
  let dList = document.styleSheets[0].cssRules[0].style;
  dList.setProperty("--borderbkg1", x);
  console.log(dList);
}
function changebackground1() {
  let x = document.getElementById("bkgs1").value;
  let dList = document.styleSheets[0].cssRules[0].style;
  dList.setProperty("--borderbkg3", x);
  console.log(dList);
}
function changebackground3() {
  let x = document.getElementById("bkgs2").value;
  let dList = document.styleSheets[0].cssRules[0].style;
  dList.setProperty("--Mainbkg", x);
  console.log(dList);
}
function bordersplit1() {
  let y = document.getElementById("borderInside").value;
  let dList = document.styleSheets[0].cssRules[0];
  y = y + "%";
  dList.style.setProperty("--split2", y);
  console.log(y);
}
function bordersplit() {
  let y = document.getElementById("borderAdjust").value;
  let dList = document.styleSheets[0].cssRules[0];
  y = y + "%";
  dList.style.setProperty("--split1", y);
  console.log(y);
}
function borderWidth1() {
  console.log("start");
  let y = document.getElementById("borderWidth1").value;
  console.log(y);
  let dList = document.styleSheets[0].cssRules[0];
  y = y + "rem";
  dList.style.setProperty("--widthone", y);
}
function borderWidth2() {
  console.log("start");
  let z = document.getElementById("borderWidth2").value;
  console.log(z);
  let dList = document.styleSheets[0].cssRules[0];
  z = z + "px";
  dList.style.setProperty("--ibWidth", z);
}

function menue() {}

let title = document.getElementById("title");
title.addEventListener("click", Addstyle);
let open = false;
function Addstyle() {
  if (!open == true) {
    return (
      (document.getElementById("nav").style = "height:2em;overflow:visible"),
      (open = true)
    );
  } else if (!open == false) {
    return (
      (document.getElementById("nav").style = "height:0em;overflow:hidden"),
      (open = false)
    );
  }
}

function Randompics(bkg) {
  bkg = document.querySelectorAll(".photon-shader");
  const subject = [
    "dog",
    "candy",
    "girl",
    "toys",
    "men",
    "woman",
    "children",
    "animals",
    "chickens",
    "cows",
    "cars",
    "trucks",
    "parachute"
  ];
  let randPic = [];
  let count = 0;
  for (let h in bkg) {
    for (let g of subject) {
      if (g >= subject.length) {
        g = 0;
      }
      randPic.push(`url('https://loremflickr.com/320/240/${g}')`);
    }
    for (let i = randPic.length - 1; i > 0; i--) {
      if (bkg[i] == undefined) {
        i = 0;
        if (randPic.length >= 10) {
          randPic.splice(0, 1);
        }
        if (h >= bkg.length) {
        }
        bkg[h].style = "background-image:" + randPic[h] + "";
      }
    }
  }
}
Randompics();