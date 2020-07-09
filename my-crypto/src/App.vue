<template>
    <v-app>
        <app-navigation></app-navigation>
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
