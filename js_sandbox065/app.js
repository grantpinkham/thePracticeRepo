const iniMeeny = [['Ini'], ['Meeny'], ['Miny'], ['Moe'], [[['Tag! your it!']]]];
const startIniMeeny = () => {
  const iniMeenyLength = iniMeeny.length;
  const newIniMeeny = iniMeeny.flat(50);
  for (let i = 0; i < iniMeenyLength; i++) {
    console.log(newIniMeeny[i]);
    if (iniMeeny[0] === iniMeeny[i] || iniMeeny[1] === iniMeeny[i] || iniMeeny[2] === iniMeeny[i] || iniMeeny[3] === iniMeeny[i]) {
      console.log('***i hope its not me***');
    }
  }
}
startIniMeeny();
