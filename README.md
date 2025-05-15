# Modern Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, JavaScript, and Bootstrap. Features a clean design, dark/light theme toggle, and smooth animations.

## Features

- 🌓 Dark/Light theme toggle with local storage persistence
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🎯 Interactive UI elements
- 📝 Contact form with validation
- 🖼️ Project showcase with modals
- 📊 Animated skill bars
- 🔍 SEO friendly
- 🚀 Fast loading and optimized performance

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (ES6+)
- Bootstrap 5
- Font Awesome Icons
- AOS (Animate On Scroll)

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

4. Customize the content:
   - Replace the profile image in `assets/images/profile.jpg`
   - Update the project information in the Projects section
   - Modify the skills and their percentages
   - Add your social media links
   - Update the contact form endpoint

## Project Structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── images/
│       ├── profile.jpg
│       └── favicon.ico
└── README.md
```

## Customization

### Colors
The color scheme can be easily modified by updating the CSS variables in `style.css`:

```css
:root {
    --primary-color: #4a90e2;
    --secondary-color: #6c757d;
    --background-light: #ffffff;
    --text-light: #333333;
    --background-dark: #1a1a1a;
    --text-dark: #ffffff;
    --gradient-start: #4a90e2;
    --gradient-end: #6c5ce7;
}
```

### Adding Projects
To add a new project, add a new card in the Projects section of `index.html`:

```html
<div class="col-md-6 col-lg-4" data-aos="fade-up">
    <div class="project-card">
        <img src="assets/images/project.jpg" alt="Project Name">
        <div class="project-info">
            <h3>Project Name</h3>
            <p>Project description</p>
            <button onclick="openProjectModal('projectId')">Learn More</button>
        </div>
    </div>
</div>
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Bootstrap for the responsive framework
- Font Awesome for the icons
- AOS library for scroll animations 