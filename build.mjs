import esbuild from 'esbuild';
await esbuild.build({entryPoints:['src/main.tsx'],bundle:true,minify:true,outdir:'.',format:'iife',platform:'browser',jsx:'automatic',target:'es2020',define:{'process.env.NODE_ENV':'"production"'},loader:{'.ttf':'file'},assetNames:'fonts/[name]'});
