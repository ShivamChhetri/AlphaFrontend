<template>
    <div>
        <!--source- https://www.youtube.com/watch?v=wkwoKpBQA4Y -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger fixed-top justify-content-sm-start">
            <!-- <a class="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 mr-auto" href="/">Navbar</a> -->
            <router-link  @click.native="bool=false" class="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 mr-auto" to="HOME">Navbar</router-link>
            <button @click="bool=!bool"  class="navbar-toggler align-self-start" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div :class="{open:bool}" class="collapse navbar-collapse p-3 p-lg-0 mt-5 mt-lg-0 d-flex flex-column flex-lg-row flex-xl-row  bg-danger mobileMenu" id="navbarSupportedContent">
                <ul class="navbar-nav align-self-stretch">
                    <li class="nav-item active">
                        <router-link @click.native="bool=false" class="nav-link" :to="{name:'Home'}">Home</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link @click.native="bool=false" class="nav-link" :to="{name:'Packages'}">Packages</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link @click.native="bool=false" class="nav-link" :to="{name:'Distributors'}">Distributors</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div @click="bool=!bool" :class="{open:bool}" class="overlay"></div>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    data(){
        return{
            bool:false
        }
    }
}
</script>

<style scoped lang="scss">
    @media(max-width:992px){
        .mobileMenu{
            position:fixed;
            top:0;
            bottom:0;
            left:0;
            margin:auto;
            transform: translate(-100%);
            transition: all ease 0.25s;
            &.open{
                transform: translate(0);
            }
        }
    }
    .overlay{
        z-index: 100;
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
        background-color: rgba(0,0,0,0.5);
        display:none;
        &.open{
            display:block;
        }
    }
</style>