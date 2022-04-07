const url = "https://www.omdbapi.com/?apikey=73119f16&s=harry+potter"
let wrapper = document.querySelector(".wrapper");
fetch(url).then(res => res.json())
.then(data => {

    // console.log(data.Search.Title)
    data.Search.map(e => {
        console.log(e.Title)
        console.log(e.Poster);
        const Div = document.createElement("div")
        const Img = document.createElement("img");
        const name = document.createElement("p");
        name.textContent=e.Title;
        const imgLink = e.src;
        Img.src=e.Poster
        Div.appendChild(Img);
        Div.appendChild(name)
        wrapper.appendChild(Div)
          
    })
})