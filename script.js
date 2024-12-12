
//setting a function (my textarea searchbar, having it print out error  message )


function searchBar(){
    let input= document.getElementById('search-bar').value;
    console.log('This search bar does not work yet');



//opens  search in another window
window.open(`https://www.google.com/search?q=${input}`, '_blank')
}
