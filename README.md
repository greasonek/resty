# React + Vite

## Author: Emily Greason

- **Run the app**

npm run dev

- **UML**
![lab-26-UML](./img/functional-component-lab-26-UML.png)

## Lab 27 Requirements

Technical Requirements / Note
Extend your React Application so that your functional components are able to manage their own state variables using the useState() Hook.
NOTE: It is not a requirement to make the actual API call. That can be mocked with “fake” data.

Refactor any components using this.setState() to implement the useState() react API hook.
Refactor the Form Component to implement user input from form elements, instead of hard coded string values.

**Suggested Component Hierarchy and Application Architecture:**

index.js - Entry Point.
<App /> - Container.
Holds application state: The Request (from the form) and the Response (from the API).
Hook that can update state.
Renders 2 Child Components.
<Form />
Expects a function to be sent to it as a prop.
Renders a URL entry form.
A selection of REST methods to choose from (“get” should be the default).
The active selection should be displayed/styled differently than the others.
Renders a Textarea to allow the user to type in a JSON object for a POST or PUT request.
On submit:
Send the Form entries back to the <App /> using the method sent down in props.
Form will run the API request.
Toggle the “loading” status before and after the request.
<Results />
Conditionally renders “Loading” or the data depending on the status of the request.
Renders the data as “pretty” JSON.
Proposed File Structure
In this proposal:

Utilize Airbnb React/JSX Style Guide conventions.
Unit tests are placed in the component directory (testing one file only).
Integration tests are placed in the __tests__ directory (testing more than one file).

## Lab 28 Requirements

Technical Requirements / Note
Extend your application to include the ability to send http requests and display response data, when the <Form /> component experiences a submission event.

Refactor application methods to allow for browser side HTTP requests to be sent.
Your implementation should allow the user to set a url, method, and request body.
Make sure all relevant request and response data is displayed to the User.
Suggested approach:

<Form /> component, onSubmit() sends the user’s entries to the <App /> via method sent in through props.
<App /> does a check on the request data from the form and updates the request variable in state with the url, method, and potentially the body.
<App /> has an effect hook that’s looking for changes to the request variable in state, and in response, runs the API request with the new request options from state.
<App /> updates state with the results of the API Request.
<Results /> sees the new API data as a prop and renders the JSON. The JSON data should be complete. i.e. not only include results, but also include pagination data if present (next, previous and count), if using axios.
Note: update your <Results /> component to use a 3rd party component to “pretty print” the JSON in a color-coded, user-friendly format.

