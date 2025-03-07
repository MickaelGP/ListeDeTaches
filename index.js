const input = document.getElementById("input-todo");
const btn = document.getElementById("btn-ajout-todo");
const listeTache = document.getElementById("liste-tache");

afficheData()

btn.addEventListener("click", (event) => {
    if(input.value === "") {
        alert("Impossible d'ajouter une tâche sans valeur!");
    }else if(localStorage.getItem(input.value.trim()) !== input.value){
        localStorage.setItem(input.value.trim(), input.value.trim())
        input.value = "";
        listeTache.innerHTML = ""
        afficheData()
    }else{
        alert("Tâche déjà présente")
    }
})

function CreateLi(value){
    const li = document.createElement("li");
    li.className = 'li-tache';
    li.dataset.listeId = `${value}`;
    li.textContent = value;
    listeTache.appendChild(li);
    li.appendChild(createBtn());
}
function createBtn(){
    const newBtn = document.createElement("button");
    newBtn.className = "deleteBtn";
    newBtn.textContent = "Supprimer";
    newBtn.addEventListener("click", (event) => {
        console.log(newBtn.parentElement.dataset.listeId);
        let keyStorage = newBtn.parentElement.dataset.listeId
        localStorage.removeItem(keyStorage);
        listeTache.innerHTML = ""
        afficheData()
    })
    return newBtn;
}


function afficheData(){
    let number = localStorage.length;
    let liste = []
    for (let i = 0; i < number; i++) {
       liste.push(localStorage.key(i));
    }
    liste.forEach((item, key) => {
     CreateLi(item);
   })


}