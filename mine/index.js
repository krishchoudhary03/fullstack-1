var n=153,order=0,rem=0;
var sum=0;
var temp=n;
while(temp!=0){
    order+=1;
    temp=Number.parseInt(temp/10);
}
temp=n;

while(temp>0){
    rem=temp%10;
    let res = 1;
    for(let i=0;i<order;i++){
        res*=rem;
    }
    sum+=res;
    temp=Number.parseInt(temp/10);
}
console.log(sum);