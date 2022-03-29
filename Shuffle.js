{{#Front}}
<p id="myfront">{{Front}}</p>
<p id="myanswer"></p>
<script>
debugger;
var front = document.getElementById("myfront");
var answer = document.getElementById('myanswer');
var original = front.innerText;
if(original.indexOf('\n') > 0)
 original = original.substring(0, original.indexOf('\n'));
if(original.indexOf('\r') > 0)
 original = original.substring(0, original.indexOf('\r'));
original = original.trim();
while(original.indexOf('  ') >= 0)
	original = original.replace(new RegExp("  ","gm")," ");
front.innerText = original;
var s = original.split(' ');
var i = s.length;
while(i > 0){
   var r = Math.floor(Math.random() * i);
   i--;
   s[i] = s[i].trim();
   [s[i], s[r]] = [s[r], s[i]];
}
front.innerHTML = '<span part>' + s.join('</span> / <span part>') + '</span>';
intitalSpans();
function intitalSpans() {
	var spans = document.querySelectorAll('span[part]');
	for(var index in spans){
		spans[index].onclick = depart;
	}
	spans = document.querySelectorAll('span[depart]');
	for(var index in spans){
		spans[index].onclick = part;
	}
}
function depart(){			
	answer.innerHTML = answer.innerHTML + '<span depart>' + this.innerText.trim() + ' </span>';
	front.removeChild(this);
	front.innerHTML = front.innerHTML.replace('/  /', '/');
	if(front.innerHTML.startsWith(' /'))
		front.innerHTML = front.innerHTML.substring(3);
	if(front.innerHTML.endsWith('/ '))
		front.innerHTML = front.innerHTML.substring(0, front.innerHTML.length - 3);
	if(answer.innerText.trim() == original.trim())
		answer.style = "color: green";
	else
		answer.style = "";
	intitalSpans();
};
function part(){
    answer.style = "";
	front.innerHTML = (front.innerHTML.trim().length > 0 ? front.innerHTML + ' / ' : '') + '<span part>' + this.innerText.trim() + ' </span>';
	answer.removeChild(this);
	while(answer.innerHTML.indexOf('  ') >= 0)
		answer.innerHTML = answer.innerHTML.replace(new RegExp("  ","gm"), ' ');
	answer.innerHTML = answer.innerHTML.trim();
	intitalSpans();
}
</script>
{{/Front}}
