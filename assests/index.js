let image = 0; //[0,1,2,3,4,5,6,7] images

document.querySelector(".next").addEventListener("click", function() {
   let x = 1
    image = image + x
    slideshow(image)
})
document.querySelector(".previous").addEventListener("click", function() {
    let x = -1
     image = image + x
     slideshow(image)
 })

let slideshow = (num) => {
    let slide = document.getElementsByClassName("slide")
    //console.log(slide)

    if (num == slide.length) { 
        // right image 
        image = 0;
        num = 0;
    }
    else if (num < 0 ){
        //left image
        image = slide.length - 1 //() slide.length - 1) last index
        num = slide.length - 1
    }
    for (let y of slide) {
        y.style.display = "none"
    }
    
    slide[num].style.display = "block"
}
slideshow(image);
