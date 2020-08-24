<template>
    <div class="content-wrapper">
        <div class="notFoundGif">
            <img src="../assets/404.gif" alt="">
        </div>
        <div>
            当前路径不存在，请检查网址是否正确
        </div>
        <div class="return">
            <router-link to="/">返回首页</router-link>
        </div>
    </div>
</template>

<script lang="ts">
  export default {
    name: 'NotFound'
  };
</script>

<style lang="scss" scoped>
.content-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .notFoundGif{
        width: 80%;
        img{
            width: 100%;
        }
    }
}

</style>