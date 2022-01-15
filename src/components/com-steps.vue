<template>
    <div class="com-stepes u-page">
        <!-- 跟进记录  -->
        <div class="stepes-title">跟进记录</div>
        <van-steps direction="vertical" active-color="#FF8300" :active="active">
            <van-step
                class="stepe-item"
                v-for="(item, index) in list"
                :key="index"
            >
                <!-- icon自定义 激活状态  -->
                <template v-slot:active-icon>
                    <van-icon name="stop-circle" size="18" color="#FF8300" />
                </template>

                <!-- 未激活 -->
                <template v-slot:inactive-icon>
                    <van-icon name="stop-circle" size="18" />
                </template>

                <span class="stepe-name fz-16">
                    {{ item.name }}
                </span>
                <div class="stepe-box">
                    <div class="time">{{ item.time }}</div>
                    <div class="u-line-3">
                        {{ item.content }}
                    </div>
                </div>
            </van-step>
        </van-steps>
    </div>
</template>

<script>
export default {
    name: "listFilter",
    props: {
        list: {
            type: Array,
            default: () => {
                return [
                    {
                        name: "切格瓦拉",
                        content: "打工是不可能打工的",
                        time: "2021-10-01 10:00:00",
                    },
                    {
                        name: "罗翔",
                        content: "罗翔说刑法；dsaasdsadsa",
                        time: "2021-10-01 10:00:00",
                    },
                    {
                        name: "切格瓦拉",
                        content: "打工是不可能打工的",
                        time: "2021-10-01 10:00:00",
                    },
                    {
                        name: "罗翔",
                        content: "罗翔说刑法；dsaasdsadsa",
                        time: "2021-10-01 10:00:00",
                    },
                    {
                        name: "切格瓦拉",
                        content: "打工是不可能打工的",
                        time: "2021-10-01 10:00:00",
                    },
                    {
                        name: "罗翔",
                        content: "罗翔说刑法；dsaasdsadsa",
                        time: "2021-10-01 10:00:00",
                    },
                    {
                        name: "切格瓦拉",
                        content: "打工是不可能打工的",
                        time: "2021-10-01 10:00:00",
                    },
                    {
                        name: "罗翔",
                        content: "罗翔说刑法；dsaasdsadsa",
                        time: "2021-10-01 10:00:00",
                    },
                    {
                        name: "张三",
                        content:
                            "蒸胆剑；存慰展基助芳譬钻翘她蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司蒸胆剑； 存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司蒸胆剑； 存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司蒸胆剑； 存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司蒸胆剑； 存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她",
                        time: "2021-10-01 10:00:00",
                    },
                ];
            },
        },
        data() {
            return {
                active: 1,
            };
        },
        methods: {},
    },
};
</script>

<style lang="less" scoped>
.com-stepes {
    .stepes-title {
        font-size: 17px;
        font-weight: 600;
    }

    .stepe-item {
        box-sizing: border-box;
        margin-top: 16px;
        padding: 10px 20px;

        .stepe-name {
            font-size: 17px;
        }

        .stepe-box {
            color: #8e8e93;

            .time {
                padding: 10px 0;
                font-size: 12px;
            }
        }
    }

    // 穿透

    /deep/.van-step--finish {
        color: #ff8300;
    }
    /deep/.van-step--vertical:not(:last-child)::after {
        border-bottom-width: 0px;
    }
}
</style>