<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}</li>
    </ul>
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  tagListModel.fetch;

  @Component
  export default class Tags extends Vue{
    @Prop() readonly dataSource: string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag: string){
      const index = this.selectedTags.indexOf(tag);
      if(index>=0){
        this.selectedTags.splice(index,1);
      } else{
        this.selectedTags.push(tag);
      }
      this.$emit('update:value',this.selectedTags)
    }

    create(){
      const name = window.prompt('请输入标签名');
      if(name){
        const message = tagListModel.create(name);
        if(message === 'duplicated'){
          window.alert('标签名重复了');
        }else if(message === 'success' && this.dataSource){
          // this.$emit('update:dataSource',
          //   [...this.dataSource, name]);
          window.alert('新建标签成功');
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .tags{
    flex-grow: 1;
    font-size: 14px;
    padding: 16px;
    overflow: auto;
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
          background: #FFDA47;
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