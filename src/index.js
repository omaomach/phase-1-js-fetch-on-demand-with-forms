const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log(e);
        // console.log(e.target.children[1].value); // target the second child of our form element
        const searchInput = document.querySelector('input#searchByID');
        console.log(searchInput.value);

        fetch(`http://localhost:3000/movies/${searchInput.value}`)
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4')
            const summary = document.querySelector('section#movieDetails p')

            title.innerText = data.title;
            summary.innerText = data.summary;

        })

    })
  
}

document.addEventListener('DOMContentLoaded', init);