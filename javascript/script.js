
//mostrar-ocultar menu de navegacion
var contador = 1;
var menu = document.getElementById("barra_nav")

function mostrarmenu(){
    menu.style.bottom ="0%";
        contador = 0;
}

function ocultarmenu(){
    menu.style.bottom ="-100%";
        contador = 1;
}

document.getElementById("menu_btn").onclick = function () {
    console.log("clic en menu");
    if(contador == 1){
        mostrarmenu();
    }
    else{
        ocultarmenu();
        }
    }

window.onscroll = function () {
    ocultarmenu()
}

window.ondrag = function () {
    ocultarmenu()
}

//pedido de informacion API randomuser para mostrar en la web mediante fetch
let info = {};

fetch('https://randomuser.me/api/?seed=l7jg52yt686kl9889&nat=es&gender=male', {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
})
.then(res => res.json())
.then (json => {
    info = json.results[0];
    console.log(info);
    
    //top
    document.getElementById("top_foto").setAttribute('src', info.picture.large)
    document.getElementById("top_nombre").innerHTML = info.name.first+" "+info.name.last;    
    document.getElementById("top_mail").setAttribute('href',"mailto:"+info.email)
    document.getElementById("top_mail").innerHTML = '<i class="fa-regular fa-envelope"></i>';
    document.getElementById("top_whatsapp").setAttribute('href',"https://wa.me/"+info.cell);
    document.getElementById("top_whatsapp").setAttribute('target',"_blank");
    document.getElementById("top_whatsapp").innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
    document.getElementById("carta_edad").innerHTML = info.dob.age;    
    document.getElementById("carta_location").innerHTML = info.location.city;
    
    //contenido carta
    document.getElementById("carta_foto").setAttribute('src', info.picture.large)
    
    //contenido contacto
    document.getElementById("cont_dni").innerHTML = "DNI: "+info.id.value;
    document.getElementById("cont_edad").innerHTML = "Edad: "+info.dob.age+" años";
    document.getElementById("cont_nat").innerHTML = "Nacionalidad: "+info.nat;
    document.getElementById("cont_phone").innerHTML = '<i class="fa-solid fa-phone"></i>'+" "+info.phone;
    document.getElementById("cont_celular").innerHTML = '<i class="fa-solid fa-mobile-screen-button"></i>'+"&nbsp "+info.cell;
    document.getElementById("cont_whatsapp").innerHTML = '<i class="fa-brands fa-whatsapp"></i>'+" "+info.cell;
    document.getElementById("cont_wapp").setAttribute('href',"https://wa.me/"+info.cell);
    document.getElementById("cont_residencia").innerHTML = '<i class="fa-solid fa-location-dot"></i>'+" "
    +info.location.street.name+" "+info.location.street.number+", "+info.location.city
    +", "+info.location.state+", "+info.location.country+" ("+info.location.postcode+")";

    //contacto por mail
    document.getElementById("cont_mail").innerHTML = info.email;
    document.getElementById("cont_mail").setAttribute('href',"mailto:"+info.email);
    
})  
.catch(function(error) {
    console.log(error);
    
})

//mostrar-ocultar resumenes de papers
var res1="resumen1";
var pap1="paper1";
var ind1=0;
var res2="resumen2";
var pap2="paper2";
var ind2=0;

function respaper(a,b,c){
    document.getElementById(a).onclick = function(){
        if(c==0){
            document.getElementById(a).innerHTML = "Ocultar resumen&nbsp&nbsp&nbsp"+'<i class="fa-solid fa-angle-up">';
            document.getElementById(b).style.display = "block";
            c=1;
        } else{
            document.getElementById(a).innerHTML = "Ver resumen&nbsp&nbsp&nbsp"+'<i class="fa-solid fa-angle-down">';
            document.getElementById(b).style.display = "none";
            c=0;
        }
    }
}
respaper (res1, pap1, ind1);
respaper (res2, pap2, ind2);