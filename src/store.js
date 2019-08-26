import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
Vue.use(Vuex);

export const store= new Vuex.Store({
    state:{
        distributors:[],
        packages:[],
        meals:[],
    },
    mutations:{
        changeMealData(state,data){
            state.meals=data;
        },
        setPackages(state,data){
            state.packages=data;
        },
        setDistributors(state,data){
            state.distributors=data;
        }
    },
    actions:{
        setPackages(context){
            axios.get("/packages")
            .then(result=>{
                context.commit('setPackages',result.data)
            }).catch(err=>{
                throw err;
            });
        },
        setDistributors(context){
            axios.get("/distributors")
            .then(result=>{
                console.log(result.data);
                context.commit('setDistributors',result.data);
            }).catch(err=>{
                throw err;
            });
        },
        allMeal(context){
            axios.get("/allMeals").then(result=>{
                context.commit('changeMealData',result.data);
            }).catch(err=>{
                throw err;
            });
        },
        filterMeal(context,payload){
            axios.post("/allMeals/filter",payload)
            .then(results=>{
                context.commit("changeMealData",results.data);
            }).catch(err=>{
                throw err;
            });
        },
        filterDay(context,payload){
            axios.post("/allMeals/filterByDay",payload)
            .then(results=>{
                context.commit("changeMealData",results.data);
            }).catch(err=>{
                throw err;
            });
        }
    }
});