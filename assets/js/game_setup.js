
let tee_clicked;
let fullInfo = [];
let coursesArray = [];
let playersArray = [];
let last_clicked;
let noPlayers = 1;
let tokensPathArray = [
    '../assets/icons/origami(0).png',
    '../assets/icons/origami(1).png',
    '../assets/icons/origami(2).png',
    '../assets/icons/origami(3).png',
    '../assets/icons/origami(4).png',
    '../assets/icons/origami(5).png',
    '../assets/icons/origami(6).png',
    '../assets/icons/origami(7).png',
    '../assets/icons/origami(8).png',
    '../assets/icons/origami(9).png',
    '../assets/icons/origami(10).png',
    '../assets/icons/origami(11).png',
    '../assets/icons/origami(12).png',
    '../assets/icons/origami(13).png',
    '../assets/icons/origami(14).png',
];

document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
    populateCoursesArray();
    fillCourseSelect();
    loadTokenIcons();
});

function eventListeners(){
    
    let tees_icons = document.querySelector('.tees_icons');
    let addPlayer_btn = document.querySelector('.add_player_btn');
    let play_btn = document.querySelector('.bottom_bar');
    
    tees_icons.addEventListener('click', highlight_tee);   
    addPlayer_btn.addEventListener('click', addPlayer);
    play_btn.addEventListener('click', play);
    
}

function loadTokenIcons(){
    let wrapLoad = document.querySelector('.token_selector_wrap');
    let ie = 1;
    
    for(let i=0; i <= 14; i++){
        
        let numB = String("0" + ie).slice(-2);

        let tokensIcons = document.createElement('img');
        tokensIcons.classList.add('token_icon');
        tokensIcons.classList.add(`token_${numB}`);
        tokensIcons.src = `../assets/icons/origami(${i}).png`;
        tokensIcons.setAttribute('onClick', `screen_clicked("token_${numB}")`);

        wrapLoad.appendChild(tokensIcons);
        ie++;
    }
}

function populateCoursesArray(){
    
    function Course(name, id){
        this.name = name;
        this.id = id;
    }
    // CREATE COURSES HERE
    let courseWrap = [
        new Course('Real del Mar', 'real_del_mar'),
        new Course('Baja Country Club', 'baja_country_club'),
        new Course('Bajamar Golf Resort', 'bajamar_golf_resort'),
        new Course('Club Campestre Tijuana', 'club_campestre_tijuana'),
    ];
    courseWrap.forEach(e => {
        coursesArray.push(e);
    });
}

function fillCourseSelect(){
    let course_select = document.querySelector('#course_select');
    coursesArray.forEach(e => {
        let course_option = document.createElement('option');
        course_option.value = e.id;
        course_option.textContent = e.name;
        course_select.appendChild(course_option);            
    });
}

function highlight_tee(e){
    let icons = e.target.parentElement.parentElement.children; 
    if(e.target.classList == 'tee_tag'){
        for(let i = 0; icons.length > i; i++){
            icons[i].classList.remove('tee_selected');
            icons[i].querySelector('.tee_tag').removeAttribute('style');
        } 
        tee_clicked = e.target.getAttribute('data-id'); 
        e.target.parentElement.classList.add('tee_selected'); 
        
        let teecon = document.querySelector('.tee_selected').querySelector('.tee_tag');
        teecon.style.opacity = 1;
        
    }
    
}

function token_clicked(e) {
    $('.screener').fadeIn('fast');
    last_clicked = document.querySelector(`.${e}`);
}

function screen_clicked(e){
    //let selector = document.querySelector(`.${e}`);
    let target = document.querySelector(`.${e}`).classList;

    if(target.contains('screener')){
        $('.screener').fadeOut('fast');
    }else if(target.contains('token_01')){
        last_clicked.src = tokensPathArray[0];
        last_clicked.setAttribute('data-id', 'token_01');
        $('.screener').fadeOut('fast');
    }else if(target.contains('token_02')){
        last_clicked.src = tokensPathArray[1];
        last_clicked.setAttribute('data-id', 'token_02');
        $('.screener').fadeOut('fast');
    }else if(target.contains('token_03')){
        last_clicked.src = tokensPathArray[2];
        last_clicked.setAttribute('data-id', 'token_03');
        $('.screener').fadeOut('fast');
    }else if(target.contains('token_04')){
        last_clicked.src = tokensPathArray[3];
        last_clicked.setAttribute('data-id', 'token_04');
        $('.screener').fadeOut('fast');
    }else if(target.contains('token_05')){
        last_clicked.src = tokensPathArray[4];
        last_clicked.setAttribute('data-id', 'token_05');
        $('.screener').fadeOut('fast');
    }else if(target.contains('token_06')){
        last_clicked.src = tokensPathArray[5];
        last_clicked.setAttribute('data-id', 'token_06');
        $('.screener').fadeOut('fast');
    }else if(target.contains('token_07')){
        last_clicked.src = tokensPathArray[6];
        last_clicked.setAttribute('data-id', 'token_07');
        $('.screener').fadeOut('fast');
    }else if(target.contains('token_08')){
        last_clicked.src = tokensPathArray[7];
        last_clicked.setAttribute('data-id', 'token_08');
        $('.screener').fadeOut('fast');
    }else if(target.contains('token_09')){
        last_clicked.src = tokensPathArray[8];
        last_clicked.setAttribute('data-id', 'token_09');
        $('.screener').fadeOut('fast');
    }else if(target.contains('token_10')){
        last_clicked.src = tokensPathArray[9];
        last_clicked.setAttribute('data-id', 'token_10');
        $('.screener').fadeOut('fast');
    }else if(target.contains('token_11')){
        last_clicked.src = tokensPathArray[10];
        last_clicked.setAttribute('data-id', 'token_11');
        $('.screener').fadeOut('fast');
    }else if(target.contains('token_12')){
        last_clicked.src = tokensPathArray[11];
        last_clicked.setAttribute('data-id', 'token_12');
        $('.screener').fadeOut('fast');
    }else if(target.contains('token_13')){
        last_clicked.src = tokensPathArray[12];
        last_clicked.setAttribute('data-id', 'token_13');
        $('.screener').fadeOut('fast');
    }else if(target.contains('token_14')){
        last_clicked.src = tokensPathArray[13];
        last_clicked.setAttribute('data-id', 'token_14');
        $('.screener').fadeOut('fast');
    }else if(target.contains('token_15')){
        last_clicked.src = tokensPathArray[14];
        last_clicked.setAttribute('data-id', 'token_15');
        $('.screener').fadeOut('fast');
    }


}

function showEachPlayer(){
    let player_collection = document.querySelector('.players_wrap').children;

    let dataId = player_collection[player_collection.length-1].getAttribute('data-id');

    $('[data-id="'+dataId+'"]').hide();
    $('[data-id="'+dataId+'"]').fadeIn(300);

    /*
        $('.' + item_class).hide();
        $('.' + item_class).fadeIn(300);
     */

}

function addPlayer() {

    if(noPlayers <= 10){
        let numB = String("0" + noPlayers).slice(-2);
        let wrap = document.querySelector('.players_wrap');

        let each_player = document.createElement('div');
        each_player.classList.add('each_player');
        each_player.setAttribute(`data-id`, `player_${numB}`);
        
        let img_token = document.createElement('img');
        img_token.setAttribute('onclick', `token_clicked("player_${numB}")`);
        img_token.setAttribute('data-id', `token_${numB}`);
        img_token.classList.add('token');
        img_token.classList.add('neumorph');
        img_token.classList.add(`player_${numB}`);
        img_token.src = `../assets/icons/origami(${noPlayers}).png`;

        let inp_name = document.createElement('input');
        inp_name.type = "text";
        inp_name.classList.add('player');
        inp_name.classList.add('neumorph');
        inp_name.setAttribute('id', 'player');
        inp_name.setAttribute('placeholder', `Player ${noPlayers}`)

        each_player.appendChild(img_token);
        each_player.appendChild(inp_name);
        wrap.appendChild(each_player);

        showEachPlayer();
        //$('.each_player').hide().fadeIn(300);
        
        /*
        wrap.innerHTML += `
        <div data-id="player_${numB}" class="each_player">
            <img onclick='token_clicked("player_${numB}")' data-id="token_02" class="token neumorph player_${numB}" src="../assets/icons/origami(1).png">
            <input type="text" class="player neumorph" id="player" placeholder="Player ${noPlayers}">
        </div>
        `;
        /*/
        noPlayers++;
        
    }else{
        alert("You've reached the maximum amount of players");
    }

    
    
}

function play(){

    localStorage.removeItem("fullinfo");

    fullInfo = [];
    let playersArray = [];

    let course = document.querySelector('#course_select').value;
    fullInfo.push(course);
    fullInfo.push(tee_clicked);

    function Player(name, icon){
        this.name = name;
        this.icon = icon;
    }

    let playing = document.querySelectorAll('.each_player');
    playing.forEach(e => {
        playersArray.push(new Player(e.querySelector('.player').value, e.querySelector('.token').getAttribute('data-id')));
    });

    fullInfo.push(playersArray);
    localStorage.setItem("fullinfo", JSON.stringify(fullInfo));
    window.location.href = 'live_score.html';
}



