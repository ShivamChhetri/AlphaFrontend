import Home from "./views/homepage.vue";
import Packages from "./views/packages.vue";
import Distributors from "./views/distributors.vue";
import MealbyPack from "./views/Meal/byPack.vue";
import MealbyDist from "./views/Meal/byDist.vue";
import Login from "./views/Auth/login.vue";
import LocalLogin from "./views/Auth/localLogin.vue";
import Signup from "./views/Auth/signup.vue";


export default[
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path:'/packages',
        name: 'Packages',
        component: Packages
    },
    {
        path:'/distributors',
        name: 'Distributors',
        component:Distributors
    },
    {
        path:'/MealbyPack/:pack_id/',
        name: 'MealbyPack',
        component: MealbyPack
    },
    {
        path:'/MealbyDist/:dist_id',
        name:'MealbyDist',
        component: MealbyDist
    },
    {
        path:'/login',
        component:Login,
        meta:{
            forVisitors: true
        }
    },
    {
        path:'/loginform',
        name:'LocalLogin',
        component: LocalLogin,
    },
    {
        path:'/signup',
        component:Signup,
        meta:{
            forVisitors:true
        }
    }
];