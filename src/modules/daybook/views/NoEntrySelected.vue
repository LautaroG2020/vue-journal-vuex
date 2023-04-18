<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">
        No hay entradas seleccionadas
        <Fab />
    </h1>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
  components:{
    Fab: defineAsyncComponent( () => import('../components/FaButton.vue'))
  }
}
</script>
<style lang="scss" scoped>
div{
    height: 100%;
}
</style>