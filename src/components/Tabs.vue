<template>
  <div>
    <ul class="tabs" :class="classPrefix && `${classPrefix}-type`">
      <li v-for="tab in dataSource" :key="tab.value"
          :class="{[classPrefix + '-type']:classPrefix,selected: tab.value === value }"
          @click="selectType(tab.value)">{{tab.text}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tabs extends Vue {
    @Prop({required: true, type: Array}) dataSource!: { text: string, value: string }[];
    @Prop() readonly value!: string;
    @Prop(String) classPrefix?: string;

    selectType(type: string) {
      this.$emit('update:value', type);
      console.log(type);
    }
  }
</script>

<style lang="scss" scoped>

  .tabs {
    height: 60px;
    display: flex;
    font-size: 20px;
    background: #FFDA47;
    justify-content: center;

    li {
      padding: 22px 16px 6px 16px;
      border-bottom: 2px solid transparent;

      &.selected {
        border-bottom: 2px solid #333;
      }
    }
  }
</style>