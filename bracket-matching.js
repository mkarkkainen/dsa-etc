

function isValid(str) {

    let stack = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] === "{" || str[i] === "[" || str[i] === "(") {
            stack.push(str[i])
        } else {
            const current = stack.pop();
            if((current === "(" && str[i] === ")") || (current === "[" && str[i] === "]") || (current === "{" && str[i] === "}")) continue;
            else return false;
        }
    }

    return !stack.length;
}
