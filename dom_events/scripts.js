////////////////////////////////////////////////////////////////////////////////
//////////! --------------------- Task 1 -------------- ////////////////////////
// The HTML page has an unordered list with id = "list", which consists of 5 elements.
// You need to refer to the corresponding element of the list, subtract its content and output it to the console.
// The order of reading and displaying the contents of the list items is as follows:
// 1) the first element of the list
// 2) the last item in the list
// 3) second element of the list
// 4) the fourth element of the list
// 5) the third element of the list
////////////////////////////////////////////////////////////////////////////////

(function () {
  orderElements1('list', [1, 5, 2, 4, 3]); // First example
  // orderElements2('list', [1, 5, 2, 4, 3]); // Second example

  function orderElements1(id, arr = []) {
    const documentList = document.getElementById(id);
    if (!documentList) return null; // check if documet has id

    let res = [];
    const sortArr = [...documentList.children];

    for (let i in sortArr) {
      res.push(' ' + sortArr[arr[i] - 1].textContent);
    }

    return console.log(`Output result:${res}`);
  }
})();
////////////////////////////////////////////////////////////////////////////////
//////////! --------------------- Task 2 -------------- ////////////////////////
// Write a script that uses DOM to style the page as shown below:
//////////////////////////////////////////////////////////////////////////////////
(function () {
  document.querySelector('h1').style.background = '#90EE90';

  const myDiv = document.querySelector('#myDiv');
  const myList = document.querySelector('#myList');

  myDiv.firstElementChild.style.fontWeight = 'bold';
  myDiv.children[1].style.color = 'red';
  myDiv.children[2].style.textDecoration = 'underline';
  myDiv.lastElementChild.style.fontStyle = 'italic';

  myList.setAttribute('style', 'display:flex;');
  [...myList.children].forEach((el) => {
    el.style.listStyle = 'none';
  });

  myList.nextElementSibling.style.visibility = 'hidden';
})();

////////////////////////////////////////////////////////////////////////////////
//////////! --------------------- Task 3 -------------- ////////////////////////
// Implement a program that displays
// -  the message "I was pressed!" when you click the button,
// -  displays the message "Mouse on me!" when you hover the button,
// -  displays the message "Mouse is not on me!" when you move the mouse cursor.
///////////////////////////////////////////////////////////////////////////////////
(function () {
  const myBtn = document.querySelector('#myBtn');

  myBtn.addEventListener('click', onBtnCLick);
  myBtn.addEventListener('mouseover', onMouseOver);
  myBtn.addEventListener('mouseout', onMouseOut);

  function onBtnCLick(e) {
    e.preventDefault();
    myBtn.insertAdjacentElement('afterend', createEl('I was pressed'));
  }
  function onMouseOver() {
    myBtn.insertAdjacentElement('afterend', createEl('Mouse on me!'));
  }
  function onMouseOut() {
    myBtn.insertAdjacentElement('afterend', createEl('Mouse is not on me!'));
  }

  function createEl(txt = 'empty text') {
    const div = document.createElement('div');
    div.style.marginTop = '5px';
    div.textContent = txt;
    return div;
  }
})();
