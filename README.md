# easybreezy
CS 361 Team 25 Weather App - Team Easy Breezy

# Setup instructions
* Download node version 10.16.0 either on the nodejs.org or using NVM (.nvmrc file provided)
* Run `npm install` or `npm i` to download node packages
* Run `npm run dev` to start application in development mode

# Important notes
* Due to time constraints and resources we are making the API call from React.
  * This is highly <b>NOT</b> recommended and the suggested implmentation would be
a node backend where the API call would take place and the response thrown to
the React front-end.
* EDIT: Originally we wanted to create a back-end system that would limit the number of
API calls and perform data processing to save onto a DB system.

# Architecture Diagram
![Architecture](/public/ArchDiag.png)
