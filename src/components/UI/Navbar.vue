<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue3</div>
    <div class="nav_btn">
      <my-button @click="$router.push('/posts')">Посты</my-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.nav_btn {
  margin-left: auto;
}
</style>