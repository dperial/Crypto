<template>
    <span>
        <!-- Drawer Menü Icon -->
        <v-navigation-drawer app v-model="drawer" clipped class="black lighten-5" dark disable-resize-watcher>
            <v-list dense>
                <v-list-item-content>
                    <v-row>
                        <v-img
                        alt="my-crypto Logo"
                        class="shrink mr-2"
                        contain
                        src="../assets/BTC.png"
                        transition="scale-transition"
                        width="40"
                        style="margin-left: 20px"
                        />
                    <!-- </div> -->
                    <v-toolbar-title class="mr-12 align-center" >
                        <span class="mr-1" style="font-size: 28px; color:#f7a22e;    font-weight: bolder;">MY-CRYPTO</span>
                    </v-toolbar-title>
                     </v-row>
                </v-list-item-content>
                <v-list-item v-for="(item, index) in items" :key="index" link :to="item.route">
                    <v-list-item-action>
                        <v-icon>{{ item.logo }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                        {{ item.title }}
                        </v-list-item-title>
                    </v-list-item-content>
                    <!-- <v-divider :key="`divider-${index}`"></v-divider> -->
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <!-- End the Navigation Drawer Menü -->
        <!-- Begin theDesktop Menu -->
        <v-toolbar color="black darken-4" dark>
            <v-app-bar-nav-icon  class="d-lg-none d-xl-flex" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <!-- <v-spacer class="hidden-md-and-up"></v-spacer> -->
            <div class="d-flex align-center">
                <v-img
                    alt="my-crypto Logo"
                    class="shrink mr-5"
                    contain
                    src="../assets/BTC.png"
                    transition="scale-transition"
                    width="40"
                />
                <span class="mr-1" style="font-size: 32px; color:#f7a22e;    font-weight: bolder;">MY-CRYPTO</span>
            </div>
            <div class="hidden-md-and-down">
            <v-btn
                target="_blank"
                text
            >
                <router-link to="/" exact>
                    <v-icon class="iconStyle">mdi-home</v-icon>
                    <span class="mr-2">Bitcoin Dashboard</span>
                </router-link>
            </v-btn>
            <v-btn
                target="_blank"
                text
            >
                    <router-link to="/bitcoinDetails" exact>
                        <v-icon class="iconStyle">mdi-settings</v-icon>
                        <span class="mr-2">Bitcoin Details</span>
                    </router-link>
            </v-btn>
            <v-btn
                target="_blank" text
            >
                    <router-link to="/bitcoinUmrechner" exact>
                        <v-icon class="iconStyle">mdi-bank</v-icon>
                        <span class="mr-2">Bitcoin Umrechner</span>
                    </router-link>
            </v-btn>
            <v-btn
                target="_blank" text
            >
                <router-link to="/bitcoinDiagramm" exact>
                    <v-icon class="iconStyle">mdi-poll</v-icon>
                    <span class="mr-2">Bitcoin Diagramm</span>
                </router-link>
            </v-btn>
             <v-btn
                target="_blank" text
            >
                <router-link to="/meineBitcoin" exact>
                    <v-icon class="iconStyle">mdi-face</v-icon>
                    <span class="mr-2">Meine Bitcoin</span>
                </router-link>
            </v-btn>
            </div>
        </v-toolbar>
        <!-- End the Desktop Menu -->
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data: () => ({
        drawer: false,
        items: [
            {title: 'Dashboard',
            logo: 'mdi-domain',
            route:'/'
            },
            {title: 'Bitcoin Details',
            logo: 'mdi-settings',
            route:'/bitcoinDetails'
            },
            {title: 'Bitcoin Umrechner',
            logo: 'mdi-bank',
            route: '/bitcoinUmrechner'
            },
            {title: 'Bitcoin Diagramm',
            logo: 'mdi-poll',
            route: '/bitcoinDiagramm'
            },
            {title: 'Meine Bitcoin',
            logo: 'mdi-face',
            route:'/meineBitcoin'
            }
        ]
    })

}
</script>

<style scoped>
.v-application a {
    color:rgb(255, 255, 255);
    text-decoration: none;
}
.router-link-active {
    color: orange !important;
}
.iconStyle{
    margin-top: -7px
}
</style>