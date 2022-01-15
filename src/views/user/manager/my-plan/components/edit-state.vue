<template>
    <div>
        <van-popup
            v-model="isShow"
            closeable
            position="bottom"
            :style="{ height: '52%' }"
            @close="resetData"
        >
            <div class="mod-popup">
                <div class="mod-popup__header">修改状态</div>

                <!-- 方式选择 -->
                <div
                    class="header-cell"
                    v-for="(item, index) in cellList"
                    :key="index"
                >
                    <div
                        v-if="index !== cellList.length - 1"
                        class="cell-item flex jsb u-page"
                        @click="activeIndex = index"
                    >
                        <div>{{ item.name }}</div>
                        <van-icon
                            v-show="activeIndex === index"
                            name="success"
                            size="22"
                            color="#FF8300"
                        />
                    </div>
                    <!-- 拒绝 -->
                    <van-field
                        v-else
                        v-model="refuse"
                        label="拒绝"
                        placeholder="(须填写拒绝理由)"
                    />
                </div>

                <div class="bnt-sbmit">
                    <van-button round block type="primary" @click="confirm"
                        >确定</van-button
                    >
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    name: "editState",
    data() {
        return {
            isShow: false,
            params: {},
            cellList: [
                {
                    name: "申请中",
                },
                {
                    name: "审核中",
                },
                {
                    name: "授信",
                },
                {
                    name: "放款",
                },
                {
                    name: "拒绝",
                },
            ],
            activeIndex: 0,

            refuse: "",
        };
    },
    methods: {
        show(params) {
            this.params = params;
            this.isShow = true;
        },
        resetData() {
            // 重置表单
            this.isShow = false;
        },

        confirm() {
            this.isShow = false;
            this.$emit("confirm", {});
        },
    },
};
</script>

<style scoped lang="less">
.mod-popup {
    .header-cell {
        .cell-item {
            border-bottom: 1px solid #f0f0f0;
            font-size: 17px;
        }
    }

    /deep/.van-cell {
        border-bottom: 1px solid #f0f0f0;
        .van-cell__title {
            font-size: 17px;
            color: #000;
            width: 2.2em;
        }
    }

    .bnt-sbmit {
        padding: 30px;
    }
}
</style>