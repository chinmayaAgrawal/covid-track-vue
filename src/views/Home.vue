<template>
  <main v-if="!loading">
    <DataTitle :text="title" :dataDate="dataDate" />
    <DataBoxes :stats="stats" />
    <CountrySelect @get-country="getCountryData" :countries="countries" />
    <button @click="clearCountryData"
      v-if="stats.Country"
      class="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600">
        Clear Country
    </button>
   
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
     stats : {},
     countries : [],
     loadingImage :require('../assets/hourglass.gif'),
     };
   },

  //object 
   methods:{
      async fetchCovidData() { 
      const res = await fetch('https://api.covid19api.com/summary');
      const data= await res.json();
      return data
      },
       //country-data initializer from emit
    getCountryData(country){
       this.stats=country
       this.title=country.Country
   },
   async clearCountryData () {
      this.loading = true;
      const data = await this.fetchCovidData();
      this.title = 'Global';
      this.stats = data.Global;
      this.loading = false;
    }
   },
  
   // lifecycle method 
   async created(){
     const data = await this.fetchCovidData()
     //console.log(data)
     
     
     this.dataDate = data.Date;
     this.stats = data.Global;
     this.countries = data.Countries;
     this.loading = false;
   }
      /** const fetchCovidData = async () => {
      const res = await fetch('https://api.covid19api.com/summary');
      return await res.json(); */

}
</script>
