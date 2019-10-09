const errorRss2Json = (title,content) => {
    return `
        <div class="modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${title}</h5>
                    </div>
                    <div class="modal-body">
                        <p>${content}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onclick="closeModal()">
                            Fermer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
}