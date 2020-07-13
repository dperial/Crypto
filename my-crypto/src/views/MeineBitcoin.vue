<template>
        <v-container style="padding: 0px !important">
        <div class="col-sm-12 col-lg-12 col-12">
            <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading" style="margin-top: 20px; text-align:center">
                <div >
                    <div class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 orange pa-7" style="max-height:80px; width: 100%;margin-top: -30px; border-radius:4px">
                        <i aria-hidden="true" class="v-icon notranslate mdi mdi-bitcoin theme--dark" style="font-size: 30px;margin-top: -5px;font-weight: bolder;"></i>
                        <span style="font-size: 20px">Meine Bitcoin </span>
                    </div>
                    <div style="margin-top: 50px" >
                        <v-card
                            class="mx-auto"
                            max-width="344"
                            outlined
                        >
                            <v-list-item three-line>
                                <v-list-item-avatar
                                tile
                                size="40"
                              >
                                <img
                                    src="../assets/BTC.png"
                                    alt="BTC"
                                >
                              </v-list-item-avatar>
                              <v-list-item-content>
                                <div class=" overline mb-2">BALANCE</div>
                                <!-- <v-list-item-title class="headline mb-1">Balance</v-list-item-title> -->
                                <v-list-item-subtitle>
                                   <div class=" text-center" style="font-size: 18px">
                                        Available BTC : {{ BTCLocalStorage }}
                                     </div>
                                </v-list-item-subtitle>
                              </v-list-item-content>
                            </v-list-item>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn text color="red" class="ma-2" outlined @click="dialog = !dialog" rigth>
                                <v-icon color="orange darken-2">mdi-border-color</v-icon>
                              </v-btn>
                            </v-card-actions>
                            <!-- Update the value of is BTC -->
                            <v-dialog v-model="dialog" max-width="500px">
                                <v-card>
                                  <v-card-text>
                                    <v-text-field
                                        required
                                        v-model="btcUpdate"
                                        label="Update your Available BTC"
                                        color="orange"
                                        style="margin-top: 10px"
                                        :error-messages="result"
                                        :rules="[() => !!btcUpdate || 'This field is required']"
                                        >{{this.BTCLocalStorage}}</v-text-field>
                                  </v-card-text>

                                  <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn color="orange" class="ma-2" outlined @click="dialog = false; AnkauftBTC(); alertKauft=true">Save</v-btn>
                                  </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <!-- End Updated -->
                            <!-- Add a new quantite BTC -->
                                <v-dialog v-model="dialogNew" max-width="500px">
                                <v-card>
                                  <v-card-text>
                                    <v-text-field
                                        required
                                        v-model="btcAdd"
                                        label="Add a new quantity BTC"
                                        color="orange"
                                        style="margin-top: 10px"
                                        :error-messages="result"
                                        :rules="[() => !!btcAdd || 'This field is required']"></v-text-field>
                                  </v-card-text>

                                  <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn color="orange" class="ma-2" outlined @click="dialogNew = false">Add</v-btn>
                                  </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <!-- End -->
                        </v-card>
                    </div>
                </div>
            </div>
            <!-- Alert Successful Ankauft von BTC -->
            <v-snackbar
                dense
                v-model="alertKauft"
                :timeout="timeout"
                color="success"
            >
                Sie haben <strong>{{this.BTCLocalStorage}}</strong> BTC mit Erfolg gekauft.
            </v-snackbar>
             <v-btn
              fab
              color="orange accent-3"
              bottom
              right
              absolute
              @click="dialogNew =true"
              style="margin-bottom: 50px"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
        </div>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        BTCLocalStorage: 0,
        dialogNew: false,
        dialog: false,
        btcUpdate: 0,
        btcAdd: 0,
        alertKauft: false,
        alertAdd: false,
        alertVerkauft: false,
        timeout: 1500,
        result: '',
        error: false,
        buttonBuy: false,
        buttonSell: false

    }),
    created() {},
    methods: {
        AnkauftBTC () {
            this.BTCLocalStorage += parseInt(this.btcUpdate),
            console.log("this.upBTC", typeof(this.btcUpdate), typeof(this.BTCLocalStorage))
            localStorage.setItem('BTCLocalStorage', this.BTCLocalStorage);
            console.log("updateBTCtypeof",typeof(this.BTCLocalStorage))
            this.btcUpdate = 0
            return this.BTCLocalStorage
        }
    },
    mounted() {
        let btcSave = JSON.parse(localStorage.getItem('BTCLocalStorage'))
        if (btcSave){
            this.BTCLocalStorage = btcSave;
        }
    },
    watch: {
        update: {
            handler() {
              console.log('Available changed!');
              localStorage.setItem('btcUpdate', JSON.stringify(this.btcUpdate));
            },
            deep: true,
        }
    }
}
</script>

<style>

</style>