const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dirs = ['.', './assets'];

async function optimizeImages() {
  console.log('Starting image optimization...');
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const ext = path.extname(file).toLowerCase();
      
      if (fs.statSync(filePath).isDirectory()) continue;
      
      if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        const tempPath = filePath + '.tmp';
        try {
          const originalSize = fs.statSync(filePath).size;
          let pipeline = sharp(filePath);
          
          if (ext === '.jpg' || ext === '.jpeg') {
            pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
          } else if (ext === '.png') {
            pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
          }
          
          await pipeline.toFile(tempPath);
          const newSize = fs.statSync(tempPath).size;
          
          if (newSize < originalSize) {
            fs.renameSync(tempPath, filePath);
            console.log(`Optimized ${filePath}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB`);
          } else {
            fs.unlinkSync(tempPath);
            console.log(`Skipped ${filePath} (already optimized)`);
          }
        } catch (err) {
          console.error(`Error optimizing ${file}:`, err);
          if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
      }
    }
  }
  console.log('Image optimization complete!');
}

optimizeImages();
