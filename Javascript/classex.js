let lis= document.getElementsByTagName('li')
console.log(lis)
lis[0].innerText="Aditya Engineering Colleges";
lis[1].innerText='Aditya'


let tds=document.getElementsByTagName('td');
for(var i=0;i<tds.length;i++){
	tds[i].innerText=i+1;
}
let pi=document.getElementsByTagName('p');
pi[1].innerText='Bootstrap';

let ps=document.querySelector('.Topic');//class selector   
//By using queryselectorthe first element is changed from html to Hyper text markup language 
ps.innerText="Hyper text markup language";
let li=document.querySelector('li');//tag selector
li.innerText="Aditya";
