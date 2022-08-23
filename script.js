//Get Player name onclick Function
const arr = [];

function playerName(element) {
    const name = element.parentNode.children[0].innerText;
    const ol = document.createElement('ol');
    const li = document.createElement('li');

    if (arr.length >= 5) {
        alert('You can\'t select more then Five Plalyers');
        element.disabled = false;
        return;
    }
    arr.push(name);
    ol.style.listStyle = 'none';
    li.innerText = arr.length + " . " + name;
    ol.append(li);

    const newOl = document.getElementById('new-ol');
    newOl.appendChild(ol);
    element.disabled = true;
    console.log('btn clicked')
}

// Total Player Cost  

document.getElementById('player-expenses-btn').addEventListener('click', function () {
    const perPlayerExpenses = getElementValue('per-player');
    const playerCost = document.getElementById('player-total-cost');


    if (isNaN(perPlayerExpenses)) {
        return alert('Please enter Valid number . we don\'t accept any text');
    }
    else if (perPlayerExpenses < 0) {
        return alert('Please enter Intiger number . we don\'t accept nagetive number');
    }

    playerCost.innerText = perPlayerExpenses * arr.length;

});


// Managment Cost Calculation 
document.getElementById('total-cost').addEventListener('click', function () {
    const totalCostId = document.getElementById('total');
    const totalPlayerCost = document.getElementById('player-total-cost');
    const totalPlayerCostNumber = parseInt(totalPlayerCost.innerText);
    const managerCost = getElementValue('manager');
    const coachCost = getElementValue('coach');
    const total = totalPlayerCostNumber + managerCost + coachCost;


    if (isNaN(managerCost) || isNaN(coachCost)) {
        return alert('Please enter Valid number . we don\'t accept any text')
    }
    else if (managerCost < 0 || coachCost < 0) {
        return alert('Please enter Intiger number . we don\'t accept nagetive number');
    }

    totalCostId.innerText = total;
});