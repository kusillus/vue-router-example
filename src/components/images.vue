<template>
  <div class="container-images">
    <div v-for="n in 6" :key="n" class="image" >
      <img src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.container-images{
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.image{
  border: solid .3rem rgba(157, 106, 205, 0.3);
  margin: .25rem .3rem;
  border-radius: .4rem;
}
</style>
