
Test Cases
1. Login Tests
    1. As a user, when i provide a valid login credentials, i should be able to login succesfully into the application
    login credentials (username and password) before they are able login
    2. As a user, after a succussful login, i should be able to logout successfully from the application 
    3. As a user, when i provide an invalid login credentials, i should NOT be able to login succesfully into the application
    4. As a user, if i did not provide username and i try login to the application, i should get an error message asking me to provide with a username
    5. As a user, if i did not provide password and i try login to the application, i should get an error message asking me to provide with a password
    6. As a user, after my account has been locked out, i should not be able to access the system

2. Cart Tests
    1. As a user, i should be able to view list of all available products
    2. As a user, when i click on add to cart i showld see my item added to slack
    3. As a user, when i click on multiple items to add to cart i showld see my items added to slack


- All tests are in the folder CatenaMedia_Challlenge_Solution/cypress/tests
- All test data are in folder CatenaMedia_Challlenge_Solution/cypress/fixtures/testData.json
- Some functions are in CatenaMedia_Challlenge_Solution/cypress/support/commands.js