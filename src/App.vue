<template>
  <div id="app">
    <div class="fd-page__content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  created() {
    Luigi.customMessages().sendToAll({
      id: 'myapp.project-updated',
      data: 'here goes some data'
    })
    console.log('Hello')
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
</style>
