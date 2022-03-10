// const { team } = require('.././index.js')

// Function to generation Markdown based on deconstructed object passed from inquirer
// {name, license, desc, install, usage, contribution, username, profileLink, email}


const generateHTML = ({manager, engineers, interns}) => {
  
    // Retunr the markdown template to index.js so it can be written to the generated README.md file'
    return `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Team Profile Generator</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="./style.css">
    
            <script src="https://kit.fontawesome.com/c7733744a9.js" crossorigin="anonymous"></script>
        </head>
        <body>
            <header><h1>Team Profile</h1></header>
           <!-- Open index.js in Terminal and 'run npm' start to generate the content of this file!! -->
    
            <main>
                <article class="manager">
                    <h2 class="role"><i class="fa-solid fa-bullhorn"></i>${manager.getRole()}</h2>
                    <h3 class="name">${manager.getName()}</h3>
                    <p class="id"><i class="fa-solid fa-id-card"></i>ID: ${manager.getId()}</p>
                    <a href="mailto:${manager.getEmail()}"><p class="email"><i class="fa-solid fa-envelope"></i>m${manager.getEmail()}</p></a>
                    <p class="phone"><i class="fa-solid fa-phone-office"></i>${manager.getOfficeNumber()}</p>
                </article>

                ${
                    engineers.map(element => {
                        return renderEngineer(element)
                    }).join("")
                }
                ${
                    interns.map(element => {
                        return renderIntern(element)
                    }).join("")
                }
            </main>
           
            <script src="" async defer></script>
        </body>
    </html>`
}
   
const renderEngineer = (engineer) => {
    return `
    <article class="engineer">
        <h2 class="role"><i class="fa-solid fa-display-code"></i></i>${engineer.getRole()}</h2>
        <h3 class="name">${engineer.getName()}</h3>
        <p class="id"><i class="fa-solid fa-id-card"></i>ID: ${engineer.getId()}</p>
        <a href="mailto:${engineer.getEmail()}"><p class="email"><i class="fa-solid fa-envelope"></i>${engineer.getEmail()}</p></a>
        <a href="github.com/n-r-martin"></a><p class="githubUrl"><i class="fa-brands fa-github"></i>${engineer.getGitHub()}</p></a>
    </article>
    `
}

// Create const for interns
const renderIntern = (intern) => {
    return `
    <article class="intern">
        <h2 class="role"><i class="fa-solid fa-coffee-pot"></i>${intern.getRole()}</h2>
        <h3 class="name">${intern.getName()}</h3>
        <p class="id"><i class="fa-solid fa-id-card"></i>ID: ${intern.getId()}</p>
        <a href="mailto:${intern.getEmail()}"><p class="email"><i class="fa-solid fa-envelope"></i>${intern.getEmail()}</p></a>
        <p class="school"><i class="fa-solid fa-graduation-cap"></i>${intern.getSchool()}</p>
    </article>
    `
}

  // Exporting function so it can be used in index.js
  module.exports = {
    generateHTML
  }
  