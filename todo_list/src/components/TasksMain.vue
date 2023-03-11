<template>
    <div v-for="task in tasks" :key="task.id">
        <TaskMain @delete-task="$emit('delete-task', task.id)" @togle-reminder="$emit('togle-reminder', task.id)" :task="task"/>
    </div>
</template>
<script>
import TaskMain from "./TaskMain.vue"
    export default {
        names: "TasksMain",
        props: {
            tasks: Array,
        },
        components: {
            TaskMain
        },
        emits: ['delete-task', 'togle-reminder'],
    }
</script>