<template>

        <!-- Begin the Hauptview Interface -->
    <v-container>
        <!-- Begin meiner Bitcoin Interface -->
        <div class="col-sm-12 col-lg-12 col-12">
            <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading" style="margin-top: 20px; text-align:center">
                <div >
                    <div class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 orange pa-7" style="max-height:80px; width: 100%;margin-top: -30px; border-radius:4px">
                        <i aria-hidden="true" class="v-icon notranslate mdi mdi-bitcoin theme--dark" style="font-size: 30px;margin-top: -5px;font-weight: bolder;"></i>
                        <span style="font-size: 20px">Meine Bitcoin </span>
                    </div>
                    <div style="margin-top: 20px" class="col-sm-12 col-lg-12 col-12">
                        <v-row>
                            <v-col cols="12" sm="1" md="1" lg="1" style="margin-right: -40px;">
                                <v-avatar
                                tile
                                size="40"
                                col-4
                                >
                                    <img
                                    src="../assets/BTC.png"
                                    alt="BTC"
                                    col-4
                                    >
                                </v-avatar>
                            </v-col>
                             <v-col cols="12" sm="4" md="4" lg="4">
                                <div class="mt-2 text-center" style="font-size: 20px; font-weight: bolder">
                                    Mein Bitcoin: {{ this.meinBTC }} BTC
                                </div>
                             </v-col>
                             <v-col cols="12" sm="4" md="4" lg="4">
                                <div class="mt-2 text-center" style="font-size: 24px; font-weight: bolder">
                                     {{this.meinBtcBetrag}} $
                                </div>
                             </v-col>
                        </v-row>
                    </div>
                </div>
            </div>
        </div>
        <!-- End meiner Bitcoin Interface -->
        <!-- Begin der currentcy Interfaces -->
        <ul style="list-style-type: none;margin: 0;padding: 0;display: flex;flex-wrap: wrap">
            <li v-for="cryp in crypto" :key="cryp.id"  class="col-sm-6 col-lg-4 col-12">
                    <div>
                        <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading" style="margin-top: 20px">
                            <div class="d-flex grow flex-wrap">
                                <div class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 orange pa-7" style="max-height:60px; width: auto;margin-top: -30px; border-radius:4px">
                                    <i aria-hidden="true" class="v-icon notranslate theme--dark" style="font-size: 26px;margin-top: -25px;font-weight: bolder;"> {{cryp.symbol}}</i>
                                    <!-- <v-img  :src="showImageCallback()" height="28" width="28"></v-img> -->
                                     <!-- cryp.symbol-->
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
        <!-- Ende der currntcy Interface -->
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Hauptview',
    data: () => ({
        crypto: [],
        imgName: [],
        meinBTC: 0,
        btcPrice: 10,
        meinBtcBetrag: 0
    }),
    async created () {
        try {
            const resolve = await axios.get(`https://blockchain.info/ticker`)
            this.crypto = resolve.data;
            for( let el in this.crypto){
                this.imgName.push(el)
                console.log("Name Object", this.imgName)
            }
        }catch(e) {
            console.error(e);
        };
        let btc = localStorage.getItem('BTCLocalStorage');
        this.meinBTC = btc
        this.meinBtcBetrag = this.meinBTC * this.crypto.USD.last

    },
    methods: {
        showImageCallback () {
            let image= ""
            for( let el= 0; el < this.imgName.length; el++){
                if(this.imgName[el] === "USD"){
                    image= require(`../assets/${this.imgName[el]}.png`)
                    // return require(`../assets/${this.imgName[el]}.png`)
                }if (this.imgName[el] === "AUD"){
                    image= require(`../assets/${this.imgName[el]}.png`)
                }
                // console.log("CryptoImg", this.img)
            }
            return image;
        }
    }
};
</script>
<style scoped>
.v-card .v-card--material__heading {
    top: -30px;
}
</style>