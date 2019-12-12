export default function handleClick() {
  const daysBtn = document.querySelectorAll('.days li');
  const closeBtn = document.querySelectorAll('.close');
  const modalDay = document.querySelector('.modal-day-container');
  const modalMonth = document.querySelector('.modal-month');
  const historyMenu = document.querySelector('.menu .hist')
  const eventArray = ['click', 'touchstart'];
  
  function addActive(modal) {
    modal.classList.add('active');
  }
  
  function removeActive() {
    modalDay.classList.remove('active');
    modalMonth.classList.remove('active');
  }
  
  
  eventArray.forEach(evento => {
    daysBtn.forEach(item => {
      item.addEventListener(evento, () => {
        addActive(modalDay);
      });
    })
    historyMenu.addEventListener(evento, () => {
      addActive(modalMonth);
    })
    closeBtn.forEach((btn => {
      btn.addEventListener(evento, removeActive);
    }))
  })
}
