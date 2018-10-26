(function () {

    let task = {
        current: [
            {
                taskId: doId(),
                taskContent: 'Task 1',
                taskState: 'current'
            },
            {
                taskId: doId(),
                taskContent: 'Task 2',
                taskState: 'current'
            }
        ],
        done:[
            {
                taskId: doId(),
                taskContent: 'Task 3',
                taskState: 'current'
            }
        ],
        get allTasks() {
            return this.current.length + this.done.length;
        },
        get doneTasks() {
            return this.done.length;
        }
    },
    tasksList = document.getElementById('app__list'),
    allTasks = document.getElementById('js-all-task'),
    doneTasks = document.getElementById('js-done-task'),
    addNewTaskField = document.getElementById('app__task-new');

    function INIT() {

        for(const item of task.current){
            createItem(item);
        }
        for(const item of task.done){
            createItem(item);
        }
        allTasks.innerHTML = task.allTasks;
        doneTasks.innerHTML = task.doneTasks;
    }

    function  createItem(el) {
        let item = document.createElement('li'),
            remove = document.createElement('div'),
            text = document.createElement('span');

        remove.classList.add('close');
        remove.addEventListener('click', function () {
            removeTasks(this);
        });
        text.classList.add('text');
        text.addEventListener('click', function () {
            doneTasks(this);
        });
        switch (el.taskState){
            case 'done':
                item.classList.add('list-item', 'list-item-done');
                break;
            default:
                item.classList.add('list-item');
        }
        item.id = el.taskState;
        text.innerHTML = el.taskState;
    }

    function doId() {

    }
    INIT();


})();













