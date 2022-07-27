// const todosEl = document.querySelectorAll("li");

// const todos = [];

// todoEl.forEach((todoEl) => {
//     todos.push({
//         text: todoEl.innerText,
//         completed: todoEl.classList.contains("completed"),
//     });
// });


const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");
let task = document.getElementsByClassName("element");
let circ = document.getElementsByClassName('circle');
let star = document.getElementsByClassName('fa-star');
// const Icon = document.getElementsByTagName('li');



// Görev ekleme ve eklenilen alana circle, star ve çarpı işaretinin konulması

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoText = input.value;

    if (todoText !== "") {
        
        addToDo();
    } else {

        createErrorNotification();
    }

function addToDo() {
    createAddNotification();

        const todoEl = document.createElement("li");
        todoEl.classList.add("element");
        todoEl.innerText = todoText;
        todos.prepend(todoEl);

        input.value = "";

        todoEl.addEventListener("click", () => {
        todoEl.classList.toggle("completed")
        
         
    });
    for (let i=0; i < task.length; i++) { 

        let closeButton = document.createElement("span"); 
        closeButton.textContent = "X"; 
        closeButton.classList.add("close"); 
        closeButton.onclick = removeButton; 
        task[i].append(closeButton); 
        break;
    }
    
    for (let i=0; i < task.length; i++) {
        let circleButton = document.createElement("span");
        circleButton.innerHTML = `<i class="circle fa-circle fa-regular" ></i>`; 
        circleButton.classList.add("circle-1"); 
        circleButton.id = 'circle';
        circleButton.onclick = doneButton; 
        task[i].append(circleButton); 
        break;
    }
    
    for (let i=0; i < task.length; i++) {
        let starButton = document.createElement("span"); 
        starButton.innerHTML = `<i class="fa-star fa-regular" ></i>`; 
        starButton.classList.add("star");
        starButton.onclick = importButton;
        task[i].append(starButton); 
        break;
    }
    
}

});

//// Yukarıdaki Kodun Bitişi ////

//// 
function importButton() {
    for (let i = 0; i < star.length; i++ ) {
        star[i].classList.toggle('fa-solid');
        star[i].classList.toggle('yellow');
    }

}

function doneButton(e) {
    
    this.classList.toggle('fa-circle-check');
    
}

function removeButton(){
    createRemoveNotification();
    this.parentElement.remove();
    
}


// function doneButton() {
//     console.log(this.parentElement);
// }

//   function doneButton(){

//           const solid = ['fa-solid', 'fa-circle-check'];
//           const regular = ['fa-regular', 'fa-circle'];

//       for (let i=0; i<task.length; i++) {

        
//           if(document.querySelectorAll('span').classList.contains("fa-circle")){
//               document.querySelectorAll('span').classList.add(...solid);
//               document.querySelectorAll('span').classList.remove(...regular);
//              } else {
//               document.querySelectorAll('span').classList.add(...regular)
//               document.querySelectorAll('span').classList.remove(...solid);
//              } 
//       }

//   }


 


// Click Butonu fakat ÇALIŞMIYOR!!

// function doneButton() {
    
//     const solid = ['fa-solid', 'fa-circle-check'];
//     const regular = ['fa-regular', 'fa-circle'];
    
//     if(Icon.classList.contains("fa-circle")){
//         Icon.classList.add(...solid)
//         Icon.classList.remove(...regular);
//     } else {
//         Icon.classList.add(...regular)
//         Icon.classList.remove(...solid);
//     }
// }





// Sol üstteki tarihin yazılması

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const date = new Date();

let day = date.getDate();
let month = months[date.getMonth()];
let year = date.getFullYear();
   
document.getElementById('date').innerHTML = day + " " + month + " " + year;
   
// Arka plan değiştirmesi ve delay

// function changeTheme() {
//     setTimeout(function (){ 
//         let select = document.getElementById("bg-image");
//         let img = select.options[select.selectedIndex].value;
            
        
//         document.getElementsByClassName("body")[0].style.backgroundImage = "url(" + img + ")";
//      }, 500);
// }


// NOTİFİCATİON kodları aşağıdadır. 

const container = document.getElementById('container');

function createAddNotification() {

    const toast = document.createElement('div');
    toast.classList.add('toast');

    toast.innerHTML = "New Task added!";

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    },1000);

}

 function createRemoveNotification() {

     const toast = document.createElement('div');
     toast.classList.add('toast');

     toast.innerHTML = "Task Deleted!";

     container.appendChild(toast);

     setTimeout(() => {
         toast.remove();
     },1000);

 }

 function createErrorNotification() {

    const toast = document.createElement('div');
    toast.classList.add('toast');

    toast.innerHTML = "Please, Write Your Task!";

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    },1000);

}


// Hamburger JavaScript Kodları Aşağıdadır.

const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
})

// Hamburger Menü içindeki fotoğraflara tıklayarak arka plan resminin değiştirilmesi için aşağıdaki kodlar çalışmaktadır. 

const safari = document.getElementById('safari');

safari.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('./img/safari.jpg')";
});

const sky = document.getElementById('sky');

sky.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('./img/sky.jpg')";
});

const alone = document.getElementById('alone');

 alone.addEventListener('click', () => {
     document.body.style.backgroundImage = "url('./img/alone.jpg')";
 });

const mountain = document.getElementById('mountain');

mountain.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('./img/mountain.jpg')";
});

const zirve = document.getElementById('zirve');

zirve.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('./img/zirve.jpg')";
});

const road = document.getElementById('road');

road.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('./img/road.jpg')";
});



// Aşağıdaki kodlarda yıldızlanan görevin üste alınması için bir çalışma yapılmıştır. BU KISIM KODDA ÇALIŞIYOR AMA YILDIZ KISMININ HALLEDİLMESİ GEREKİYOR. 

// var list = document.getElementById("todos");

// var lis = list.getElementsByClassName("star");

// var newItem;

// for(i=0; i < lis.length; i++) {
  
//   if (lis[i].innerText == `<i class="fa-star fa-regular fa-solid yellow mellow"></i>`) {
    
//     newItem = lis[i];
    
//     list.removeChild(lis[i]);
    
//   }
  
// }

// list.prepend(newItem);


// Burada yıldızlandığında o li elementine bir class atanacak.
// İçinde o class olan görev üste çıkarılacak. 


////////// LOCAL STORAGE //////////

// const save = JSON.parse(localStorage.getItem("todos"));

//  function saveLS() {

//      const todosEl = document.querySelectorAll("li");

//      const save = [];

//      todosEl.forEach((todoEl) => {
//          save.push({
//              text: todoEl.innerText,
//              completed: todoEl.classList.contains("completed"),
//          });
//      });

//      localStorage.setItem("todos", JSON.stringify(save));
//  }