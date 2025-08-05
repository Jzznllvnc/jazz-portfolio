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
    cd (name of your project folder)
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

The contact form is powered by a custom Next.js API route that uses **Nodemailer** to send emails via a Gmail account. To make it work, you need to set up environment variables.

1.  **Create an environment file:**

    In the root of your project, create a file named `.env.local`.

2.  **Add your credentials to the file:**

    Copy the following into your `.env.local` file and replace the placeholders with your actual Gmail address and a Google App Password.

    ```bash
    GMAIL_EMAIL=your_email@gmail.com
    GMAIL_APP_PASSWORD=your_16_digit_app_password
    ```

3.  **How to get a Google App Password:**

    * Go to your Google Account at [myaccount.google.com](https://myaccount.google.com).
    * Navigate to the **Security** tab.
    * Make sure **2-Step Verification** is turned on. You cannot create App Passwords without it.
    * Click on **App passwords** (you may need to sign in again).
    * Under "Select app," choose **Other (Custom name)**, name it something like "Portfolio Contact Form," and click **Generate**.
    * Google will give you a 16-digit password. Copy this password (without spaces) and paste it as the value for `GMAIL_APP_PASSWORD`.

The backend logic that handles this form is located in `app/api/contact/route.js`.

---

### ≻ &nbsp;Deploy on Vercel (or your choice)

I deployed this on [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
