export default {
    created() {
        document.querySelector("body").style.backgroundColor = "#f6f6f6";
    },
    beforeDestroy() {
        document.querySelector("body").style.backgroundColor = "#ffffff";
    },
};