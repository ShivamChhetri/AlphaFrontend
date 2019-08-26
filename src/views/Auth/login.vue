<template>
    <div>
        <h2>Choose login method</h2>
        <p @click="loginMethod('google')">Google</p>
        <p @click="loginMethod('facebook')">facebook</p>
        <router-link :to="{name:'LocalLogin'}">
            Email
        </router-link>
        <p>continue without login</p>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        loginMethod(method){
            const headers={
                'Content-Type':'appliction/json'
            }
            axios.post(`/${method}`,{headers}).then(res=>{
                console.log(res.data);
            }).catch(err=>{
                console.log(err);
            })
        }
    },
}
</script>