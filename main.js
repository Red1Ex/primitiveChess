const cells = document.querySelectorAll(".cell");
const items = document.querySelectorAll(".item");
const blacks = document.querySelectorAll(".black")
const whites = document.querySelectorAll(".white")
const lostCellsFirst = document.querySelectorAll(".lost__sell__first")
const lostCellsSecond = document.querySelectorAll(".lost__sell__second")
let lastItem = items;
let beforeItem = items;
let attackFig;

items.forEach(item=>{
    item.addEventListener("dragstart", function(){
        setTimeout(function(){
            item.classList.add("hidden")
        },0);
        lastItem = item;
    })
    
    item.addEventListener("dragend", function(){
        item.classList.remove("hidden");
    })
})

cells.forEach(cell=>{
    cell.addEventListener("dragover", function(e){
        e.preventDefault();
    })
    cell.addEventListener("drop", function(){
        cell.append(lastItem);
        cell.classList.remove("superStyle");
        if (cell.childElementCount == 2){
            moveToLost(attackFig);
            attackFig.remove();
        }
        beforeItem = lastItem;
    });
    

    

    cell.addEventListener("dragenter", function(){
        cell.classList.add("superStyle");
        if (cell.childElementCount != 0){
            attackFig=cell.children[0];
        }
    });
    cell.addEventListener("dragleave", function(){
        cell.classList.remove("superStyle");
    });

});

function moveToLost(fig){
    let lostCells = fig.classList.contains("black") ? lostCellsFirst : lostCellsSecond;
    for (let i = 0; i < lostCells.length; i++){
        if (lostCells[i].childElementCount == 0){
            lostCells[i].append(fig.cloneNode(true));
            break
        }
    }
}

