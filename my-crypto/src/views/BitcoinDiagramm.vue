<template>
    <v-container>
        <div class="col-sm-12 col-lg-12 col-12">
            <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading" style="margin-top: 20px; text-align:center">
                <div >
                    <div class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 orange pa-7" style="max-height:80px; width: 100%;margin-top: -30px; border-radius:4px">
                        <i aria-hidden="true" class="v-icon notranslate mdi mdi-bitcoin theme--dark" style="font-size: 30px;margin-top: -5px;font-weight: bolder;"></i>
                        <span style="font-size: 20px">Bitcoin Diagramm </span>
                    </div>
                    <div style="margin-top: 50px" >
                        <ChartContainer></ChartContainer>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
import ChartContainer from "../components/ChartContainer"
export default {
    name: 'BitcoinDiagramm',
    components: {
        ChartContainer
    }
}
</script>

<style>

</style>