function createObject(word) {
    const wordAr = Array.from(word);
    const wordObject = {};
    wordAr.forEach(element => {
        if (wordObject[element]) {
            wordObject[element]++;
        }
        else {
            wordObject[element] = 1;
        }
    });
    return wordObject;
}
function isAnagram(word, testedWord) {
    let flag = "true";
    if (word.length != testedWord.length) {
        flag = "false";
    }
    const object = createObject(word);
    const testedWordAr = Array.from(testedWord);
    testedWordAr.forEach(e => {
        if (object[e]) {
            object[e]--;
        } else {
            flag = "false";
        }
        if (object[e] < 0) {
            flag = "false";
        }
    })
    return flag;
}
let word = "yellow";
console.log(isAnagram(word, "wolley"));