<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(item, index) in list" :key="index">
      <input type="text" v-model="item.name">
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      list: [{ name: 'a' }, { name: 'b' }]
    }
  }
}
</script>
