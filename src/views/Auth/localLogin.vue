<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-12">
                    <form  @submit.prevent="login()">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Email</span>
                            </div>
                            <input type="email" class="form-control" v-model='user.email' placeholder='Email'>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Password</span>
                            </div>
                            <input type="password" class="form-control" v-model='user.password' placeholder='Password'>
                        </div>
                        <input type="submit" value="Login" class="btn btn-danger btn-block">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:{
                email:'',
                password:''
            }
        }
    },
    methods: {
        login(){
            // console.log(this.user.password);
            // const headers={
            //     'Content-Type':'appliction/json'
            // }
            axios.post('/login',this.user)
            .then(response=>{
                console.log(response.data);
                thi.$auth.setToken(response.data.token,10000+Date.now());
            }).catch(err=>{
                console.log(err);
            });
        }
    },
}
</script>

<style lang="scss" scoped>
    form{
        border: solid 2px black;
        border-radius: 5px;
        background-color: rgba(100, 100, 100, 1);
        padding: 10% 5%;
    }
</style>
