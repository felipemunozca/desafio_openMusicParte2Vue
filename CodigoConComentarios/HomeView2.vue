<template>

    <div class="principal-container">
        <div class="title-container">
            <h1>OpenMusic</h1>
        </div>
        <div class="categories-container">
            <h2>Categorías</h2>
            <div class="categories-buttons">
                <!--  
                    Una forma de hacer un botón de enlace hacia otra vista del proyecto es utilizando $router.push().
                    Aunque también se puede hacer creando un método que reciba la ruta como parámetro, de esta forma se pueden
                    aplicar validaciones en caso de ser necesarias.
                -->
                <!-- <button @click="$router.push('/pop')">Pop</button> -->

                <button @click="redireccionar('/pop')">Pop</button> 
                <button @click="redireccionar('/rock')">Rock</button>
                <button @click="redireccionar('/rap')">Rap</button>
            </div>
        </div>
    </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
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