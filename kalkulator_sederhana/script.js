function sec(nomre) { 
    bil = document.getElementById("angkaTotal").innerHTML; 
    bil = bil + nomre; 
    document.getElementById("angkaTotal").innerHTML = bil; 
}

function minus() { 
    bil = document.getElementById("angkaTotal").innerHTML; 
    bil = "-" + bil; 
    document.getElementById("angkaTotal").innerHTML = bil; 
}

function persen() { 
    bil = document.getElementById("angkaTotal").innerHTML; 
    bil = bil * 1 / 100;  
    document.getElementById("angkaTotal").innerHTML = bil; 
}

function desimal() { 
    bil = document.getElementById("angkaTotal").innerHTML
    bil = bil + "." 
    document.getElementById("angkaTotal").innerHTML = bil; 
}

function resetIphone() { 
    bil = document.getElementById("angkaTotal").innerHTML
    bil = ""; 
    document.getElementById("angkaTotal").innerHTML = bil; 
} 

function azaltbili() { 
    bil = document.getElementById("angkaTotal").innerHTML 
    document.getElementById("angkaTotal").innerHTML = bil.substring(0,bill.length-1); 
}

function kali() { 
    bil = document.getElementById("angkaTotal").innerHTML
    bil = bil + "*"
    document.getElementById("angkaTotal").innerHTML = bil; 
}

function bagi() { 
    bil = document.getElementById("angkaTotal").innerHTML
    bil = bil + "/" 
    document.getElementById("angkaTotal").innerHTML = bil; 
}

function kurang (){ 
    bil = document.getElementById("angkaTotal").innerHTML
    bil = bil + "-" 
    document.getElementById("angkaTotal").innerHTML = bil; 
}

function tambah() { 
    bil = document.getElementById("angkaTotal").innerHTML
    bil = bil + "+"
    document.getElementById("angkaTotal").innerHTML = bil; 
}

function inspeksi() { 
    if (isNaN(eval(hasil)) !== false) { 
        alert("Berhasil!")
    }
}

function neticeIphone() { 
    hasil = document.getElementById("angkaTotal").innerHTML
    inspeksi(); 
    document.getElementById("angkaTotal").innerHTML = eval(hasil)
}