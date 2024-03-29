/**
 * test if url is conform with regex's url
 * 
 * @param {string} url represent url who will be testing
 */
const validURL = (url) => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url)
}

/**
 * check if url have image extension
 * 
 * @param {string} url url image of flux rss
 */
const checkURL = (url) => {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null)
}