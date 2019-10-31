# Challenge Generator

A challenge generator For Binding Of Isaac - Afterbirth.
A live version can be found hosted [here](https://josh-cook.github.io/challenge-generator/).

Challenges are generated using a seed, which can either be based on the current
date or can be a fixed string passed in via the URL.

The generator provides the ability to generate new fixed seeds and share them via the clipboard.

## Building the generator

 1. Clone the project:
     ```Shell
     $ git clone https://github.com/josh-cook/challenge-generator.git
     ```
 
 2. Install the project's dependencies:
     ```Shell
     $ npm install
     ```

 3. Build the project:
    ```Shell
    $ npm run build
    ```
    You should now have a built version of the challenge generator in `dist`.
    
## Working on the generator

 1. Clone the project:
     ```Shell
     $ git clone https://github.com/josh-cook/challenge-generator.git
     ```
 
 2. Install the project's dependencies:
     ```Shell
     $ npm install
     ```

 3. Start the project's development server:
    ```Shell
    $ npm run start
    ```
    You should now see output like the following:
    
    ![Build image](/readme-assets/build-image.png)

    You can now visit http://localhost:1234 to view the app.
    
Note that the challenge generator follows the [prettier](https://prettier.io/) formatting style.