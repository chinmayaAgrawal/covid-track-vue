/**the name handling of the the title and then with specific option */
<template>
    <div class="text-center">
      <h2 class="text-3xl font-bold">{{ text }}</h2>
      <div class="text-2xl mt-4 mb-10">
        {{ timestamp }}
      </div>
    </div>
</template>
<script> 
   import moment from 'moment';
//import { computed } from 'vue';
   export default {
  name: 'DataTitle',
  props: ['text', 'dataDate'],
  //using momnets to automatically convert a time to given format 
   computed:{
    timestamp : function() {
      return   moment(this.dataDate).format('MMMM Do YYYY, h:mm:ss a')
    }
   }
   };
</script>