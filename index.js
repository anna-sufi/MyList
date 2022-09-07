const list = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const newBlock = document.createElement('div');
    newBlock.classList.add('newBlock');
    list.appendChild(newBlock);

    const item = document.createElement('li');
    item.innerText = input.value;
    item.classList.add('newItem');
    newBlock.appendChild(item);

    const check = document.createElement('input');
    check.type = "checkbox";
    check.classList.add('check');
    console.log(check);
    newBlock.appendChild(check);

    const del = document.createElement('button');
    del.classList.add("del");
    del.innerText = '❌';
    newBlock.appendChild(del);

    input.value = '';

    check.addEventListener('click', () => {
        if (check.checked === true) item.classList.add('itemDone');
        else item.classList.remove('itemDone');
    })

    del.addEventListener('click', () => {
            let yes = confirm('Вы уверены, что хотите удалить дело?');
            if (yes === true) list.removeChild(newBlock);
        })
})