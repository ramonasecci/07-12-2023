const eleBtnLoad = document.querySelector('#btnLoad')
const eleBtnOtherLoad = document.querySelector('#btnOtherLoad')
const elePhotosContainer = document.querySelector('#photosContainer')
const elesearchImages = document.querySelector('#searchImages')
const natureImagesUrl = 'https://api.pexels.com/v1/search?query=nature&per_page=10'
const oceanImagesUrl = 'https://api.pexels.com/v1/search?query=ocean&per_page=10'


/*1) Premere sul bottone "Load Images" caricherà il contenuto delle API nella pagina: 
     https://api.pexels.com/v1/search?query=[your-query]*/


const getImages = async (url) => {
    const response = await fetch(url, {
        headers: {
            Authorization: 'CFIbTT4N4L1KHNqDnoiNvNt5SoVkXldAFkJFRUKJs24z2I7kxFJKpoxs'
        }
    })
    const images = await response.json()
    const photosDetails = images.photos
    console.log(photosDetails)
    let htmlContentCards = ''
    photosDetails.forEach((photo) => {    
        htmlContentCards += `<div class="col-md-4 delete">
        <div class="card mb-4 shadow-sm">
            <img src="${photo.src.original}" class="card-img-top" alt="${photo.alt}">
          <div class="card-body">
            <h5 class="card-title">${photo.alt}</h5>
            <p class="card-text">${photo.photographer}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="" class="btn btn-sm btn-outline-secondary">
                  View
                </a>
                <button type="button" class="btn btn-sm btn-outline-secondary hide">
                  Hide
                </button>
              </div>
              <small class="text-muted">${photo.id}</small>
            </div>
          </div>
        </div>
      </div>`        
    });
    elePhotosContainer.innerHTML = htmlContentCards
    elesearchImages.innerHTML = `<div class="d-flex align-items-center justify-content-center">
        <input class="me-2 mx-1" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-secondary" type="submit">Search</button>
        </div>`
    const eleBtnsHide = document.querySelectorAll('.hide')
    eleBtnsHide.forEach((eleBtnHide)=>{
        eleBtnHide.addEventListener('click', function(event) {
            this.closest('.delete').remove()
        })
    })
}

eleBtnLoad.addEventListener('click', (e)=>{
    getImages(natureImagesUrl)
})

/* 2) Premere sul bottone "Load Secondary Images" invece dovrà usare una diversa 
query:https://api.pexels.com/v1/search?query=[your-secondary-query]*/

eleBtnOtherLoad.addEventListener('click', (e)=>{
    getImages(oceanImagesUrl)
})

//3) Il tasto "Edit" andrà sostituito con un tasto "Hide".ok

//4) Quando si preme "Hide", l'intera card dovrebbe scomparire.ok

/*5) Sostituisci il testo "9 mins" del template delle card 
con l'id dell'immagine corrispondente..ok*/


/*6) Nella sezione principale aggiungi un campo di ricerca. 
Usa il valore di questo campo per cercare nuove immagini rimpiazzando quelle esistenti.*/

/*7) Cliccare l'immagine o il suo nome farà cambiare pagina 
verso una di dettaglio dell'immagine. Qui dovrai visualizzare immagine, 
nome artista e linkare la sua pagina personale. 
Dai la possibilità all'utente di tornare indietro.*/

