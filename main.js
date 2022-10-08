const elList = document.querySelector(".movies-list");
const elTemplate = document.querySelector(".movies-template").content;

const elFragment = new DocumentFragment();

kinolar.splice(101);

kinolar.forEach((item, index) => {
  let cloneTemplate = elTemplate.cloneNode(true);

  cloneTemplate.querySelector(".movies-title").textContent = item.title;
  cloneTemplate.querySelector(".movies-order").textContent = index + 1;
  cloneTemplate.querySelector(".movies-cast").textContent = item.cast.join();
  cloneTemplate.querySelector(".movies-gener").textContent = item.genres.join();

  elFragment.appendChild(cloneTemplate);
});

elList.appendChild(elFragment);
