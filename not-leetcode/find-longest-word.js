//find longest word in a string.

function findLongestWord(str) {
    return str.split(" ").sort((a, b) => b.length - a.length)[0]
}


console.log(findLongestWord("hi this is a difficult coding excercise. not performances"))
