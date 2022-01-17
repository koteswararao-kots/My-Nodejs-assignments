function getNameFromCommandLine() {
    return String(process.argv[2]);
}

function getNameFromEnv() {
    // Write your code here
    return process.env.name;
}

function getNameFromReadLine() {
    // Write your code here
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
const req_name = null
rl.question('Enter name? ', (answer) => {
  req_name = answer
});

   

}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}
