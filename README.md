# My Portfolio Website

A responsive GitHub Pages static site showcasing websites built throughout my career.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Project Filtering**: Filter projects by category (E-commerce, Corporate, Portfolio, Blog)
- **Smooth Animations**: Fade-in effects and hover transitions
- **Interactive UI**: Smooth scrolling, back-to-top button, and dynamic filtering
- **Modern Design**: Clean, professional layout with gradient accents
- **Performance Optimized**: Lazy loading images and efficient JavaScript

## 🚀 Live Demo

Visit the live site: [https://spospisil.github.io](https://spospisil.github.io)

## 📁 Project Structure

```
spospisil.github.io/
│
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Responsive CSS styles
│   └── js/
│       └── script.js      # JavaScript for interactivity
└── README.md              # This file
```

## 🎨 Customization Guide

### Adding Your Own Projects

1. Open `index.html`
2. Find the `projects-grid` section
3. Copy an existing `project-card` and modify:

```html
<article class="project-card" data-category="your-category">
    <div class="project-image">
        <img src="your-image-url.jpg" alt="Project Name">
        <div class="project-overlay">
            <a href="https://your-live-site.com" class="btn btn-primary" target="_blank">View Live</a>
            <a href="#" class="btn btn-secondary">Details</a>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Brief description of your project.</p>
        <div class="project-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
        </div>
    </div>
</article>
```

### Changing Categories

Available categories (set in `data-category`):
- `ecommerce`
- `corporate`
- `portfolio`
- `blog`

To add new categories:
1. Add a new filter button in the `filter-buttons` section
2. Update the `data-category` attribute on project cards

### Updating Colors

Edit CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #667eea;    /* Main brand color */
    --secondary-color: #764ba2;  /* Secondary brand color */
    --accent-color: #f093fb;     /* Accent color */
}
```

### Personalizing Content

- **Header**: Edit the `header-title` and `header-subtitle` in `index.html`
- **About Section**: Update the text in the `about-section`
- **Contact Links**: Modify the links in the `contact-section`
- **Email**: Change `your.email@example.com` to your actual email

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- GitHub Pages for hosting

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (default)
- **Large Desktop**: 1400px+
- **Tablet**: 768px - 1199px
- **Mobile**: up to 767px
- **Small Mobile**: up to 480px

## 🚀 Deployment

This site is automatically deployed via GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Pages will automatically build and deploy
3. Site will be live at `https://spospisil.github.io`

### Local Development

To test locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/spospisil/spospisil.github.io.git
   ```

2. Open `index.html` in your browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

3. Navigate to `http://localhost:8000`

## ✨ Features Explained

### Filter System
Click category buttons to filter projects dynamically without page reload.

### Smooth Scrolling
Navigation links smoothly scroll to their respective sections.

### Intersection Observer
Projects fade in as you scroll down the page for a modern feel.

### Back to Top Button
Appears when scrolling down, click to return to the top smoothly.

### Lazy Loading
Images load only when needed for better performance.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- GitHub: [@spospisil](https://github.com/spospisil)
- Email: your.email@example.com

---

**Built with ❤️ using HTML, CSS, and JavaScript**