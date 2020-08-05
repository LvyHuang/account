<template>
    <Layout class-prefix="layout">
        <NumberPad/>
        <Notes/>
        <Tags :data-source="tags"/>
        <Types/>
    </Layout>
</template>

<script>
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';
  export default {
    name: 'Money',
      components: {Types, Tags, Notes, NumberPad},
      data(){
        return {
            tags: ['餐饮','购物','房租','交通','娱乐','医疗']
        }
      }
  };
</script>

<style lang="scss">
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
</style>
