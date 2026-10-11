import {readdir,readFile,stat} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {originalProducts} from '../dist/data.js';
const root=fileURLToPath(new URL('../dist/',import.meta.url));let failures=[];
for(const file of await readdir(root)){
 if(file.endsWith('.js')){const result=spawnSync(process.execPath,['--check',path.join(root,file)],{encoding:'utf8'});if(result.status!==0)failures.push(`${file}: ${result.stderr}`)}
 if(file.endsWith('.html')){const html=await readFile(path.join(root,file),'utf8');for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){const url=match[1].split('#')[0].split('?')[0];if(/^(https?:|data:|mailto:)/.test(url)||url==='./')continue;try{await stat(path.resolve(root,url))}catch{failures.push(`${file}: referência ausente ${url}`)}}}
}
const ids=new Set();for(const p of originalProducts){if(ids.has(p.id))failures.push(`ID duplicado: ${p.id}`);ids.add(p.id);if(!p.name||!p.source||p.price<=0||!Number.isInteger(p.stock)||p.stock<0)failures.push(`Dados inválidos: ${p.id}`);try{await stat(path.resolve(root,p.image))}catch{failures.push(`Imagem ausente: ${p.id}`)}}
if(failures.length){console.error(failures.join('\n'));process.exit(1)}console.log(`Validação concluída: JavaScript, links locais e ${originalProducts.length} produtos.`);
