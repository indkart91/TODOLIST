
let listContainer=document.querySelector(".listContainer")
let addInput=document.querySelector("#addInput")

let addBtn=document.querySelector(".addBtn")


let list=[
   
];

list.map(obj=>{
    let divElem =document.createElement("div")
    divElem.classList.add("list");
    divElem.innerHTML=`<p>${obj.text}</p>
            <button class="delletBtn">Dellet</button>`
    listContainer.append(divElem)
})

function renderList(arr){
    listContainer.innerHTML=""
    arr.map(obj=>{
    let divElem =document.createElement("div")
    divElem.classList.add("list");
    divElem.innerHTML=`<p>${obj.text}</p>`
    let buttonElem=document.createElement('button')
    buttonElem.innerHTML="Dellet";
    divElem.append(buttonElem)
    divElem.onclick=()=>{
         handleRemoveList(obj.id)
    }
    listContainer.append(divElem)
})
};

renderList(list)

function addhandleList(){
    let obj={
      id:Date.now(),
      text:addInput.value,
    }
    list.unshift(obj);
    renderList(list)
    addInput.value=""
}

function handleRemoveList(id){
    let filtredList =list.filter(obj=>{
        return obj.id !==id;
    })
    list=filtredList;
    console.log(list)
    renderList(filtredList)
}


addBtn.addEventListener("click" , addhandleList)