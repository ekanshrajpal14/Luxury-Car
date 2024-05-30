const main = document.querySelector(".all_car_card_container");
var arr = [{ name: "fortuner", type: "luxury", price: "7999", brand: "toyota", time: "8HRS/80KMS", category: "SUV", year: "" },
{ name: "carnival", type: "luxury", price: "9999", brand: "kia ", category: "Luxury MPV (Minivan)", time: "8HRS/80KMS", year: "" },
{
    name: "camry", type: "luxury", price: "9999", brand: "toyota", category: "Luxury Sedan", time: "8HRS/80KMS", year: ""
},
{
    name: "E-220", type: "luxury", price: "11999", brand: "mercedes", time: "8HRS/80KMS", category: "Luxury Sedan", year: "new"
},
    {
        name: "520-D", type: "luxury", price: "11999", brand: "bmw", category: "Luxury Sedan", time: "8HRS/80KMS", year: "" },
    {
        name: "E-220", type: "luxury", price: "9999", brand: "mercedes", category: "Luxury Sedan", time: "8HRS/80KMS", year: "old" },

{ name: "commuter", type: "luxury", price: "11999", brand: "toyota", time: "8HRS/80KMS", category: "Van", year: "" },
    {
        name: "A7", type: "luxury", price: "12999", brand: "audi", category: "Luxury Sedan", time: "8HRS/80KMS", year: "" },
    { name: "XF", type: "luxury", price: "12999", brand: "jaguar", category: "Luxury Sedan", time: "8HRS/80KMS", year: "" },
{ name: "commuter", type: "luxury", price: "14999", brand: "toyota", time: "8HRS/80KMS", category: "Van", year: "new" },
    { name: "V-class", type: "luxury", price: "21999", brand: "mercedes", category: "Luxury MPV (Minivan)", time: "8HRS/80KMS", year: "" },
    { name: "X5", type: "luxury", price: "22999", brand: "bmw", category: "Luxury SUV", time: "8HRS/80KMS", year: "" },

    { name: " A3", type: "luxury", price: "29999", brand: "audi", time: "8HRS/80KMS", category: "Luxury Convertible", year: "" },
    { name: "S-350", type: "luxury", price: "19999", brand: "mercedes", category: "Luxury Sedan", time: "8HRS/80KMS", year: "" },
    { name: "730D", type: "luxury", price: "19999", brand: "bmw", category: "Luxury Sedan", time: "8HRS/80KMS", year: "" },
    { name: "Q7", type: "luxury", price: "19999", brand: "audi", category: "Luxury SUV", time: "8HRS/80KMS", year: "" },
    {
        name: "GL-350", type: "luxury", price: "19999", brand: "mercedes", time: "8HRS/80KMS", category: "Luxury SUV", year: "" },
    { name: "land cruiser ", type: "luxury", price: "29999", brand: "toyota", category: "Luxury SUV", time: "8HRS/80KMS", year: "" },

    { name: "GLS-400", type: "luxury", price: "29999", brand: "mercedes", time: "8HRS/80KMS", category: "Luxury SUV", year: "" },
    { name: "maybach S-600", type: "luxury", price: "29999", brand: "mercedes", time: "8HRS/80KMS", category: "Ultra-Luxury Sedan", year: "" },
    {
        name: " A5", type: "luxury", price: "35999", brand: "audi", time: "8HRS/80KMS", category: "Luxury Convertible", year: "" },
    { name: "EQS-580(EV CAR)", type: "luxury", price: "39999", brand: "mercedes", time: "8HRS/80KMS", category: "Luxury Electric Sedan", year: "" },
    { name: "GHOST", type: "luxury", price: "79999", brand: "rolls royce", time: "8HRS/80KMS", category: "Ultra-Luxury Sedan", year: "" },

// self drive cars
    { name: "ertiga", type: "self", price: "5999", brand: "maruti", time: "8HRS/80KMS", category: "MPV (Minivan)", year: "" },
    { name: "XL6", type: "self", price: "6499", brand: "", time: "8HRS/80KMS", category: "MPV (Minivan)", year: "" },
{ name: "hexa", type: "self", price: "8999", brand: "tata", time: "8HRS/80KMS", category: "SUV", year: "" },
    { name: "innova crysta", type: "self", price: "9999", brand: "toyota", time: "8HRS/80KMS", category: "MPV (Minivan)", year: "" },
{ name: "Mg hector", type: "self", price: "11999", brand: "", time: "8HRS/80KMS", category: "SUV", year: "" },
{ name: "fortuner", type: "self", price: "13999", brand: "toyota", time: "8HRS/80KMS", category: "SUV", year: "" },
{ name: "XUV 700", type: "self", price: "12999", brand: "mahindra", time: "8HRS/80KMS", category: "SUV", year: "" },
{ name: "city", type: "self", price: "4999", brand: "honda", time: "8HRS/80KMS", category: "Sedan", year: "" },
    {
        name: "I20", type: "self", price: "3999", brand: "hyundai", time: "8HRS/80KMS", category: "Hatchback", year: "" },
    {
        name: "swift", type: "self", price: "3499", brand: "maruti", time: "8HRS/80KMS", category: "Hatchback", year: "" },
    { name: "urban cruiser", type: "self", price: "4999", brand: "", time: "8HRS/80KMS", category: "Compact SUV", year: "" },
    { name: "kwid/climber", type: "self", price: "4499", brand: "", time: "8HRS/80KMS", category: "Hatchback", year: "" },
{ name: "thar", type: "self", price: "9999", brand: "mahindra", time: "8HRS/80KMS", category: "SUV", year: "" },
    {
        name: "A6", type: "self", price: "29999", brand: "audi", time: "8HRS/80KMS", category: "Luxury Sedan", year: "" },
    { name: "XUV 300", type: "self", price: "4999", brand: "mahindra", time: "8HRS/80KMS", category: "Compact SUV", year: "" },
{ name: "Q3", type: "self", price: "24999", brand: "audi", time: "8HRS/80KMS", category: "Luxury SUV", year: "" },
// /vintage car


    {
        name: "Vintage FORD", type: "vintage", price: "49999", brand: "", time: "8HRS/80KMS", category: "", year: "" },
{ name: "Vintage FIAT", type: "vintage", price: "49999", brand: "", time: "8HRS/80KMS", category: "", year: "" },


// non premium car n busses

    {
        name: "ETIOS 4+1", type: "non", price: "2199", brand: "", time: "8HRS/80KMS", category: "Economic Sedan", year: "" },
    { name: "city", type: "non", price: "3999", brand: "honda", time: "8HRS/80KMS", category: "Sedan", year: "" },
    { name: "ertiga", type: "non", price: "2499", brand: "maruti", time: "8HRS/80KMS", category: "MPV (Minivan)", year: "" },
    {
        name: "FOTON 9+1 Executive Van", type: "non", price: "8999", brand: "", time: "8HRS/80KMS", category: "Van", year: "" },
{ name: "BHARAT BENZ 25 seater", type: "non", price: "11999", brand: "", time: "8HRS/80KMS", category: "Bus", year: "" },
{ name: "BHARAT BENZ 35 seater", type: "non", price: "14999", brand: "", time: "8HRS/80KMS", category: "Bus", year: "" },
{ name: "BHARAT BENZ 35 seater", type: "non", price: "14999", brand: "", time: "8HRS/80KMS", category: "Bus", year: "" },
{ name: "BHARAT BENZ 20 seater with Bio toilet", type: "non", price: "14999", brand: "", time: "8HRS/80KMS", category: "Bus", year: "" },
{ name: "TEMPO TRAVELLER 9+1 SEATER", type: "non", price: "5999", brand: "", time: "8HRS/80KMS", category: "Van", year: "" },
{ name: "TEMPO TRAVELLER 12+1 SEATER", type: "non", price: "3999", brand: "", time: "8HRS/80KMS", category: "Van", year: "" },


];

var clultter = "";
arr.forEach((item) => {
    clultter += `<div class="carsinfo">
                        <div class="carinforight">
                            <div class="imagebox">
                                <section class="main swiper mySwiper">
                                    <div class="wrapper swiper-wrapper">
                                        <div class="slide swiper-slide">
                                            <img src="https://autlines.tm-colors.info/wp-content/uploads/2019/07/23434324.jpg"
                                                alt="" class="image" />

                                        </div>
                                        <div class="slide swiper-slide">
                                            <img src="https://autlines.tm-colors.info/wp-content/uploads/2019/07/23434324.jpg"
                                                alt="" class="image" />

                                        </div>
                                        <div class="slide swiper-slide">
                                            <img src="https://autlines.tm-colors.info/wp-content/uploads/2019/07/23434324.jpg"
                                                alt="" class="image" />

                                        </div>
                                    </div>

                                    <div class="swiper-button-next nav-btn"></div>
                                    <div class="swiper-button-prev nav-btn"></div>
                                    <div class="swiper-pagination">

                                    </div>
                                </section>
                            </div>
                        </div>
                        <div class="carinfocont">
                            <h1>${item.name}</h1>
                            <p class="TnC">*T&C Apply</p>
                            <!-- <h2>Starts from Rs 7999/- for 8hr/80km</h2> -->
                            <div>
                                <button><i class="ri-user-line"></i>5</button>
                                <button class="category" data-category="${item.category}"><i class="ri-car-line"></i>${item.category}</button>
                                <!-- <button>Manual</button> -->
                            </div>
                            <div class="line"></div>
                            <div class="container_price">
                                <div class="price">
                                    <p>Starts from</p>
                                    <h1>Rs ${item.price}</h1>
                                    <p class="time">(80KM/8hr)</p>
                                </div>
                                <a href="">Book Now !!</a>
                                
                            </div>
                        </div>
                    </div>`;
});
main.innerHTML = clultter;

const otp = document.querySelectorAll(".category");
otp.forEach((item) => {
    item.addEventListener("click", () => {
        const id = item.getAttribute("data-category");
        const box = document.querySelectorAll(".box");
        box.forEach((item) => {
            if (item.getAttribute("data-id") === id) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

});

document.querySelector(".submit").addEventListener("click",function(re){
    console.log(re);
})
