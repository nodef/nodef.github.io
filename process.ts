import * as os from "os";
import * as fs from "fs";
import {Octokit} from "@octokit/rest";
import {sleep} from "extra-sleep";


// CONSTANTS
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";


// Read a file.
function readFile(pth: string) {
  var txt = fs.readFileSync(pth, "utf8");
  return txt.replace(/\r\n?/g, "\n");
}


// Write a file.
function writeFile(pth: string, txt: string) {
  var txt = txt.replace(/\r\n?/g, os.EOL);
  fs.writeFileSync(pth, txt);
}


// Parse a regex string.
function parseRegex(re: string) {
  var m = re.match(/^\/(.*)\/([gimsuy]*)$/);
  if (m) return new RegExp(m[1], m[2]);
  return new RegExp(re);
}


// Convert a LaTeX file to Markdown.
function latexToMarkdown(txt: string) {
  var txt = txt.replace(/\\href\{(.+?)\}\{(.+?)\}/g, "[$2]($1)");
  var txt = txt.replace(/\\textbf\{(.+?)\}/g, "**$1**");
  var txt = txt.replace(/\\textit\{(.+?)\}/g, "*$1*");
  var txt = txt.replace(/``(.+?)"/g, '"$1"');
  var txt = txt.replace(/\$(.+?)\$/g, '`$1`');
  return txt;
}


// Fetch repositories from GitHub matching a name pattern.
async function reposFetch(name: RegExp) {
  const octokit = new Octokit({auth: GITHUB_TOKEN});
  const org = "nodef", type = "public", per_page = 100;
  const repos = [];
  for (let page=1;;) {
    const res = await octokit.rest.repos.listForOrg({org, type, per_page, page});
    if (res.status !== 200) { await sleep(4000); continue; }
    if (res.data.length === 0) break;
    console.log(`Processing ${res.data.length} repositories (page ${page})...`);
    // Process repositories here...
    for (const repo of res.data) {
      if (!name.test(repo.name)) continue;
      repos.push(repo);
    }
    await sleep(1000);
    page++;
  }
  return repos;
}


// Parse command-line options.
function parseOptions(o: any, k: string, a: string[], i: number) {
  if (k==="--help") o.help = true;
  else o.args.push(a[i]);
}


// Main function.
async function main() {
  var a = process.argv;
  var o = {help: false, args: [] as string[]};
  for (var i=2; i<a.length; i++)
    parseOptions(o, a[i], a, i);
  if (o.help || o.args.length<1) {
    console.log("Usage: process <file>");
    process.exit(0);
  }
  switch (o.args[0]) {
    case "latex-to-markdown": {
      var txt = readFile(o.args[1]);
      var txt = latexToMarkdown(txt);
      writeFile(o.args[1], txt);
      break;
    }
    case "repos-fetch": {
      var name = parseRegex(o.args[1]);
      const repos = await reposFetch(name);
      repos.sort((a, b) => a.name.localeCompare(b.name));
      for (const repo of repos)
        console.log(`| 🌐 [${repo.name}] | ${repo.description} |`);
      console.log();
      for (const repo of repos)
        console.log(`[${repo.name}]: https://www.npmjs.com/package/${repo.name}`);
      break;
    }
  }
}
main();
