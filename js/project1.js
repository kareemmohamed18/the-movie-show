// Jquery .....
import{valid} from './validation.js' ;


$('document').ready(function()
{
  $('.spinner').fadeOut(1000 , function()
  {
    $('#loading').fadeOut(1000 , function()
    {
      $('#loading').remove();
      $('body').css("overflow-y" , 'auto')
    });

  })
})


let currentWidth = $('.links').outerWidth();

$('nav').css('left',-currentWidth)


$('#openNav').click(function()
{
  if($('nav').css("left")== "0px")
  {
    $('#openNav').removeClass("fa-xmark")
    $('nav').animate({left:-currentWidth},1000) 
      $("ul li").eq(0).animate({opacity:0,top:400} , 700)
      $("ul li").eq(1).animate({opacity:0,top:400} , 900)

      $("ul li").eq(2).animate({opacity:0,top:400} , 1100)      
      $("ul li").eq(3).animate({opacity:0,top:400} , 1300)
      $("ul li").eq(4).animate({opacity:0,top:400} , 1400)
      $("ul li").eq(5).animate({opacity:0,top:400} , 1500)

  
  }
  else
  {
    $('nav').animate({left:0},1000 , function()
    {
      $("ul li").eq(0).animate({opacity:1,top:10} , 700)
      $("ul li").eq(1).animate({opacity:1,top:60} , 900)

      $("ul li").eq(2).animate({opacity:1,top:110} , 1100)      
      $("ul li").eq(3).animate({opacity:1,top:160} , 1300)
      $("ul li").eq(4).animate({opacity:1,top:210} , 1400)
      $("ul li").eq(5).animate({opacity:1,top:260} , 1500)

    })
    $('#openNav').addClass("fa-xmark")
  }
})

//  api code ......

$('#searchPage').keyup( function()
{
  let cols=``;

  for(let i=0 ; i < finalResult.results.length ; i++ )
  {
    if(finalResult.results[i].title.toLowerCase().includes(`${this.value.toLowerCase()}`)  )
    {
        console.log(finalResult.results[i] );
      cols+=
    `
    <div class="col-md-4 g-5">
    <div class=" movie-details position-relative ">
        <img src="https://image.tmdb.org/t/p/w500${finalResult.results[i].poster_path}" class=" w-100 rounded-3  " alt="">
        <div class="layer  text-dark  pt-5 rounded-3    text-center  d-flex flex-column  justify-content-center py-4   ">
            <h3 class="py-3 ">${finalResult.results[i].title || finalResult.results[i].name}.</h3>
            <p>${finalResult.results[i].overview}</p>
            <p class=" fw-bold">${finalResult.results[i].vote_average}.</p>
            <p class=" fw-bold">${finalResult.results[i].release_date}.</p>
        </div>

    </div>
</div> 
    `
    }
    document.getElementById("displayCols").innerHTML=cols;


  }
})


let defualtApi=`https://api.themoviedb.org/3/movie/now_playing?api_key=d6181e960aba0028e9edbd9e090fec60&page=1`;
let finalResult=[];

async function getMovie(getApi)
{
  let response = await fetch(getApi);
  finalResult = await response.json();
      display()
}

getMovie(defualtApi);

$('#search').keyup( async function()
{
    getMovie(`https://api.themoviedb.org/3/search/movie?api_key=d6181e960aba0028e9edbd9e090fec60&query=${this.value}`)
})




let apiLink = 
[
  'https://api.themoviedb.org/3/movie/now_playing?api_key=d6181e960aba0028e9edbd9e090fec60&page=1' ,
  'https://api.themoviedb.org/3/movie/popular?api_key=d6181e960aba0028e9edbd9e090fec60&page=1',
  'https://api.themoviedb.org/3/movie/top_rated?api_key=d6181e960aba0028e9edbd9e090fec60&page=1',
  'https://api.themoviedb.org/3/trending/all/day?api_key=d6181e960aba0028e9edbd9e090fec60&page=1',
  'https://api.themoviedb.org/3/movie/upcoming?api_key=d6181e960aba0028e9edbd9e090fec60&page=1'
]


$('#nowPlaying').click(function()
{
  getMovie(apiLink[0]);
})

$('#popular').click(function()
{
  getMovie(apiLink[1]);
})

$('#topRated').click(function()
{
  getMovie(apiLink[2]);
})

$('#trending').click(function()
{
  getMovie(apiLink[3]);
})

$('#upcoming').click(function()
{
  getMovie(apiLink[4]);
})




async function display ()
{
  let cols =``;

  for(let i=0 ; i < finalResult.results.length ; i++ )
  {

    cols+=
    `
    
    <div class="col-md-4 g-5">
    <div class=" movie-details position-relative ">
        <img src="https://image.tmdb.org/t/p/w500${finalResult.results[i].poster_path}" class=" w-100 rounded-3  " alt="">
        <div class="layer  text-dark  pt-5 rounded-3    text-center  d-flex flex-column  justify-content-center    ">
            <h3 class="py-3 ">${finalResult.results[i].title || finalResult.results[i].name}.</h3>
            <p>${finalResult.results[i].overview}</p>
            <p class=" fw-bold">${finalResult.results[i].vote_average}.</p>
            <p class=" fw-bold">${finalResult.results[i].release_date}.</p>
        </div>

    </div>
</div> 
    
    `
    document.getElementById("displayCols").innerHTML=cols;
  }

}



// // validation 

valid()
