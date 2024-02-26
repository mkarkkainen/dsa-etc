//https://leetcode.com/problems/flood-fill/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// const map = [
//     [-1, 0], //up
//     [0, 1], //right
//     [1, 0], //down
//     [0, -1], //left
// ]

var floodFill = function(image, sr, sc, newColor, color = image[sr][sc]) {
    //basecases
    if(sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length
    || image[sr][sc] !== color || image[sr][sc] === newColor) {
        return image
    }

    image[sr][sc] = newColor

    floodFill(image, sr-1, sc, newColor, color)
    floodFill(image, sr+1, sc, newColor, color)
    floodFill(image, sr, sc-1, newColor, color)
    floodFill(image, sr, sc+1, newColor, color)

    return image
};
