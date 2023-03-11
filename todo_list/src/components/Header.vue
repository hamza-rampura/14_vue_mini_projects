<template>
    <header>
        <h1>{{ title }}</h1> 
        <ButtonMain :text = "showAddTask ? 'Close' : 'Add Task'" :color ="showAddTask ? 'red' : 'green'" @btn-click="$emit('btn-click')" />
    </header>
</template>

<script>
import ButtonMain from "./ButtonMain.vue"
export default {
    name: "HeaderMain",
    props: {
        title: {
            type: String,
        },
        showAddTask: Boolean
    },
    components: {
        ButtonMain
    }
}
 
</script>

<style scoped>

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

}

</style>