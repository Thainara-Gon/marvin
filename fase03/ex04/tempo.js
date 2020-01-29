function tempo(data1, data2, unidade){

   var da = new Date(data1);
   var dat = new Date(data2);
   var dif = Math.abs(dat.getTime() - da.getTime());
   var dia = Math.round(dif / (1000*60*60*24));
   var mes = Math.round(dif / (1000*60*60*24*30));
   var ano = Math.round(dif / (1000*60*60*24*30*12));
   if (unidade == "dia")
   return dia
   else if (unidade == "mês")
   return mes
   else
   return ano 
}


