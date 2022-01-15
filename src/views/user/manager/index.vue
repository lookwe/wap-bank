<template>
    <!-- 用户类型 - 经理 -->
    <div class="mod-user-manager u-page header-bg-img">
        <div class="user-header flex">
            <van-image
                round
                width="3.8rem"
                height="3.8rem"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="user-info">
                <div class="fz-20">方江</div>
                <div class="fz-13">员工编号：9527</div>
            </div>
        </div>

        <div class="function-list">
            <div class="function-item" @click="onToPage({ name: 'myCard' })">
                <div class="flex jsb ac">
                    <div class="flex ac">
                        <van-image
                            width="35px"
                            height="35px"
                            src="https://img01.yzcdn.cn/vant/cat.jpeg"
                        />
                        <div class="ml20">我的名片</div>
                    </div>
                    <div class="flex ac fn-right">
                        <div class="bubble">8</div>
                        <div class="txt-tips-color">999</div>
                        <van-icon name="arrow" size="20" />
                    </div>
                </div>
            </div>

            <div class="function-item" @click="onToPage({ name: 'myClient' })">
                <div class="flex jsb ac">
                    <div class="flex ac">
                        <van-image
                            width="35px"
                            height="35px"
                            src="https://img01.yzcdn.cn/vant/cat.jpeg"
                        />
                        <div class="ml20">我的客户</div>
                    </div>
                    <div class="flex ac fn-right">
                        <div class="bubble">8</div>
                        <div class="txt-tips-color">999</div>
                        <van-icon name="arrow" size="20" />
                    </div>
                </div>
            </div>

            <div class="function-item" @click="onToPage({ name: 'myPlan' })">
                <div class="flex jsb ac">
                    <div class="flex ac">
                        <van-image
                            width="35px"
                            height="35px"
                            src="https://img01.yzcdn.cn/vant/cat.jpeg"
                        />
                        <div class="ml20">我的进件</div>
                    </div>
                    <div class="flex ac fn-right">
                        <div class="bubble">8</div>
                        <div class="txt-tips-color">999</div>
                        <van-icon name="arrow" size="20" />
                    </div>
                </div>
            </div>

            <div
                class="function-item"
                @click="onToPage({ name: 'publicFetch' })"
            >
                <div class="flex jsb ac">
                    <div class="flex ac">
                        <van-image
                            width="35px"
                            height="35px"
                            src="https://img01.yzcdn.cn/vant/cat.jpeg"
                        />
                        <div class="ml20">公害捞取</div>
                    </div>
                    <div class="flex ac fn-right">
                        <div class="bubble">8</div>
                        <div class="txt-tips-color">999</div>
                        <van-icon name="arrow" size="20" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "manager",
    data() {
        return {};
    },
    methods: {
        onToPage(option) {
            const router = {
                ...option,
                // ...
            };
            this.$router.push(router);
        },
    },
};
</script>
 
<style scoped lang="less">
@import "../style/index.less";
.mod-user-manager {
    .user-header {
        margin-top: 12.5%;
        .user-info {
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    .function-list {
        margin-top: 80px;

        .function-item {
            background: #f6f6f6;
            padding: 15px;
            margin: 15px 0;
            border-radius: 8px;

            .fn-right {
                font-size: 18px;
                .txt-tips-color {
                    margin: 0 10px;
                }
            }
        }
    }
}
</style>