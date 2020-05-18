<template>
  <div class="blood_pressure">
    <h1>Blood pressure</h1>
    <p><router-link to="/register_blood_pressure">Register new</router-link></p>

    <template
      v-if="dataCollection.loaded">

      <LineChart
        class="chart"
        v-bind:data="dataCollection"/>

    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import LineChart from '@/components/charts/LineChart.vue'

export default {
  name: 'BloodPressure',
  components: {
    LineChart,
  },
  data(){
    return {
      dataCollection: {
        loaded: false,
        error: null,

        labels: [], // X axis, filled by API call

        datasets: [
          {
            label: 'Systolic pressure',
            data: [], // filled by API call
            borderColor: '#c00000',
            fill: false,
            pointRadius: 0,
            pointHitRadius: 3,
            pointHoverRadius: 3,
            borderWidth: 2,
          },
          {
            label: 'Diastolic pressure',
            data: [], // filled by API call
            borderColor: '#c00000',
            fill: false,
            pointRadius: 0,
            pointHitRadius: 3,
            pointHoverRadius: 3,
            borderWidth: 2,
          },

        ],
      }
    }
  },
  mounted(){
    this.get_blood_pressure_history()
  },
  methods: {
    get_blood_pressure_history(){
      this.dataCollection.loaded = false
      this.axios.get(`${process.env.VUE_APP_MEDICAL_API_URL}/blood_pressure/history`)
      .then(response => {

        console.log(response.data)

        // Empty everything
        this.dataCollection.labels = []
        this.dataCollection.datasets[0].data = []
        this.dataCollection.datasets[1].data = []

        response.data.forEach(entry => {
          this.dataCollection.datasets[0].data.push(Number(entry.systolic_pressure))
          this.dataCollection.datasets[1].data.push(Number(entry.diastolic_pressure))
          this.dataCollection.labels.push(new Date(entry.time))
        })

        this.dataCollection.loaded = true;


      })
      .catch(error => {
        if(error.response) console.log(error.response.data)
        else console.log(error)
      })
    }
  }
}
</script>
