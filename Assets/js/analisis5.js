
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
						document.getElementById("jwb1a").hidden = false;
						document.getElementById("jwb1b").hidden = true;
					}
					else{
						document.getElementById("jwb1a").hidden = true;
						document.getElementById("jwb1b").hidden = false;
					}

				if(b==10){
						document.getElementById("jwb2a").hidden = false;
						document.getElementById("jwb2b").hidden = true;
					}
					else{
						document.getElementById("jwb2a").hidden = true;
						document.getElementById("jwb2b").hidden = false;
					}

					if(c==10){
						document.getElementById("jwb3a").hidden = false;
						document.getElementById("jwb3b").hidden = true;
					}
					else{
						document.getElementById("jwb3a").hidden = true;
						document.getElementById("jwb3b").hidden = false;
					}

					if(d==10){
						document.getElementById("jwb4a").hidden = false;
						document.getElementById("jwb4b").hidden = true;
					}
					else{
						document.getElementById("jwb4a").hidden = true;
						document.getElementById("jwb4b").hidden = false;
					}

					if(e==30){
						document.getElementById("jwb5a").hidden = false;
						document.getElementById("jwb5b").hidden = true;
					}
					else{
						document.getElementById("jwb5a").hidden = true;
						document.getElementById("jwb5b").hidden = false;
					}

					if(f==80){
						document.getElementById("jwb6a").hidden = false;
						document.getElementById("jwb6b").hidden = true;
					}
					else{
						document.getElementById("jwb6a").hidden = true;
						document.getElementById("jwb6b").hidden = false;
					}

					if(g==12){
						document.getElementById("jwb7a").hidden = false;
						document.getElementById("jwb7b").hidden = true;
					}
					else{
						document.getElementById("jwb7a").hidden = true;
						document.getElementById("jwb7b").hidden = false;
					}

					if(h==0){
						document.getElementById("jwb8a").hidden = false;
						document.getElementById("jwb8b").hidden = true;
					}
					else{
						document.getElementById("jwb8a").hidden = true;
						document.getElementById("jwb8b").hidden = false;
					}
				}

			}
			

            function ulang(){
            	document.getElementById("ulangi").hidden = true;
            	document.getElementById("lihat").hidden = true;
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
			}