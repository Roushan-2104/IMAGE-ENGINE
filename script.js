var image = document.getElementById("column");
let area = document.getElementById("row");
var image2 = document.getElementById("column1");
var image3 = document.getElementById("column2");
let search_btn = document.getElementById("search-btn").addEventListener("click", (e)=> {
    e.preventDefault();
    let search = document.getElementById("search").value;
    image.innerHTML = "<em>LOADING....</EM>"
    image2.innerHTML = "<em>LOADING....</EM>";
    image3.innerHTML = "<em>LOADING....</EM>";
    setTimeout(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=DGfGVXwxqqVycp_z7n31Qk5DxX1EbSgN6FjOni26A50&page=1&per_page=100&order_by=popular`)
    .then(respose => respose.json())
    .then(data =>{
            image.innerHTML = "";
            data.results.forEach(photo => {
            image.insertAdjacentHTML('afterbegin',`<div class ="image"><img src="${photo.urls.small}" /><a href ="https://unsplash.com/photos/${photo.id}/download?force=true"><i class='fas fa-download download novisible'></i></a></div>`)
        });   
    });
    fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=DGfGVXwxqqVycp_z7n31Qk5DxX1EbSgN6FjOni26A50&page=2&per_page=100&order_by=popular`)
    .then(respose => respose.json())
    .then(data =>{
        image2.innerHTML = "";
        data.results.forEach(photo => {
            image2.insertAdjacentHTML('afterbegin',`<div class ="image"><img src="${photo.urls.small}" /><a href ="https://unsplash.com/photos/${photo.id}/download?force=true"><i class='fas fa-download download novisible'></i></a></div>`)
        }); 
    });
    fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=DGfGVXwxqqVycp_z7n31Qk5DxX1EbSgN6FjOni26A50&page=3&per_page=100&order_by=popular`)
    .then(respose => respose.json())
    .then(data =>{
        image3.innerHTML = "";
        data.results.forEach(photo => {
            image3.insertAdjacentHTML('afterbegin',`<div class ="image"><img src="${photo.urls.small}" /><a href ="https://unsplash.com/photos/${photo.id}/download?force=true"><i class='fas fa-download download novisible'></i></a></div>`)
        });
    });
    }, 1000);
    setTimeout(() => {
            let novisible = document.querySelectorAll(".novisible");
            novisible.forEach(node => {
            node.classList.remove("novisible");
            node.classList.add("visible");
        })
    }, 6000);
});
