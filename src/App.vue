<template>
  <div class="container">
    <blogheader></blogheader>
    <!-- <blogdetaillist></blogdetaillist>
    <blogadmin></blogadmin> -->
    <component :is="currentview" keep-alive></component>
    <blogfooter></blogfooter> 
  </div>
</template>

<script>
import blogheader from './components/header.vue'
import blogadmin from './components/admin.vue'
import blogdetaillist from './components/detaillist.vue'
import blogfooter from './components/footer.vue'
export default {
  components: {
    blogheader,
    blogdetaillist,
    blogadmin,
    blogfooter
  },
  data () {
    return {
      currentview: 'blogdetaillist'
    }
  },
  events: {
    'page': function (str) {
      console.log('----------------------->111')
      this.$data.currentview = str
    },
    'subdetail': function(data) {
        var self = this;
        const data2 = {
          title: data.title,
          date: data.date,
          content: data.content
        }
        console.log('-------------->data111', data2);
        this.$data.currentview = 'blogdetaillist';
       
        setTimeout(function(){
          self.$broadcast('detail', data2);
        },0);
        
        console.log('------------->data222',data2)
    }
  }
}
</script>

<style>
/*html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}*/
</style>
