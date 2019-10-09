const oneColumn = (link,title,urlImg,title_article,date,description) => {
    return `
        <div class="jumbotron card_link mt-3">
            <a href="${link}" target="_blank">
                <div class="" style="margin-bottom: 18%">
                    <img class="" src="${urlImg}" alt="image" style="width: 200px;height:200px;float: left;border-radius:50px;margin-right:5%">
                    <h3 class="" style="margin-left: 22%"><strong>${title_article}</strong></h3>
                    <p class="lead" style="margin-left: 22%">
                        ${description}
                    </p>                
                </div>
                <hr class="">
                <span class="ml-3"><i>Article du ${date.getDate()}/${date.getMonth()}/${date.getYear()}</i></span>
                <h4>${title}</h4>
            </a>
        </div>
    `
}

const oneColumnWithNoImg = (link,title,title_article,date,description) => {
    return `
        <div class="jumbotron card_link mt-3">
            <a href="${link}" target="_blank">
                <div class="" style="margin-bottom: 18%">
                    <h3 class="text-center mb-4"><strong>${title_article}</strong></h3>
                    <p class="lead content_img">${description}</p>                
                </div>
                <hr class="">
                <span class="ml-3"><i>Article du ${date.getDate()}/${date.getMonth()}/${date.getYear()}</i></span>
                <h4>${title}</h4>
            </a>
        </div>
    `
}

const twoColumns = (link,title,urlImg,title_article,date,description) => {
    return `
        <div class="card bg-light mt-3 ml-1 mr-1 card_link clearfix" style="max-width: 36rem;">
            <a href="${link}" target="_blank">
                <h1 class="card-header p-2 title_article">${title}</h1>
                <div class="card-body">
                    <div class="container">
                        <div class="row mb-2">
                            <img 
                                class="col-sm-6 img_article"
                                src="${urlImg}" 
                                alt="image"
                            >
                            <h3 class="card-title text-center col-sm">${title_article}</h3>
                        </div>    
                    </div>
                    <span class="ml-3"><i>Article du ${date.getDate()}/${date.getMonth()}/${date.getYear()}</i></span>
                    <p style="font-size:17px" class="card-text p-2 description_title">${description}</p>
                </div>
            </a>
        </div>
    `
}

const multipleColumns = (link,title,urlImg,title_article,date) => {
    return `
        <div class="card bg-light card_link mb-2 m-0 m-md-3 p-1 col-12 col-sm-6 col-md-4 col-xl-2">
            <a class="thumbnail" href="${link}" target="_blank">
                <img src="${urlImg}" alt="image" style="height:initial!important;width:100%">
                <div class="caption">
                    <h3 class="card-title text-center col-sm title_article" style="font-size:medium">${title_article}</h3>
                    <span class="ml-3"><i>Article du ${date.getDate()}/${date.getMonth()}/${date.getYear()}</i></span>
                </div>
            </a>
            <h3 class="p-2 title_article">${title}</h3>
        </div>
    `
}

