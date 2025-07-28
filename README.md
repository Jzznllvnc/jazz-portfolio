# ✦ Built using [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://motion.dev/).

© Design layout heavily inspired from: https://preview.studio.site/templates/gBRO381qDm/

### ≻ &nbsp;Getting Started Locally

To run this project on your own machine, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Jzznllvnc/jazz-portfolio.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd jazz-portfolio
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

---

### ≻ &nbsp;Contact Form Setup
The contact form uses Web3Forms. To make it work in your local environment or your own deployment, you will need to:

1. **Go to web3forms.com and get your own free access key.**
   
2. **In src/components/sections/ContactSection.js, replace the placeholder value in the handleSubmit function with your own key:**

         formData.append("access_key", "YOUR_NEW_ACCESS_KEY_HERE");

---

### ≻ &nbsp;Deploy on Vercel (or your choice)

I deployed this on [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
