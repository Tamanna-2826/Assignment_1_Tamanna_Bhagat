const fs = require("fs");
const zlib = require("zlib");

const inputFilePath = "./myFile1.txt";
const outputFilePath = "./compressedFile.txt.gz";

function compressFile(inputFilePath, outputFilePath) {
  const readStream = fs.createReadStream(inputFilePath);
  const writeStream = fs.createWriteStream(outputFilePath);
  const gzip = zlib.createGzip();

  readStream
    .pipe(gzip)
    .pipe(writeStream)
    .on("finish", () => {
      console.log("File compressed successfully.");
    });
}

compressFile(inputFilePath, outputFilePath);

// COmpressing folder
// const fs = require("fs");
// const zlib = require("zlib");
// const path = require("path");

// const folderPath = "./myTempFoler";
// const outputPath = "myFolder.zip";

// function compressFolder(folderPath, outputPath) {
//   const output = fs.createWriteStream(outputPath);
//   const gzip = zlib.createGzip();

//   output.on("close", () => {
//     console.log("Folder compressed successfully.");
//   });

//   fs.readdir(folderPath, (err, files) => {
//     if (err) {
//       return console.error("Error reading folder:", err);
//     }

//     files.forEach((file) => {
//       const filePath = path.join(folderPath, file);
//       const readStream = fs.createReadStream(filePath);
//       readStream.pipe(gzip).pipe(output);
//     });
//   });
// }

// compressFolder(folderPath, outputPath);
