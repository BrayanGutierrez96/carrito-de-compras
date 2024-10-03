const datos = [
  {
    titulo: "airpods",
    img: "https://img.freepik.com/free-photo/modern-wireless-earphones-with-case-simple-concrete-background_23-2150808009.jpg?uid=R166356328&ga=GA1.1.1397913917.1727882168&semt=ais_hybrid",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, nemo consequuntur consectetur blanditiis molestiae sed eligendi possimus illum exercitationem fuga praesentium quas obcaecatidictarepellat assumenda ab impedit natus esse.",
    price: 400000,
  },
  {
    titulo: "Monitor 24",
    img: "https://img.freepik.com/free-photo/tv-with-wide-screen_144627-12169.jpg?uid=R166356328&ga=GA1.1.1397913917.1727882168&semt=ais_hybrid",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, nemo consequuntur consectetur blanditiis molestiae sed eligendi possimus illum exercitationem fuga praesentium quas obcaecatidictarepellat assumenda ab impedit natus esse.",
    price: 800000,
  },
  {
    titulo: "Iphone 14 pro max",
    img: "https://img.freepik.com/free-photo/new-smartphone-presentation_23-2151859544.jpg?uid=R166356328&ga=GA1.1.1397913917.1727882168&semt=ais_hybrid",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, nemo consequuntur consectetur blanditiis molestiae sed eligendi possimus illum exercitationem fuga praesentium quas obcaecatidictarepellat assumenda ab impedit natus esse.",
    price: 3400000,
  },
  {
    titulo: "Parlantes",
    img: "https://img.freepik.com/free-photo/speakers-with-high-volume-grey-background_23-2149625668.jpg?uid=R166356328&ga=GA1.1.1397913917.1727882168&semt=ais_hybrid",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, nemo consequuntur consectetur blanditiis molestiae sed eligendi possimus illum exercitationem fuga praesentium quas obcaecatidictarepellat assumenda ab impedit natus esse.",
    price: 900000,
  },
];
const root = document.querySelector("#root");

function addToFavorites(img, price, title) {
    const products = JSON.parse(localStorage.getItem("products")) || []
    products.push({img,price,title})
    localStorage.setItem("products", JSON.stringify(products))
}

let currentHtml = "";
datos.forEach((card) => {
  currentHtml += ` <div class="flex flex-col border border-black rounded shadow gap-8 py-8">
            <div class="text-center">${card.titulo}</div>
            <div><img
                    src=${card.img}
                    alt=""></div>
            <div class="flex flex-col p-4 gap-8">
                <div class="text-sm">${card.desc}</div>
                <div class="m-auto">
                    <button class="border w-16 p-4 bg-gray-200 cursor-pointer rounded hover:bg-black btn-favoritos">❤</button>
                </div>
            </div>
        </div>`;
});
root.innerHTML = currentHtml;

const btns = document.querySelectorAll(".btn-favoritos");

btns.forEach((btn, index) => {
  let img = datos[index].img;
  let price = datos[index].price;
  let title = datos[index].titulo;
  btn.addEventListener("click", () => {
    addToFavorites(img, price, title);
  });
});
