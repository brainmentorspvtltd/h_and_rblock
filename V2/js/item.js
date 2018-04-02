

class Item{
constructor(id, name, price, color, date, desc,url){
this.id = id;
this.name = name;
this.price = price;
this.color  = color;
this.date = date;
this.desc = desc;
this.url = url;
this.markForDelete = false;
}
toggle(){
    this.markForDelete = !this.markForDelete;
}
}