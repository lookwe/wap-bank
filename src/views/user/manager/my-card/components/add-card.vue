<template>
    <div class="card-propup">
        <van-popup
            v-model="isShow"
            closeable
            position="bottom"
            :style="{ height: '38%' }"
        >
            <div class="mod-popup">
                <div class="mod-popup__header">添加名片</div>
                <van-form :show-error-message="false" @submit="onSubmit">
                    <van-field
                        v-model="form.name"
                        label="名片姓名"
                        placeholder="请输入名片姓名"
                        :formatter="formatter"
                        height="60"
                    />
                    <!-- 输入手机号，调起手机号键盘 -->
                    <van-field
                        v-model="form.tel"
                        type="tel"
                        label="名片电话"
                        placeholder="请输入名片电话"
                        :rules="[{ validator, message: '请输入正确内容' }]"
                        maxlength="11"
                    />

                    <van-field
                        v-model="form.company"
                        label="公司名称"
                        placeholder="请输入公司名称"
                        :formatter="formatter"
                    />

                    <van-field
                        v-model="form.job"
                        label="公司职务"
                        placeholder="请输入公司职务"
                        :formatter="formatter"
                    />
                    <van-button
                        class="record-btn"
                        round
                        block
                        native-type="submit"
                        >提交</van-button
                    >
                </van-form>
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    name: "addCard",
    data() {
        return {
            isShow: false,
            params: {},
            form: {
                name: null,
                tel: null,
                company: null,
                job: null,
            },
        };
    },
    methods: {
        show(params) {
            this.params = params;
            console.log(this.params);
            this.isShow = true;
        },

        onSubmit() {
            this.$toast.success("成功文案");
            //this.$toast.fail('失败文案');
            //判断提交成功后关闭弹窗
            //if(success){
            // 	this.isShow = false;
            // }
            this.$emit("confirm", {
                ...this.form,
            });
        },
        formatter(value) {
            // 过滤输入的数字
            return value.replace(/\d/g, "");
        },
        validator(val) {
            // 校验函数返回 true 表示校验通过，false 表示不通过
            return /^1[34578]\d{9}$/.test(val);
        },
    },
};
</script>

<style lang="less" scoped>
@import "../../../style/index.less";
</style>
