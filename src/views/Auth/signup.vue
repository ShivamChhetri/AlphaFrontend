<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-12">
                    <form class="text-center" @submit.prevent="signup()">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Name</span>
                            </div>
                            <input type="text" class="form-control" v-model="user.name" placeholder="Username">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Email</span>
                            </div>
                            <input type="email" class="form-control" v-model="user.email" placeholder="Email">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Password</span>
                            </div>
                            <input type="password" class="form-control" v-model="user.password" placeholder="Password">
                        </div>
                        <input type="submit" class="btn btn-danger btn-block" value="Sign Up">
                    </form>
                </div>
            </div>
        </div>
        <p @click="secure()">auth</p>
    </div>
</template>


<script>
const qs = require('qs');
export default {
    data(){
        return{
            user:{
                name:'',
                email:'',
                password:''
            }
        }
    },
    methods:{
        signup(){
            axios.post("/signup",this.user)
            .then(result=>{
                console.log(result.data);
            }).catch(err=>{
                console.log(err);
            });
        },
        secure(){
            // let header={
            //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhbHBoYSIsInN1YiI6ImtudmtrbXYiLCJpYXQiOjE1NjU0MzMzMzIyNjMsImV4cCI6MTU2NTUxOTczMjI2M30.3vj8KzpciTgzbaU6HZSPdoX3MTAW6L-a_Shwib8TuHc"
            // }
            axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhbHBoYSIsInN1YiI6ImtudmtrbXYiLCJpYXQiOjE1NjU0NTIzNzc5MzEsImV4cCI6MTU2NTUzODc3NzkzMX0.Ak3g-HROy93iazBwoBGBydYtlqG_24jrkLtLNhjkZI0";
            axios.get("/auth")
            .then(result=>{
                console.log(result);
            }).catch(err=>{
                console.log(err);
            });
        }
    }
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