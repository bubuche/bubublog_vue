<template>
	<div class="row header">
		<div class="col-lg-4">
			<a href="#" class="pull-right">
				<img src="../assets/logo.png" alt="logojpg" class="img-responsive center-block logo">
			</a>
		</div>
		<div class="col-lg-7 col-lg-offset-1">
			<ul class="nav nav-pills nav-list center">
				<li class="nav-list-item {{item.active? active : ''}}" v-for="item in title">
					<a v-on:click="showpage(item.page)">{{item.name}}</a>
				</li>
			</ul>
		</div>
		<!-- <button v-on:click="modify()">add</button> -->
	</div>	
</template>
<script>
  	export default {
		data () {
			return {
				title: [
					{
						name: 'BLOG',
						active: true,
						page: 'blogdetaillist'
					},
					{
						name: 'ARCHIVE',
						active: false,
						page: 'blogadmin'
					},
					{
						name: 'ABOUT',
						page: 'blogadmin',
						active: false

					},
					{
						name: 'RESUME',
						active: false
					}
				]
			}
		},
		methods: {
			// modify() {
			// 	this.title[0].name = 'bangbang';
			// }
			showpage(page) {
				// 第一个参数 自定义事件，第二个参数是转换的页面
				this.$dispatch('page', page);
			}
		}
	}
</script>
<style>
	.header{
		padding: 50px 0;
	}
	.logo{
		width:60px;
		height:60px;
		line-height:60px;
	}
</style>