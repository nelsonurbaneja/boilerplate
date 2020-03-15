export const comments = id => {
    const fbComments = `<div class = "fb-comments" data-href = "${location.href}" data-width = "" data-numposts = "5" > </div>`
    const container = document.getElementById(id)
    addEventListener('DOMContentLoaded', () => {
        if(id) container.innerHTML = fbComments
    })
}

comments('container')