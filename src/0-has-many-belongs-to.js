const { getId } = require('./utils');

class ToDoItem {
  funTask = false
  constructor(description,priorityLevel) {
    this.id = getId();
    this.description = description
    this.priorityLevel = priorityLevel
    this.isDone = false
  }
  isImportant(){
    if(this.priorityLevel > 6) {
      console.log('This task should be done first')
    }
    else{
      console.log('You can do this later')
    }
  }
}


class ToDoList {
  static #toDo = []
  
  constructor(name) {
    this.id = getId();
    this.name = name
    this.listOfItems = []
    ToDoList.#toDo.push(this)
  }
  getOrder(){
    return this.id
  }
  getItems(){
    return [...this.listOfItems]
  }
  createItem(description,priorityLevel){
    const newItem = (new ToDoItem(description,priorityLevel))
    this.listOfItems.push(newItem)
    return newItem
  }
  getCompletedCount(){
    const itemCount = this.listOfItems.filter((item) => item.isDone === true)
    return itemCount.length
  }
  static findBy(id){
    return ToDoList.#toDo.find((item) => item.id === id)
  }
  static list(){
    return [...ToDoList.#toDo]
  }
}

module.exports = {
  ToDoItem,
  ToDoList
};

