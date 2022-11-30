const pubsub = {
    toDoList: [],
    subscribers: [],

    init(initToDolist = []) {
        this.toDoList = initToDolist;
        this.publish();
    },

    add(item) {
        this.toDoList.push(item);
        this.publish();
    },

    edit(item, index) {
        this.toDoList[index] = item;
        this.publish();
    },

    remove( index) {
        this.toDoList.splice(index, 1);
        this.publish();
    },

    publish() {
        for (const subscribe of this.subscribers) {
            subscribe(this.toDoList);
        }
    },

    subscribe(handler) {
        this.subscribers.push(handler);
    },
};

pubsub.subscribe((toDoList) => {
    console.log('todo list change', toDoList);
});


pubsub.init([
    {name: 'task1'},
    {name: 'task2'}
]);

pubsub.add({name: 'task3'});

pubsub.edit({name: 'tasknew'}, 1);

pubsub.remove(1);

export default pubsub;

