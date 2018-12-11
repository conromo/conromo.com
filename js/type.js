var app = document.getElementById('demoPortfolio');
var typewriter = new Typewriter(app,{
    loop:true
})

typewriter.typeString('Hi ! Thanks for getting in touch with us.')
    .pauseFor(3000)
    .deleteAll()
    .typeString('We are working diligently.')
    .pauseFor(3000)
    // .deleteChars(8)
    // .typeString('gfjgfjgfjgfjf !')
    .start()
