
import fs from "node:fs";
import path from "node:path";

// Read the spec file
const specFile = process.argv[2] || "spec.json";
const specContent = fs.readFileSync(specFile, 'utf8');
const spec = JSON.parse(specContent);
fs.mkdirSync("src/pages",{recursive:true});

const routes = [];
for (const p of spec.pages || []){
  const name = p.slug === "/" ? "Home" : p.slug.replace(/^\//,"").replace(/\//g,"_");
  routes.push({ slug: p.slug, name, sections: p.sections || [] });

  const imports = new Set();
  const body = [];
  for (const s of p.sections || []){
    if (!s.variant) continue; // no guessing
    imports.add(`import ${s.variant} from "@/sections/${s.variant}";`);
    const props = JSON.stringify(s.props || {}, null, 2).replace(/"([^"]+)":/g, "$1:");
    body.push(`<${s.variant} {...${props}} />`);
  }
  const code = `/* Generated from SiteSpec */\n${[...imports].join("\n")}\n
export default function ${name}(){
  return (<main>\n${body.map(x=>"    "+x).join("\n")}\n  </main>);
}
`;
  fs.writeFileSync(path.join("src","pages",`${name}.tsx`), code);
}

// routes file
const routesCode = `import type { RouteObject } from "react-router-dom";
${routes.map(r=>`import ${r.name} from "./pages/${r.name}";`).join("\n")}

const routes: RouteObject[] = [
${routes.map(r=>`  { path: "${r.slug}", element: <${r.name} /> },`).join("\n")}
];
export default routes;
`;
fs.writeFileSync("src/app-routes.tsx", routesCode);
console.log("Applied SiteSpec → pages/routes");
