let a=13;
let c=0;
for(let i=1;i<=a;i++)
  {
    if(a%i==0)
    {
      c++;
    }
  }

if(c==2)
{
  console.log("Prime Number");
}
else{
  console.log("Not a prime number");
}