<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'"
          @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'"
          @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  @Component
  export default class Types extends Vue {
    type = '-';

    @Prop(Number) xxx: number | undefined;
    // Prop告诉Vue xxx 不是data，是prop
    // Number 告诉Vue xxx 运行时是个Number
    // xxx 属性名
    // number ｜ undefined 告诉 TS xxx 的编译时类型

    selectType(type: string){   //type 只能是 '-' 和 '+' 中的一个
      if(type !== '-' && type !== '+'){
        throw new Error('type is unknow')
      }
        this.type = type;
    }
  }
</script>

<style lang="scss" scoped>
  .types{
    background: #FFDA47;
    display: flex;
    text-align: center;
    height: 60px;
    font-size: 20px;
    > li{
      width: 50%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,0);
        width: 80px;
        height: 2px;
        background: #333;
      }
    }
  }
</style>