/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import '../css/style.scss';

const form = document.querySelector('.UpQualificationForm');
const popupLearn = document.querySelector('.popupLearn');
const popupWait = document.querySelector('.popupWait');
const btnSubscribe = document.querySelector('.subscribe');
const btnGetCard = document.querySelector('.getCard');
const btnClosePopup = document.querySelectorAll('.closePopup');
const linkLookMap = document.querySelector('.lookMap');
const map = document.querySelector('#map');

function showPopupHandler() {
  popupLearn.classList.add('show');
}

function closePopupHandler(event) {
  const { target } = event;
  target.parentElement.classList.remove('show');
}

let myMap;

function init() {
  // Создание карты.
  myMap = new ymaps.Map('map', {
    center: [52.093333, 23.698168],
    zoom: 16,
  });
  myMap.geoObjects.add(
    new ymaps.Placemark(
      [52.093333, 23.698168],
      {
        balloonContent: 'вам <strong>сюда</strong>',
      },
      {
        preset: 'islands#greenDotIconWithCaption',
      },
    ),
  );
}

function mapVisionHandler() {
  init();
}

function mapEnvisionHandler() {
  myMap.destroy();
}

btnSubscribe.addEventListener('click', showPopupHandler);
btnGetCard.addEventListener('click', showPopupHandler);
btnClosePopup.forEach((item) => item.addEventListener('click', closePopupHandler));
linkLookMap.addEventListener('mouseover', mapVisionHandler);
linkLookMap.addEventListener('mouseout', mapEnvisionHandler);

function submitHandler(event) {
  event.preventDefault();
  const isValid = form.checkValidity();
  if (isValid) {
    popupLearn.classList.remove('show');
    popupWait.classList.add('show');
  }
}

form.addEventListener('submit', submitHandler);
