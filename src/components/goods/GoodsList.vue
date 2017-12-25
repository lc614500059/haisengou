<template>
  <div>
      <div class="goods-list">
          <router-link tag="div" class="goods-item" v-for="item in getList" :key="item.id" to="/home/goodsInfo">
              <img :src="item.img_url" alt="">
              <h1 class="title">{{ item.title }}</h1>
              <div class="info">
                  <p class="price">
                      <span class="new">{{ item.sell_price }}</span>
                      <span class="old">{{ item.market_price }}</span>
                  </p>
                  <p class="sell">
                      <span>热卖中</span>
                      <span>剩余{{ item.stock_quantity }}件</span>
                  </p>
              </div>
          </router-link>
      </div>
      <mt-button type="danger" @click="getMore" size="large">加载更多</mt-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      getList: [],
      isload: false
    };
  },
  created() {
    this.getGoodsListByPage();
  },
  methods: {
    async getGoodsListByPage() {
      const { data } = await this.$http.get(
        "/api/getgoods?pageindex=" + this.page
      );
      if (data.status === 0) {
        console.log(data.message);
        return (this.getList = this.getList.concat(data.message));
      }
    },
    getMore() {
      this.page++;
      this.getGoodsListByPage();
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  //换行
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    margin-top: 7px;
    box-shadow: 0 0 7px #ccc;
    padding: 2px;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      overflow: hidden;
      .price {
        .new {
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
        .old {
          text-decoration: line-through;
        }
        .sell {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }
      }
    }
  }
}
</style>

