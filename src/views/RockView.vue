<template>

    <div>
        <h2>Rock</h2>
        <group-card :generoMusical="rock"/>
    </div>

</template>

<script>
import {mapState} from 'vuex';
import GroupCard from '@/components/GroupCard.vue';

export default {
    name: 'rock-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['rock'])
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