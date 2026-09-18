const fs = require('fs');
const path = require('path');
const https = require('https');

const outputDir = path.join(__dirname, 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const assets = [
  { name: 'gpc_logo.png', url: 'https://gospelpillars.org/wp-content/uploads/2024/07/GPC-NEW-LOGO-ALONE-1-1.png' },
  { name: 'gpc_crest.png', url: 'https://gospelpillars.org/wp-content/uploads/2022/05/Gospel-Pillars-inernational-logo.png' },
  { name: 'onesound_logo.png', url: 'https://gospelpillars.org/wp-content/uploads/2024/08/OneSound-Logo-2023-1024x302.png' },
  { name: 'ark_of_light_cathedral.webp', url: 'https://gospelpillars.org/wp-content/uploads/2024/01/Ark-of-Light-Mokup-main-scaled.webp' },
  { name: 'prophet_isaiah_portrait.jpg', url: 'https://gospelpillars.org/wp-content/uploads/2026/03/Official-Prophet-Isaiah-Macwealth.jpg.jpg' },
  { name: 'prophet_and_prophetess.webp', url: 'https://gospelpillars.org/wp-content/uploads/2025/11/Greater-Glory-Gathering-G3-Grand-finale-our-prophetess-with-prophet.webp' },
  { name: 'cathedral_main_hall_gallery.webp', url: 'https://gospelpillars.org/wp-content/uploads/2025/11/Greater-Glory-Gathering-G3-Grand-finale-main-hall-gallery.webp' },
  { name: 'worship_crowd_shot.webp', url: 'https://gospelpillars.org/wp-content/uploads/2025/11/Greater-Glory-Gathering-G3-Grand-finale-crowd-shot.webp' },
  { name: 'overflow_gathering.webp', url: 'https://gospelpillars.org/wp-content/uploads/2025/11/Greater-Glory-Gathering-G3-Grand-finale-overflow.webp' },
  { name: 'adoration_choir.webp', url: 'https://gospelpillars.org/wp-content/uploads/2025/11/Greater-Glory-Gathering-G3-Grand-finale-adoration.webp' },
  { name: 'children_church_kingdom_kids.webp', url: 'https://gospelpillars.org/wp-content/uploads/2025/11/Greater-Glory-Gathering-G3-Grand-finale-children-church.webp' },
  { name: 'pastors_and_ministers.webp', url: 'https://gospelpillars.org/wp-content/uploads/2025/11/Greater-Glory-Gathering-G3-Grand-finale-pastors.webp' },
  { name: 'cathedral_exterior.webp', url: 'https://gospelpillars.org/wp-content/uploads/2025/11/Greater-Glory-Gathering-G3-Grand-finale-outside-church.webp' }
];

async function downloadFile(item) {
  const dest = path.join(outputDir, item.name);
  return new Promise((resolve) => {
    https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redirectRes) => {
          const stream = fs.createWriteStream(dest);
          redirectRes.pipe(stream);
          stream.on('finish', () => {
            console.log(`Downloaded: ${item.name} (${fs.statSync(dest).size} bytes)`);
            resolve(true);
          });
        });
      } else if (res.statusCode === 200) {
        const stream = fs.createWriteStream(dest);
        res.pipe(stream);
        stream.on('finish', () => {
          console.log(`Downloaded: ${item.name} (${fs.statSync(dest).size} bytes)`);
          resolve(true);
        });
      } else {
        console.error(`Failed ${item.name}: Status ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`Error ${item.name}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  console.log(`Downloading ${assets.length} church assets into ${outputDir}...`);
  for (const asset of assets) {
    await downloadFile(asset);
  }
  console.log('All downloads completed!');
}

run();
