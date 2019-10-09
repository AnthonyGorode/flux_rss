/**
 * call api rss and compile xml datas to json datas
 * 
 * @param {integer} urlRss url of rss flux
 * @param {boolean} bool 
*/
const apiRssJson = (urlRss,bool=true) => {
    apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${urlRss}&api_key=howhh9tve5q4xksvzst3clyaasb5ozxc6ez0zaty`
    fetch(apiUrl).then(
        response => {
            if(response.ok)
                response.json().then(
                    data => {
                        constructDefaultRss(data)
                        constructOnclickIcons()
            
                        // affect datas' rss in global state
                        State.data = data
            
                        if(bool == true)              
                            addFluxRss(data)
                    }
                )
            else
                addFluxRss(data,response.ok)
        }
    ).catch(
        error => {
            constructModalErrorRssJson(error)
        }
    )

}