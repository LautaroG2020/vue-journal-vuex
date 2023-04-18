<template>
  <div class="entry-tittle d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold"> 14</span>
        <span class="mx-1 fs-3"> Julio</span>
        <span class="mx-2 fs-4 fw-light"> 2023, lunes</span>
    </div>

    <div>
        <button class="btn btn-danger"> 
            Borrar
            <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary"> 
            Subir Foto 
            <i class="fa fa-upload"></i>
        </button>
    </div>  
  </div>
  <hr>
  <div>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="Que sucedio hoy?"></textarea>
    </div>

    <Fab icon="fa-save" />

    <img src="https://www.robertlandscapes.com/wp-content/uploads/2014/11/landscape-322100_1280.jpg" alt="entry picture" class="img-thumbnail" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
        Fab: defineAsyncComponent(() => import('../components/FaButton.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>