
// Event Register Here , Input , Output Here
window.addEventListener("load",bindEvents);
function bindEvents(){
    document.querySelector("#add").addEventListener("click",addItem);
}
function createIcon(path){
    var img = document.createElement("img");
    img.src = path;
    img.className= "size";
    return img;

}
function addItem(){
    var item  = new Item(0,"",0,"","","","");
   for(let key in item){
    console.log("Key is ::: ",key);   
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
        tr.insertCell(index).innerHTML  = item[key];
        index++;
    }
    var td = tr.insertCell(index);
    td.appendChild(createIcon("images/delete.png"));
    td.appendChild(createIcon("images/edit.png"));
}
 const fillCell=(index,value,tr)=>tr.insertCell(index).innerHTML = value;

//bindEvents();