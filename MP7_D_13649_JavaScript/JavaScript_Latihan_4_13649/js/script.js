function fn_ValForm() {
    var sMsg = "";
    var vEmail = ^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$;
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var umur = document.getElementById("umur").value;
    var acara = document.getElementById("kategori").value;;
    var pilihan;

    if(nama == "" && email == "" && umur == ""){
        sMsg += "\n* Input tidak valid";
    }

    if(nama == ""){
        sMsg += "\n* Input tidak valid";
    }

    if(email == ""){
        sMsg += "\n* Input tidak valid";
    }

    if(umur == ""){
        sMsg += "\n* Input tidak valid";
    }
    
    if(!email){
        sMsg += "\n* Email Tidak Valid";?
    }
   
    if(umur <= 25){
       umur = "Peserta Mahasiswa";
    }else if(umur > 25){
        umur = "Peserta Umum";
    }

    if(acara == ""){
        sMsg += "\n* Input tidak valid";
    }

    if(sMsg != ""){
        alert("Peringantan: \n" + sMsg);
        return false;
    }else{
        return true;
    }

    switch(acara){
        case "W":
            pilihan = "W = Workshop";
            break;
        case "S":
            pilihan = "S = Seminar";
            break;
        case "L":
            pilihan = "L = Lomba Coding";
            break;  
    }

    alert("Terima kasih" + nama + "! Anda terdaftar di acara " + pilihan + " " + umur);
}