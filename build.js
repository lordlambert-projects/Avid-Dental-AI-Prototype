// No-bundler "build": copies the static site into dist/
const fs=require("fs");fs.rmSync("dist",{recursive:true,force:true});fs.mkdirSync("dist");
for(const f of ["index.html","src"])fs.cpSync(f,"dist/"+f,{recursive:true});console.log("Built to dist/");
