const os = require('os');
const fs = require('fs');




// Read a file.
function readFile(pth) {
  var txt = fs.readFileSync(pth, 'utf8');
  return txt.replace(/\r\n?/g, '\n');
}


// Write a file.
function writeFile(pth, txt) {
  var txt = txt.replace(/\r\n?/g, os.EOL);
  fs.writeFileSync(pth, txt);
}


// Convert a LaTeX file to Markdown.
function latexToMarkdown(txt) {
  var txt = txt.replace(/\\href\{(.+?)\}\{(.+?)\}/g, '[$2]($1)');
  var txt = txt.replace(/\\textbf\{(.+?)\}/g, '**$1**');
  var txt = txt.replace(/\\textit\{(.+?)\}/g, '*$1*');
  var txt = txt.replace(/``(.+?)"/g, '"$1"');
  var txt = txt.replace(/\$(.+?)\$/g, '`$1`');
  return txt;
}


// Main function.
function main() {
  var pth = process.argv[2];
  var txt = readFile(pth);
  var txt = latexToMarkdown(txt);
  writeFile(pth, txt);
}
main();
