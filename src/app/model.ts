export class Model {
	user;
	items;

	constructor() {
		this.user = "Adam";
		this.items = [
			new TodoItem("Buy Flowers", false, 1),
			new TodoItem("Get Shoes", false, 2),
			new TodoItem("Collect Tickets", false, 3),
			new TodoItem("Call Joe", false, 4),
		]
	}
}

export class TodoItem {
	id;
	action;
	done;

	constructor(action, done, id){
		this.id = id;
		this.action = action;
		this.done = done;
	}
}