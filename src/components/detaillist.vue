<template>
	<div class="row col-lg-8 col-lg-offset-2">
		<button v-on:click="getList()">1111</button>
		<ul class="nav nav-list center">
			<li class="row nav-list-item alist" v-for="item in passage">
				<h2 class="col-lg-12">{{item.title}}</h2>
				<small class="col-lg-12">{{item.date}}</small>
				<div class="col-lg-12 content">{{item.description}}</div>
				<a href="#" class="col-lg-2">...more</a>
				<button class="col-lg-1 pull-right">X</button>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				passage: [
					
				]
			}
		},
		events: {
			'detail': function(data) {
		        console.log('-------------->data333', data);
		        const description = data.content.substring(0, data.content.indexOf('.')+1);
		       	data.description = description;
		        this.$data.passage.push(data);
		    }  
		},
		methods: {
			getList: function() {
				this.$http.get('http://localhost:3000/getdetail').then(function(response) {
					this.$data.passage = response.body.data;
				}, function(response) {

				});
			}
		}
		// ready: function() {
		// 	// this.$http.get('http://localhost:3000/getdetail').then(function(response) {
		// 	// 	this.$data.passage = response.body.data;
		// 	// }, function(response) {

		// 	// });
		// }
	}
</script>
<style>
	li.alist{
		border-bottom: 1px solid gray;
	}
</style>