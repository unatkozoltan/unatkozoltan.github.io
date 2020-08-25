var API_KEY = '17871523-f4f6157e2d841a83f82aeeb38';
console.log('CONSOLE-OZOLTÁN?')

class Zoltán{

    constructor(string, keyword){
        this.string = string;
        this.keyword = keyword.replace(" ","+");
    };

    displayZoltán(){
        var zoli = this;
        var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(this.keyword);
        var zolImageURL  = "";
        var korlátozoltán = 20;

        $.ajax({
            url: URL,
            dataType: 'json',
            async: true,
            success: function(data) {
                $('#loadingimage').show();               
                document.getElementById('title').innerHTML = '';

                if (parseInt(data.totalHits) < korlátozoltán){
                    korlátozoltán = parseInt(data.totalHits) -1;
                }
                
                $('#imgzoltan img').remove();
                var sorszámozoltán = Math.floor(Math.random() * korlátozoltán);
                var zolImage = new Image();
                zolImageURL =  data.hits[sorszámozoltán].webformatURL;
                zolImage.src = zolImageURL;
                zolImage.onload = function() {
                    document.getElementById('title').innerHTML = zoli.string;
                    $('#loadingimage').hide();
                }
                $('#imgzoltan img').attr('src', "ajax-loader.gif");
                document.getElementById("imgzoltan").appendChild(zolImage);
            }
        });    
    }
}

var listázoltán = [
    new Zoltán("Unatkozoltán", "bored")
    ,new Zoltán("Talicskázoltán?", "wheelbarrow")
    ,new Zoltán("Kávézoltán?", "coffee")
    ,new Zoltán("Hugyozoltán?", "pee")
    ,new Zoltán("Hallgatózóltán?", "listening")
    ,new Zoltán("Dolgozoltán?", "working")
    ,new Zoltán("Táplálkozoltán?", "eat")
    ,new Zoltán("Korcsolyázoltán?","ice skate")
    ,new Zoltán("Napozoltán?","sunshine")
    ,new Zoltán("Fikázoltán?","phlegm")
    ,new Zoltán("Programozoltán?","programming")
    ,new Zoltán("Phpzoltán?","php")
    ,new Zoltán("Szülinapozoltán?","birthday")
    ,new Zoltán("Dohányzoltán?","smoke")
    ,new Zoltán("Coca-Colázoltán?","coca cola")
    ,new Zoltán("Sziesztázoltán?","taking nap")
    ,new Zoltán("HómOffizoltán?","home office")
    ,new Zoltán("Pofázoltán?","arguing")
    ,new Zoltán("Csajozoltán?","party girl")
    ,new Zoltán("Pálinkázoltán?","shots")
    ,new Zoltán("Vacsorázoltán?","last dinner")
    ,new Zoltán("Biliárdozoltán?","8 ball pool")
    ,new Zoltán("Zsebhokizoltán?","pocket")
    ,new Zoltán("Betonozoltán?","concreting")
    ,new Zoltán("Pancsizoltán?","tub")
    ,new Zoltán("Macskázoltán?","cat")
    ,new Zoltán("Kutyázoltán?","dog")
    ,new Zoltán("Nyomozoltán?","FBI")
    ,new Zoltán("Hazudozoltán?","lying")
    ,new Zoltán("Bulizoltán?","party")       
    ,new Zoltán("Homokozoltán?","sand")       
    ,new Zoltán("Légkondizoltán?","air conditioning")   
    ,new Zoltán("Társasozoltán?","board game")       
    ,new Zoltán("Habozoltán?","hesitation")
    ,new Zoltán("Bújócskázoltán?","hide and seek")      
    ,new Zoltán("Álmodozoltán?","daydream")
    ,new Zoltán("Guglizoltán?","google search")
    ,new Zoltán("Utazoltán?","travel")
    ,new Zoltán("Játszadozoltán?","play")
    ,new Zoltán("Kukázoltán?","trash")
    ,new Zoltán("Diplomázoltán?","learning")
    ,new Zoltán("Randizoltán?","date")
    ,new Zoltán("Tapétázoltán?","wallpaper")
    ,new Zoltán("Kamuzoltán?","lie")
    ,new Zoltán("Parázoltán?","fear")
    ,new Zoltán("Pelenkázoltán?","diaper")
    ,new Zoltán("Ásítozoltán?","yawn")
    ,new Zoltán("Vacsorázoltán?","dinner")
    ,new Zoltán("Buszozoltán?","bus")
    ,new Zoltán("Babázoltán?","playing with a doll")
    ,new Zoltán("Szopizoltán?","suck")
    ,new Zoltán("Szolizoltán?","solarium")
    ,new Zoltán("Szórakozoltán?","having fun")
    ,new Zoltán("Sóhajtozoltán?","sigh")
    ,new Zoltán("Mozizoltán?","cinema")
    ,new Zoltán("Kondizoltán?","workout")
    ,new Zoltán("Randalírozoltán?","disruption")
    ,new Zoltán("Facebookozoltán?","facebook")
    ,new Zoltán("Hiányzoltán?","missing you")
];

function loadZoltán(){
    var sorszámozoltán = Math.floor(Math.random() * (listázoltán.length));
    listázoltán[sorszámozoltán].displayZoltán();
    setTimeout(function(){ loadZoltán(); }, 3000);
}

loadZoltán();