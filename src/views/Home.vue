<template>
  <main v-if="!loading">
    <DataTitle :text="title" :dataDate="dataDate" />
    <DataBoxes :stats="status" />
   
  </main>
  <main v-else class="flex flex-col align-center justify-center text-center">
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Fetching Data
    </div>
    <img :src=loadingImage alt="Loading-Image" class="w-24 m-auto" />
  </main>
</template>

<script>
 
// @ is an alias to /src
/**
import HelloWorld from '@/components/HelloWorld.vue'
**/
import DataTitle from '@/components/DataTitle.vue'
import DataBoxes from '@/components/DataBoxes.vue'
import CountrySelect from '@/components/CountrySelect.vue'

export default {
  name: 'Home',
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect
  },
  // default intialization 
   data() {
     return{
     loading : true,
     title : 'Global',
     dataDate : '',
     status : {},
     countries : [],
     loadingImage :require('../assets/hourglass.gif'),
     };
   },

  //object 
   methods:{
      async fetchCovidData() { 
      const res = await fetch('https://api.covid19api.com/summary');
      return await res.json();
      },
   },
   // lifecycle method 
   async created(){
     const data = await this.fetchCovidData()
     //console.log(data)
     
     this.loading = false;
     this.dataDate = data.Date;
     this.status = data.Global;
     this.countries = data.Countries;
   }
      /** const fetchCovidData = async () => {
      const res = await fetch('https://api.covid19api.com/summary');
      return await res.json(); */

}
</script>
