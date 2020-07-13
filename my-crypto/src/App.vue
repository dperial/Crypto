<template>
    <v-app>
        <AppNavigation></AppNavigation>
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue';

export default {
    name: 'App',

    components: {
        AppNavigation
    },

    data: () => ({
        //
    })
};
</script>
