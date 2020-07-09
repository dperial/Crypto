<template>
    <v-container>
        <h1>Hauptview</h1>
        <ul style="list-style-type: none;margin: 0;padding: 0;display: flex;flex-wrap: wrap">
            <li v-for="cryp in crypto" :key="cryp.id"  class="col-sm-6 col-lg-4 col-12">
                <!-- {{cryp}} -->
                    <div>
                        <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading" style="margin-top: 20px">
                            <div class="d-flex grow flex-wrap">
                                <div class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 orange pa-7" style="max-height:60px; width: auto;margin-top: -30px; border-radius:4px">
                                    <i aria-hidden="true" class="v-icon notranslate theme--dark" style="font-size: 26px;margin-top: -25px;font-weight: bolder;"> {{cryp.symbol}}</i>
                                </div>
                                <div class="col-12" style="margin-bottom: -30px">
                                    <div class="col-6" style="margin-left: 34px;margin-top: 20px, float: left">
                                    <span class="body-2 grey--text font-weight-light">Verkauf</span>
                                        <h6 >
                                            {{cryp.sell}}
                                        </h6>
                                    </div>
                                    <div class="col-6" style="margin-top: -65px;margin-right: -45px; float:right">
                                    <span class="body-2 grey--text font-weight-light">Ankauf</span>
                                        <h6 >
                                            {{cryp.buy}}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </li>
        </ul>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Hauptview',
    data: () => ({
        crypto: []
    }),
    async created () {
        try {
            const resolve = await axios.get(`https://blockchain.info/ticker`)
            this.crypto = resolve.data;
            console.log("Crypto", this.crypto)
        }catch(e) {
            console.error(e);
        }
    }
};
</script>
<style scoped>
.v-card .v-card--material__heading {
    top: -30px;
}
</style>