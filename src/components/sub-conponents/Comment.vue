<template>
  <div>
      <h3>评论列表</h3>
      <textarea placeholder="请输入要BB的内容（最多120字）" maxlength="120" v-model="msg"></textarea>

      <mt-button type="primary" size="large" @click="postMsg">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comlist" :key="i">
        <div class="cmt-item-title">第{{ i+1 }}楼&nbsp;用户：{{ item.user_name }}&nbsp;发表时间：{{ item.add_time | dateFormat }}</div>
        <div class="cmt-item-body">{{ item.content }}</div>
      </div>
    </div>
      <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
      
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      page: 1,
      comlist: [],
      msg: ""
    };
  },
  created() {
    this.getCommentByPage();
  },
  methods: {
    async getCommentByPage() {
      const { data } = await this.$http.get(
        "/api/getcomments/" + this.newsid + "?pageindex=" + this.page
      );
      console.log(data);
      if (data.status === 0)
        return (this.comlist = this.comlist.concat(data.message));
    },
    getMore() {
      this.page++;
      this.getCommentByPage();
    },
    async postMsg() {
      if (this.msg.trim().length <= 0) return Toast("请输入内容！");

      const { data } = await this.$http.post(
        "/api/postcomment/" + this.newsid,
        {
          content: this.msg.trim()
        }
      );
      if (data.status === 0) {
        console.log("ok");
        this.comlist.unshift({
          user_name: "匿名用户",
          add_time: new Date(),
          content: this.msg.trim()
        });
        this.msg ='';
        // this.getCommentByPage();
      }
    }
  },
  props: ["newsid"]
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 14px;
  margin: 0;
}
.cmt-list {
  margin-top: 14px;
  .cmt-item {
    line-height: 30px;
    .cmt-item-title {
      font-size: 14px;
      background-color: #ddd;
    }
    .cmt-item-body {
      font-size: 13px;
      text-indent: 2em;
    }
  }
}
</style>


