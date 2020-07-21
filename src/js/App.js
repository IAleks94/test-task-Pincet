// import jQuery from 'jquery';
// import bootstrap from 'bootstrap';
// import popper from 'popper.js';
// import { info } from './constants';
// import slider from './swiper';
// import slide from './Card';
// import getMoviesData from './getData';
// import { search } from './inputSearch';
// import keyboard from './keyboard';

// const state = {
//   searchWord: 'back',
//   page: 1,
//   lastPage: 0,

//   setLastPage(lastPage) {
//     this.lastPage = lastPage;
//   },
//   setSearchWord(searchWord) {
//     this.searchWord = searchWord;
//     this.page = 1;
//   },
// };

// const createCard = async (swiper, isSearch = false) => {
//   const dataSearch = await getMoviesData(state);
//   if (typeof dataSearch === 'string') {
//     info.textContent = `There are ${dataSearch} to "${state.searchWord}" search `;
//   } else {
//     if (isSearch) {
//       swiper.removeAllSlides();
//       swiper.slideTo(0);
//     }
//     const moviesCard = dataSearch.map((item) => slide(item));
//     swiper.appendSlide(moviesCard);
//     jQuery(() => {
//       jQuery('[data-toggle="tooltip"]').tooltip();
//     });
//   }
// };

// state.createCard = createCard;
// const mySwiper = slider(state);
// search(state, mySwiper);
