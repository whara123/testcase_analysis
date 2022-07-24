const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const crawler = async (issueNum) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--window-size=1600,2000',
    ],
  });

  const page = await browser.newPage();

  let issueData = [];

  let url = issueNum;
  await page.goto(url);

  const content = await page.content();
  const $ = cheerio.load(content);

  const list = $('#root > div').children('ul');

  list.each((idx, node) => {
    issueData.push({
      issueNum: $(node).find('div > p.issueNumber').text(),
      issueTitle: $(node).find('div > p:nth-child(2)').text(),
      issueImportance: $(node).find('div > p:nth-child(13)').text(),
    });
  });

  await browser.close();

  return { issueData };
};

module.exports.crawler = crawler;
