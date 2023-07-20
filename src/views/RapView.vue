<template>

    <div>
        <h2>Rap</h2>
        <group-card :generoMusical="rap"/>
    </div>

</template>

<script>
import {mapState} from 'vuex';
import GroupCard from '@/components/GroupCard.vue';

export default {
    name: 'rap-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['rap'])
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