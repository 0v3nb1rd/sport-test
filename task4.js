////////////////////////////////////////////////////////////////////////////////
//////////! --------------------- Task 4 -------------- ////////////////////////
// 1. To complete the task, use the website developed in the 1st HTML/CSS topic of the course.
// 2. On the “Fans” page, add a function that will be called when adding a fan appeal.
// 3. When adding a fan appeal, the function must validate the entered data (fields must not be empty),
// add the date of publication and publish the appeal in the list of appeals on the current page.
// After successful publication - clear input fields without reloading the page.
///////////////////////////////////////////////////////////////////////////////////

const articleForm = document.forms.appeal;
const content = document.querySelector('.content');

articleForm.addEventListener('submit', newArticle);

function newArticle(e) {
  e.preventDefault();
  const textarea = e.target.querySelector('.textarea');

  if (!validation(textarea.value)) return;
  const newArt = cloneArt(textarea.value);
  content.insertAdjacentElement('afterbegin', newArt);
  textarea.value = '';
}

function cloneArt(textarea) {
  const article = document.querySelector('.fan-article').cloneNode(true);
  article.querySelector('.txt').textContent = textarea;
  article.querySelector('time').textContent = createDate();
  return article;
}

function createDate() {
  let d = new Date();
  return `${d.getDate()}.${
    d.getMonth() + 1
  }.${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}`;
}

function validation(val) {
  try {
    switch (true) {
      case val === '':
        throw new Error('Please write some text :-|');
      case val.length < 10:
        throw new Error('Text must be at least 10 symbols');
    }
    return true;
  } catch (err) {
    alert(err);
  }
}
