<template>
    <div class="client-page">
      <div class="client-detail">
        <div class="flex ac company">
          <img class="icon"/>
          <span class="txt-tips-color fz-13 name">深圳市腾讯科技有限公司</span>
        </div>

        <div class="flex ac user">
          <div class="fz-20 c-black name">姚成平</div>
          <div class="flex ac tags">
            <div class="fz-13 tag">大客户</div>
            <div class="fz-13 tag">还款准时</div>
          </div>
        </div>
        <div class="fz-15 c-black flex ac tel">
          <img class="icon"/>
          <span class="tel-txt">18736463012</span>
        </div>

        <div class="flex ac money-count">
          <div class="flex f-d-c box-piece">
            <div class="c-r">
              <span class="fz-12">￥</span>
              <span class="fz-26 fw-b">30</span>
              <span class="fz-12">万</span>
            </div>
            <div class="fz-12 txt-tips-color">贷款总金额</div>
          </div>
          <div class="flex f-d-c box-piece">
            <div class="c-r">
              <span class="fz-26 fw-b">2</span>
              <span class="fz-12">次</span>
            </div>
            <div class="fz-12 txt-tips-color">贷款次数</div>
          </div>
        </div>

        <div class="flex jsb ac  txt-tips-color time-manager">
          <div class="fz-13">注册日期：2015/02/04</div>
          <div class="fz-13">客户经理：张小凡</div>
        </div>
      </div>

      <div class="step-content">
        <div class="title">跟进记录</div>

        <div class="fz-17 c-black step-ul">
          <div class="step-li" v-for="(item, index) in [1,2,3]" :key="index">
            <div class="fz-16 c-black name">王志</div>
            <div class="fz-11 txt-tips-color time-mark">
              <div class="time">2021-09-01 10:00:00</div>
              <div class="mark">蒸胆剑；蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司</div>
            </div>
          </div>
        </div>
      </div>

      <div class="part-content">
        <div class="title">进件列表</div>

        <div class="client-detail" v-for="(item,index) in [1,2,3]" :key="index">
          <div class="flex ac company">
            <img class="icon"/>
            <span class="txt-tips-color fz-13 name">深圳市腾讯科技有限公司</span>
          </div>

          <div class="w100 flex jsb ac user">
            <div class="fz-20 c-black name">姚成平</div>
            <div class="flex ac status">
              <div class="fz-13 color"></div>
              <div class="fz-15 c-black tag">已放款</div>
            </div>
          </div>
          <div class="fz-15 c-black flex ac tel">
            <img class="icon"/>
            <span class="tel-txt">18736463012</span>
          </div>

          <div class="flex ac money-count">
            <div class="flex f-d-c box-piece">
              <div class="c-r">
                <span class="fz-12">￥</span>
                <span class="fz-26 fw-b">30</span>
                <span class="fz-12">万</span>
              </div>
              <div class="fz-12 txt-tips-color">贷款总金额</div>
            </div>
          </div>

          <div class="flex jsb ac  txt-tips-color time-manager">
            <div class="flex ac ">
              <div class="fz-13">注册日期：2015/02/04</div>
              <div class="fz-13 manager">客户经理：张小凡</div>
            </div>
            <div class="right-icon">
              <img class="icon" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex ac jc btns">
        <button class="fz-16  btn">添加跟进记录</button>
        <button class="btn c-b active">添加/修改标签</button>
      </div>
    </div>
</template>

<script>
export default {
    name: "myClient",
    data() {
        return {};
    },
    methods: {},
};
</script>

<style scoped lang="less">
img {
  // FIXME
  background: red;
}
.client-page {
  padding: 17.5px;
}

.client-detail {
  .company {
    height: 18px;
    .icon {
      width: 13px;
      height: 13px;
    }
    .name {
      line-height: 18px;
      padding: 0 10px;
    }
  }

  .user {
    height: 30px;
    margin: 15px 0 0;
    .name {
      font-weight: 500;
    }
    .tags {
      .tag {
        margin: 0 7px;
        padding: 2px;
        color: #C8593B;
        background-color: #FBF2EB;
      }
    }
  }

  .tel {
    height: 20px;
    margin: 8px 0 0;
    .icon {
      width: 13px;
      height: 13px;
    }
    .tel-txt {
      padding: 0 10px;
    }
  }

  .money-count {
    margin: 15px 0 0;
    .box-piece {
      margin: 0 40px 0 0;
      .txt-tips-color {
        margin: 6px 0 0;
      }
      .c-r {
        text-align: center;
      }
    }
  }

  .time-manager {
    height: 18px;
    margin: 32px 0 0;
  }
}

.step-content {
  padding: 37px 0 0;
  .title {
    height: 22px;
    line-height: 22px;
  }
  .step-ul {

    .step-li {
      margin: 16px 0 0;
      .name {
        position: relative;
        height: 23px;
        line-height: 23px;
        padding: 0 0 0 33px;
        &:after {
          position: absolute;
          left: 0;
          top: 0;
          width: 18px;
          height: 18px;
          content: ' ';
          border: 2px solid #8E8E93;
          border-radius: 50%;
        }
        &:before {
          position: absolute;
          left: 6px;
          top: 6px;
          width: 10px;
          height: 10px;
          content: ' ';
          background-color: #8E8E93;
          border-radius: 50%;
        }
      }
      .time-mark {
        position: relative;
        margin: 15px 0;
        line-height: 16px;
        padding: 0 0 10px 33px;
        &:after {
          position: absolute;
          left: 10px;
          top: 0;
          width: 1px;
          height: 100%;
          content: ' ';
          background-color: #E5E5EA;
          border-radius: 50%;
        }
        .time {
          height: 16px;
        }
        .mark {
          margin: 5px 0 0;
        }
      }
    }
  }
}

.part-content {
  .title {
    height: 22px;
    line-height: 22px;
    margin: 37px 0 0;
  }

  .client-detail {
    padding: 16px 0;
    border-bottom: 1px solid #F6F6F6;
    .user .status {
      .color {
        width: 8px;
        height: 8px;
        margin: 0 10px;
        border-radius: 50%;
        background-color: #FF9500;
      }
    }
    .manager {
      padding: 0 16px;
    }
    .right-icon {
      .icon {
        width: 13px;
        height: 13px;
      }
    }
  }
}

.btns {
  .btn {
    width: 144px;
    // todo button 按钮默认样式清除
    //height: 42px;
    border-radius: 27px;
    border: 1px solid #FF8300;
    font-size: 16px;
    font-weight: 400;
    line-height: 42px;
    text-align: center;
    color: #FF8300;
    background: none;
    margin: 8px 8px;
    &.active {
      background-color: #FF8300;
      color: #ffffff;
    }
  }
}
</style>
