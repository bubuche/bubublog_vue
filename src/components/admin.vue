<template>
	<div class="row col-lg-8 col-lg-offset-2">
		<form class="row">
			<input class="col-lg-12 title" v-model="title" type="text"></input>
			<input class="col-lg-12" v-model="date" type="text"></input>
			<textarea class="col-lg-12 passage" v-model="content" row="3";></textarea>
			<input class="col-lg-12 center-block" type="button" v-on:click="submitdetail()" ></input>
		</form>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:'bang',
				date:'21321',
				content:'fgd'
			}
		},
		methods: {
			submitdetail() {
				const data = {
					title: this.$data.title,
					date: this.$data.date,
					content: this.$data.content
				}
				console.log('----------------------------data', data);
				this.$http.post('http://localhost:3000/detailsave', data).then(function(response) {
					this.$dispatch('subdetail', response.body.data)
				}, function(response) {

				});
			}
		}
	}
</script>

<style>
	.title{
		font-size:36px;
		color: blue;
	}
	.passage{
		height: 200px;
	}
</style>