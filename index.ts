import inquirer from 'inquirer'
async function removeSpace() {
    let userInput= await inquirer.prompt({
        name:'user',
        type:'input',
        message:'Write some thing?'
    });
   let userData= userInput.user
    userData=userData.replace(/\s/g,"");
  
    console.log(userData);
    console.log(userData.length);
    
    
}


removeSpace();