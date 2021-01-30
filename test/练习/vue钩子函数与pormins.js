var vm = new Vue({
    el: '#app',
    data() {
        return{
            a: 'ting'
        }
    },
    methods: {
        add(){
            comsole.log(this.message)
        }
    },
    template: `
        <div>
            <Child :message="a" :fn="add" />
        </div>
    
    `
    components: { Child },
    computed: {},
    watch: {},
    //挂载data数据之前
    beforeCreate() {},
    //挂载数据
    created() {},
    //加载模板template
    beforeMount() {},
    //挂载页面
    mounted() {},
    //执行销毁
    //销毁之前
    beforeDestroy() {},
    //销毁完成
    destroyed() {}
})

/********** 父子组件 *********/

<template>
    <div>
        {{message}}
        <button @click='fn'>+</button>

    </div>
</template>

<script>
    export defaule{
        props: ['message', 'fn']

    }
</script>