<template>
    <div class="home">
        <Hauptview />
    </div>
</template>

<script>
// @ is an alias to /src
import Hauptview from '@/components/Hauptview.vue';

export default {
    name: 'Home',
    components: {
        Hauptview
    }
};
</script>
