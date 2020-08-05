<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag}}</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue{
    @Prop() dataSource: string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag: string){
      const index = this.selectedTags.indexOf(tag);
      if(index>=0){
        this.selectedTags.splice(index,1);
      } else{
        this.selectedTags.push(tag);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .tags{
    flex-grow: 1;
    font-size: 14px;
    padding: 16px;
    > .current{
      display: flex;
      flex-wrap: wrap;
      > li{
        background: #d9d9d9;
        height: 24px;
        line-height: 24px;
        padding:0 16px;
        border-radius: 12px;
        margin-right: 12px;
        margin-top: 5px;
        &.selected{
          background: darken(gray,10%);
        }
      }
    }
    > .new{
      padding-top: 16px;
      button{
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>