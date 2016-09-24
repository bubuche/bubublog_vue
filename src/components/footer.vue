<template>
	<div class="footer row col-lg-8 col-lg-offset-2">
		{{footermess}}  
	</div>
</template>

<script>
	export default{
		data () {
			return {
				footermess: '© 2015 - 2016 Lei Jiang, ycwalker@outlook.com'
			}
		}
	}
</script>

<style>
	.footer{
		text-align:center;
		border-top:1px solid gray;
	}
</style>