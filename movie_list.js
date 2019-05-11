// Agarro las cosas

const buscador = document.querySelector("input")
const ul = document.querySelector("ul")


buscador.onkeyup = function() {
            buscada = buscador.value;
            if (buscada.length > 0) {
    const prom = fetch("https://api.themoviedb.org/3/search/movie?api_key=a70dbfe19b800809dfdd3e89e8532c9e&query=" + buscada);
    prom.then(res => res.json())
    .then (movie => {
        let lis = "";
        for (let i=0; i<movie.results.length; i++) {
            const titulo = movie.results[i].title
            console.log(titulo) 
            lis += `<li> ${titulo} </li>`;
        }
        ul.innerHTML = lis;
        ul.style.display = "block";
        })
    } else {
        ul.style.display = "none"
    }
}
