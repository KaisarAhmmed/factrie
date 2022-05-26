import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

const Blog = () => {
    return (
        <>
            <Breadcrumb pageTitle={"Blog"} />
            <div className="container py-20 mx-auto">
                <h2 className="text-xl font-semibold mb-4">
                    1. How will you improve the performance of a React
                    Application?
                </h2>
                <p className="text-[#777] mb-8">
                    Optimization is the number one thing that is on the mind of
                    every dev when building any software, especially web apps.
                    JS frameworks like Angular, React and others, have included
                    some awesome configurations and features. Here, I’ll review
                    the features and tricks that will help you optimize your
                    app’s performance. we can use useMemo.
                </p>
                <h2 className="text-xl font-semibold mb-4">
                    2. What are the different ways to manage a state in a React
                    application?
                </h2>
                <p className="text-[#777] mb-8">
                    Managing state is arguably the hardest part of any
                    application. It's why there are so many state management
                    libraries available and more coming around every day (and
                    even some built on top of others... There are hundreds of
                    "easier redux" abstractions on npm). Despite the fact that
                    state management is a hard problem, I would suggest that one
                    of the things that makes it so difficult is that we often
                    over-engineer our solution to the problem.
                </p>
                <h2 className="text-xl font-semibold mb-4">
                    3. How does prototypical inheritance work?
                </h2>
                <p className="text-[#777] mb-8">
                    JavaScript is a prototype-based, Object Oriented programming
                    language. After the ES6 updates, JavaScript allowed for
                    “prototypal inheritance”, meaning that objects and methods
                    can be shared, extended, and copied. Sharing amid objects
                    makes for easy inheritance of structure (data fields),
                    behavior (functions / methods), and state (data values).
                    JavaScript is the most common of the prototype-capable
                    languages, and its capabilities are relatively unique. When
                    used appropriately, prototypical inheritance in JavaScript
                    is a powerful tool that can save hours of coding.
                </p>
                <h2 className="text-xl font-semibold mb-4">
                    4. You have an array of products. Each product has a name,
                    price, description, etc. How will you implement a search to
                    find products by name?
                </h2>
                <p className="text-[#777] mb-8">
                    I will use input onChange function to get input data and use
                    that state data to search from that array. We can use array
                    filter or find to get search result.
                </p>
                <h2 className="text-xl font-semibold mb-4">
                    5. What is a unit test? Why should write unit tests?
                </h2>
                <p className="text-[#777] mb-8">
                    Unit testing is a type of software testing where individual
                    units or software components are tested. Its purpose is to
                    validate that each unit of code performs as expected. A unit
                    can be anything you want it to be — a line of code, a
                    method, or a class. <br></br>
                    Unit test cases should be independent so that if there are
                    any changes required, they can easily be made without the
                    other ones being affected. Only one piece of code should be
                    tested at a time, and there should be clear naming
                    conventions for them in order to make the process much
                    clearer and simpler.
                </p>
            </div>
        </>
    );
};

export default Blog;
