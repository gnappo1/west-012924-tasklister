document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')
  const description = document.querySelector('#new-task-description')
  const ul = document.querySelector('#tasks')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const task = description.value;
    const li = document.createElement('li');
    li.innerText = task
    //! create a button
    const button = document.createElement('button')
    //! give it an "x" as text
    button.innerText = 'x'
    button.addEventListener('click', () => li.remove())
    // button.addEventListener('click', (e) => e.target.parentNode.remove())
    li.appendChild(button)
    ul.append(li)
    e.target.reset()
  }

  form.addEventListener('submit', handleSubmit)
});