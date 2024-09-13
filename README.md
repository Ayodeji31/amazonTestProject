# Assumptions made during implementation.
Test scenarios wll be designed to mimic real user interactions and use cases. Test conditions are consistent and controlled. this includes ensuring the same version of the model and test environment are used throughout the testing process.
Data quality is important, it needs to be accurate and readily available for use, it is also assumed that the data will be continually updated, consistent in data quality. Will asume the system can scale to handle large volumes of data requests.
The security aspect are tested to ensure that is protected against potential vulnerabilities and that user date is handled securely.
The error handling and exception cases are considered in testing.

# Architectural decisions and reasoning behind my approach
The approach have decided to take is the page object model.
The Page Object Model (POM) is a design pattern in test automation that helps to create a clear separation between test code and the UI elements. It promotes reusability and maintainability by encapsulating interactions with a web page within separate classes. When using Playwright, a popular end-to-end testing framework, you can implement the Page Object Model to structure your test code effectively.

By using the Page Object Model with Playwright, you can achieve a more organized and maintainable test suite, making it easier to manage and update tests as your application evolves.

# How to run test
Ensure you have yarn installed on your machine 

## Pre-requisites
`yarn` - `brew install yarn` on MacOS or yarnpkg.com
## Project Set Up
First run `yarn` to install all dependencies.
Create a `.env` file in the root of your project if not pulled from Git.
To run test locally in headed mode`yarn test:headed`.
To run in headless mode `yarn test` 