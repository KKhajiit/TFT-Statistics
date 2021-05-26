<!--
<template>
    <div>
        <canvas></canvas>
    </div>
</template>
-->

<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    data() {
        return {
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                },
                responsive: true,
                maintainAspectRatio: false
            },
        };
    },
    extends: Line,
    mixins: [reactiveProp],
    props: ['chartData'],
    mounted () {
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object
        this.renderChart(this.chartData, this.options)
    }
}
</script>