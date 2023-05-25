import React from "react";

const Blogs = () => {
  return (
    <div className="p-10">
      <p className="mb-2">
        Q:1. Tell us the differences between uncontrolled and controlled
        components. <br />
        Answer: A controlled components refer to components that have their
        state and behavior controlled by the parent component. These components
        rely on props passed down from the parent component to update their
        state and behavior. Uncontrolled components refer to components that
        manage their own state internally
      </p>
      <p className="mb-2">
        Q:2. How to validate React props using PropTypes <br />
        Answer:1.The prop can be of any data type. <br />
        2.The prop should be a Boolean. <br />
        3.The prop should be a number. <br />
        4.The prop should be a string. <br />
        5.The prop should be a function. <br />
        6.The prop should be an array.
      </p>
      <p className="mb-2">
        Q:3.Tell us the difference between nodejs and express js. <br />
        Answer: NodeJS is a framework of JavaScript which is mainly used for
        working with the backend of our application or building the backend
        using JavaScript, whereas ReactJS is a JavaScript front-end library. It
        is mainly used for building the user interface or the frontend of our
        application
      </p>
      <p>
        Q:4. What is a custom hook, and why will you create a custom hook?{" "}
        <br />
        Answer:Custom React JS hooks are reusable functions that a React JS
        software developer can use to add special and unique functionality to
        the React applications. Usually, if there is a requirement to add a
        feature, one can install a third-party library and solve the problem.
      </p>
    </div>
  );
};

export default Blogs;
