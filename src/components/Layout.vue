<template>
    <div class="layout-wrapper">
        <div class="content" :class="classPrefix && `${classPrefix}-content`">
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
  import Nav from '@/components/Nav.vue';
  export default {
    name: 'Layout',
    props: ['classPrefix'],
    components:{
      Nav,
    }
  };
</script>

<style lang="scss" scoped>
    .content{
        flex-grow: 1;
        overflow: auto;
        /*border: 1px solid blue;*/
    }
    .layout-wrapper{
        border: 1px solid green;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
</style>