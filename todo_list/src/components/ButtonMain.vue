<template>
    <button class="btn" @click="onClick()" :style="{background: color}">{{text}}</button>
</template>

<script>
export default {
    name: "button-main",
    props: {
        text: String,
        color: String
    },
    methods: {
        onClick() {
            this.$emit('btn-click');
        },
    }
}
</script>