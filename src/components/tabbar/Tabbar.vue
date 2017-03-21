<template>
	<div class="tabbar">
		<div class="tabbar-nav">
			<div class="tabbar-item">
				<router-link to="/all">Go to All</router-link>
			</div>
			<div class="tabbar-item">
				<router-link to="/recommend">Go to Recommend</router-link>
			</div>
		</div>
		<div class="tabbar-content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {};
</script>

<style type="text/css">
	.tabbar{
		width: 100%;
	}
	.tabbar-nav{
		display: flex;
		width: 100%;
		border-top: 1px solid #e5e5e5;
		border-bottom: 1px solid #e5e5e5;
	}
	.tabbar-item{
		flex: 1;
		height: 45px;
		line-height: 45px;
		text-align: center;
	}
</style>
