<template>
    <div class="card-propup">
        <van-popup
            v-model="isPopupShow"
            closeable
            position="bottom"
            :style="{ height: '60%' }"
        >
            <div class="card-name">添加名片</div>
            <van-form @submit="onSubmit">
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
                <van-button class="record-btn" round block native-type="submit"
                    >提交</van-button
                >
            </van-form>
        </van-popup>
    </div>
</template>

<script>
export default {
    name: "listFilter",
    data() {
        return {
            active: 2,
            isPopupShow: false,
            //传入的参数
            params: {},
            //想传输的数据
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
            this.isPopupShow = true;
        },

        onSubmit() {
            this.$toast.success("成功文案");
            //this.$toast.fail('失败文案');
            //判断提交成功后关闭弹窗
            //if(success){
            // 	this.isPopupShow = false;
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
.card-propup {
    .card-name {
        width: 100vw;
        height: 61px;
        line-height: 61px;
        color: rgba(0, 0, 0, 1);
        font-size: 20px;
        font-weight: 500;
        font-family: "PingFang SC";
        text-align: left;
        background: rgba(255, 255, 255, 1);
        box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.06);
        margin-left: 16px;
    }
    .van-cell {
        width: 375px;
        height: 56px;
        background: rgba(255, 255, 255, 1);
        padding: 19px 16px;
    }
    .van-cell__title {
        height: 18px;
        opacity: 0.8999999761581421;
        color: rgba(0, 0, 0, 0.9);
        font-size: 17px;
        font-weight: 400;
        font-family: ".PingFang SC";
        text-align: left;
    }
    .van-field__control {
        height: 18px;
        opacity: 0.30000001192092896;
        color: rgba(0, 0, 0, 1);
        font-size: 17px;
        font-weight: 400;
        font-family: ".PingFang SC";
        text-align: left;
    }
    .van-popup__close-icon {
        top: 20.75px;
        right: 23.25px;
        color: #000000;
    }
}
</style>
