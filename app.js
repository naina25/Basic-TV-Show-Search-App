const form = document.querySelector(".searchForm");
const imageDiv = document.querySelector(".imageDiv");

form.addEventListener("submit", async function(e){
    e.preventDefault();
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
            const newImage = document.createElement("img");
            newImage.src = image;
            document.body.append(newImage);
        }  
    }
}