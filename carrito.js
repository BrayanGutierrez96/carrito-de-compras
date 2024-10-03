const data = JSON.parse(localStorage.getItem("products"));
const render = document.querySelector("#render-products");
let currentHtml = "";
let productIndex = 0
 
function deleteProduct(card, index){
    card[index].remove()
}

data.forEach((product) => {
  currentHtml += `<article class="flex border border-black p-4 rounded shadow-md items-center justify-between card ">
            <div class="flex gap-12">
                <div class="w-40">
                    <img class="h-full"
                        src=${product.img}
                        alt="">
                </div>
                <div class="flex w-1/4 items-center justify-evenly">
                    <div>$${product.price}</div>
                    <div class="flex p-8 justify-evenly gap-4">
                       <button
                            class="flex items-center justify-center rounded border w-8 bg-gray-400 text-white  hover:text-black hover:bg-white hover:font-bold">-</button>
                        <span>0</span>
                        <button
                            class="flex items-center justify-center rounded border w-8 bg-gray-400 text-white  hover:text-black hover:bg-white hover:font-bold">+</button>
                    </div>
                </div>
            </div>
            <button class="rounded bg-red-500 w-24 h-12 text-white hover:bg-black mr-0 deleted">Eliminar</button>
        </article>`;
});

render.innerHTML = currentHtml;

const deleteBtns = document.querySelectorAll(".deleted")
const card = document.querySelectorAll(".card")

deleteBtns.forEach((btn, index)=>{
    btn.addEventListener("click", ()=>{
        deleteProduct(card,index)
    })
})
console.log(data);
