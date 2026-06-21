---

## 🚀 Getting Started

No build tools or dependencies required.

**1. Clone the repository**
```bash
git clone https://github.com/maheerCodes/Tic-Tac-Toe.git
cd Tic-Tac-Toe
```

**2. Open it in your browser**
- Simply double-click `index.html`, **or**
- Serve it locally for the best experience (recommended — some browsers restrict audio on `file://`):
```bash
npx serve .
```
or use the **Live Server** extension in VS Code.

---

## 🕹️ How to Play

1. On load, the game randomly decides whether **Player X** or **Player O** goes first.
2. Players take turns clicking empty boxes on the 3×3 grid.
3. The first player to align **three of their marks** — horizontally, vertically, or diagonally — wins.
4. A win triggers an animated line across the winning combination and a **Win** popup.
5. If all 9 boxes fill up with no winner, a **Draw** popup appears.
6. Click **Start Game** in the popup, or **Reset Game**, to play again.
7. Click the **"Tic Tac Toe"** title anytime to trigger a full-page reload animation.

---

## ⚙️ How It Works (Code Overview)

| Function | Responsibility |
|---|---|
| `matchWinningPattern()` | Loops through 8 predefined winning patterns, compares the three relevant boxes, and if matched, renders the win-line, plays the game-over sound, and locks the board |
| `matchDrawnPattern()` | Checks if every box is filled with no winner, and shows the Draw popup if so |
| `animation1()` | Clears the board and plays a 3-layer CSS keyframe transition before calling `location.reload()` |
| Box click listener | Alternates the current player, updates the turn indicator & gradient class, plays the click sound, disables the box, then checks for win/draw |
| Restart handlers (`#stg1`, `#stg2`, `#reset-button`) | Reset board state, re-enable boxes, hide popups, and restore the turn indicator |

---

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

---

## 🗺️ Roadmap / Future Improvements

- [ ] Single-player mode vs. an AI opponent (Minimax algorithm)
- [ ] Scoreboard to track wins across multiple rounds
- [ ] Mute/unmute toggle for sound effects
- [ ] Dark mode theme
- [ ] Touch/mobile gesture polish

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute it. *(Add a `LICENSE` file to the repo root to make this official.)*

---

## 👤 Author

**Maheer**
GitHub: [@maheerCodes](https://github.com/maheerCodes)

---

<div align="center">

### ⭐ If you liked this project, consider giving it a star!

Made with ❤️ using HTML, CSS & JavaScript

</div>