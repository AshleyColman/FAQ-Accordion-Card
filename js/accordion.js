const arrows = document.querySelectorAll('.arrow');

addArrowClickEvents();

function addArrowClickEvents() {
  for (const arrow of arrows) {
    arrow.addEventListener('click', toggleAccordion.bind(this, arrow));
  }
}

function toggleAccordion(_arrow) {
  let accordion = _arrow.parentElement.parentElement;
  if (accordion.classList.contains('collapsed'))
  {
    accordion.classList.remove('collapsed');
    accordion.classList.add('expanded');
  } else {
    accordion.classList.remove('expanded');
    accordion.classList.add('collapsed');
  }
}
