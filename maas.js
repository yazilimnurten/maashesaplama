 function hesapla() {
     var hafta = document.getElementById("hafta").value;
     var saat = document.getElementById("saat").value;
     var kdv = document.getElementById("kdv").value;
     var total = (hafta * saat);
     var net_kdv = total * ((100 - kdv) / 100);
     document.getElementById("ücret").innerHTML = net_kdv;

 }