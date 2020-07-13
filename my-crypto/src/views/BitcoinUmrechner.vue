<template>
    <v-container>
        <div class="col-sm-12 col-lg-12 col-12">
            <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading" style="margin-top: 20px; text-align:center">
                <div >
                    <div class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 orange pa-7" style="max-height:80px; width: 100%;margin-top: -30px; border-radius:4px">
                        <i aria-hidden="true" class="v-icon notranslate mdi mdi-bitcoin theme--dark" style="font-size: 30px;margin-top: -5px;font-weight: bolder;"></i>
                        <span style="font-size: 20px">Bitcoin Umrechner </span>
                    </div>
                    <div style="margin-top: 50px" >
                        <v-form v-model="valid">
                            <v-container>
                              <v-row>
                                <!-- Textfiel für das Umrechnete Geld -->
                                <v-col
                                  cols="12"
                                  md="3"
                                >
                                  <v-text-field
                                    v-model="betrag"
                                    :rules="betragRules"
                                    label="Betrag"
                                    required
                                    solo
                                  ></v-text-field>
                                </v-col>
                                <!-- Dropdown für die Auswahl von verschiedene Währung -->
                                <v-col
                                  cols="12"
                                  md="3"
                                >
                                  <v-select
                                    v-model="itemOne"
                                    :items="items"
                                    :rules="[v => !!v || 'Item is required']"
                                    label="Von"
                                    required
                                    solo
                                  >
                                  <v-img slot="prepend-inner" :src="prependIconCallbackOne()" height="28" width="28"></v-img>
                                  </v-select>
                                </v-col>
                                <!-- Dropdown für die Auswahl von verschiedene Währung -->
                                <v-col
                                  cols="12"
                                  md="3"
                                >
                                  <v-select
                                    v-model="itemSecond"
                                    :items="items"
                                    :rules="[v => !!v || 'Item is required']"
                                    label="Fuer"
                                    required
                                    solo
                                    @input="prependIconCallback"
                                    readonly
                                  >
                                  <!-- <v-icon slot="prepend-inner" color="red">{{icn}}</v-icon> -->
                                  <v-img slot="prepend-inner" :src="prependIconCallback()" height="28" width="28"></v-img>
                                  </v-select>
                                </v-col>
                                <!-- Button um die Rechnung zu starten -->
                                <v-col
                                  cols="12"
                                  md="3"
                                  style="padding-left: -25px"
                                >
                                    <v-btn
                                    outlined
                                    fab dark
                                    color="#f7a22e"
                                    @click="betragRechner()"
                                    >
                                        <v-icon>mdi-send</v-icon>
                                    </v-btn>
                                </v-col>
                              </v-row>
                            </v-container>
                            <span class="resultStyle" v-if="show" style="font-weight: bolder; font-size: 20px">
                              {{this.betrag}} {{this.itemOne}} =  {{this.result}} {{this.itemSecond}}
                            </span>
                        </v-form>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'BitcoinUmrechner',
    data: () => ({
        show: false,
        betrag: 0,
        betragRules: [
            v => !!v || 'Betrag is required',
            v => v >= 0 || 'Betrag must be up than 0',
        ],
        itemOne: 'EUR',
        itemSecond: 'BTC',
        select: null,
        items: [
            'BTC',
            'EUR',
            'USD',
            'AUD',
            'NZD',
            'GBP',
        ],
        crypto: [],
        values: [],
        result: 0
    }),
    async created () {
        try {
            const resolve = await axios.get(`https://blockchain.info/ticker`)
            this.crypto = resolve.data;
            this.values.push(this.crypto.EUR.last),
            this.values.push(this.crypto.USD.last)
            this.values.push(this.crypto.AUD.last)
            this.values.push(this.crypto.NZD.last)
            this.values.push(this.crypto.GBP.last)

            console.log("this.value", this.values)
        }catch(e) {
            console.error(e);
        }
    },
    mounted () {
      this.prependIconCallback()
    },
    methods: {
        prependIconCallback () {
          let name = this.itemSecond
          // let image= "../assets/" + name + ".png"

          return require(`../assets/${name}.png`);
        },
         prependIconCallbackOne () {
          let name = this.itemOne
          // let image= "../assets/" + name + ".png"

          return require(`../assets/${name}.png`);
        },
        betragRechner () {
          this.show = true;
          this.result = this.betrag;
                if(this.itemOne == 'EUR'){
                  this.result /= this.values[0]
                }else if(this.itemOne == 'USD'){
                  this.result /= this.values[1]
                }else if(this.itemOne == 'AUD'){
                  this.result /= this.values[2]
                }else if(this.itemOne == 'NZD'){
                  this.result /= this.values[3]
                }else if(this.itemOne == 'GBP'){
                  this.result /= this.values[4]
                }
          return this.result;
        }
    }

}
</script>

<style scoped>
.resultStyle{
  font-size: 20px;
}
.v-application, .primary--text {
    color: #FF8C00 !important;
    caret-color: #FF8C00 !important;
}
</style>