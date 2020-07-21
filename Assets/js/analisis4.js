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
                form.jwb8.value==""&&
                form.jwb9.value==""){
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
				i=eval(form.jwb9.value);
					if(a==13){
						benar++;
						document.getElementById("jwb1a").style.opacity = "100";
						document.getElementById("jwb1b").style.opacity = "0";
					}
					else{
						salah++;
						document.getElementById("jwb1a").style.opacity = "0";
						document.getElementById("jwb1b").style.opacity = "100";
					}

					if(b==17){
						benar++;
						document.getElementById("jwb2a").style.opacity = "100";
						document.getElementById("jwb2b").style.opacity = "0";
					}
					else{
						salah++;
						document.getElementById("jwb2a").style.opacity = "0";
						document.getElementById("jwb2b").style.opacity = "100";
					}

					if(c==20){
						benar++;
						document.getElementById("jwb3a").style.opacity = "100";
						document.getElementById("jwb3b").style.opacity = "0";
					}
					else{
						salah++;
						document.getElementById("jwb3a").style.opacity = "0";
						document.getElementById("jwb3b").style.opacity = "100";
					}

					if(d==22){
						benar++;
						document.getElementById("jwb4a").style.opacity = "100";
						document.getElementById("jwb4b").style.opacity = "0";
					}
					else{
						salah++;
						document.getElementById("jwb4a").style.opacity = "0";
						document.getElementById("jwb4b").style.opacity = "100";
					}

					if(e==24){
						benar++;
						document.getElementById("jwb5a").style.opacity = "100";
						document.getElementById("jwb5b").style.opacity = "0";
					}
					else{
						salah++;
						document.getElementById("jwb5a").style.opacity = "0";
						document.getElementById("jwb5b").style.opacity = "100";
					}

					if(f==25){
						benar++;
						document.getElementById("jwb6a").style.opacity = "100";
						document.getElementById("jwb6b").style.opacity = "0";
					}
					else{
						salah++;
						document.getElementById("jwb6a").style.opacity = "0";
						document.getElementById("jwb6b").style.opacity = "100";
					}

					if(g==2008){
						benar++;
						document.getElementById("jwb7a").style.opacity = "100";
						document.getElementById("jwb7b").style.opacity = "0";
					}
					else{
						salah++;
						document.getElementById("jwb7a").style.opacity = "0";
						document.getElementById("jwb7b").style.opacity = "100";
					}

					if(h==2001){
						benar++;
						document.getElementById("jwb8a").style.opacity = "100";
						document.getElementById("jwb8b").style.opacity = "0";
					}
					else{
						salah++;
						document.getElementById("jwb8a").style.opacity = "0";
						document.getElementById("jwb8b").style.opacity = "100";
					}

					if(i==1){
						benar++;
						document.getElementById("jwb9a").style.opacity = "100";
						document.getElementById("jwb9b").style.opacity = "0";
					}
					else{
						salah++;
						document.getElementById("jwb9a").style.opacity = "0";
						document.getElementById("jwb9b").style.opacity = "100";
					}
					hasilBenar.innerHTML = `
          					Benar = <strong>${benar}</strong>.
      				`;
      				hasilSalah.innerHTML = `
          					Salah = <strong>${salah}</strong>.
      				`;
				}

			}
			
			// function lihatjwb(){
			// 	form.jwb1.value="100";
			// 	form.jwb2.value="200";
			// 	form.jwb3.value="300";
			// 	form.jwb4.value="400";
			// }

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
            	document.getElementById("jwb_analisis4").hidden = true;
				document.getElementById("jwb1a").style.opacity = "0";
				document.getElementById("jwb1b").style.opacity = "0";
				document.getElementById("jwb2a").style.opacity = "0";
				document.getElementById("jwb2b").style.opacity = "0";
				document.getElementById("jwb3a").style.opacity = "0";
				document.getElementById("jwb3b").style.opacity = "0";
				document.getElementById("jwb4a").style.opacity = "0";
				document.getElementById("jwb4b").style.opacity = "0";
				document.getElementById("jwb5a").style.opacity = "0";
				document.getElementById("jwb5b").style.opacity = "0";
				document.getElementById("jwb6a").style.opacity = "0";
				document.getElementById("jwb6b").style.opacity = "0";
				document.getElementById("jwb7a").style.opacity = "0";
				document.getElementById("jwb7b").style.opacity = "0";
				document.getElementById("jwb8a").style.opacity = "0";
				document.getElementById("jwb8b").style.opacity = "0";
				document.getElementById("jwb9a").style.opacity = "0";
				document.getElementById("jwb9b").style.opacity = "0";
			}

			function lihatjwb(){
				document.getElementById("jwb_analisis4").hidden = false;
				let con=document.getElementById("submateri");
				con.scrollTop=con.scrollHeight;
			}

