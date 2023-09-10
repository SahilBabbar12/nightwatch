module.exports ={
    "use element": async function(browser){
        browser.url("https://tutorials.actionqa.com/nwind/element.html");
        
        const elementResult= await browser.element("css selector","#some-button");

        console.log(JSON.stringify(elementResult,null,4))
    }
};

// to find a single element we have method .element("locator strategy type",its value)