const form = document.querySelector(".searchForm");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const searchItem = form.elements.query.value;
})