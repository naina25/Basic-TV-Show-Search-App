const form = document.querySelector(".searchForm");
let imagesArr = [];

form.addEventListener("submit", async function(e){
    e.preventDefault();
    for(let i=imagesArr.length-1; i >= 0 ; i--){
        imagesArr[i].src= "";
        imagesArr.pop()
    }
    const searchItem = form.elements.query.value;
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchItem}`);
    const data = response.data;
    makeImages(data);
    form.elements.query.value = "";
})

function makeImages(shows){
    for(let result of shows){
        if(result.show.image){
            const image = result.show.image.medium;
            newImage = document.createElement("img");
            newImage.src = image;
            document.body.append(newImage);
            imagesArr.push(newImage);
        }  
    }
}
