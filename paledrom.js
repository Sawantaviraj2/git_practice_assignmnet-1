
let name="naman";
let c=0;
for(i=0;i<Math.floor(name.length/2);i++)
  {
    for(j=name.length-1-i;j>Math.floor(name.length/2);j--)
      {
        if(name[i]==name[j])
        {
          c++;
          break;
        }
      }
  }
if(c>=2)
{
  console.log("paledrom");
}
else{
  console.log("Not a  paledrom");
}