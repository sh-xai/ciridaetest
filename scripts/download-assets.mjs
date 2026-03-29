// ABOUTME: Downloads all assets from ciridae.com (images, videos, fonts)
// ABOUTME: Run with: node scripts/download-assets.mjs

import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { dirname, join } from "path";

const ASSETS = {
  fonts: [
    {
      url: "https://cdn.prod.website-files.com/68532a35829494931a29b25b/6853fdba9c58625939c1be42_PragmaticaCond-Book.woff2",
      dest: "src/fonts/PragmaticaCond-Book.woff2",
    },
    {
      url: "https://cdn.prod.website-files.com/68532a35829494931a29b25b/687cef288e6840a0f4e9be10_Pragmatica-Book.woff2",
      dest: "src/fonts/Pragmatica-Book.woff2",
    },
  ],
  images: [
    {
      url: "https://cdn.prod.website-files.com/68532a35829494931a29b25b/68b0a06762f9bbbda09e68a5_Hero.webp",
      dest: "public/images/hero.webp",
    },
    {
      url: "https://cdn.prod.website-files.com/68532a35829494931a29b25b/689ca1e087c6eb62afb3e11e_footer-img-03.webp",
      dest: "public/images/footer-bg.webp",
    },
    // Blog images
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/689c4f8084bfdc9ebc8f2229_blog-img-01.webp",
      dest: "public/images/blog/blog-01.webp",
    },
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/68ae01ae54305ccfe795a24c_post-2-2.webp",
      dest: "public/images/blog/blog-02.webp",
    },
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/689c4f898703c7accddb6814_blog-img-02.webp",
      dest: "public/images/blog/blog-03.webp",
    },
    // Company logos
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/68b0a379748a338f7a175256_kkr.svg",
      dest: "public/images/logos/kkr.svg",
    },
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/68813054e8583d9ec3796722_goldman.svg",
      dest: "public/images/logos/goldman.svg",
    },
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/688261addf284aad34f5caf0_mongodb.svg",
      dest: "public/images/logos/mongodb.svg",
    },
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/68d43eadb7b3f4d869a9e2eb_Palantir.png",
      dest: "public/images/logos/palantir.png",
    },
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/6881308479f8502a37900c56_salesforce.svg",
      dest: "public/images/logos/salesforce.svg",
    },
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/6881307ff923a533a8c40e1d_apple.svg",
      dest: "public/images/logos/apple.svg",
    },
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/68d440f4197e146018c162be_Penn.png",
      dest: "public/images/logos/penn.png",
    },
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/68af392f0c6860f92124509d_Stanford.png",
      dest: "public/images/logos/stanford.png",
    },
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/68b0a395d8df070fd4763597_meta.svg",
      dest: "public/images/logos/meta.svg",
    },
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/68b0a3861531dd172d8d6cb0_citadel.svg",
      dest: "public/images/logos/citadel.svg",
    },
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/6881304319efb824b93e8e97_general.svg",
      dest: "public/images/logos/general-atlantic.svg",
    },
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/688130396130ea6edbfa7aff_addreessen.svg",
      dest: "public/images/logos/andreessen.svg",
    },
    // Testimonial company logos
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/68a5a8fc72c8f10e36959be9_BV%20TECH%201.png",
      dest: "public/images/logos/bvtech.png",
    },
    {
      url: "https://cdn.prod.website-files.com/6866c642756f5668ba983081/68a5a8f4b23a330adecbee74_factua%20logo%201.png",
      dest: "public/images/logos/factua.png",
    },
  ],
  videos: [
    {
      url: "https://stabondar.b-cdn.net/ciridae/hero_web.mp4",
      dest: "public/videos/hero.mp4",
    },
  ],
};

async function download(url, dest) {
  const dir = dirname(dest);
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    console.log(`  ✓ ${dest} (${(buf.length / 1024).toFixed(1)}KB)`);
  } catch (e) {
    console.error(`  ✗ ${dest}: ${e.message}`);
  }
}

async function downloadBatch(items, concurrency = 4) {
  const queue = [...items];
  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length > 0) {
      const item = queue.shift();
      if (item) await download(item.url, item.dest);
    }
  });
  await Promise.all(workers);
}

async function main() {
  console.log("Downloading fonts...");
  await downloadBatch(ASSETS.fonts);

  console.log("\nDownloading images...");
  await downloadBatch(ASSETS.images);

  console.log("\nDownloading videos...");
  await downloadBatch(ASSETS.videos);

  console.log("\nDone!");
}

main();
