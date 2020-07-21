let jwbSiswa = document.querySelectorAll(".jawabanSiswa");
let hasilBenar = document.querySelector("#hasilbenar");
let hasilSalah = document.querySelector("#hasilsalah");
let benar = 0;
let salah = 0;
			function cek1(){
				if(form.jwb1.value==""&&
                form.jwb2.value==""&&
                form.jwb3.value==""&&
                form.jwb4.value==""&&
                form.jwb5.value==""&&
                form.jwb6.value==""&&
                form.jwb7.value==""&&
                form.jwb8.value==""){
					document.getElementById("isi").innerHTML = "Isi dulu Jawabannya !!";
					document.getElementById("isi").hidden = false;
                }
                else{
                hasilSalah.hidden=false;
                hasilBenar.hidden=false;
                for(let i = 0 ; i < jwbSiswa.length ; i++){
					jwbSiswa[i].setAttribute("disabled", "");
				}
				document.getElementById("ulangi").hidden = false;
            	document.getElementById("lihat").hidden = false;
            	document.getElementById("isi").hidden = true;
				a=eval(form.jwb1.value);
				b=eval(form.jwb2.value);
				c=eval(form.jwb3.value);
				d=eval(form.jwb4.value);
				e=eval(form.jwb5.value);
				f=eval(form.jwb6.value);
				g=eval(form.jwb7.value);
				h=eval(form.jwb8.value);

				if(a==20){
						benar++;
						document.getElementById("jwb1a").hidden = false;
						document.getElementById("jwb1b").hidden = true;
					}
					else{
						salah++;
						document.getElementById("jwb1a").hidden = true;
						document.getElementById("jwb1b").hidden = false;
					}

				if(b==10){
						benar++;
						document.getElementById("jwb2a").hidden = false;
						document.getElementById("jwb2b").hidden = true;
					}
					else{
						salah++;
						document.getElementById("jwb2a").hidden = true;
						document.getElementById("jwb2b").hidden = false;
					}

					if(c==10){
						benar++;
						document.getElementById("jwb3a").hidden = false;
						document.getElementById("jwb3b").hidden = true;
					}
					else{
						salah++;
						document.getElementById("jwb3a").hidden = true;
						document.getElementById("jwb3b").hidden = false;
					}

					if(d==10){
						benar++;
						document.getElementById("jwb4a").hidden = false;
						document.getElementById("jwb4b").hidden = true;
					}
					else{
						salah++;
						document.getElementById("jwb4a").hidden = true;
						document.getElementById("jwb4b").hidden = false;
					}

					if(e==30){
						benar++;
						document.getElementById("jwb5a").hidden = false;
						document.getElementById("jwb5b").hidden = true;
					}
					else{
						salah++;
						document.getElementById("jwb5a").hidden = true;
						document.getElementById("jwb5b").hidden = false;
					}

					if(f==80){
						benar++;
						document.getElementById("jwb6a").hidden = false;
						document.getElementById("jwb6b").hidden = true;
					}
					else{
						salah++;
						document.getElementById("jwb6a").hidden = true;
						document.getElementById("jwb6b").hidden = false;
					}

					if(g==12){
						benar++;
						document.getElementById("jwb7a").hidden = false;
						document.getElementById("jwb7b").hidden = true;
					}
					else{
						salah++;
						document.getElementById("jwb7a").hidden = true;
						document.getElementById("jwb7b").hidden = false;
					}

					if(h==0){
						benar++;
						document.getElementById("jwb8a").hidden = false;
						document.getElementById("jwb8b").hidden = true;
					}
					else{
						salah++;
						document.getElementById("jwb8a").hidden = true;
						document.getElementById("jwb8b").hidden = false;
					}
					hasilBenar.innerHTML = `
          					Benar = <strong>${benar}</strong>.
      				`;
      				hasilSalah.innerHTML = `
          					Salah = <strong>${salah}</strong>.
      				`;
				}

			}
			

            function ulang(){
            	for(let i = 0 ; i < jwbSiswa.length ; i++){
					jwbSiswa[i].removeAttribute("disabled", "");
				}
				hasilBenar.hidden=true;
				hasilSalah.hidden=true;
				benar=0;
				salah=0;
            	document.getElementById("ulangi").hidden = true;
            	document.getElementById("lihat").hidden = true;
            	document.getElementById("jwb_analisis5").hidden = true;
				document.getElementById("jwb1a").hidden = true;
				document.getElementById("jwb1b").hidden = true;
				document.getElementById("jwb2a").hidden = true;
				document.getElementById("jwb2b").hidden = true;
				document.getElementById("jwb3a").hidden = true;
				document.getElementById("jwb3b").hidden = true;
				document.getElementById("jwb4a").hidden = true;
				document.getElementById("jwb4b").hidden = true;
				document.getElementById("jwb5a").hidden = true;
				document.getElementById("jwb5b").hidden = true;
				document.getElementById("jwb6a").hidden = true;
				document.getElementById("jwb6b").hidden = true;
				document.getElementById("jwb7a").hidden = true;
				document.getElementById("jwb7b").hidden = true;
				document.getElementById("jwb8a").hidden = true;
				document.getElementById("jwb8b").hidden = true;
			}

			function lihatJawaban(){
				document.getElementById("jwb_analisis5").hidden = false;
				let con=document.getElementById("submateri");
				con.scrollTop=con.scrollHeight;
			}