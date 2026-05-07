
//Game Loop
export function drawEasyGame () {
    //requestAnimationFrame (drawEasyGame);
    loadQs ();
    //clearScreen ();
    
}

async function loadQs () {
    const fetchQs = await fetch ("https://opentdb.com/api.php?amount=10&category=19&difficulty=easy&type=multiple");
    const data = await fetchQs.json ();
    console.log (data);
}
