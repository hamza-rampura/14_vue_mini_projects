<template>
  <div class="container">
    <HeaderMain title ="Task Tracker" :showAddTask = "showAddTask" @btn-click = "toggleAddTask" />
    <div v-if="showAddTask">
      <AddTask @add-task="addTask"/>
    </div>
    <TasksMain @delete-task="deleteTask" @togle-reminder="togleReminder" :tasks = "tasks" />
  </div>
</template>

<script> 
import HeaderMain from "./components/Header";
import TasksMain from "./components/TasksMain";
import AddTask from "./components/AddTask";
export default {
  name: 'App',
  components: {
    HeaderMain,
    TasksMain,
    AddTask
  },
  data() {
    return {
      tasks: [],
      showAddTask: true
    }
  },
  methods: {
    async addTask(task) {
      const res = await fetch(`api/tasks`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
          body: JSON.stringify(task)
      });

      const data = await res.json();

      this.tasks = [...this.tasks, data];
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    async deleteTask(id) {
      if(confirm('Are you sure?')) {

        const res = await fetch(`api/tasks/${id}`, {
        method: 'DELETE'
      });

      res.status === 200 ? this.tasks = this.tasks.filter((task)=>{
          return task.id!==id;
        }) : alert("Error deleting task!")


        
      }
    },
    async togleReminder(id) {
      const taskToggle = await this.fetchTask(id);
      const updTask = {
        ...taskToggle, reminder: !task.reminder
      }
      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
          body: JSON.stringify(updTask)
      });

      const data = await res.json();

      this.tasks = [...this.tasks, data];
      this.tasks = this.tasks.map((task)=> {
        return task.id===id ? {...task, reminder: !task.reminder}: task;
      })
    },
    async fetchTasks() {
      const res = await fetch(`api/tasks`);
      const data = await res.json();
      return data;

    },

    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;

    }
  },
  async created() {
    this.tasks = await this.fetchTasks();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
