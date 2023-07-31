console.log("MeloVerse welcomes you");
let songindex=0;
let audioElement= new Audio('Olivia Rodrigo Vampire Trending Song 2023(DjJpSwami.Com).mp3');
let masterplay= document.getElementById('masterplay');
let myprogress= document.getElementById('myprogress');
let mastersongname= document.getElementById('mastersongname');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {
    songname:"Vampire", filePath:"songs/1.mp3", coverPath:"olivia.jpg"
},
{
    songname:"Gorgeous", filePath:"songs/2.com.mp3", coverPath:"gg.jpeg"
},  {
    songname:"Made", filePath:"songs/4.mp3", coverPath:"lwymmd.jpeg"
},  {
    songname:"Wolves", filePath:"songs/3.mp3", coverPath:"wolvessg.jpeg"
},  {
    songname:"Trouble", filePath:"songs/2.mp3", coverPath:"ikywtwywi.jpeg"
},  {
    songname:"Blank Space", filePath:"songs/5.mp3", coverPath:"bs.jpeg"
},
]

songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogress.value=progress;
})

myprogress.addEventListener('change',()=>{
    audioElement.currentTime= myprogress.value * audioElement.duration/100;
}
)

const makeAllPlays=()=>{
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songindexindex}.mp3`;
        mastersongname.innerText=songs[songindex].songname;
      audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=5){
        songindex=0
    } else{
        songindex+=1;
        audioElement.src=`songs/${songindex}.mp3`;
        mastersongname.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
          audioElement.play();
          masterplay.classList.remove('fa-play-circle');
          masterplay.classList.add('fa-pause-circle');
    }
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0
    } else{
        songindex-=1;
        audioElement.src=`songs/${songindex}.mp3`;
       mastersongname.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
          audioElement.play();
          masterplay.classList.remove('fa-play-circle');
          masterplay.classList.add('fa-pause-circle');
    }
})