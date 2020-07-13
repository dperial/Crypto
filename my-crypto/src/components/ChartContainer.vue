<template>
  <div class="container">
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
      {{this.error}}
  </div>
</template>

<script>
import LineChart from './Chart.vue'
import axios from 'axios'
export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: null,
    error: ''
  }),
  async created () {
    this.loaded = false
    try {
      const userlist  = await  axios.get(`https://www.blockchain.com/de/api/charts_api`)
      this.chartdata = userlist
      console.log("this.chartdata",this.chartdata)
      this.loaded = true
    } catch (e) {
        this.error= e
      console.error("Error",e)
    }
  }
}
</script>