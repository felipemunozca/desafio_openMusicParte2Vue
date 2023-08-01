<template>

  <div class="principal-container">
    <div class="title-container">
      <h1>OpenMusic</h1>
    </div>
    <div class="categories-container">
        <h2>Categorías</h2>
        <p>Numero de albums {{totalAlbums}}</p>
        <div class="categories-buttons">
          <button @click="redireccionar('/pop')">Pop ({{contadorAlbumesPop}})</button> 
          <button @click="redireccionar('/rock')">Rock ({{contadorAlbumesRock}})</button>
          <button @click="redireccionar('/rap')">Rap ({{contadorAlbumesRap}})</button>
        </div>
    </div>
    <agregar-album/>
  </div>

</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex';
import AgregarAlbum from '@/components/AgregarAlbum.vue';

export default {
  name: 'HomeView',
  components: {
    'agregar-album': AgregarAlbum,
  },
  computed: {
    ...mapGetters(['contadorAlbumesPop', 'contadorAlbumesRock', 'contadorAlbumesRap', 'totalAlbums'])
  },
  methods:{
    redireccionar(ruta) {
      this.$router.push(ruta);
    },
  }
}
</script>

<style scoped>
  .principal-container {
    width: 80%;
    margin: 0 auto;
    
  }
  .title-container {
    border: 1px solid black;
  }
  .title-container h1 {
    background: gray;
    margin: 15px;
    padding: 30px 20px;
  }

  .categories-container {
    margin-top: 30px;
  }
  .categories-buttons {
    display: flex;
    margin: 0 auto;
    width: 60%;
    gap: 5px;
  }
  .categories-buttons button {
    background: green;
    color: white;
    width: 100%;
    border: none;
    padding: 8px 12px;
    border-radius: 2px;
    cursor: pointer;
  }

</style>