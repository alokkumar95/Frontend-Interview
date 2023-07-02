const stars = document.querySelectorAll('.star-rating .star');

console.log("Starsss",stars)

stars.forEach(function(star,index){
    star.addEventListener('click',function(){
        for(let i=0;i<=index;i++){
            if(!stars[i].classList.contains('selected')){
                stars[i].classList.add('selected')
            }
        }
        for(let i=index+1;i<stars.length;i++){
            if(stars[i].classList.contains('selected')){
                stars[i].classList.remove('selected')
            }
        }
    })

})


