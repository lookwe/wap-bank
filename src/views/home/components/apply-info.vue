<template>
    <div>
        <van-popup
            v-model="isShow"
            closeable
            position="bottom"
            :style="{ height: '45%' }"
            @close="resetData"
        >
            <div class="mod-popup">
                <div class="mod-popup__header">申请信息</div>

                <div class="mt15">
                    <van-form
                        :show-error-message="false"
                        @submit="onSubmit"
                        ref="vanForm"
                    >
                        <van-field
                            v-model="form.text"
                            name="text"
                            label="企业名称"
                            placeholder="请输入企业名称"
                            :rules="[{ required: true }]"
                        />

                        <van-field
                            v-model="form.text"
                            name="text"
                            label="企业税号"
                            placeholder="请输入企业税号"
                            :rules="[{ required: true }]"
                        />

                        <van-field
                            v-model="form.text"
                            name="text"
                            label="姓名"
                            placeholder="请输入姓名"
                            :rules="[{ required: true }]"
                        />

                        <van-field
                            v-model="form.cellphone"
                            name="cellphone"
                            label="手机号"
                            type="tel"
                            placeholder="请输入您的手机号"
                            :rules="[{ required: true }]"
                        />

                        <van-field
                            v-model="form.text"
                            name="text"
                            label="备注"
                            placeholder="备注(选填)"
                            :rules="[{ required: false }]"
                        />

                        <div style="margin: 16px">
                            <van-button
                                block
                                round
                                type="primary"
                                native-type="submit"
                                >确定申请</van-button
                            >
                        </div>
                    </van-form>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    name: "applyInfo",
    data() {
        return {
            isShow: false,
            params: {},
            form: {
                text: "",
                cellphone: "",
            },
        };
    },
    methods: {
        show(params) {
            this.params = params;
            this.isShow = true;
        },
        resetData() {
            // 重置表单
            this.$refs.vanForm.resetValidation();
            // this.form = {xxx}
            this.isShow = false;
        },

        isPhone() {
            if (!/\d{11}/.test(this.form.cellphone)) {
                this.$toast("手机号格式错误 ！");
                return false;
            }
            return true;
        },

        // 提交
        async onSubmit(parmas) {
            if (!this.isPhone) return;

            console.log(parmas);
        },

        confirm() {
            this.isShow = false;
            this.$emit("confirm", {});
        },
    },
};
</script>

<style scoped lang="less">
</style>