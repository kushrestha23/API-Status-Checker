1\. How long did you spend on the technical test? What would you add to your solution if you had more time? If you didn't spend much time on the technical test, then use this as an opportunity to explain what you would add.

Ans:

I worked on the technical test for about 4 hours. For the step definitions, I initially used Cypress and Cucumber. However, I ran into compatibility issues with the most recent version of Cypress, which resulted in Cucumber dependency issues. I tried to fix this by using a third-party library's Cucumber preprocess, but it didn't work with the official Cypress library. As a result, I switched to vanilla JavaScript with Cucumber for BDD and Chai for assertions, allowing me to finish the technical test.

If I had more time, I would have investigated some unofficial libraries to see if they could be used with the most recent version of Cypress. Furthermore, I would have liked to include more thorough testing, such as edge case testing and negative testing, to ensure the application is robust and error-free. Finally, I would have liked to optimize the tests for speed and efficiency by employing parallelization and other time-saving techniques.

Given the difficulties I encountered with the initial Cypress and Cucumber setup, I believe my approach to the technical test was successful overall. However, there is always room for improvement.

2\. What do you think is the most interesting trend in test automation?

Ans: 

The tendency towards intelligent and independent testing is, in my view, the most fascinating one in test automation. Intelligent testing entails enhancing test automation by utilizing cutting-edge technologies like machine learning, artificial intelligence, and natural language processing. With the aid of these technologies, testers can produce more precise and dependable tests, identify flaws more quickly, and eventually raise the overall caliber of the software under test. 

The increased use of DevOps techniques and the incorporation of testing into the continuous integration and continuous delivery (CI/CD) workflow are two additional intriguing trends. This pattern highlights the requirement for quick, trustworthy, and automated testing that can keep up with the rapid rate of software creation in the contemporary age.

And finally, a noteworthy development in test automation is the growth of low-code or no-code testing tools. With the help of these tools, testers can build and run tests without having to have a thorough understanding of programming, freeing them up to concentrate on testing rather than writing code. With the aid of this tendency, the testing process is becoming more available to a wider variety of experts.



3\. How would you implement test automation in a legacy application? Have you ever had to do this?

Ans: 

There are several procedures that must be followed in order to apply test automation in a legacy application: 

- Determine the automation's reach: Determine which components of the application should be automated, such as essential business procedures, commonly used features, or error-prone areas.
- Select a tool for test automation: That technology is a legacy, and it's a tool. Consider usability, scalability, and integration with existing tools and processes.
- Development of testing framework: Create a framework that outlines the testing strategy, test cases, and expected outcomes. This framework will serve as a guide for the creation of test scripts.
- Integrate test automation with the CI/CD pipeline: As part of the continuous integration and delivery pipeline, automate the process of running tests.
- Analyze and report test results: Collect and analyze automated test results to identify problems and areas for improvement. Create reports that summarize the findings and provide information for decision-making.

4\. How would you improve the customer experience of the SkipTheDishes website?

Ans:

- Improve the search functionality: A critical component of any food delivery website is the search functionality. SkipTheDishes' search functionality could be improved by adding filters such as price range, cuisine type, dietary restrictions, and delivery time to help customers find what they're looking for more quickly. Additionally, as the user types in their search query, a predictive search feature could be implemented to suggest popular dishes or restaurants.

- Improve website layout and user interface: One of the primary issues with the SkipTheDishes website is the lack of spacing and the outdated UI design. Competitors such as Uber Eats and Doordash have more modern and clean interfaces. SkipTheDishes could implement a more visually appealing layout, such as wider spacing between sections and content, consistent font size, and color scheme throughout the website, to improve the UI. Customers will have a more cohesive and user-friendly experience as a result of this.


- Optimize button fonts: Button font size is an important aspect of web design because it directly affects the user's ability to interact with the website. To ensure readability, when a button's state changes, such as when a user hovers over it or clicks on it, the font size should remain consistent. SkipTheDishes could improve the user experience by making sure that all button fonts are legible and the same size across the website.


5\. What do you have to comment about these 2 chunks (A and B) of load testing below?

Ans: 

- The measurements for Chunk A are reported for a 9.735-second time period, while the metrics for Chunk B are reported for a 9.933-second time period. When comparing the metrics, the difference in the reporting time should be taken into consideration.
- Chunk A demonstrates that 10 virtual users were made and carried out 20 HTTP requests, while Chunk B demonstrates that 100 virtual users were created but that only 31 HTTP requests were carried out. Moreover, Chunk B saw 69 virtual players fail. These variations indicate that Chunk B's load test was subjected to greater duress than Chunk A's load test.
- From 3569.2 seconds to 20080.4 seconds, the vusers.session\_length metric in Chunk B displays a very broad range of session lengths. This indicates that there was a significant amount of user activity variability in the Chunk B load test. The spread of session lengths in Chunk A, which ranged from 2540.7 seconds to 3141.8 seconds, was much narrower.
- The http.request\_rate metric is much greater in Chunk B, at 18 requests per second, compared to 2 requests per second in Chunk A. This suggests that the load test in Chunk B was subjected to more stress, which may have contributed to the higher failure rate and broader range of session lengths observed.
- Compared to Chunk A, Chunk B's http.response\_time metrics have a much wider range, with a maximum response time of 9836 milliseconds. This indicates that there were a few outliers with extremely high reaction times in the load test in Chunk B, which may have pointed to performance problems with the system being tested. Chunk A's response times, which ranged from 106 milliseconds to 262 milliseconds, had a much narrower spread.

