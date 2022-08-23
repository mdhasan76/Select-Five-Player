// get Element value in Number with this Function
function getElementValue(element) {
    const id = document.getElementById(element);
    const idString = id.value;
    const idNumber = parseInt(idString);
    return idNumber;
}



































// const arr = [];
// function getName(element) {
//     const childr = document.getElementById('selected');
//     const name = element.parentNode.children[0].innerText;
//     // const childrenN = element.parentNode.children[0].children.innerText;
//     // const childrenNumber = parseInt(childrenN);
//     const newUl = document.getElementById('new-ol');
//     const ol = document.createElement('ol');
//     const li = document.createElement('li');
//     // const span = document.createElement('span')
//     arr.push(name);
//     childr.innerText = arr.length;
//     // console.log(arr)
//     li.innerText = arr.length + ' . ' + '  ' + name;

//     ol.appendChild(li);
//     newUl.append(ol);
//     ol.style.listStyle = 'none';
//     // console.log(element.parentNode.children[0].innerText)
// }