
// Event Register Here , Input , Output Here
window.addEventListener("load",bindEvents);
function bindEvents(){
    document.querySelector("#add").addEventListener("click",addItem);
}
function toggleDelete(){
    var currentRowId = this.getAttribute("item-id");
    console.log("Delete call ",this.getAttribute("item-id"));
    var tr = this.parentNode.parentNode;
    tr.classList.toggle("red");
    itemOperations.mark(currentRowId);
   document.querySelector("#mark").innerHTML =  itemOperations.countMark();
    //var itemObject = itemOperations.searchById(currentRowId);
    // itemObject.markForDelete = !itemObject.markForDelete;
}
function edit(){
    console.log("edit call");
}
function createIcon(path,fn,id){
    var img = document.createElement("img");
    img.setAttribute("item-id", id);
    img.src = path;
    img.className= "size";
    img.addEventListener("click",fn);
    
    return img;

}
function addItem(){
    var item  = new Item(0,"",0,"","","","");
   for(let key in item){
    console.log("Key is ::: ",key);   
    if(key=='markForDelete'){
        continue;
    }
    item[key] = document.querySelector("#"+key)
       .value;
   }
   itemOperations.addItem(item);
   printRow(item);
    console.log("Add Call.. ",item);
}
function printRow(item){
    console.log("item is ",item);
    var table = document.querySelector("#itemtable");
    var tr = table.insertRow();
    var index = 0;
    // var keys = ["id","name","price","color","date","desc","url"];
    // for(let key of keys){
    //     fillCell(index,item[key],tr);
    //     index++;
    // }
    for(let key in item){
        if(key=='markForDelete'){
            continue;
        }
        tr.insertCell(index).innerHTML  = item[key];
        index++;
    }
    var td = tr.insertCell(index);
    td.appendChild(createIcon("images/delete.png",toggleDelete,item.id));
    td.appendChild(createIcon("images/edit.png",edit,item.id));
}
 const fillCell=(index,value,tr)=>tr.insertCell(index).innerHTML = value;

//bindEvents();