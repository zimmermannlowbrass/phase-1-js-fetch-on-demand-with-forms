const init = () => {
    const inputForm = document.querySelector("form")
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const info = document.querySelector("input#searchByID")

        console.log(info.value)
        fetch(`http://localhost:3000/movies/${info.value}`)
            .then((resp) => resp.json())
            .then((data) => {
                const title = document.querySelector("section#movieDetails h4")
                const summary = document.querySelector("section#movieDetails p")

                title.innerText = data.title
                summary.innerText = data.summary
            })
    })
  
}

document.addEventListener('DOMContentLoaded', init);