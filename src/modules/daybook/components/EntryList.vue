<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text" class="form-control" placeholder="Buscar entradas">
        </div>
        <div class="entry-controlarea">
            <EntryItem />
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
        EntryItem: defineAsyncComponent(() => import('../components/EntryItem.vue'))
    }
}
</script>
<style lang="scss" scoped>
.entry-list-container {
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
}

.entry-controlarea {
    height: calc(100vh - 101px);
    overflow: scroll;
}
</style>
