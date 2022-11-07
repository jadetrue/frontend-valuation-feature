# Moneyhub Tech Test

## 📝 Requirements

We would like you to:

---

**Required**: Add a "Valuation changes" section to the page. `design-mock-up.png` has been provided as a design reference for the page and `detail-design-mock-up.png` shows the specific feature to be added, including how it is styled responsively. Make use of existing fonts and styles to match the look and feel of the existing app rather than trying to match the mock up exactly.

```
 sincePurchase = `recentValuation - originalPurchasePrice`
 sincePurchasePercentage = `sincePurchase / originalPurchasePrice * 100`
 annualAppreciation =`sincePurchasePercentage / number of years since purchase`
 colours used for the positive change in the image are #c2f7e1 and #006b57
```

Consider what other data this component could take and how that might affect your theming and solution

Consider opportunities to reduce repetition in the code and increase legibility

-   This could be creating new components, simplifying existing ones, extracting helper function to simplify code or styling
-   Show us what you can do and implement a few of these if you have time

We also ask that you update the readme with answers to the following questions

1. Given more time, what other changes you would have liked to make?
2. What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.

---

**Optional**: If you have time, show us some more by fetching the data from the api

-   Currently the property data is hardcoded in the component, but it is also avaible via a Next.js api route
-   Details of a property are located in the API at `/api/account`, use this endpoint to populate the app with data
-   Use whichever method or library you are comfortable with to fetch the data

---

Try to:

-   Ensure markup is semantic and accessible
-   Make use of a centralised theme
-   Make effective use of Git

We prefer:

-   Functional React components
-   `styled-components` for styling
-   `prop-types` for typechecking

---

**IMPORTANT**

Most of your work should take place inside the `components/` and `modules/` directory. There are some example components and styles available and the theme is defined in `theme/`. This task has been mocked up in Next.js to provide a full working environment and as such shouldn't be taken as a _complete_ application. We are interested in assessing your React frontend skills and are not testing your knowledge of Next.js, you should not need to make any changes in the `pages/` directory.

---

## 📸 Screenshots

![image](https://github.com/jadetrue/frontend-valuation-feature/blob/main/public/screencapture.png?raw=true)

---

## ❓Questions

1. Given more time, what other changes you would have liked to make?<br />
   If I had more time, I would have loved to have added some kind of animation for this feature, maybe some kind of loading state whilst the information is being calculated, for example.

2. What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.<br />
   It would be nice to have a negative and neutral label. So the label component would likely have 3 different states "positive", "neutral" and "negative" depending on the number/calculation.

---

## 🎨 Mock designs

![image](https://github.com/jadetrue/frontend-valuation-feature/blob/main/design-mock-up.png?raw=true)

---

## 🧰 Tools

-   [NextJS](https://nextjs.org/)

---

## ✍🏻 Author

-   GitHub - [@jadetrue](https://github.com/jadetrue/)
