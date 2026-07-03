const pdf = require('html-pdf');
const fs = require('fs');

const htmlFile = './investors-circle-export.html';
const outputFile = './investors-circle.pdf';

const html = fs.readFileSync(htmlFile, 'utf8');

const options = {
  format: 'A4',
  orientation: 'portrait',
  border: {
    top: '10mm',
    right: '10mm',
    bottom: '10mm',
    left: '10mm'
  }
};

pdf.create(html, options).toFile(outputFile, function(err, res) {
  if (err) {
    console.error('PDF generation failed:', err);
    process.exit(1);
  }
  console.log('✅ PDF created successfully:', res.filename);
});
