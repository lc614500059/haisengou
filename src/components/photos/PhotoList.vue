<template>
    <div>
      <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<span :class="['mui-control-item', item.id===0? 'mui-active':'']" v-for="item in cateList" :key="item.id">
							{{ item.title }}
						</span>
					</div>
				</div>

			
			</div>
	    <ul class="myul">
          <li v-for="(item,i) in imgList" :key="i">
            <img v-lazy="item.img_url">
          </li>
      </ul>    
    </div>
</template>

<script>
// 导入mui
import mui from "../../../lib/mui/js/mui.js";

// import Vue from 'vue'

import { Lazyload } from "mint-ui";
// Vue.use(Lazyload);

export default {
  data() {
    return {
      cateList: [],
      imgList: []
    };
  },
  created() {
    this.getImgCate();
    this.getImgByCate(0);
  },
  methods: {
    async getImgCate() {
      const { data } = await this.$http.get("/api/getimgcategory");
      if (data.status === 0) {
        data.message.unshift({ title: "全部", id: 0 });
        this.cateList = data.message;
      }
    },
    async getImgByCate(id) {
      const { data } = await this.$http.get("/api/getimages/" + id);
      if (data.status === 0) {
        this.imgList = data.message;
      }
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
  // props:["id"]
};
</script>

<style lang="scss" scoped>
.mui-slider {
  touch-action: pan-x;
}

.myul {
  background-color: #000;
  img[lazy="loading"] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
}
</style>

