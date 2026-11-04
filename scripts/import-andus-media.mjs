import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
// Explicit, one-time content recovery. Never import WordPress scripts or HTML.
const wp="https://andusinternationalng.com/wp-content/uploads/";
const entries=[
 ["company/hero",wp+"2026/03/about-image_n1dmfc.jpg"],
 ["company/about",wp+"2026/04/Who-we-are.jpeg"],
 ["company/contact",wp+"2026/04/Contact-us.jpeg"],
 ["company/loans",wp+"2026/03/Untitled-design-2023-11-10T075103.971-880x660-1.png"],
 ["brand/andus-original",wp+"2026/02/cropped-logo-bTVtplgx-removebg-preview.png"],
 ["divisions/financial-services","https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"],
 ["divisions/oil-gas","https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=80"],
 ["divisions/real-estate","https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80"],
 ["divisions/automobile-logistics","https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80"],
 ["divisions/agriculture","https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80"],
 ["divisions/general-contracting","https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"],
 ["divisions/cac-registration","https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"]
];
for(const [name,url] of entries){
 const host=new URL(url).hostname;
 if(!["andusinternationalng.com","images.unsplash.com"].includes(host))throw new Error("Unexpected asset source");
 let response;
 for(let attempt=0;attempt<3;attempt++){try{response=await fetch(url,{signal:AbortSignal.timeout(18000)});if(response.ok)break;}catch(e){if(attempt===2&&!name.startsWith("divisions/"))throw e;}await new Promise(r=>setTimeout(r,500*(attempt+1)));}
 if(!response?.ok&&!name.startsWith("divisions/"))throw new Error(name+" returned HTTP "+response?.status);
 if(response?.ok&&!/^image\/(png|jpeg|webp|avif)/.test(response.headers.get("content-type")||""))throw new Error("Invalid image type: "+name);
 const original=response?.ok?Buffer.from(await response.arrayBuffer()):await fs.readFile("public/images/divisions/"+name.split("/")[1]+".svg");
 if(original.length<2000||original.length>8000000)throw new Error("Invalid source image size: "+name);
 const info=await sharp(original,{limitInputPixels:35000000}).metadata();
 if((info.width??0)<300||(info.height??0)<200)throw new Error("Invalid source dimensions: "+name);
 const out="public/"+(name.startsWith("brand/")?"":"images/")+name+".webp";
 await fs.mkdir(path.dirname(out),{recursive:true});
 await sharp(original,{limitInputPixels:35000000}).rotate().resize({width:1300,withoutEnlargement:true}).webp({quality:name.startsWith("brand/")?91:80,effort:4}).toFile(out);
 const check=await sharp(out).metadata();const bytes=(await fs.stat(out)).size;
 if(check.format!=="webp"||bytes<3500)throw new Error("Output corrupt or too small: "+name);
 console.log(name,check.width+"x"+check.height,bytes+" bytes, verified");
}
