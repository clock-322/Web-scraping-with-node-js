const express=requrie('express')
const router=express.Router()
const puppeteer=require('puppeteer')

router.get('/',(req,res)=>{
    async function scrap(url){
        const browser=await puppeteer.launch()
        
        try {
            const page=await browser.newPage()
        await page.goto(url)
    
        const [el]=await page.$x('//*[@id="container"]/div/div[3]/div[2]/div[1]/div[2]/div[2]/div/div[1]/h1/span') //this is the XPath copied from the source html code of particular url
        const src=await  el.getProperty('textContent')
        const srcTxt=await src.jsonValue()
            res.send(JSON.stringify({srcTxt}))
        } catch (err) {
              console.error(err.message);
          }finally {
              await browser.close();
          }
    } 
    scrap('https://www.flipkart.com/realme-5i-forest-green-128-gb/p/itmdac0da867a9fa?pid=MOBFP6W53WMJVX7G&lid=LSTMOBFP6W53WMJVX7G3CHKF8&marketplace=FLIPKART&srno=b_1_1&otracker=nmenu_sub_Electronics_0_Realme&fm=organic&iid=92ebef3a-61fd-496c-a8d6-7e785535976d.MOBFP6W53WMJVX7G.SEARCH&ppt=browse&ppn=browse&ssid=y6l45s45cw0000001585210155081')
    //this is the url of which we want to scrap data.
})