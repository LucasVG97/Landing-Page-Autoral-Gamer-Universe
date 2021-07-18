$('.owl-carousel').owlCarousel({
    loop: false, //efeito de loop
    margin: 15, //margem entre ícones
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2 //quando tiver 600px ou menos, 3 itens na tela
        },
        1000: {
            items: 3 //quando tiver 1000px ou mais, 5 itens na tela
        }
    }
})