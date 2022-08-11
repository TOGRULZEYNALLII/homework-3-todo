const form = document.getElementById('myForm');
const input = document.getElementById('myInput');
const todoContainer = document.getElementById('todo-container');
const todoLeft = document.getElementById('todo-left');
const todoRight = document.getElementById('todo-right');
const deleteAll = document.getElementById('deleteAll');
const unChecked = document.getElementById('unchecked-items');
const allBtn = document.getElementById('all');
const activeBtn = document.getElementById('active');
const completedBtn = document.getElementById('completed');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const task = input.value;
    if (!task) {
        alert('fill');
        return;
    }

    var checkButton = document.createElement('input')
    var span = document.createElement('span');
    var deleteOne = document.createElement('p');
    var newLine = document.createElement('br');

    deleteOne.classList.add('delete-one');
    span.classList.add('todo-text');

    span.innerText = input.value;
    deleteOne.innerText = 'X'
    checkButton.type = 'checkbox';
    checkButton.className = 'myCheckboxCls';
    todoLeft.appendChild(checkButton);
    todoLeft.appendChild(span);
    todoLeft.appendChild(newLine)
    todoRight.appendChild(deleteOne);
    input.value = "";
    checkButton.addEventListener('click', function () {
        if (checkButton.checked === true) {
            span.style.textDecoration = "line-through";
            span.style.color = "#D1D2DA";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "black";
        }

        const checkboxList = Array.from(document.querySelectorAll('.myCheckboxCls'));
        const uncompletedItems = checkboxList.filter(checkbox => checkbox.checked === false);
        unChecked.textContent = uncompletedItems.length;
    })
    deleteOne.addEventListener('click', function () {
        todoLeft.removeChild(span)
        todoLeft.removeChild(checkButton)
        todoRight.removeChild(deleteOne)
        todoLeft.removeChild(newLine)
    })
    deleteAll.addEventListener('click', function () {
        checkButton.remove();
        span.remove();
        deleteOne.remove();
        newLine.remove();
    })
    completedBtn.addEventListener('click', function () {
        if (checkButton.checked === true) {
            span.style.display = "inline-block";
            checkButton.style.display = 'inline-block';
            newLine.style.display = 'block';
            deleteOne.style.display = 'block';
        } else {
            span.style.display = "none";
            newLine.style.display = 'none';
            deleteOne.style.display = 'none';
            checkButton.style.display = 'none';
        }
    })
    activeBtn.addEventListener('click', function () {
        if (checkButton.checked === true) {
            span.style.display = "none";
            newLine.style.display = 'none';
            deleteOne.style.display = 'none';
            checkButton.style.display = 'none';
        } else {
            span.style.display = "inline-block";
            checkButton.style.display = 'inline-block';
            newLine.style.display = 'block';
            deleteOne.style.display = 'block';
        }
    })
    allBtn.addEventListener('click', function () {
        if (checkButton.checked == true || checkButton.checked == false) {
            span.style.display = "inline-block";
            checkButton.style.display = 'inline-block';
            newLine.style.display = 'block';
            deleteOne.style.display = 'block';

        }
    });


    const checkboxList = Array.from(document.querySelectorAll('.myCheckboxCls'));
    const uncompletedItems = checkboxList.filter(checkbox => checkbox.checked === false);
    unChecked.textContent = uncompletedItems.length;

});

const theme_btn = document.getElementById('theme-button');
const theme_icon = document.getElementById('theme-img');
theme_btn.addEventListener('click', function () {
    if (document.documentElement.dataset.theme === 'dark') {
        document.documentElement.dataset.theme = 'light';
        theme_icon.src = "/images/icon-moon.svg";
    }
    else {
        document.documentElement.dataset.theme = 'dark';
        theme_icon.src = "/images/icon-sun.svg";
    }
});