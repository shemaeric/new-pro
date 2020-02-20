
// Get the element that to be toggled
const getEl = document.getElementsByClassName('item')

for(let i=0; i < getEl.length; i++) {
    // add the event listener
    getEl[i].addEventListener('click', () => {
        getEl[i].classList.toggle('active');
        // get the content next to the clicked item
        let content = getEl[i].nextElementSibling;
        // change the css for the contents to be shown
        if(content.style.display == 'block') {
            content.style.display = 'none'
        } else {
            content.style.display = 'block'
        }
    })
}