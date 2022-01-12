<template>
    <div class="fetch-prop">
        <van-popup
            v-model="isPopupShow"
            closeable
            position="bottom"
            :style="{ height: '75%' }"
        >
            <van-steps
			:active="active" 
			active-icon="success" 
			active-color="#38f"
			direction="vertical"
			class="record">
				<div>
					跟进记录
				</div>
				<!-- :key视情况取  后端给的唯一值即可 -->
				<van-step class="record-item" v-for="item in params" :key="item.ygName">
						<div class="radius">
							<div></div>
						</div>
						<span class="yg-name">
							{{item.ygName}}
						</span>
						<div class="txt-box">
							<div class="time">{{item.time}}</div>
							<div class="detail">
							{{item.detail}}
							</div>
						</div>
				</van-step>
			</van-steps>
			<div class="record-btn" @click="confirm">
				添加至我的名片
			</div>
        </van-popup>
    </div>
</template>
 
<script>
export default {
    name: "listFilter",
    data() {
        return {
            isPopupShow: false,
			//传入的参数
            params: {},
			//想传输的数据
            form: {},
			//步骤条索引
			active: 1,
        };
    },
    methods: {
        show(params) {
            this.params = params;
			console.log(this.params);
            this.isPopupShow = true;
        },
        confirm() {
            this.isPopupShow = false;
            this.$emit("confirm", {
                ...this.form,
            });
        },
    },
};
</script>
 
<style scoped lang="less">
.fetch-prop {
	position: relative;
	.record{
		margin-top: 21px;
		margin-left: 16px;
		width: 68px;
		height: 22px;
		opacity: 1;
		color: rgba(0,0,0,1);
		font-size: 17px;
		font-weight: 400;
		font-family: "PingFang SC";
		text-align: left;
		line-height: 22px;
		.record-item{
			width: 332.61px;
			min-height: 91px;
			opacity: 1;
			margin-left: 16px;
			margin-top: 16px;
			height: 23px;
			position: relative;
			.radius{
				width: 18px;
				height: 18px;
				opacity: 1;
				border: 1px solid rgba(142,142,147,1);
				border-radius:50% ;
				box-sizing: border-box;
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
					>div{
						background: rgba(142,142,147,1);
						width: 10px;
						height: 10px;
						border-radius:50% ;
					}
				}
				.yg-name{
					width: 32px;
					height: 23px;
					margin-left: 33px;
					opacity: 1;
					color: rgba(0,0,0,1);
					font-size: 16px;
					font-weight: 400;
					font-family: "PingFang SC";
					text-align: left;
				
				}
				.txt-box{
					height: 61px;
					width: 322px;
					position: absolute;
					top: 30px;
					left: 8px;
					border-left: 1px solid #E5E5EA;
					.time{
						margin-top: 3px;
						margin-left: 24px;
						height: 16px;
						line-height: 16px;
						opacity: 1;
						color: rgba(142,142,147,1);
						font-size: 11px;
						font-weight: 400;
						font-family: "PingFang SC";
						text-align: left;
					}
					.detail{
						margin-top: 5px;
						margin-left: 24px;
						width: 297px;
						height: 32px;
						line-height: 16px;
						color: rgba(142,142,147,1);
						font-size: 11px;
						font-weight: 400;
						font-family: "PingFang SC";
						text-align: left;
					}
				}
		}
	}
   .record-btn{
	position: absolute;
	left: 34.5px;
	bottom: 25px;
	width: 306px;
	height: 50px;
	line-height: 50px;
	border-radius: 46px;
	opacity: 1;
	background: rgba(255,131,0,1);
	color: rgba(255,255,255,1);
	font-size: 15px;
	font-weight: 400;
	font-family: "SF Pro Text";
	text-align: center;
   }
}
</style>