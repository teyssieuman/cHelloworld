 //var age = prompt("Texte d'invite");
 //alert(age);
 
 
 function test(id) {
	var doc = document.getElementById(id);
	return serialize(doc);
 }
 
 function serialize(doc) {
	 var ret = '{';
	 var i;
	 for(i=0; i<doc.rows.length; i++) {
		 ret+=doc.rows[i].className +', ';
	 }
	 ret+='}'
	 return ret;
 }
