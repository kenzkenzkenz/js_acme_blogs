// 1. createElemWithText
// a. Receives up to 3 parameters
// b. 1st parameter is the HTML element string name to be created (h1, p, button, etc)
// c. Set a default value for the 1st parameter to “p”
// d. 2nd parameter is the textContent of the element to be created
// e. Default value of the 2nd parameter is “”
// f. 3rd parameter is a className if one is to be applied (optional)
// g. Use document.createElement() to create the requested HTML element
// h. Set the other desired element attributes.
// i. Return the created element.
function createElemWithText(elementName = "p", textContent = "", className){
    const myElement = document.createElement(elementName);//create an element
    myElement.id = "myElem"; //name the id
    myElement.textContent = textContent;//assign the content
    if (className) myElement.className = className;//assign className if present
    return myElement;//return the element
    }
    
  // 2. createSelectOptions
  // a. Test users JSON data available here: https://jsonplaceholder.typicode.com/users
  // b. For testing (not in function) you may want to define users with the test data.
  // c. Receives users JSON data as a parameter
  // d. Returns undefined if no parameter received
  // e. Loops through the users data
  // f. Creates an option element for each user with document.createElement()
  // g. Assigns the user.id to the option.value
  // h. Assigns the user.name to the option.textContent
  // i. Return an array of options elements

  const users = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net"
      }
    ];


  function createSelectOptions(jsonData){

    if (jsonData === undefined) return;//deal with initial conditions
    
    let optionArray = []; //create an array
        
      //loop thru the data
      jsonData.forEach(() => { //begin loop
        let option = document.createElement("option"); //create options element
        option.value = users.id;
        option.textContent = users.name;
        optionArray.push(option.value, option.textContent);
      });
    
    return optionArray; //return the array
  }
    createSelectOptions(users);
    
  // 3. toggleCommentSection
  // a. Receives a postId as the parameter
  // b. Selects the section element with the data-post-id attribute equal to the postId
  // received as a parameter
  // c. Use code to verify the section exists before attempting to access the classList
  // property
  // d. At this point in your code, the section will not exist. You can create one to test if
  // desired.
  // e. Toggles the class 'hide' on the section element
  // f. Return the section element
  function toggleCommentSection(postId){
    
    //deal with initial conditions
    if (postId === undefined) return;
    if (postId != postId.id) return null;
    
    const section = document.querySelector(`section[data-post-id='${postId}']`); //define section

    if (section){ //verify that section is not null...
        section.classList.toggle("hide"); //...and toggle the hide class
    }
    
    return section; //????
  }
  
  // 4. toggleCommentButton
  // a. Receives a postId as the parameter
  // b. Selects the button with the data-post-id attribute equal to the postId received as a
  // parameter
  // c. If the button textContent is 'Show Comments' switch textContent to 'Hide
  // Comments'
  // d. If the button textContent is 'Hide Comments' switch textContent to 'Show
  // Comments'
  // e. Suggestion (not required) for above: try a ternary statement
  // f. Return the button element
  function toggleCommentButton(postId){
    
    //deal with initial conditions
    if (postId === undefined) return;
    if (postId != postId.id) return null;

    const button = document.querySelector(`button[data-post-id='${postId}']`); //name the button

    //define the messages
    const hideComments = "Hide Comments";
    const showComments = "Show Comments";
    
    //toggle the comments
    if (button.textContent == showComments) {
      button.textContent = hideComments; //swap to hide
    } else {
      button.textContent = showComments; //change it back
    }
    
    return button; //return the button element
  }
  
  // 5. deleteChildElements
  // a. Receives a parentElement as a parameter
  // b. Define a child variable as parentElement.lastElementChild
  // c. While the child exists...(use a while loop)
  // d. Use parentElement.removeChild to remove the child in the loop
  // e. Reassign child to parentElement.lastElementChild in the loop
  // f. Return the parentElement
  function deleteChildElements(parentElement){
    
    if(!parentElement?.tagName) return; //deal with initial conditions

    let child = parentElement.lastElementChild; //define child
    
    //while loop
    while (child){ //while child exists...
      parentElement.removeChild(child); //...remove the child
      child = parentElement.lastElementChild; //reassign child
    }

    return parentElement;
  }

//   NOTE: The above functions had no dependency on other functions. They were very
//   self-contained which is ideal. That is not always possible though. We will try to limit
//   dependencies as we go. The next several functions have small dependencies.

// 6. addButtonListeners
// a. Selects all buttons nested inside the main element
// b. If buttons exist:
// c. Loop through the NodeList of buttons
// d. Gets the postId from button.dataset.postId
// e. Adds a click event listener to each button (reference addEventListener)
// f. The listener calls an anonymous function (see cheatsheet)
// g. Inside the anonymous function: the function toggleComments is called with the
// event and postId as parameters
// h. Return the button elements which were selected
// i. You may want to define an empty toggleComments function for now. Not all tests
// will pass for addButtonListeners until toggleComments exists. I recommend
// waiting on the logic inside the toggleComments function until we get there.
function addButtonListeners(){

  //const body = document.querySelectorAll("body"); //identify body
  const main = document.getElementById("main"); //identify main
  const button = main.getElementsByTagName("button"); //identify buttons
  
  //while loop
  if (button){ //if buttons exist...

    button.forEach(() => {
        const postId = document.querySelector("button.dataset.postId");
        //let postId = button.dataset.postId;
        button.addEventListener("click", function (e) {toggleComments(e, postId)},false);
    });
}

  return button;
}

// 7. removeButtonListeners
// a. Selects all buttons nested inside the main element
// b. Loops through the NodeList of buttons
// c. Gets the postId from button.dataset.id
// d. Removes the click event listener from each button (reference
// removeEventListener)
// e. Refer to the addButtonListeners function as this should be nearly identical
// f. Return the button elements which were selected
function removeButtonListeners(){
    const main = document.getElementById("main");
    const button = main.querySelector("button"); //identify buttons

    //loop thru the data
    button.forEach((obj) => { //begin loop
        const postId = button.dataset.id;
        removeEventListener("click", function (e) {toggleComments(e, postId)},false);
    });
    return button;

}

// 8. createComments
// a. Depends on the createElemWithText function we created
// b. Receives JSON comments data as a parameter
// c. Creates a fragment element with document.createDocumentFragment()
// d. Loop through the comments
// e. For each comment do the following:
// f. Create an article element with document.createElement()
// g. Create an h3 element with createElemWithText('h3', comment.name)
// h. Create an paragraph element with createElemWithText('p', comment.body)
// i. Create an paragraph element with createElemWithText('p', `From:
// ${comment.email}`)
// j. Append the h3 and paragraphs to the article element (see cheatsheet)
// k. Append the article element to the fragment
// l. Return the fragment element
function createComments(jsonComments){

    if (jsonComments === undefined) return; //deal with initial conditions

    const fragment = document.createDocumentFragment();//create fragment

    //loop thru the data
    jsonComments.forEach(() => { //begin loop
        const article = document.createElement("article"); //create article
        const h3 = createElemWithText('h3', jsonComments.name); //create h3
        const para1 = createElemWithText('p', jsonComments.body); //create para1
        const para2 = createElemWithText('p', `From: ${jsonComments.email}`); //create para2

        article.append(h3, para1, para2); //append the elements to article
        fragment.append(article); //append article to fragment

    });

    return fragment;
}

// 9. populateSelectMenu
// a. Depends on the createSelectOptions function we created
// b. Receives the users JSON data as a parameter
// c. Selects the #selectMenu element by id
// d. Passes the users JSON data to createSelectOptions()
// e. Receives an array of option elements from createSelectOptions
// f. Loops through the options elements and appends each option element to the
// select menu
// g. Return the selectMenu element
function populateSelectMenu(jsonData){

    if (jsonData === undefined) return; //deal with initial conditions

    const selectMenu = document.querySelectorAll("#selectMenu");//select selectMenu
    createSelectOptions(jsonData);//call the other function

    optionArray.forEach(() =>{ //loop thru option array
        selectMenu.append(option);//append the option to select menu
    });

    return selectMenu;
}

// NOTE: The next functions use Async / Await to request data from an API. We cover this in
// Week 13. I do not recommend proceeding beyond this point until you have completed the
// learning module for Week 13.


// 10. getUsers
// a. Fetches users data from: https://jsonplaceholder.typicode.com/ (look at
// Resources section)
// b. Should be an async function
// c. Should utilize a try / catch block
// d. Uses the fetch API to request all users
// e. Await the users data response
// f. Return the JSON data
const getUsers = async () => {//start the async function
    const userData = await fetch (//define the user data
        "https://jsonplaceholder.typicode.com/users");//data url

        try {//start try block
            const allUsers = await fetch(userData);
            const data = await response.json();
        } catch (err){//start catch block
            //empty
        }

        return await userData.json();//return the json data
}


// 11. getUserPosts
// a. Receives a user id as a parameter
// b. Fetches post data for a specific user id from:
// https://jsonplaceholder.typicode.com/ (look at Routes section)
// c. Should be an async function
// d. Should utilize a try / catch block
// e. Uses the fetch API to request all users
// f. Await the users data response
// g. Return the JSON data
const getUserPosts = async (userId) => {//start async function

    if (userId === undefined) return;//deal with initial conditions

    const postData = await fetch(//define post data
        "https://jsonplaceholder.typicode.com/posts");//data url

        try {//start try block
            const allUsers = await fetch(postData);//define all users
            const data = await response.json();//define data response
        } catch (err){//start catch block
            //empty
        }

        return await postData.json();//return json post data
}

// 12. getUser
// a. Receives a user id as a parameter
// b. Fetches data for a specific user id from: https://jsonplaceholder.typicode.com/
// (look at Routes section)
// c. Should be an async function
// d. Should utilize a try / catch block
// e. Uses the fetch API to request the user
// f. Await the user data response
// g. Return the JSON data
const getUser = async (userId) => {//start async function

    if (userId === undefined) return;//deal with initial conditions

    const data = await fetch(//define data
        "https://jsonplaceholder.typicode.com/posts");//data url

        try {//start try block
            const user = await fetch(data);//define user
            const userData = await response.json();//define user data response
        } catch (err){//start catch block
            //empty
        }

        return await data.json();//return json data
}

// 13. getPostComments
// a. Receives a post id as a parameter
// b. Fetches comments for a specific post id from:
// https://jsonplaceholder.typicode.com/ (look at Routes section)
// c. Should be an async function
// d. Should utilize a try / catch block
// e. Uses the fetch API to request all users
// f. Await the users data response
// g. Return the JSON data
const getPostComments = async (postId) => {//start async function

    if (postId === undefined) return;//deal with initial conditions

    const comments = await fetch(//define comments
        "https://jsonplaceholder.typicode.com/posts/1/comments");//comments url

        try {//start try block
            const allUsers = await fetch(comments);//define all users
            const data = await response.json();//define data response
        } catch (err){//start catch block
            //empty
        }

        return await comments.json(); //return the json data
}


// NOTE: The next functions will depend on the async API data functions we just created.
// Therefore, these functions will also need to be async. When they call the API functions, they will
// need to await data from those functions.



// 14. displayComments
// a. Dependencies: getPostComments, createComments
// b. Is an async function
// c. Receives a postId as a parameter
// d. Creates a section element with document.createElement()
// e. Sets an attribute on the section element with section.dataset.postId
// f. Adds the classes 'comments' and 'hide' to the section element
// g. Creates a variable comments equal to the result of await
// getPostComments(postId);
// h. Creates a variable named fragment equal to createComments(comments)
// i. Append the fragment to the section
// j. Return the section element
const displayComments = async (postId) => {

    if (postId === undefined) return;//deal with initial conditions

    const section = document.createElement("section");//create section element

    section.dataset.postId = postId //set the attribute

    section.classList.add('comments', 'hide');//add comments and hide to section classes
    
    const comments =  await getPostComments(postId);//create comments
    
    const fragment = createComments(comments);//create fragment
    
    section.append(fragment);//append fragment to section
   
    return section;//return section element
}



// 15. createPosts
// a. Dependencies: createElemWithText, getUser, displayComments
// b. Is an async function
// c. Receives posts JSON data as a parameter
// d. Create a fragment element with document.createDocumentFragment()
// e. Loops through the posts data
// f. For each post do the following:
// g. Create an article element with document.createElement()
// h. Create an h2 element with the post title
// i. Create an p element with the post body
// j. Create another p element with text of `Post ID: ${post.id}`
// k. Define an author variable equal to the result of await getUser(post.userId)
// l. Create another p element with text of `Author: ${author.name} with
// ${author.company.name}`
// m. Create another p element with the author’s company catch phrase.
// n. Create a button with the text 'Show Comments'
// o. Set an attribute on the button with button.dataset.postId = post.id
// p. Append the h2, paragraphs, button, and section elements you have created to
// the article element.
// q. Create a variable named section equal to the result of await
// displayComments(post.id);
// r. Append the section element to the article element
// s. After the loop completes, append the article element to the fragment
// t. Return the fragment element
const createPosts = async (jsonPosts) => {

    if (jsonPosts === undefined) return;//deal with initial conditions

    else{
        const fragment = document.createDocumentFragment();//create fragment element
        for(let i = 0; i < jsonPosts.length; i++){//start for loop
            let post = jsonPosts[i];

            const article = document.createElement("article");//create article element
            const h2 = document.createElement("h2");
            const p1 = document.createElement("p1");
            const p2 = document.createElement("p2", `Post ID: ${post.id}`);

            const author = getUser(post.userId);

            const p3 = document.createElement("p3", `Author: ${author.name}`); ///not sure about this
            const p4 = document.createElement("p4", author.company.catchPhrase);////catchphrase???

            const button = document.createElemWithText('Show Comments');
            button.dataset.postId = post.id;

            article.append(h2, p1, p2, p3, p4, button, author);

            const section = displayComments(post.id);

            article.append(section);
        }
        fragment.append(article);
        return fragment;
    }

}

// 16. displayPosts
// a. Dependencies: createPosts, createElemWithText
// b. Is an async function
// c. Receives posts data as a parameter
// d. Selects the main element
// e. Defines a variable named element that is equal to:
// i. IF posts exist: the element returned from await createPosts(posts)
// ii. IF post data does not exist: create a paragraph element that is identical to
// the default paragraph found in the html file.
// iii. Optional suggestion: use a ternary for this conditional
// f. Appends the element to the main element
// g. Returns the element variable
const displayPosts = async (posts) => {

    const main = document.querySelector("main"); //select main
    
    if (posts) {
        const main = createPosts(posts);
    }
    else {
        const para = document.getElementById("p"); //default para in html?????
    }
    main.append(para);
    return main;
}


// NOTE: This is the last group of functions. I call them “procedural functions” because they exist
// to pull the other functions together in an order that allows the web app to function as it should.
// This means their sole purpose is to call dependencies with the correct data in the proper order.


// 17. toggleComments
// a. Dependencies: toggleCommentSection, toggleCommentButton
// b. Receives 2 parameters: (see addButtonListeners function description)
// i. The event from the click event listener is the 1st param
// ii. Receives a postId as the 2nd parameter
// c. Sets event.target.listener = true (I need this for testing to be accurate)
// d. Passes the postId parameter to toggleCommentSection()
// e. toggleCommentSection result is a section element
// f. Passes the postId parameter to toggleCommentButton()
// g. toggleCommentButton result is a button
// h. Return an array containing the section element returned from
// toggleCommentSection and the button element returned from
// toggleCommentButton: [section, button]
function toggleComments(){

}

// 18. refreshPosts
// a. Dependencies: removeButtonListeners, deleteChildElements, displayPosts,
// addButtonListeners
// b. Is an async function
// c. Receives posts JSON data as a parameter
// d. Call removeButtonListeners
// e. Result of removeButtonListeners is the buttons returned from this function
// f. Call deleteChildElements with the main element passed in as the parameter
// g. Result of deleteChildElements is the return of the main element
// h. Passes posts JSON data to displayPosts and awaits completion
// i. Result of displayPosts is a document fragment
// j. Call addButtonListeners
// k. Result of addButtonListeners is the buttons returned from this function
// l. Return an array of the results from the functions called: [removeButtons, main,
// fragment, addButtons]
const refreshPosts = async (jsonPosts) => {

}


// 19. selectMenuChangeEventHandler
// a. Dependencies: getUserPosts, refreshPosts
// b. Should be an async function
// c. Automatically receives the event as a parameter (see cheatsheet)
// d. Defines userId = event.target.value || 1; (see cheatsheet)
// e. Passes the userId parameter to await getUserPosts
// f. Result is the posts JSON data
// g. Passes the posts JSON data to await refreshPosts
// h. Result is the refreshPostsArray
// i. Return an array with the userId, posts and the array returned from refreshPosts:
// [userId, posts, refreshPostsArray]
const selectMenuChangeEventHandler = async () => {

}


// 20. initPage
// a. Dependencies: getUsers, populateSelectMenu
// b. Should be an async function
// c. No parameters.
// d. Call await getUsers
// e. Result is the users JSON data
// f. Passes the users JSON data to the populateSelectMenu function
// g. Result is the select element returned from populateSelectMenu
// h. Return an array with users JSON data from getUsers and the select element
// result from populateSelectMenu: [users, select]
const initPage = async () => {

}


// 21. initApp
// a. Dependencies: initPage, selectMenuChangeEventHandler
// b. Call the initPage() function.
// c. Select the #selectMenu element by id
// d. Add an event listener to the #selectMenu for the “change” event
// e. The event listener should call selectMenuChangeEventHandler when the change
// event fires for the #selectMenu
function initApp() {

}


// f. NOTE: All of the above needs to be correct for you app to function correctly.
// However, I can only test if the initApp function exists. It does not return anything.
// NOTE: There is one last step to get your app to function correctly. I cannot test for this, but you
// must apply it to call the script into action.


// *** This must be underneath the definition of initApp in your file.
// 1. Add an event listener to the document.
// 2. Listen for the “DOMContentLoaded” event.
// 3. Put initApp in the listener as the event handler function.
// 4. This will call initApp after the DOM content has loaded and your app will be started.