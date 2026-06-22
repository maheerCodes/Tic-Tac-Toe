<div align="center">
  <img src="./wmremove-transformed-removebg-preview.svg" alt="logo" width="70">

  <h1>Tic Tac Toe</h1>

  <h3>A sleek, animated 2-Player Tic Tac Toe game — pure HTML, CSS & JavaScript</h3>

  <!--BadgesGrid-->
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" style="text-decoration: none;"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" style="text-decoration: none;"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" style="text-decoration: none;"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"></a>
  <a href="LICENSE" style="text-decoration: none;"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT"></a>

  <br>

  <a href="https://github.com/maheerCodes/Tic-Tac-Toe/stargazers" style="text-decoration: none;"><img src="https://img.shields.io/github/stars/maheerCodes/Tic-Tac-Toe?style=flat-square&color=gold" alt="Stars"></a>
  <a href="https://github.com/maheerCodes/Tic-Tac-Toe/network/members" style="text-decoration: none;"><img src="https://img.shields.io/github/forks/maheerCodes/Tic-Tac-Toe?style=flat-square&color=blue" alt="Forks"></a>
  <a href="https://github.com/maheerCodes/Tic-Tac-Toe/issues" style="text-decoration: none;"><img src="https://img.shields.io/github/issues/maheerCodes/Tic-Tac-Toe?style=flat-square&color=red" alt="Issues"></a>
  <a href="https://github.com/maheerCodes/Tic-Tac-Toe/commits/main" style="text-decoration: none;"><img src="https://img.shields.io/github/last-commit/maheerCodes/Tic-Tac-Toe?style=flat-square&color=green" alt="Last Commit"></a>

  <p>No frameworks. No libraries. Just clean vanilla code, gradient text, glassmorphism popups, sound effects, and a custom full-page reload transition.</p>

  <!--NavigationLinks-->
  <b><a href="https://unique-tic-tac-toe.netlify.app/" style="text-decoration: none;">🌐 Live Demo</a></b> · 
  <b><a href="https://github.com/maheerCodes/Tic-Tac-Toe/issues" style="text-decoration: none;">🐛 Report Bug</a></b> · 
  <b><a href="https://github.com/maheerCodes/Tic-Tac-Toe/issues" style="text-decoration: none;">✨ Request Feature</a></b>
</div>


<br>

<div align="center">
  <img src="./Image.png" alt="Tic Tac Toe Preview" width="600">
</div>

<br>

## 📑 Table of Contents

<a href="#-features"><img src="https://shields.io" alt="Features"></a> 
<a href="#️-tech-stack"><img src="https://shields.io" alt="Tech Stack"></a> 
<a href="#-browser-support"><img src="https://shields.io" alt="Browser Support"></a> 
<a href="#-project-structure"><img src="https://shields.io" alt="Project Structure"></a> 
<a href="#-getting-started"><img src="https://shields.io" alt="Getting Started"></a> 
<a href="#️-how-to-play"><img src="https://shields.io" alt="How to Play"></a> 
<a href="#️-how-it-works-code-overview"><img src="https://shields.io" alt="How It Works"></a> 
<a href="#-customization"><img src="https://shields.io" alt="Customization"></a> 
<a href="#-faq"><img src="https://shields.io" alt="FAQ"></a> 
<a href="#️-roadmap--future-improvements"><img src="https://shields.io" alt="Roadmap"></a> 
<a href="#-contributing"><img src="https://shields.io" alt="Contributing"></a> 
<a href="#-license"><img src="https://shields.io" alt="License"></a> 
<a href="#-author"><img src="https://shields.io" alt="Author"></a>


## ✨ Features

| Icon | Description |
| :---: | :--- |
| 🎲 | **Random starting player** — X or O is randomly chosen at the start of every game |
| 🧠 | **Smart win detection** across all 8 winning patterns (rows, columns, diagonals) |
| 📏 | **Animated win-line** that draws itself across the winning combination |
| 🪟 | **Glassmorphism popups** for Win & Draw states with backdrop blur |
| 🔊 | **Sound effects** — click sound on every move, game-over sound on win/draw |
| 🌀 | **Custom reload animation** — a 3-layer color-wipe transition on title click |
| 🔄 | **One-click Reset** button to restart anytime |
| 🌈 | **Gradient-styled UI** using CSS `background-clip: text` |
| 📱 | **Fully responsive** layout built with `vmin` units |

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 — Custom Properties, Flexbox, Keyframe Animations, `backdrop-filter` |
| Logic | Vanilla JavaScript — DOM manipulation, Event Listeners |
| Audio | HTML5 Audio API |

## 🌍 Browser Support

| Chrome | Firefox | Edge | Safari |
|:---:|:---:|:---:|:---:|
| ✅ | ✅ | ✅ | ⚠️ Requires `-webkit-backdrop-filter` (already included) |

> 💡 **Note:** Built with modern CSS (`backdrop-filter`, custom properties) — use a recent browser version for the full glassmorphism effect.

## 📁 Project Structure

```text
Tic-Tac-Toe/
├── index.html                                   # Main markup & game board
├── style.css                                    # Core layout, board, gradient text, buttons
├── won.css                                      # "Win" popup styling
├── draw.css                                     # "Draw" popup styling
├── reloadAnimation.css                          # Full-page reload transition animation
├── script.js                                    # Game logic (moves, win/draw detection, reset)
├── clickSound.mp3                               # Sound played on each box click
├── gameOverSound.mp3                            # Sound played on win/draw
├── Image.png                                    # Preview image
├── LICENSE                                      # MIT License
└── wmremove-transformed-removebg-preview.svg    # Favicon / logo
```

## 🚀 Getting Started

No build tools or dependencies required.

### 1. Clone the repository

```bash
git clone https://github.com
cd Tic-Tac-Toe
```

### 2. Open it in your browser

Simply double-click `index.html`, or serve it locally for the best experience (recommended, since some browsers restrict audio on `file://` paths):

```bash
npx serve .
```

or use the **Live Server** extension in VS Code.


## 🕹️ How to Play

1. On load, the game randomly decides whether **Player X** or **Player O** goes first.
2. Players take turns clicking empty boxes on the 3×3 grid.
3. The first player to align **three of their marks** — horizontally, vertically, or diagonally — wins.
4. A win triggers an animated line across the winning combination and a **Win** popup.
5. If all 9 boxes fill up with no winner, a **Draw** popup appears.
6. Click **Start Game** in the popup, or **Reset Game**, to play again.
7. Click the **"Tic Tac Toe"** title anytime to trigger a full-page reload animation.

## ⚙️ How It Works (Code Overview)

<details>
<summary>Click to expand the function breakdown</summary>
<br>

| Function | Responsibility |
|---|---|
| `matchWinningPattern()` | Loops through 8 predefined winning patterns, compares the three relevant boxes, and if matched, renders the win-line, plays the game-over sound, and locks the board |
| `matchDrawnPattern()` | Checks if every box is filled with no winner, and shows the Draw popup if so |
| `animation1()` | Clears the board and plays a 3-layer CSS keyframe transition before calling `location.reload()` |
| Box click listener | Alternates the current player, updates the turn indicator & gradient class, plays the click sound, disables the box, then checks for win/draw |
| Restart handlers (`#stg1`, `#stg2`, `#reset-button`) | Reset board state, re-enable boxes, hide popups, and restore the turn indicator |

</details>

## 🎨 Customization

All colors are driven by CSS custom properties — re-theming is easy. Edit the `:root` block in `style.css`, `won.css`, and `draw.css`:

```css
:root {
    --borderColor: rgb(0, 139, 139);
    --textGradientFirstColor: rgba(42, 123, 155, 1);
    --textGradientSecondColor: rgba(65, 161, 144, 1);
    --textGradientThirdColor: rgba(87, 199, 133, 1);
    --textGradientForthColor: rgba(56, 240, 0, 1);
    --backgroundImageCenterColor: rgba(63, 251, 235, 1);
    --backgroundImageOutsideColor: rgba(153, 255, 189, 1);
}
```

To swap sound effects, replace `clickSound.mp3` and `gameOverSound.mp3` with your own files (keep the same filenames, or update the paths in `script.js`).

## ❓ FAQ

<details>
<summary><b>Can I play against a computer/AI?</b></summary>
<br>
Not yet — currently it's 2-player only (same device). An AI opponent using the Minimax algorithm is on the roadmap.
</details>

<details>
<summary><b>The sound isn't playing — why?</b></summary>
<br>
Some browsers block audio when opening files directly via <code>file://</code>. Serve the project locally (e.g. <code>npx serve .</code> or VS Code's Live Server) instead of double-clicking <code>index.html</code>.
</details>

<details>
<summary><b>Why does clicking the title reload the whole page?</b></summary>
<br>
It's an intentional Easter egg — it plays a 3-layer color-wipe transition (<code>animation1()</code> in <code>script.js</code>) and then refreshes the board for a fresh start.
</details>

## 🗺️ Roadmap / Future Improvements

- [ ] Single-player mode vs. an AI opponent (Minimax algorithm)
- [ ] Scoreboard to track wins across multiple rounds
- [ ] Mute/unmute toggle for sound effects
- [ ] Dark mode theme
- [ ] Touch/mobile gesture polish

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sheikh Mohammad Ali Maheer**

<br>

<!--GitHubBadgewithCaseSensitivity&NoUnderline-->
<a href="https://github.com/maheerCodes" style="text-decoration: none;"><img src="https://shields.io" alt="GitHub"></a>

<div align="center">
  <br>

  <h3>⭐ If you liked this project, consider giving it a star!</h3>

  <p>Made with ❤️ using HTML, CSS & JavaScript</p>
</div>
