<template>
    <div class="add-album-container">
        <h3>Agregar nuevo Album</h3>
        <form class="add-album-form">
            <div class="add-album-section">
                <label for="">Artista</label>
                <input v-model="artista" type="text">
                <!--  
                    Se utiliza la directiva v-if para ejecutar la revision de dos condiciones.
                    La primera, pregunta si la propiedad computada validarArtista es distinta de true (es lo mismo que preguntar
                        validarArtista == false).
                    La segunda, pregunta si formularioEnviado es igual a true (No es necesario escribir == true, ya que el 
                        compilador entiende que al no agregar nada, solo se espera un booleano de respuesta).
                -->
                <div v-if="!validarArtista && formularioEnviado" class="error-message">
                    Artista requerido
                </div>
            </div>
            <div class="add-album-section">
                <label for="">Album</label>
                <input  v-model="nombreAlbum" type="text">
                <div v-if="!validarNombreAlbum && formularioEnviado" class="error-message">
                    Album requerido
                </div>
            </div>
            <div class="add-album-section">
                <label for="">Portada</label>
                <input v-model="portada" type="text">
                <div v-if="!validarPortada && formularioEnviado" class="error-message">
                    Imagen de portada requerida
                </div>
            </div>
            <div class="add-album-section">
                <label for="">Género</label>
                <select v-model="categoria">
                    <option value="rock">rock</option>
                    <option value="rap">rap</option>
                    <option value="pop">pop</option>
                </select>
                <div v-if="!validarCategoria && formularioEnviado" class="error-message">
                    Género requerido
                </div>
            </div>

            <div class="add-album-section-buttons">
                <button  @click.prevent="agregar" >Agregar Album</button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'agregar-album-comp',
    // props: {},
    data: function(){
        return {
            artista: '',
            nombreAlbum: '',
            portada: '',
            categoria: '',
            formularioEnviado: false,
        }
    },
    computed: {
        validarArtista() {
            return this.validarInput(this.artista)
        },
        validarNombreAlbum() {
            return this.validarInput(this.nombreAlbum);
        },
        validarPortada() {
            return this.validarInput(this.portada);
        },
        validarCategoria() {
            return this.validarSelect(this.categoria);
        },
    },
    methods: {
        /**
         * Se utiliza mapActions de vuex para enlazar la acción "agregar_album" declara en el archivo store/index.js.
         * IMPORTANTE: después de declarar un mapActions, al final agregar una coma "," ya que es la forma de separarlo de los 
         *      métodos que se crearan.
         */
        ...mapActions(['agregar_album']),

        agregar(){
            this.formularioEnviado = true;

            if (this.validarTodosLosInput()) {
                let nuevoAlbum = {
                    id: Math.floor(Math.random() * 1000),
                    artist: this.artista,
                    album: this.nombreAlbum,
                    image: this.portada,
                    category: this.categoria,
                };

                this.agregar_album(nuevoAlbum);
                this.$router.push(`/${this.categoria}`);
                this.limpiarFormulario();
                this.formularioEnviado = false;
            }
        },
        limpiarFormulario() {
            this.artista = '';
            this.nombreAlbum = '';
            this.portada = '';
            this.categoria = '';
        },
        /**
         * Dentro de un único if() se pregunta por las propiedades computadas. 
         * Si utiliza la negación (!) para preguntar si su valor es distinto de true, es decir, si una o mas propiedades 
         *      computadas son == false, el valor de la variable "todoValido" sera igual a false.
         * Y en el caso que todas las propiedades sean == true, entonces el valor de la variable "todoValido" sera igual a true
         *      y pasara la validación if() dentro del método agregar.
         */
        validarTodosLosInput() {
            let todoValido = true;
            if (!this.validarArtista || !this.validarNombreAlbum || !this.validarPortada || !this.validarCategoria) {
                // alert('Uno o mas campos están vacíos');
                return false;
            }
            return todoValido;
        },
        validarInput(value) {
            if (value !== '') {
                return true;
            } else {
                return false;
            }
        },
        validarSelect(value) {
            if (value !== '') {
                return true;
            } else {
                return false;
            }
        },
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .add-album-container {
        margin-top: 20px;
        border-top: 1px solid black;
    }
    .add-album-form {
        display: flex;
        flex-wrap: wrap;
    }
    .add-album-form label {
        margin-left: 8px;
        margin-right: 4px;
    }
    .add-album-form input {
        padding: 4px;
        /* border-radius: 4px; */
        /* width: 90%; */
        width: 55%;
        height: 14px;
    }
    .add-album-form select {
        padding: 4px;
        width: 50%;
    }
    .add-album-form button {
        background: green;
        color: white;
        border: none;
        padding: 6px 10px;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 8px;
    }
    .add-album-section {
        width: 25%;
    }
    .add-album-section-buttons {
        margin-top: 5px;
        width: 100%;
    }

    .error-message {
        color: red;
    }
</style>