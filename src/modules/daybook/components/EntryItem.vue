<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name: 'entry', params: {id: 10}})">
    <!-- title -->
    <div class="entry-tittle d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5"> de Julio</span>
      <span class="mx-2 fw-white">del 2023</span>
    </div>
    <div class="entry-description">
      Tempor pariatur do minim adipisicing. Dolor id proident occaecat adipisicing labore reprehenderit ullamco aute
      voluptate. Tempor ullamco aliqua voluptate nostrud. Eu ipsum ut est elit consequat minim reprehenderit deserunt anim
      reprehenderit. Adipisicing esse sint excepteur non. Occaecat exercitation aliqua tempor magna amet ullamco
      incididunt voluptate proident magna magna veniam aliqua ea. Cillum culpa in proident culpa consequat consequat in.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>