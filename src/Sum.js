import React from 'react'


const Sum = (props) => {
  let array=[22, 22, 38, 22,23, 19]
  let steam=[]
  let leaf=[]
  let newarray=[]
  for(let i=0;i<array.length;i++){
    let s=array[i]/10
    if(!steam.includes(Math.floor(s)))
    {
      steam.push(Math.floor(s))
      newarray.push(`${Math.floor(s)}|${array[i]%10}`)
    }
    else{
      let str=''
      for(let j=0;j<steam.length;j++){
        if(steam[j]==array[i]%10){
            // console.log(newar  ray[j]);
            str=str+`${array[j]%10}`
          //  console.log(`${array[j]%10}`);
        }

      }
      console.log(str);
    }
    // newarray[j].split('|')[1]+array[i]%10
    // leaf.push(array[i]%10)
  }
  console.log(steam);
  console.log(newarray);
  return(
    <div></div>
   )

 }

export default Sum