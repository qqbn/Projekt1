function scrollAppear(){
    var introPhoto=document.querySelector(".intro");
    var introEnding = document.querySelector(".ending");

    var introPosition=introPhoto.getBoundingClientRect().top;
    var introPosition2=introEnding.getBoundingClientRect().top;

    var screenPosition=window.innerHeight/2;
    var screenPosition2=window.innerHeight/1.5;

    if(introPosition < screenPosition){
        introPhoto.classList.add('intro-appear');
    }

    if(introPosition2<screenPosition){
        introEnding.classList.add('intro-appear2');
    }
}

window.addEventListener('scroll', scrollAppear);