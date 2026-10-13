let grid = document.getElementById("gameGrid");
let resetBtn = document.getElementById("resetBtn");
let msg = document.getElementById("message");
let grids = [];
let shipsFound = 0;
let totalClicks = 0;

function createGrid() 
{
    grid.innerHTML="";
    grids=[];
    for (let i=0;i<16;i++)
    {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        grids.push(cell);
        grid.appendChild(cell);
    }
}

function placeShips() 
{
    let shipPos=[];
    while (shipPos.length<5) 
    {
        let randomPos = Math.floor(Math.random()*16);
        if (!shipPos.includes(randomPos)) 
        {
            shipPos.push(randomPos);
        }
    }

    for (let i=0;i<16;i++) 
    {
        if (shipPos.includes(i)) 
        {
            grids[i].dataset.ship="yes";
        }
        else 
        {
            grids[i].dataset.ship="no";
        }
    }
}

function openCell(cell) 
{
    if (cell.dataset.clicked === "yes") 
    {
        return;
    }
    if (totalClicks >= 8 || shipsFound === 5) 
    {
        return;
    }
    totalClicks++;
    cell.dataset.clicked = "yes";
    let image = document.createElement("img");
    if (cell.dataset.ship === "yes") 
    {
        image.src = "ship.png";
        shipsFound++;
    }
    else 
    {
        image.src = "water.png";
    }
    cell.appendChild(image);
    if (shipsFound === 5) 
    {
        msg.textContent = "You Won!";
        alert("You Won!");
    } 
    else if (totalClicks === 8) 
    {
        msg.textContent = "You Lost!";
        alert("You Lost!");
    }
}

function startGame() 
{
    shipsFound=0;
    totalClicks=0;
    msg.textContent="";
    createGrid();
    placeShips();
    for (let i=0;i<grids.length;i++) 
    {
        grids[i].addEventListener("click", function() {
            openCell(grids[i]);
        });
    }
}
resetBtn.addEventListener("click", function() 
{
    startGame();
});

startGame();
