let ar_soal = [];
let score = 0;
let i=0;
let jlhsoal=0;
   window.onload = function awal(){
                document.getElementById("wdh_skor").hidden = true;
                tampil();
            };

	function tampil(){
        pjg_array=ar_soal.length;
        
                let url = "../../json/evaluasi_mean.json";
                $.getJSON(url, function(data){
                    console.log(data);
                    console.log(score);
                    console.log(i);
                    console.log(pjg_array);
                    jlhsoal = data.soal1.length;

                    // let random = Math.floor(Math.random() * data.soal1.length);
                    // ar_soal[ar_soal.length] = random;
                    

                    // for(i=0;i<=pjg_array;i++){
                    //     if(pjg_array>0){
                    //         for(j=1;j<=pjg_array;j++){
                    //             if(ar_soal[i]==ar_soal[j]){
                    //               tampil();
                    //         } else {
                    //             ar_soal[ar_soal.length] = random;
                    //             console.log(ar_soal);
                                
                    //         }
                    //         }
                    //     } else{
                    //         ar_soal[ar_soal.length] = random;
                    //     }
                    // }

                    // $("#soalke").html(pjg_array+1);
                    // $("#skor").html(score);
                    // $("#soal").html(data.soal1[random].soal);
                    // $("#pil_a").html(data.soal1[random].pil_a);
                    // $("#pil_b").html(data.soal1[random].pil_b);
                    // $("#pil_c").html(data.soal1[random].pil_c);
                    // $("#pil_d").html(data.soal1[random].pil_d);
                    // $("#jwbsoal").html(data.soal1[random].jawaban);

                    $("#soalke").html(i+1);
                    $("#skor").html(score);
                    $("#soal").html(data.soal1[i].soal);
                    $("#gbr").html(data.soal1[i].gbr);
                    $("#ket").html(data.soal1[i].ket);
                    $("#pil_a").html(data.soal1[i].pil_a);
                    $("#pil_b").html(data.soal1[i].pil_b);
                    $("#pil_c").html(data.soal1[i].pil_c);
                    $("#pil_d").html(data.soal1[i].pil_d);
                    $("#jwbsoal").html(data.soal1[i].jawaban);
                    $("#totalsoal").html(jlhsoal);
                    i++;
                    
                    // $("#jwbsiswa").val("");
                    // $("#hasilbenar").html("");
                    // $("#hasilsalah").html("");
                })
        }
    

    //  $("#acaksoal").click(function(){
    //     tampil();
    // })



    // $("#cekjwb").click(function(){
    //     cekjwb();
    // })


    function cekjwb(x){

        let jwbsoal = parseInt($('#jwbsoal').html());

        if(x==jwbsoal){
            nilaisoal=100/jlhsoal;
            score=score+nilaisoal;
            if(i>jlhsoal-1){
                document.getElementById("wdh_skor").hidden = false;
                document.getElementById("wdh_soal").hidden = true;
                tampil();
            } else{
                tampil();}
            }
        else{
            score=score+0;
            if(i>jlhsoal-1){
                document.getElementById("wdh_skor").hidden = false;
                document.getElementById("wdh_soal").hidden = true;
                tampil();
            } else{
                tampil();
            }
        }
     }
    