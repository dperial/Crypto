<template>
    <v-container>
        <div class="col-sm-12 col-lg-12 col-12">
            <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading" style="margin-top: 20px; text-align:center">
                <div >
                    <div class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 orange pa-7" style="max-height:80px; width: 100%;margin-top: -30px; border-radius:4px">
                        <i aria-hidden="true" class="v-icon notranslate mdi mdi-bitcoin theme--dark" style="font-size: 30px;margin-top: -5px;font-weight: bolder;"></i>
                        <span style="font-size: 20px">Bitcoin Details </span>
                    </div>
                    <div class="col-12" style="text-align: center">
                        <div class="col-6" style="margin-top: 30px">
                        <!-- <span class="body-2 grey--text font-weight-light">Verkauf</span> -->
                            <h5 >
                                Marketcap
                            </h5>
                        </div>
                        <div class="col-6" style="margin-top: -42px; float: right">
                        <!-- <span class="body-2 grey--text font-weight-light">Ankauf</span> -->
                            <h5 style="color:#f7a22e;">
                                {{this.BTCDetails.market_price_usd}}
                            </h5>
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <div class="col-12" style="text-align: center">
                        <div class="col-6" style="margin-top: 20px">
                        <!-- <span class="body-2 grey--text font-weight-light">Verkauf</span> -->
                            <h5 >
                                TotalBTC
                            </h5>
                        </div>
                        <div class="col-6" style="margin-top: -42px; float: right">
                        <!-- <span class="body-2 grey--text font-weight-light">Ankauf</span> -->
                            <h5 style="color:#f7a22e;">
                                {{this.BTCDetails.totalbc}}
                            </h5>
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <div class="col-12" style="text-align: center">
                        <div class="col-6" style="margin-top: 20px">
                        <!-- <span class="body-2 grey--text font-weight-light">Verkauf</span> -->
                            <h5 >
                                24hrTRANSACTIONCOUNT
                            </h5>
                        </div>
                        <div class="col-6" style="margin-top: -42px; float: right">
                        <!-- <span class="body-2 grey--text font-weight-light">Ankauf</span> -->
                            <h5 style="color:#f7a22e;">
                                {{this.BTCDetails.total_fees_btc}}
                            </h5>
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <div class="col-12" style="text-align: center">
                        <div class="col-6" style="margin-top: 20px">
                        <!-- <span class="body-2 grey--text font-weight-light">Verkauf</span> -->
                            <h5 >
                                24hrBTCSENT
                            </h5>
                        </div>
                        <div class="col-6" style="margin-top: -42px; float: right">
                        <!-- <span class="body-2 grey--text font-weight-light">Ankauf</span> -->
                            <h5 style="color:#f7a22e;">
                                {{this.BTCDetails.total_btc_sent}}
                            </h5>
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <div class="col-12" style="text-align: center">
                        <div class="col-6" style="margin-top: 20px">
                        <!-- <span class="body-2 grey--text font-weight-light">Verkauf</span> -->
                            <h5 >
                                HASHRATE
                            </h5>
                        </div>
                        <div class="col-6" style="margin-top: -42px; float: right">
                        <!-- <span class="body-2 grey--text font-weight-light">Ankauf</span> -->
                            <h5 style="color:#f7a22e;">
                                {{this.BTCDetails.hash_rate}}
                            </h5>
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <div class="col-12" style="text-align: center">
                        <div class="col-6" style="margin-top: 20px">
                        <!-- <span class="body-2 grey--text font-weight-light">Verkauf</span> -->
                            <h5 >
                                GETDIFFICULTY
                            </h5>
                        </div>
                        <div class="col-6" style="margin-top: -42px; float: right">
                        <!-- <span class="body-2 grey--text font-weight-light">Ankauf</span> -->
                            <h5 style="color:#f7a22e;">
                                {{this.BTCDetails.difficulty}}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name: 'BitcoinDetails',
    data: () => ({
        BTCDetails: []
    }),
    async created () {
         try {
            const resolve = await axios.get(`https://api.blockchain.info/stats`)
            this.BTCDetails = resolve.data;
            console.log("BTCDetails", this.BTCDetails)
        }catch(e) {
            console.error(e);
        }
    }

}
</script>

<style>

</style>