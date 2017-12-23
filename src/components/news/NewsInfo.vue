<template>
  <div class="newsinfo-container">
    <h3 class="title">{{ newsInfo.title }}</h3>
    <p class="comment">
      <span>发表时间：{{ newsInfo.add_time | dateFormat }}</span>
      <span>点击：{{ newsInfo.click }}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsInfo.content"></div>

    <comment :newsid="id"></comment>
  </div>

</template>

<script>
//导入comment.vue子组件
import comment from "../sub-conponents/Comment.vue";

export default {
  data() {
    return {
      newsInfo: []
    };
  },
  methods: {
    async getNewsInfo() {
      const { data } = await this.$http.get("/api/getnew/" + this.id);
      if (data.status === 0) return (this.newsInfo = data.message[0]);
    }
  },
  created() {
    // console.log(this);
    this.getNewsInfo();
  },
  props: ["id"],
  components: {
    //注册组件
    comment
  }
};
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 3px;
  .title {
    text-align: center;
    font-size: 16px;
    color: red;
  }
  .comment {
    display: flex;
    justify-content: space-between;
  }
}
</style>