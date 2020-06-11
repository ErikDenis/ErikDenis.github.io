let imgQ = document.getElementById("slides").getElementsByTagName("img").length
let imgS = document.getElementById("slides")

let CurIMG = 0

function BackIMG() {
  // alert("Back")
  ChangeIMG(-1)
}

function NextIMG() {
  // alert("Next")
	ChangeIMG(1)
}

function ChangeIMG(PLorMI) {
  CurIMG = CurIMG + PLorMI
  if (CurIMG > imgQ-1) {
    CurIMG = 0
  }
  if (CurIMG < 0) {
    CurIMG = imgQ-1
  }
  if (CurIMG <= imgQ) {
    imgS.style.transform = "translateX(" + CurIMG*(-100) + "%)"
  }
  console.log(CurIMG)
}
