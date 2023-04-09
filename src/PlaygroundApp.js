import { data } from "./data.js";

const card = document.querySelector("#card");

const cards = () => {
  const cardInfo = data.map((data) => {
    return `
      <div class="h-[300px] w-11/12 bg-slate-200 rounded-lg flex items-center justify-start flex-col relative">
        <h3 class="text-center text-xl my-2">${data.title}</h3>
        <img
          src="${data.image}"
          alt="${data.title}"
          class="w-10/12 bg-cover max-h-[250px]"
        />
        <p class="absolute left-2 bottom-2">${data.description}</p>
        <a class="absolute right-4 top-2" href="${data.source}">
          <i class="fa-regular fa-magnifying-glass "></i>
        </a>
      </div>`;
  });

  card.innerHTML = cardInfo;
};

cards();
console.log(data);
