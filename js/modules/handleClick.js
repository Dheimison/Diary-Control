export default function handleClick() {
  const daysBtn = document.querySelectorAll('.days li');
  const closeBtn = document.querySelectorAll('.close');
  const menuBtn = document.querySelector('.btnMenu');
  const menuMobile = document.querySelector('.menuMobile');
  const menuBack = document.querySelector('.backIcon');
  const calendarMobile = document.querySelectorAll('.calendarMobile');
  const sectionToday = document.querySelector('.today');
  const sectionCalendar = document.querySelector('.calendar');
  const modalDay = document.querySelector('.modal-day-container');
  const modalMonth = document.querySelector('.modal-month');
  const historyMenu = document.querySelector('.menu .hist');
  const eventArray = ['click', 'touchstart'];
  
  function addClass(element, classes) {
    element.classList.add(classes);
  }
  
  function removeClass(element, classes) {
    element.classList.remove(classes);
  }
  
  
  eventArray.forEach(evento => {

    daysBtn.forEach(item => {
      item.addEventListener(evento, () => {
        addClass(modalDay, 'active');
      });
    });

    historyMenu.addEventListener(evento, () => {
      addClass(modalMonth, 'active');
    });

    menuBtn.addEventListener(evento, () => {
      addClass(menuMobile, 'activeMobile')
    });

    menuBack.addEventListener(evento, () => {
      removeClass(menuMobile, 'activeMobile')
    });
    calendarMobile[0].addEventListener(evento, () => {
        addClass(sectionToday, 'todayOff');
        addClass(calendarMobile[0], 'backBtn');
        removeClass(sectionCalendar, 'calendarOff');
        removeClass(calendarMobile[1], 'backBtn');
    });
    calendarMobile[1].addEventListener(evento, () => {
      removeClass(sectionToday, 'todayOff');
      addClass(calendarMobile[1], 'backBtn');
      addClass(sectionCalendar, 'calendarOff');
      removeClass(calendarMobile[0], 'backBtn');
  })

    closeBtn[0].addEventListener(evento, () => {
      removeClass(modalDay, 'active')
    });

    closeBtn[1].addEventListener(evento, () => {
      removeClass(modalMonth, 'active')
    });
  })
}