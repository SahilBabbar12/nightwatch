module.exports={
    "css and xpath": function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html")
        browser.pause(3*1000)
        
        const cssSelector = "#text-input"
        const xpathSelector ='//*[@id="text-input"]'
        browser.setValue(cssSelector,"this is css")
        browser.pause(3000)

        browser.clearValue(cssSelector); 
        browser.useXpath()
        browser.setValue(xpathSelector,"this is xpath")
        browser.pause(3000)
    }
}