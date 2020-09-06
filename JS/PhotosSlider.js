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