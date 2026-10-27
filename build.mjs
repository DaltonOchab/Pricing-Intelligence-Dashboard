import {mkdir,rm,copyFile,cp} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true}); await mkdir('dist');
for(const name of ['index.html','styles.css','app.js','analytics.js']) await copyFile(name,`dist/${name}`);
await cp('data','dist/data',{recursive:true}); await copyFile('index.html','dist/404.html');
console.log('Production build complete: dist/ — dependency-free static modules.');
