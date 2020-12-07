# Moneyhub Tech Test - Property Details

This is a prototype of a new feature in Moneyhub.
Customers will now be able to receive automatic value updates on their properties
and we would like to enhance the experience by summarizing their changes

This prototype is built using NextJS.

## Requirements

We would like you to:

- Add a "Valuation changes" section to the page, using `mock.png` as a rough guide
  - sincePurchase is calculated by `recentValuation - originalPurchasePrice`
  - sincePurchasePercentage is calculated by `sincePurchase / originalPurchasePrice * 100`
  - annualAppreciation is calulcated by `sincePurchasePercentage / number of years since purchase`
- Ensure markup is semantic and accessible
- Consider opportunities to reduce repetition in the code and increase legibility
- Make effective use of Git

We prefer:

- Functional React components
- `styled-components` for styling
- `prop-types` for typechecking

### API

Details of a property are located in the API at `/api/account`, use this endpoint to populate the app with data.
Someone started implementing this feature with a `useEffect` hook, but you should use whichever method you're most comfortable with.

### Notes

Most of your work should take place inside the `components/` directory.

We're more interested in seeing how you approach the problem than seeing a perfect example, try to spend around **one hour** working on it.

Some questions we'd like you to consider around this task.

1. Given more time, were there other changes you would have liked to make?
2. What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.

On completion, email a link to your repository to your contact at Moneyhub, and ensure it is publicly accessible.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

You can start by looking at `components/detail`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
