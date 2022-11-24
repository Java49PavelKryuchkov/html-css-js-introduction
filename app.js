function isAnagram(str1, str2) {
    let res = false;
    if (str1.length == str2.length) {
        const str1Occurences = getSymbolOccurences(str1);
        res = checkAnagram(str1Occurences, str2);
    }
    return res;
}

function checkAnagram(occurences, string) {
    const stringAr = Array.from(string);
    return stringAr.every(symbol => {
        let res = false;
        if (occurences[symbol]) {
            res = true;
            occurences[symbol]--;
        }
    })
}
function createObject(res, cur) {
    if (res[cur]) {
        res[cur]++;
    } else {
        res[cur] = 1;
    }
    return res;
}

function getSymbolOccurences(string) {
    const stringAr = Array.from(string);
    return stringAr.reduce(createObject, {});
}
console.log(isAnagram("yellow","oolley"));