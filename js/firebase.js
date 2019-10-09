// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6XzKye1p-3wmrfg37mxg7FyNztCVV6VI",
    authDomain: "myrssflux.firebaseapp.com",
    databaseURL: "https://myrssflux.firebaseio.com",
    projectId: "myrssflux",
    storageBucket: "",
    messagingSenderId: "820818878619",
    appId: "1:820818878619:web:c4e1af7e17f87bc9c9e63e"
}
// Initialize Firebase
var firebase = firebase.initializeApp(firebaseConfig);

// construct list of rss from firebase
const leadsRef = firebase.database().ref()
leadsRef.on('value', function(snapshot) {
    let sHtml = ""
    snapshot.forEach(function(childSnapshot) {
        data = childSnapshot.val()
            sHtml += `<li 
                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                        style="cursor:pointer" 
                        onclick=apiRssJson("${data.url}","false")
                      >${data.name}
                        <span class="badge badge-danger badge-pill" onclick=deleteRss('${data.key}')>X</span>                              
                      </li>
                      `         
    })
    document.getElementById("list-rss").innerHTML = sHtml
})

/**
 * 
 * add new rss flux
 * 
 * @param {array} dataRss represents rss datas from firebase
 */
const addFluxRss = (dataRss = "",boolVerifUrl = true) => {
    let name = $("#name_news").val()
    let keyName
    let rssTitle
    let url = $("#url_rss").val()

    let checkUrl = validURL(url)
    if(checkUrl && boolVerifUrl){
        if(dataRss == "")
            apiRssJson(url)
        else{
            rssTitle = dataRss.feed.title
            keyName = (name+rssTitle).split(/\W/g).join("_")
    
            let ref = firebase.database().ref(`${keyName}`)
            let rss = {
                key: `${keyName}`,
                name: `${name}`,
                url: `${url}`
            }
            $("#name_news").val("")
            $("#url_rss").val("")

            $("#url_rss").attr("class","form-control")
            $(".invalid-feedback").html("")
    
            ref.set(rss)
        }
    }else{
        $("#url_rss").attr("class","form-control is-invalid")
        $(".invalid-feedback").html("L'url est invalide")
                              .css("font-size","medium")
    }
    
}

/**
 * 
 * Delete rss's flux
 * 
 * @param {string} idRss Key element represents his id
 */
const deleteRss = (idRss) => {
    ref = firebase.database().ref(idRss)
    ref.remove()
}