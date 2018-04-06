var app = new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
            {
                headlineFirstLine: "poul",
                headlineSecondLine: "Vitaer",
                sublineFirstLine: "paris sous le neige",
                sublineSecondLine: "neige",
                bgImg: "https://i.skyrock.net/2975/44742975/pics/3139000402_1_4_1tShV1w4.jpg",
                rectImg: "http://img.over-blog.com/600x400/2/76/99/39/Paris-sous-la-neige/ou-sont-les-amoureux.jpg"
            },
            {
                headlineFirstLine: "Nulla",
                headlineSecondLine: "Auctor",
                sublineFirstLine: "Il n'y a rien de neuf sous",
                sublineSecondLine: "le soleil",
                bgImg: "https://cdn-5.motorsport.com/images/mgl/2yoV8Rg6/s8/formula-e-paris-eprix-2017-formula-e-cars-lined-up.jpg",
                rectImg: "https://france3-regions.francetvinfo.fr/paris-ile-de-france/sites/regions_france3/files/styles/top_big/public/assets/images/2017/05/25/img_1729-3074995.jpg?itok=u4FRd0vx"
            },
            {
                headlineFirstLine: "hosam",
                headlineSecondLine: "hamad",
                sublineFirstLine: "frist visiter",
                sublineSecondLine: "paris",
                bgImg: "https://cdn.pixabay.com/photo/2015/11/27/06/53/eiffel-tower-1065067_960_720.jpg",
                rectImg: "http://www.unitedstatesofparis.com/wp-content/uploads/2015/07/Pyramide-Mus%C3%A9e-du-Louvre-de-nuit-Paris-city-by-night-monument-photo-united-states-of-paris-blog-usofparis.jpg "
            }
        ]
    },
  mounted: function () {
    var productRotatorSlide = document.getElementById("app");
        var startX = 0;
        var endX = 0;

        productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchend", function(event) {
            var threshold = startX - endX;

            if (threshold < 150 && 0 < this.currentSlide) {
                this.currentSlide--;
            }
            if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            }
        }.bind(this));
  },
    methods: {
        updateSlide(index) {
            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
            this.currentSlide = index;
            this.isFirstLoad = false;
        }
    }
})
