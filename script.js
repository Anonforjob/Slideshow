var i = 0;
        var images = [];
        var time = 500;

        images[0] = '/Users/omerkhawaja/Documents/Marrigeapp/Slider project/$_86 (2).JPG'
        images[1] = '/Users/omerkhawaja/Documents/Marrigeapp/Slider project/$_86 (3).JPG'
        images[2] = '/Users/omerkhawaja/Documents/Marrigeapp/Slider project/$_86 (4).JPG'

        function changeImg() {
            document.slide.src = images[i];

            if(i < images.length -1) {
                i++
            } else {
                i = 0
            }

            setTimeout('changeImg()', time);
        }

        window.onload = changeImg;
