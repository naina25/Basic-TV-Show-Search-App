const form = document.querySelector(".searchForm");
const imageDiv = document.querySelector(".imageDiv");

form.addEventListener("submit", async function(e){
    e.preventDefault();
    const searchItem = form.elements.query.value;
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchItem}`);
    const data = response.data;
    for(let i=0 ; i < data.length-1; i++){
        const image = data[i].show.image.medium;
        const newImage = document.createElement("img");
        newImage.src = image;
        document.body.append(newImage);
    }
})
