let PS = [document.getElementById("ps0"),
          document.getElementById("ps1")]
let imgS = [PS[0].querySelector("div.slider div"),
            PS[1].querySelector("div.slider div")]
let imgQ = [imgS[0].children.length,
            imgS[1].children.length]
let CurIMG = [0,0]

function BackIMG(psID) {
  ChangeIMG(-1, psID)
}
function NextIMG(psID) {
	ChangeIMG(1, psID)
}

function ChangeIMG(PLorMI, psID) {
  CurIMG[psID] = CurIMG[psID] + PLorMI
  if (CurIMG[psID] > imgQ[psID]-1) {
    CurIMG[psID] = 0
  }
  if (CurIMG[psID] < 0) {
    CurIMG[psID] = imgQ[psID]-1
  }
  if (CurIMG[psID] <= imgQ[psID]) {
    imgS[psID].style.transform = "translateX(" + CurIMG[psID]*(-100) + "%)"
  }
}