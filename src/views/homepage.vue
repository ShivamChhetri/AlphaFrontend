<template>
    <div>
        <div v-if="address" class="container">
            <h5>Location: {{address}}</h5>
        </div>
        <mainMeal></mainMeal>
    </div>
</template>


<script>
import mainMeal from "../components/mainMeal.vue";
export default {
    components:{
        "mainMeal": mainMeal
    },
    data(){
        return{
            position:{
                latitude:'',
                longitude:'',
                accuracy:''
            },
            address:""
        }
    },
    mounted(){
        let geo_options = {
            enableHighAccuracy: true, 
            // maximumAge        : 30000, 
            // timeout           : 27000
        };
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.showPosition,this.positionError,geo_options);
        }else{
            console.log("browser doesn't support geolocation");
        }
    },
    methods:{
        showPosition(position){
            this.position.latitude=position.coords.latitude;
            this.position.longitude=position.coords.longitude;
            this.position.accuracy=position.coords.accuracy;
            this.getAdd(position.coords.latitude,position.coords.longitude);
        },
        positionError(){
            console.log("position couldn't be found");
        },
        getAdd(latitude,longitude){
            var geocoder = new google.maps.Geocoder;
            var latlng = {lat:parseFloat(latitude),lng:parseFloat(longitude)};
            geocoder.geocode({'location': latlng}, function(results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        this.address= results[0].formatted_address;
                    } else {
                        window.alert('No results found');
                    }
                } else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        }
    }
}
</script>