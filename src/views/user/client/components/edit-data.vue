<template>
    <!-- 贷款详情 -->
    <van-popup
        v-model="isShow"
        @close="close"
        closeable
        position="right"
        :style="{ width: '100%', height: '100%' }"
    >
        <div class="mod-edit-data">
            <div class="main header-bg">
                <van-image
                    round
                    width="4.5rem"
                    height="4.5rem"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
                <div class="user-form mt20">
                    <div class="form-item required">
                        <p class="van-cell--required">昵称</p>
                        <div class="input-box">
                            <input
                                type="text"
                                placeholder="请输入"
                                v-model="form.userName"
                            />
                            <p class="msg-error" v-show="userNameErrorMsg">
                                {{ userNameErrorMsg }}
                            </p>
                        </div>
                    </div>

                    <div class="form-item">
                        <p>公司名称</p>
                        <div class="input-box">
                            <input
                                type="text"
                                placeholder="请输入"
                                v-model="form.phone"
                            />
                        </div>
                    </div>

                    <div class="form-item">
                        <p>手机号</p>
                        <div class="input-box">
                            <input
                                type="text"
                                placeholder="请输入"
                                v-model="form.companyName"
                            />
                        </div>
                    </div>

                    <div class="form-item">
                        <p>职业</p>
                        <div class="input-box">
                            <input
                                type="text"
                                placeholder="请输入"
                                v-model="form.occupation"
                            />
                        </div>
                    </div>

                    <div class="form-submit">
                        <van-button
                            type="primary"
                            round
                            block
                            @click="__onSubmit"
                            >保存修改</van-button
                        >
                    </div>
                </div>
            </div>
        </div>
    </van-popup>
</template>

<script>
export default {
    name: "editData",
    data() {
        return {
            isShow: false,
            form: {
                userName: "",
                phone: "",
                companyName: "",
                occupation: "",
            },
            userNameErrorMsg: "",
        };
    },
    methods: {
        show() {
            this.isShow = true;
            console.log(this.form.userName);
        },

        close() {
            this.onReset();
            this.isShow = false;
        },

        onReset() {
            for (const [key] of Object.entries(this.form)) {
                this.form[key] = "";
            }
            this.userNameErrorMsg = "";
            document
                .querySelector(".required .input-box")
                .classList.remove("error");
        },

        __onSubmit() {
            if (!this.form.userName) {
                const requier = document.querySelector(".required .input-box");
                requier.classList.add("error");
                this.userNameErrorMsg = "请输入昵称！";
                return;
            }
            this.$toast("修改成功！");

            setTimeout(() => {
                // 异步模拟 ajax....

                this.close();
            }, 500);
        },
    },
};
</script>

<style scoped lang="less">
@import "../../style/index.less";

.mod-edit-data {
    .main {
        height: 400px;
        padding: 15px;

        padding-top: 50px;

        .user-form {
            margin-top: 10px;
            .form-item {
                .input-box {
                    input {
                        outline-style: none;
                        border: 1px solid #c0c4cc;
                        border-radius: 5px;
                        width: 100%;
                        height: 100%;
                        padding: 0;
                        padding: 10px 15px;
                        box-sizing: border-box;
                        font-family: "Microsoft soft";
                        &:focus {
                            border-color: #f07b00;
                            outline: 0;
                            -webkit-box-shadow: inset 0 1px 1px
                                    rgba(0, 0, 0, 0.075),
                                #f07b00;
                            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
                                #f07b00;
                        }
                    }
                    &.error {
                        input {
                            border-color: #ed1a3a;
                        }
                        .msg-error {
                            color: #ed1a3a;
                            font-size: 14px;
                        }
                    }
                }
            }

            .form-submit {
                margin-top: 30px;
            }
        }
    }
}
</style>