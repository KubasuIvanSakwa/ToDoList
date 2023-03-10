const btn1 = document.querySelector(".main-btn")
const txt1 = document.querySelector(".txt1")
const titlecont = document.querySelector(".result")

let render1 = () => {
  const text1 = txt1.value;
  txt1.value = ''

  const element = document.createElement('div')
  element.innerHTML = `
    <h3 class="title">${text1}</h3>
    <input class="text2" type="text" placeholder="add">
    <button type="submit" class="sub-check">
      <i class="fa-solid fa-check"></i>
    </button>
    <button type="reset" class="clear">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `

  const subCheck = element.querySelector('.sub-check')
  const txt2 = element.querySelector('.text2')
  subCheck.addEventListener('click', () => {
    let texxt2 = txt2.value
    txt2.value = ''
    const elem = document.createElement("div")
    elem.classList = "text-result"
    elem.innerHTML = `
      <p>
      ${texxt2}
      <button type="reset" class="sub-clearx">
        <i class="fa-solid fa-xmark"></i>
      </button>
      </p>
    `

    const subClearx = elem.querySelector('.sub-clearx')
    subClearx.addEventListener('click', () => {
      const paragraph = subClearx.parentNode;
      // Remove the paragraph from the document
      paragraph.remove()  
    })

    element.appendChild(elem)
  });

  const clear = element.querySelector('.clear')
  clear.addEventListener('click', () => {
    const paragraph = clear.parentNode;
    // Remove the paragraph from the document
    paragraph.remove()  
  })

  titlecont.appendChild(element);
};

btn1.addEventListener('click', (e) => {
  e.preventDefault()
  render1()
})
