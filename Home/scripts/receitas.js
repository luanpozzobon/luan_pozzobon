const receitas = document.querySelectorAll('.receita');

receitas.forEach((receita, i) => {
    receita.addEventListener('mouseover', mouseOver(i));
    receita.addEventListener('mouseout', mouseOut());
    receita.style.transition = 'opacity 0.7s'
});


function mouseOver(i) {
    return function () {
        receitas.forEach((receita, j) => {
            if (i !== j)
                receita.style.opacity  = 0.15;
        })
    }
}

function mouseOut() {
    return function () {
        receitas.forEach((receita) => {
            receita.style.opacity = 1;
        });
    }
}