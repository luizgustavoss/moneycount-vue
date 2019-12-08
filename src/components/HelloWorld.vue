<template>
  <div class="hello container-fluid">
    <h1>{{ msg }}</h1>
    <div class="alert alert-success" role="alert">
      Using Bootstrap
    </div>
    <div class="alert alert-info" role="alert">
      Using Font Aweasome
    </div>
    <span>
      <font-awesome-icon icon="money-bill" />
      <font-awesome-icon icon="coins" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Money Count'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
span {
  font-size: 30px;
  letter-spacing: 10px;
}
</style>
