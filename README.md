##Your Challenge
Reflection is a common utility in Object Oriented languages for inspecting classes and deriving information about what properties/methods they expose and other classes they inherit from. We will be writing our own JavaScript reflector today!

We are going to write a simple utility that will inspect a given object, and tell us about the object and it's inheritance chain.

###Your Tasks
1. Create 3 classes:
  * User
  * GroupUser
  * SuperUser
2. Create a number of methods on the prototype  of each class and create the following inheritance:
  * GroupUser inherits from User
  * SuperUser inherits from GroupUser
3. Write a function called **reflector** that takes in an instance of an object and use `console.log()` to print out the name of the current class, and the methods and properties that belong to only that class.
4. If this class inherits from another class, you should then repeat for each level of inheritance all the way up the prototype chain until you can't go any further.
5. Don't forget to create this as a repository and push to your GitHub account with good naming convention.

###Hints
1. One method that we haven't specifically covered that will be useful to completing the challenge is `Object.getPrototypeOf()`
2. The `constructor` property also has a name property. It might be useful.
2. This is probably a good use case of......recursion! :D

###Stretch Goals
Create your function to work whether it takes in an instance of a class, or a reference to the constructor function by name.