<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}</li>
    </ul>
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop} from 'vue-property-decorator';
  import {mixins} from 'vue-class-component';
  import TagHelper from '@/mixins/TagHelper';

  @Component({
    computed:{
      tagList(){
        return this.$store.state.tagList;
      }
    }
  })
  export default class Tags extends mixins(TagHelper){
    selectedTags: string[] = [];

    created(){
      this.$store.commit('fetchTags');
    }
    toggle(tag: string){
      const index = this.selectedTags.indexOf(tag);
      if(index>=0){
        this.selectedTags.splice(index,1);
      } else{
        this.selectedTags.push(tag);
      }
      this.$emit('update:value',this.selectedTags)
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