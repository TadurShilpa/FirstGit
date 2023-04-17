let form = document.querySelector("form").addEventListener("submit", myFunc);

async function del(el, num) {
    const qu = parseInt(el.candyQuantity) - num
    if (qu < 0) {
        throw new Error(`${el.candyName} is out of stock.`);
        li.innerText = `${el.candyName} is out of stock.`;
      }
    const newObj = {
        candyName: el.candyName,
        candyDescription: el.candyDescription,
        candyPrice: el.candyPrice,
        candyQuantity: qu,
    }
    console.log(newObj, el.candyQuantity)
    try {
        const res = await axios.put(`https://crudcrud.com/api/b6f23dc9aec84e2ba2da818c34cc3a68/candyseller/${el._id}`, newObj);
        console.log(res);
        location.reload()
        // myList.removeChild(li);
    } catch (error) {
        console.log(error);
    }
}
async function myFunc(e) {
    e.preventDefault();
    try {
        const candyName = e.target.c_name.value;
        const candyDescription = e.target.Description.value;
        const candyPrice = e.target.price.value;
        const candyQuantity = e.target.quantity.value;

        const obj = {
            candyName,
            candyDescription,
            candyPrice,
            candyQuantity,
        };
        if (candyName === " " || candyDescription === " " || candyPrice === " " || candyQuantity === " ") {
            alert("Please fill all fields")
        } else {
            await axios.post('https://crudcrud.com/api/b6f23dc9aec84e2ba2da818c34cc3a68/candyseller', obj);
            location.reload();
        }

    }
    catch (err) {
        console.log(err);
    }

}
async function getData() {
    try {
        let res = await axios.get('https://crudcrud.com/api/b6f23dc9aec84e2ba2da818c34cc3a68/candyseller');
        dataHandler(res.data);
    } catch (error) {
        console.log(error);
    }

}
getData();

function dataHandler(data) {

    const myList = document.getElementById("myList");
    myList.innerHTML = "";   // Clear the list before adding new items


    data.forEach((el) => {
        const li = document.createElement("li");
        const deleteButton1 = document.createElement("button");
        deleteButton1.innerText = "buy1";

        const deleteButton2 = document.createElement("button");
        deleteButton2.innerText = "buy2";

        const deleteButton3 = document.createElement("button");
        deleteButton3.innerText = "buy3";

        if (el.candyQuantity <= 0) {
            li.innerText = `${el.candyName} --${el.candyDescription} ---${el.candyPrice} --- ${el.candyQuantity} (out of stock)`;
          } else {

        deleteButton1.addEventListener("click", async () => {
            del(el, 1)

        });
        deleteButton2.addEventListener("click", async () => {
            del(el, 2)

        });
        deleteButton3.addEventListener("click", async () => {
            del(el, 3)

        });

        li.innerText = `${el.candyName} --${el.candyDescription} ---${el.candyPrice} --- ${el.candyQuantity}`;
        li.appendChild(deleteButton1);
        li.appendChild(deleteButton2);
        li.appendChild(deleteButton3);
    }
        myList.appendChild(li);
    });

}
