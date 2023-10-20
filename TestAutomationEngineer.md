# SkipTheDishes Test Automation Engineer Recruitment Test

Thank you for taking the time to do our technical test. It consists of two parts:

  1. [A technical test](#technical-test)
  1. [A few technical questions](#technical-questions)

In order to avoid bounced emails we would like you to submit your results by uploading the relevant zip file to a shared Google Drive folder. In order to obtain the URL for this folder, please supply your Gmail or Google-based email address to either your recruitment contact or the SkipTheDishes member of staff who assigned you the test.

Please make this a **single** zip file named `{yourname}-{role-applied-for}.zip` containing:

  1. A single markdown file with the answers to the technical questions
  1. A folder containing the technical test (please try not to include files like library dependencies)

## Technical Test

SkipTheDishes's consumer-facing website is available at [www.skipthedishes.com](https://www.skipthedishes.com/), which you can use to find restaurants in an address area.

The Technical test consists of two tasks:

  1. Write the step definitions for the scenario below.
  2. Create a test for the Rest API endpoint below

_If you are based internationally, you may have to use a more local website to your current location due to IP restrictions, for example [www.just-eat.co.uk](https://www.just-eat.co.uk/) in UK, [www.menulog.com.au](https://www.menulog.com.au/) in Australia or [www.just-eat.es](https://www.just-eat.es/) in Spain. Just choose an address that matches those locations._

### Scenario to Automate
```
Feature: Use the website to find restaurants
  So that I can order food
  As a hungry customer
  I want to be able to find restaurants in my area

Scenario: Search for restaurants in an area
  Given I want food in "136 Market Avenue, Winnipeg, MB, Canada"
  When I search for restaurants
  Then I should see some restaurants in "136 Market Avenue, Winnipeg, MB, Canada"
```

### Rest API endpoint
```
curl -X GET \
    'https://api-skipthedishes.skipthedishes.com/v1/restaurants/clean-url/ellement-wine-market' \
    -d lat=49.898215 \
    -d long=-97.13588229999999 \
    -H "app-token:d7033722-4d2e-4263-9d67-d83854deb0fc"
```

For simplicity, please assert only the status code and if the response body is not blank.

### Platform Choice

You can create step definitions using any language or framework you are experienced with.

### Task requirements

Feel free to spend as much or as little time on the exercise as you like as long as the following requirements have been met:

  * Please complete the two tasks described above.
  * You should provide clear instructions on your test setup and how to execute your tests. The clarity and precision of these instructions - and the ease with which the interviewers can execute them - will be a key part of the assessment. Please create a README file detailing said instructions. Please also use this file for listing any additional comments or observations you might want to share about your submission.

## Technical questions

Please answer the following questions in a markdown file called `Answers to technical questions.md`.

  1. How long did you spend on the technical test? What would you add to your solution if you had more time? If you didn't spend much time on the technical test then use this as an opportunity to explain what you would add.
  1. What do you think is the most interesting trend in test automation?
  1. How would you implement test automation in a legacy application? Have you ever had to do this?
  1. How would you improve the customer experience of the SkipTheDishes website?
  1. What do you have to comment about these 2 chunks (A and B) of load testing below?

### Chunk A
```
--------------------------------------
Metrics for period to: 10:30:30(-0600) (width: 9.735s)
--------------------------------------

vusers.created.total: ....................................... 10
vusers.completed: ........................................... 10
vusers.session_length:
  min: ...................................................... 2540.7
  max: ...................................................... 3141.8
  median: ................................................... 2671
  p95: ...................................................... 2725
  p99: ...................................................... 2725
http.request_rate: .......................................... 2/sec
http.requests: .............................................. 20
http.codes.200: ............................................. 20
http.responses: ............................................. 20
http.response_time:
  min: ...................................................... 106
  max: ...................................................... 262
  median: ................................................... 127.8
  p95: ...................................................... 252.2
  p99: ...................................................... 252.2
```

### Chunk B

```
--------------------------------------
Metrics for period to: 10:32:00(-0600) (width: 9.933s)
--------------------------------------

vusers.created.total: ....................................... 100
vusers.failed: .............................................. 69
vusers.completed: ........................................... 31
vusers.session_length:
  min: ...................................................... 3569.2
  max: ...................................................... 20080.4
  median: ................................................... 17859.2
  p95: ...................................................... 20136.3
  p99: ...................................................... 20136.3
http.request_rate: .......................................... 18/sec
http.codes.200: ............................................. 70
http.responses: ............................................. 70
http.requests: .............................................. 153
http.response_time:
  min: ...................................................... 157
  max: ...................................................... 9836
  median: ................................................... 8520.7
  p95: ...................................................... 9607.1
  p99: ...................................................... 9801.2
```

#### Thanks for your time, we look forward to hearing from you!
- The [SkipTheDishes](https://www.skipthedishes.com/jobs) team