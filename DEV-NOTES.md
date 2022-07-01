This is a step-by step dev log of the work I performed as I went along creating each project. The only commands I will ommit are the `git` commands.

# Project 3

1. `npx create-react-app 3-css-variables`
2. `cd 3-css-variables`
3. `npm audit fix`
4. `npm audit fix --force` - There were 6 high severity vulnerabilities. It told me there was a fix available if I ran this.
5. Ran it _again_ because now there were 36 high severity vulnerabilities. Which put me back right where I was at the beginning, with 6 in the exact same original files I started with. Moving on.
6. `npm start`
7. copied the following HTML contents of /starter-files/03 - CSS Variables/index-START.html into /3-css-variables/src/App.js:

```
  <h2>Update CSS Variables with <span class='hl'>JS</span></h2>

  <div class="controls">
    <label for="spacing">Spacing:</label>
    <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">

    <label for="blur">Blur:</label>
    <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">

    <label for="base">Base Color</label>
    <input id="base" type="color" name="base" value="#ffc600">
  </div>

  <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500">
```

8. `class` -> `className`
9. Closed `input` and `img` tags
10. Removed unused `logo` import
11. Added `alt` attribute to `img` tag
12. Replaced contents of `App.css` with the following:

```
body {
    text-align: center;
    background: #193549;
    color: white;
    font-family: "helvetica neue", sans-serif;
    font-weight: 100;
    font-size: 50px;
}

.controls {
    margin-bottom: 50px;
}

input {
    width: 100px;
}
```

13. Added Typescript support with `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`. Turns out I should have actually used `npx create-react-app my-app --template typescript` from the get-go
14. Added Redux `npm install react-redux`
15. Added `<Provider>` wrapper [from here](https://react-redux.js.org/introduction/getting-started#api-overview)
16. `App.js` -> `App.tsx`
17. `index.js` -> `index.tsx`
18. Copied `tsconfig.json` from [react-redux-typescript-guide playground](https://github.com/piotrwitek/react-redux-typescript-guide/blob/master/playground/tsconfig.json)
19. Modified ReactDOM usage in `index.tsx`.
20. Added an `Input`, `RangeInput`, and `ColorInput` inside of `App.tsx` (with Types)
