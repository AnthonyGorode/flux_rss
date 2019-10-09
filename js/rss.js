/**
 * datas of current flux rss
 */
const State = {
    data: []
}

const switchClickIcons = (icon) => {
    switch(icon){
        case "default":
            constructDefaultRss(State.data) 
            break
        case "two":
            constructDoubleRss(State.data)
            break
        case "multiple":
            constructMultipleRss(State.data)
            break
    }
}

const constructOnclickIcons = () => {
    $("#one-column").attr("onclick",`switchClickIcons('default')`)
    $("#two-columns").attr("onclick",`switchClickIcons('two')`)
    $("#multiple-columns").attr("onclick",`switchClickIcons('multiple')`)
}

const constructModalErrorRssJson = (error) => {
    let sHtml= ""
    let title = "Erreur : "+error.status
    let content = error.message

    sHtml = errorRss2Json(title,content)
    $("#block-modal").html(sHtml)
    $(".modal").toggle()
}

const closeModal = () => {
    $(".modal").toggle()
    $("#block-modal").html("")
}

const constructDefaultRss = (data) => {
    let sHtml = ""
    const parser = new DOMParser

    for(let item in data.items){

        let encodedStr = data.items[item].title
        
        let dom = parser.parseFromString(
            '<!doctype html><body>' + encodedStr,
            'text/html'
        )
        let decodedString = dom.body.textContent
        
        dom = parser.parseFromString(
            '<!doctype html><body>' + decodedString,
            'text/html'
        )         
        decodedString = dom.body.textContent
            
        let date = new Date(data.items[item].pubDate)
        let urlImg
        if(data.items[item].enclosure.link != undefined ){
            if(checkURL(data.items[item].enclosure.link))
                urlImg = data.items[item].enclosure.link
        }else
            urlImg = "utils/img/default.png"

        boolIfImg = data.items[item].description.search("<img")

        if(boolIfImg == -1)
            sHtml += oneColumn(data.items[item].link,data.feed.title,urlImg,decodedString,date,data.items[item].description)
        else    
            sHtml += oneColumnWithNoImg(data.items[item].link,data.feed.title,decodedString,date,data.items[item].description)
    } 

    $("#block-article").html("").html(sHtml)
    
}

/**
 * 
 * Construct article list in card's template from rss's flux
 * 
 * @param {array} data represents rss's flux who from firebase
 */
const constructDoubleRss = (data) => {
    $("#block-article").html("").append("<div id='block-content' class='row'></div>")

    $("#block-content").append("<div id='content-odd' class='col-lg-6 col-md-12'></div>")
                       .append('<div id="content-even" class="col-lg-6 col-md"></div>')

    let sHtmlOdd = ""
    let sHtmlEven = ""
    let countIteration = 0
    const parser = new DOMParser
    for(let item in data.items){
        countIteration = item
        
        let encodedStr = data.items[item].title
        
        let dom = parser.parseFromString(
            '<!doctype html><body>' + encodedStr,
            'text/html'
        )
        let decodedString = dom.body.textContent
        
        dom = parser.parseFromString(
            '<!doctype html><body>' + decodedString,
            'text/html'
        )         
        decodedString = dom.body.textContent
            
        let date = new Date(data.items[item].pubDate)
        let urlImg
        if(data.items[item].enclosure.link != undefined ){
            if(checkURL(data.items[item].enclosure.link))
                urlImg = data.items[item].enclosure.link
        }else
            urlImg = "utils/img/default.png"
        
        if((countIteration++) % 2)
            sHtmlOdd += twoColumns(data.items[item].link,data.feed.title,urlImg,decodedString,date,data.items[item].description)
        else
            sHtmlEven += twoColumns(data.items[item].link,data.feed.title,urlImg,decodedString,date,data.items[item].description)    
    }
    
    $("#content-odd").html(sHtmlOdd)
    $("#content-even").html(sHtmlEven)
}

const constructMultipleRss = (data) => {
    $("#block-article").html("").append("<div id='block-multiple' class='row d-flex flex-wrap'></div>")
    let sHtml = ""
    const parser = new DOMParser
     
    for(let item in data.items){

        let encodedStr = data.items[item].title
        
        let dom = parser.parseFromString(
            '<!doctype html><body>' + encodedStr,
            'text/html'
        )
        let decodedString = dom.body.textContent
        
        dom = parser.parseFromString(
            '<!doctype html><body>' + decodedString,
            'text/html'
        )         
        decodedString = dom.body.textContent
            
        let date = new Date(data.items[item].pubDate)
        let urlImg
        if(data.items[item].enclosure.link != undefined ){
            if(checkURL(data.items[item].enclosure.link))
                urlImg = data.items[item].enclosure.link
        }else
            urlImg = "utils/img/default.png"

        sHtml += multipleColumns(data.items[item].link,data.feed.title,urlImg,decodedString,date)   
    } 

    $("#block-multiple").html(sHtml)
}
