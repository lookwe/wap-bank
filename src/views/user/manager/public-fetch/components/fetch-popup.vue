<template>
    <div class="fetch-prop">
        <van-popup
            v-model="isPopupShow"
            closeable
            position="bottom"
            :style="{ height: '100%' }"
        >	
			<div class="cardbox">
				<div class="mod-public-fetch-card"  :key="params.name">
					<div class="card-head">
						<div class="card-name">
							{{params.name}}
						</div>
						<div class="card-issue" v-for="iss of params.issue" :key="iss">
							<span class="issue-txt">
								{{iss}}
							</span>
						</div>
					</div>
					<div class="card-tel">
						<van-icon name="phone-o" />
						<span class="tel">{{params.tel}}</span>
					</div>
					<div class="card-pcs">
						<span style="font-size: 20px;margin-top: -1px;">{{params.pcs}}</span>
						<span style="font-size: 13px;">次</span>
					</div>
					<div class="card-footer">
						<div class="">
							流转次数
						</div>
					</div>
				</div>
				<div class="line">
					
				</div>
			</div>
            <div class="record">
				<div>
					跟进记录
				</div>
			</div>	
			<van-steps 
			direction="vertical"
			:active="params.active"
			active-icon="success"
			active-color="#38f">
				<van-step class="record-item" v-for="item in params.propupList" :key="item.ygName">
					<!--
					icon自定义 
					<template v-slot:inactive-icon>
						<van-icon name="iconName"/>
					</template> 
					-->
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
			active:2,
            isPopupShow: false,
			//传入的参数
            params: {},
			//想传输的数据
            form: {},
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
 
<style  lang="less">
.fetch-prop {
	@import "../../../style/index.less";
	position: relative;
	.cardbox{
		width: 375px;
		height: 153.74px;
		background: rgba(255,255,255,1);
		.mod-public-fetch-card{
			height: 137px;
			margin-top: -2px;
			box-sizing: border-box;
			.card-pcs{
				color: rgba(0,0,0,0.9);
			}
		}
		.line{
			width: 332.61px;
			height: 5px;
			margin: 0 auto;
			opacity: 1;
			background: rgba(246,246,246,1);
		}
	}
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
		
	}
	.record-item{
		width: 332.61px;
		height: 91px;
		opacity: 1;
		box-sizing: border-box;
		margin-left: 10px;
		margin-top: 16px;
		position: relative;
			.yg-name{
				width: 32px;
				height: 23px;
				margin-left: 15px;
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
				left: 15px;
				.time{
					
					margin-left: 0px;
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
					margin-left: 0px;
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
   .van-step--vertical:not(:last-child)::after{
		border-bottom-width: 0px;
   }
   .van-step--vertical .van-step__line{
		top: 26px  !important;
		left: -10px  !important;
		width: 1px !important;
		height: 61px !important;
	}
   .van-step--vertical{
	padding: 0;
   }
   .van-step--vertical .van-step__circle-container{
		top: 10px;
		left: -9px
   }
}

</style>