<template>
  <div id="app">
    <div class="menu">
      <span class="logo">Money Count</span>
    </div>
    <router-view/>
    <footer class="fixed-bottom">
      <div class="version">v1.0.0</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>