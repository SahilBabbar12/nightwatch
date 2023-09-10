module.exports={
    "donate to black lives": browser =>{
         browser.maximizeWindow(); // to maximize the window size of browser
         browser.url("https://blacklivesmatter.com/")
         browser.pause(3* 1000)
         browser.click("#menu-primary-menu > li.menu-highlight.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-5749.nav-item > a")
         browser.pause(3* 1000)
         const actualtext="#contribution_blurb > p:nth-child(2) > strong > i"
         browser.assert.textContains(actualtext,"Fund the Movement") 
         browser.pause(3*1000)
    }
}