<template>

    <div class="card-container">
        <div v-for="album in generoMusical" :key="album.id" class="card-detail">
            <h3>{{album.artist}}</h3>
            <img :src="album.image" :alt="album.album">
            <h4>{{album.album}}</h4>
        </div>
    </div>

</template>

<script>
export default {
    name: 'group-card-comp',
    props: {
        generoMusical: {
            type: Array,
            required: true,
        },
    },
    data: function(){
        return {}
    },
    // computed: {},
    // methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .card-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 70%;
        margin: 0 auto 40px;
        gap: 15px;
    }
    .card-detail {
        padding: 10px;
        border: none;
        box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    }
    .card-detail img {
        width: 80%;
    }
</style>