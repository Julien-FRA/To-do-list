
// Créer une tasq
let unvalidatedTasqList = document.getElementById('unvalidated-tasq-list'); 
function createTasq(content, category) {
    // Attribuer à html le contenu de la div
    let html = `<div class="col-12 mb-3">
                    <div class="card `+ category +`">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <input type="checkbox" class="tasq-checkbox" onchange="validateTasq(this)">
                                </div>
                            </div>
                            <input type="text" class="form-control" disabled value="`+ content +`">
                        </div>
                    </div>
                </div>`;
    unvalidatedTasqList.insertAdjacentHTML('afterbegin', html);
}

let create = document.getElementById('createTasq');
let content = document.getElementById('content');
let categories = document.getElementById('categories');
create.addEventListener('click', function() {
    createTasq(content.value, categories.value)
});

// Valider une tasq
let validatedTasqList = document.getElementById('validated-tasq-list'); 
// On envoit la checkbox cliqué en paramètre
function validateTasq(tasq) {
    // On recherche la div parent avec la class .col-12 là plus proche
    let element = tasq.closest(".col-12");
    // On move la div dans la list des tasq validés
    validatedTasqList.appendChild(element);
    // On désactive le clique de la checkbox
    tasq.disabled = true;
}
