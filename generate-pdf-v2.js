const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const urls = [
    'http://localhost:3456/',
    'http://localhost:3456/about/',
    'http://localhost:3456/profiling/'
  ];
  
  try {
    // First page
    await page.goto(urls[0], { waitUntil: 'networkidle2' });
    await page.pdf({
      path: './investors-circle-page1.pdf',
      format: 'A4',
      margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' }
    });
    
    // Second page
    await page.goto(urls[1], { waitUntil: 'networkidle2' });
    await page.pdf({
      path: './investors-circle-page2.pdf',
      format: 'A4',
      margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' }
    });
    
    // Third page
    await page.goto(urls[2], { waitUntil: 'networkidle2' });
    await page.pdf({
      path: './investors-circle-page3.pdf',
      format: 'A4',
      margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' }
    });
    
    console.log('✅ All PDFs generated successfully!');
    console.log('Files created:');
    console.log('  - investors-circle-page1.pdf (Home)');
    console.log('  - investors-circle-page2.pdf (About)');
    console.log('  - investors-circle-page3.pdf (Profiling)');
    
  } catch (error) {
    console.error('PDF generation failed:', error);
  } finally {
    await browser.close();
  }
}

generatePDF();
