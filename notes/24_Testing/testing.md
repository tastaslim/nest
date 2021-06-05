## Testing ##
- Automated testing is considered an essential part of any serious software development effort. Automation makes it easy to repeat individual tests or test suites quickly and easily during development. This helps ensure that releases meet quality and performance goals. Automation helps increase coverage and provides a faster feedback loop to developers. Automation both increases the productivity of individual developers and ensures that tests are run at critical development lifecycle junctures, such as source code control check-in, feature integration, and version release.

- Such tests often span a variety of types, including unit tests, end-to-end (e2e) tests, integration tests, and so on. While the benefits are unquestionable, it can be tedious to set them up. 
### Nest: ### 
- automatically scaffolds default unit tests for components and e2e tests for applications
- provides default tooling (such as a test runner that builds an isolated module/application loader)
- provides integration with Jest and Supertest out-of-the-box.
- makes the Nest dependency injection system available in the testing environment for easily mocking components

## Installation ## 
```
$ npm i -D @nestjs/testing 
```

> ## Unit Testing ##
Testing our functions/code line by line. By default we get **jest** for unit testing which is very good and easily allows us for mocking and spying.