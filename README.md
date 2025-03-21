# Portfolio Website

A modern and responsive portfolio website built with Next.js and Tailwind CSS.

## Features

- Responsive design that works well on all screen sizes
- Modern UI with smooth animations and transitions
- Dark mode support
- SEO-optimized with proper meta tags
- Sections for showcasing skills, projects, experience, and contact information

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository
```bash
git clone https://github.com/Vineet-Sharma1927/Portfolio
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information

1. Update the name in `app/components/Hero.js`
2. Update project details in `app/components/Projects.js`
3. Update experience details in `app/components/Experience.js`
4. Update skills in `app/components/Skills.js`
5. Update contact information in `app/components/Contact.js`
6. Update footer information in `app/components/Footer.js`

### Profile Image

1. Add your profile image to the `public` directory
2. Update the image path in `app/components/Hero.js`

### Resume

1. Add your resume PDF to the `public` directory (name it `resume.pdf`)

## Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.

1. Create a Vercel account at [vercel.com](https://vercel.com/signup)
2. Install the Vercel CLI:
```bash
npm install -g vercel
```

3. Run the following command in your project directory:
```bash
vercel
```

4. Follow the prompts to link your project to your Vercel account

### Alternative Deployment Steps

You can also deploy by connecting your GitHub repository to Vercel:

1. Push your code to GitHub
2. Log in to Vercel and click "New Project"
3. Import your repository from GitHub
4. Vercel will automatically detect that you're using Next.js and set up the build configuration
5. Click "Deploy" and your site will be live in minutes

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React](https://reactjs.org/) - JavaScript library
- [Vercel](https://vercel.com/) - Deployment platform

## License

This project is open source and available under the [MIT License](LICENSE).
