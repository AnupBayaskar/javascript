function inter(gradScore, hscScore, sscScore, candidateName) {
  console.log(
    `gradScore :- ${gradScore}%  hscScore :- ${hscScore}%  sscScore :- ${sscScore}%  candidateName :- ${candidateName}`
  );
  if (gradScore>=70||hscScore>=80||sscScore>90) {
    console.log(`Congrates ${candidateName} You Are eligibkle for TCS interview`);
  } else{
    console.log(`Unfortunatly ${candidateName} you are not eligible TCS for interview`);
  }
}
inter(80, 86, 90, "ANUP")
console.log(`-----------------------------------------------------------------------------`);
inter(70, 65, 55, "POOJA")
console.log(`-----------------------------------------------------------------------------`);
inter(60, 79, 88, "AJAY")