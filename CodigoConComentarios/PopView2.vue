<template>

    <div>
        <h2>Pop</h2>
        <group-card :generoMusical="pop"/>
    </div>

</template>

<script>
/**
 * Se utiliza un mapHelper, para este ejercicio sera "mapState", el cual es un componente de la librería vuex y se debe 
 *      importar dentro de llaves {}
 * mapState permite generar funciones getter computadas. Cuando un componente necesita hacer uso de varias propiedades de 
 *      estado de "store" o "getter", la declaración de todas estas propiedades puede volverse repetitiva. Por lo que es
 *      mas fácil de manejar el mapeo de toda la información.
 */
import {mapState} from 'vuex';
import GroupCard from '@/components/GroupCard.vue';

export default {
    name: 'pop-view',
    // props: {},
    data: function(){
        return {}
    },
    /**
     * Se utiliza un spread operator (...) para poder desestructurar toda la información del "state".
     * El nombre del estado debe ir entre corchetes [] y debe ser el mismo con el que se declaro en state en store/index.js
     */
    computed: {
        ...mapState(['pop'])
    },
    // methods: {}
    // watch: {},
    components: {
        'group-card': GroupCard,
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>

</style>