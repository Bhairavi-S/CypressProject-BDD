# Project Title - Cypress Basic :
This project contains automated tests written in Cypress using Behavior-Driven Development (BDD) approach.
this project also contains automated accessibility tests written in cypress to check the accessibility of application.

# Project Structure :


    ├── Cypress            
    ├──   ├── e2e                    
    ├──      ├── Features              # BDD features scenario
    ├──      ├── Accessibility         # Accessibility test cases
    ├──      ├── UI Tests              # UI Test Cases
    ├──   ├── fixtures                 # Test data
    ├──   ├── Page object              # Reusable functions for test cases
    ├──   ├── Plugins                  # BDD Plugin
    ├──   ├── Screenshots              # Screenshots of failure  
    ├──   ├── Support              
    ├──      ├── Step defination       # Step defination for BDD
    ├── Node Modules                   # Dependencies
    ├── Cypress.config.ts              # Cypress test configuration
    ├── Docker file                    # Commands to run docker
    ├── package-lock.json              # Describes dependency tree
    ├── package.json                   # Project metadata
    └── README.md 

# Navigate to the project directory :
cd Cypress Basic

# To run the tests interactively in UI mode :
npx cypress open

# To run tests :
Headless mode :- npx cypress run 
Headed mode :- npx cypress run --headed 

# Cypress version :
"cypress": "^13.9.0"

# Accessibility tool :
"cypress-axe": "^1.5.0",