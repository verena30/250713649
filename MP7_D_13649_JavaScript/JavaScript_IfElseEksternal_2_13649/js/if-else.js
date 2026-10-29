var iJam;
var sJenis;

iJam = prompt("Masukkan lama parkit (jam).", 1);
sJenis = prompt("Jenis kendaraan: (M)otor atau Mo(B)il?", "M");

if(iJam > 3){
    if(sJenis == "M"){
        alert("Tarif parkir motor Rp6.000");
    }else{
        alert("Tarif parkir mobil Rp12.000");
    }
}else{
    if(sJenis == "M"){
        alert("Tarif parkir motor Rp3.000");
    }else{
        alert("Tarif parkir mobil Rp6.000");
    }
}
