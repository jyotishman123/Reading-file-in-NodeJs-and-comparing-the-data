const fs = require('fs');

 let  data = {
      
    
        "CatData": [
          { "Skills": "Agility and Coordination", "Score_2019": 64, "Score_2024": 71,},
          { "Skills": "Hunting and Predatory Skills", "Score_2019": 76, "Score_2024": 70 },
          { "Skills": "Communication", "Score_2019": 60, "Score_2024": 75 },
          { "Skills": "Adaptability", "Score_2019": 82, "Score_2024": 63 },
          { "Skills": "Independence", "Score_2019": 67, "Score_2024": 78 },
          { "Skills": "Affection and Socialization", "Score_2019": 70, "Score_2024": 84 },
          { "Skills": "Climbing", "Score_2019": 90, "Score_2024": 95 },
          { "Skills": "Balance", "Score_2019": 88, "Score_2024": 96 },
          { "Skills": "Senses", "Score_2019": 86, "Score_2024": 90 },
          { "Skills": "Flexibility", "Score_2019": 75, "Score_2024": 83 },
          { "Skills": "Problem Solving", "Score_2019": 67, "Score_2024": 78 },
          { "Skills": "Stealth", "Score_2019": 59, "Score_2024": 72 }
        ]
      }
         
         
        
    


 

let  jsonData =  JSON.stringify(data);

fs.writeFile('myData.json', jsonData, (err) => {
    if (err) throw err;
    console.log('Done 👍');
  });

  