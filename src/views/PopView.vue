<template>

    <div>
        <h2>Pop</h2>
        <group-card :generoMusical="pop"/>
    </div>

</template>

<script>
import {mapState} from 'vuex';
import GroupCard from '@/components/GroupCard.vue';

export default {
    name: 'pop-view',
    // props: {},
    data: function(){
        return {}
    },
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