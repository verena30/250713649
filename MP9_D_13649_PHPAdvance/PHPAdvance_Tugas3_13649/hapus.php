<?php 
    require 'koneksi.php';

    $id=$_GET['id']??'';

    if($id === '' || !ctype_digit($id)){
        echo '<p style="color:red;">!! ID Tidak Valid !!</p> ';
    }else{
        $query = 'DELETE from film where id = ?';
        $stmt = mysqli_prepare($conn, $query);
        mysqli_stmt_bind_param($stmt, 'i', $id);
        mysqli_stmt_execute($stmt);

        if(mysqli_stmt_affected_rows ($stmt) === 1){
            echo '<p>Data berhasil di hapus</p>';
        }else{
            echo '<p>Data tidak ditemukan</p>';
        }
    }

    

    echo '<a href="index.php">Kembali</a>';

?>