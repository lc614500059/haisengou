<template>
  <div>

    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p class='mui-ellipsis'>
                <span>{{ item.add_time }}</span>
                <span>{{ item.click }}</span>
                </p>
						</div>
					</a>
				</li>

			</ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newlist: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    async getNewsList() {
      const { data } = await this.$http.get("/api/getnewslist");
      if (data.status === 0) return (this.newlist = data.message);
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-media-body {
  h1 {
    font-size: 14px;
  }
  .mui-ellipsis{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #26a2ff;
  }
}
</style>