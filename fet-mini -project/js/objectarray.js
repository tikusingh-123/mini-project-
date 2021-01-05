let movies = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addMovie = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let movie = {
        id: Date.now(),
       
        question: document.getElementById('question').value,
        op1: document.getElementById('op1').value,
        op2: document.getElementById('op2').value,
        op3: document.getElementById('op3').value,
        op4: document.getElementById('op4').valu,
        correct : document.getElementById('correct').value

    }
    movies.push(movie);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {movies} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

    //saving to localStorage
    localStorage.setItem('MyMovieList', JSON.stringify(movies) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addMovie);
});