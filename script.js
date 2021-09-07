var image = document.getElementById("photos");
let search_btn = document.getElementById("search-btn").addEventListener("click", (e)=> {
    e.preventDefault();
    let search = document.getElementById("search").value;
    image.innerHTML = "<em>LOADING....</EM>"
    let download = "<i class='fas fa-download' id='download'></i>"
    fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=DGfGVXwxqqVycp_z7n31Qk5DxX1EbSgN6FjOni26A50&per_page=100`)
    .then(respose => respose.json())
    .then(data =>{
        setTimeout(() => {
            image.innerHTML="";
            data.results.forEach(photo => {
            image.insertAdjacentHTML('afterbegin',`<div id="img"><img src="${photo.urls.small}" /><a href ="https://unsplash.com/photos/${photo.id}/download?force=true">${download}</a></div>`)
            });
        }, 1000);
        
    })
});