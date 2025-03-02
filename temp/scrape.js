const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigate to the page
  await page.goto('https://getalphabites.fun/video-fb', { waitUntil: 'networkidle2' });
  
  // Get the full HTML
  const html = await page.content();
  fs.writeFileSync(path.join(__dirname, 'full_page.html'), html);
  
  // Extract all scripts
  const scripts = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('script')).map(script => {
      return {
        src: script.src,
        content: script.innerHTML,
        type: script.type,
        id: script.id
      };
    });
  });
  
  fs.writeFileSync(path.join(__dirname, 'scripts.json'), JSON.stringify(scripts, null, 2));
  
  // Extract all styles
  const styles = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('style')).map(style => {
      return {
        content: style.innerHTML
      };
    });
  });
  
  fs.writeFileSync(path.join(__dirname, 'styles.json'), JSON.stringify(styles, null, 2));
  
  // Extract all link tags
  const links = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('link')).map(link => {
      return {
        href: link.href,
        rel: link.rel,
        type: link.type
      };
    });
  });
  
  fs.writeFileSync(path.join(__dirname, 'links.json'), JSON.stringify(links, null, 2));
  
  // Extract the video player structure
  const videoPlayer = await page.evaluate(() => {
    const videoContainer = document.querySelector('.video-container');
    return videoContainer ? videoContainer.innerHTML : null;
  });
  
  if (videoPlayer) {
    fs.writeFileSync(path.join(__dirname, 'video_player.html'), videoPlayer);
  }
  
  // Extract the product section structure
  const productSection = await page.evaluate(() => {
    const productContainer = document.querySelector('.product-reveal-container');
    return productContainer ? productContainer.outerHTML : null;
  });
  
  if (productSection) {
    fs.writeFileSync(path.join(__dirname, 'product_section.html'), productSection);
  }
  
  // Extract the main structure
  const mainStructure = await page.evaluate(() => {
    const body = document.body;
    return {
      bodyClasses: body.className,
      bodyId: body.id,
      childrenCount: body.children.length,
      firstLevelElements: Array.from(body.children).map(el => ({
        tagName: el.tagName,
        id: el.id,
        className: el.className
      }))
    };
  });
  
  fs.writeFileSync(path.join(__dirname, 'structure.json'), JSON.stringify(mainStructure, null, 2));
  
  // Get all network requests
  const requests = [];
  page.on('request', request => {
    requests.push({
      url: request.url(),
      method: request.method(),
      resourceType: request.resourceType()
    });
  });
  
  // Wait a bit to capture more requests
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  fs.writeFileSync(path.join(__dirname, 'requests.json'), JSON.stringify(requests, null, 2));
  
  await browser.close();
  console.log('Scraping completed successfully!');
})(); 