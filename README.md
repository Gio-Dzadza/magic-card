 # **Magic Match** 🧙‍♂️🎴
 
 ## **🧐 About**

 Magic Match is a fun and interactive game that challenges players to use their memory skills to match pairs of magical objects. The game is built with React and uses state management to keep track of the game board and user choices.

 ### **How to Play :game_die:**
- Click on two cards to flip them over.
- If the cards match, they'll stay flipped over and you'll earn points.
- If the cards don't match, they'll flip back over and you can try again.
- The game ends when all cards have been matched.

 ### Features :sparkles:
- Random card shuffling using the Fisher-Yates algorithm.
- Keeps track of the number of turns taken.
- Allows users to enter their name and keeps track of their points in a leaderboard.
- Fully responsive design with CSS Grid and Flexbox.

 ###**🔧Technologies Used :computer:**
- React
- CSS Grid
- Flexbox
- JavaScript
- HTML
- CSS

 🚀 Getting Started
 To play the game, simply clone the repo and run npm install followed by npm start. This will start the game on your local machine.

 Installation and Setup :gear:
- Clone the repository: git clone https://github.com/yourusername/magic-match.git
- Install dependencies: npm install
- Run the app: npm start
- Open http://localhost:3000 to view it in the browser.

 Feel free to use, modify, and distribute this code as you like. Don't forget to give credit where credit is due!


 Some more detailed description
 Magic Match Card Game
 
 This is a web-based memory card game developed using React. The objective of the game is to match all pairs of cards with the same image in the fewest possible turns. The game starts with a set of cards arranged face-down. The player flips two cards each turn, trying to find a matching pair. If the two flipped cards match, they remain face-up and are removed from play. If they don't match, they are flipped face-down again and the player tries again on their next turn. The game ends when all pairs have been matched.

 The game has the following features:

- The cards are randomly shuffled each time the game starts, ensuring a unique experience every time.
- The player can input their name to personalize the game and have their score tracked in a leaderboard.
- The number of turns taken to complete the game is recorded and displayed at the end of the game.
- The leaderboard displays the top 10 players and their scores in ascending order.

 This project uses two of the most commonly used hooks in React: 

- useState 🎣🔢
- useEffect 🎣🔍

 🧮useState is used to manage state within the component. It allows us to declare a state variable and a function to update that variable. In this project, it is used to keep track of the state of the game such as the cards, the turns, the choices, the disabled state, and the end game state. For example, we use useState to declare the cards state variable and the setCards function to update it.

 🎨useEffect is used to perform side effects within a functional component. It allows us to run some code after the component is mounted, or when a specific variable changes. In this project, we use useEffect to shuffle the cards on component mount and to check if the game is over. We also use it to handle the logic of comparing two choices and to update the points after the game is over.

 This project was developed by Giorgi Dzadzamia as a learning exercise in React.
