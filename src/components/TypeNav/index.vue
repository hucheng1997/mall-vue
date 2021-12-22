<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="enterShow" @mouseleave="leaveShow" >
        <h2 class="all" >全部商品分类</h2>
        <!-- 过渡动画 -->
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click="goSearch">
              <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId">
                <h3 @mouseenter="changeIndex(index)" :class="{ cur: currentIndex == index }">
                  <a
                      :data-categoryName="c1.categoryName"
                      :data-category1Id="c1.categoryId"
                  >{{ c1.categoryName }}</a>
                </h3>
                <div class="item-list clearfix" :style="{display:currentIndex == index?'block':'none'}">
                  <div class="subitem" v-for="(c2) in c1.categoryChild" :key="c2.categoryId">
                    <dl class="fore">
                      <dt>
                        <a
                            :data-categoryName="c2.categoryName"
                            :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}</a>
                      </dt>
                      <dd>
                        <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId">
                          <a
                              :data-categoryName="c3.categoryName"
                              :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import throttle from 'lodash/throttle'

export default {
  name: "TypeNav",
  data() {
    return {
      //存储用户鼠标移上哪一个一级分类
      currentIndex: -1,
      show: true
    }
  },
  methods: {
    //鼠标进入修改响应式数据currentIndex属性
    //正常情况（用户慢慢的操作）：鼠标进入，每一个一级分类h3，都会触发鼠标进入事件
    //非正常情况（用户操作过快）：本身全部的一级分类都应该触发鼠标进入事件，但是经过测试 ，只有部分H3触发了
    //就是由于用户行为过快，导致浏览器反应不过来，如果当前回调函数中有一些大量业务，有可能出现卡顿现在
    changeIndex: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    goSearch(event) {
      //event.target：获取到的是出发事件的元素（div、h3、a、em、dt、el）
      let node = event.target
      //给a标签添加了自定义属性:data-catagoryName,全部的字标签当中只有a标签带有自定义属性
      let {
        categoryname,
        category1id,
        category2id,
        category3id,
      } = node.dataset;
      if (categoryname) {
        //准备路由跳转的对象
        let location = {name: 'search'}
        let query = {categoryName: categoryname}
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else {
          query.category3Id = category3id
        }
        if (this.$route.params) {

          location.params = this.$route.params
          location.query = query
          //路由跳转
          console.log(location);
          this.$router.push(location);
        }
      }
    },
    enterShow(){
      if (this.$route.path != '/home') {
        this.show = true
      }
    },
    leaveShow(){
      this.currentIndex = -1
      if (this.$route.path != '/home') {
        this.show = false
      }
    }
  },
  mounted() {
    // this.$store.dispatch('categoryList')
    if (this.$route.path != '/home') {
      this.show = false
    }
  },
  computed: {
    ...mapState({
      categoryList: state => state.home.categoryList
    })
  }
}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }

            &.cur {
              background: skyblue;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          //&:hover {
          //  .item-list {
          //    display: block;
          //  }
          //}
        }
      }
    }
    //过渡动画的样式
    //过渡动画开始状态（进入）
    .sort-enter {
      height: 0px;
    }

    // 过渡动画结束状态（进入）
    .sort-enter-to {
      height: 461px;
    }

    // 定义动画时间、速率
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
