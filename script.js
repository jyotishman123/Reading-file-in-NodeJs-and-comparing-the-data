let  tableRow = document.getElementById("tableRow");
let growingskillsArea = document.getElementById('growingSkillArea')
let declineskillsArea = document.getElementById('declineSkillArea')
let input = document.getElementById("int");
let btn = document.getElementById('btn');
let Output = document.getElementById('Output')



fetch("myData.json")
  .then((response) => response.json())
  .then((data) => GetData(data));






  function GetData(data){

    data.CatData.sort((a, b) => b.Score_2019 - a.Score_2019);

    // calculate the 2019 rank for each skill
    data.CatData.forEach((skill, index) => {
      skill.rank_2019 = index + 1;
    });

    // sort the CatData array by 2024 score in descending order
    data.CatData.sort((a, b) => b.Score_2024 - a.Score_2024);

    // calculate the 2024 rank for each skill
    data.CatData.forEach((skill, index) => {
      skill.rank_2024 = index + 1;
    });

    // console.log(data);

     
       
console.log(data.CatData);

   data.CatData.forEach((ele)=>{
        tableRow.innerHTML += `
      
        <tr>
        <td>${ele.Skills}</td>
        <td>${ele.Score_2019}%</td>
        <td>${ele.Score_2024}%</td>
        <td>${ele.rank_2019}</td>
        <td>${ele.rank_2024}</td>

        
      </tr>
        
        
        `
   })
 
 CatData(data)
 UserData(data.CatData)
 
  }


  function CatData(data){
    data.CatData.forEach(skill => {
      skill.percentage_change = (skill.Score_2024 - skill.Score_2019) / skill.Score_2019 * 100;
    });

    // sort the CatData array by percentage change in descending order
    data.CatData.sort((a, b) => b.percentage_change - a.percentage_change);

    // identify the top 3 fastest growing and fastest declining CatData
    const fastest_growing = data.CatData.slice(0, 3);
    const fastest_declining = data.CatData.slice(-3).reverse();
    // console.log(data)
console.log(fastest_growing)

    console.log('Top 3 fastest growing Skills:');
    fastest_growing.forEach(skill => {
      console.log(`${skill.Skills}: ${skill.percentage_change}%`);
      growingskillsArea.innerHTML+=`
         <ul>
              <li>  ${skill.Skills}: ${skill.percentage_change}% </li>
         </ul>
      `
    });

    console.log('Top 3 fastest declining Skills:');
    fastest_declining.forEach(skill => {
      console.log(`${skill.Skills}: ${skill.percentage_change}%`);
      declineskillsArea.innerHTML+=`
         <ul>
              <li>  ${skill.Skills}: ${skill.percentage_change}% </li>
         </ul>
      `
    });
  }



  function UserData(data){
       console.log(data)
        
       btn.addEventListener("click",(e)=>{
          e.preventDefault()
     
           
     
// let skill = input.value 

 


let outputData = data.filter((ele)=>{
    if(ele.Skills.toLowerCase().includes(input.value.toLowerCase())){
      return  ele
    }
})

 if(input.value == ""){
  alert("Please enter the skill");
  return
 }

// console.log(outputData)

if(outputData.length < 0){
  alert("Wrong Input")
}




outputData.forEach((ele)=>{

 

Output.innerHTML =`
  <div>
   
  <h2>rank 2019 </h2>
  <h3>${ele.rank_2019}</h3>

  <h2>rank 2024 </h2>
  <h3>${ele.rank_2024}</h3>
  

  </div>
`
 
})

input.value = ""

       })


  }