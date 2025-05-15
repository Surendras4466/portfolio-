// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm');
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.classList.remove('shadow-sm');
        navbar.style.backgroundColor = 'white';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in, .slide-in').forEach(element => {
    observer.observe(element);
});

// Add active class to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-link[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav-link[href*=' + sectionId + ']').classList.remove('active');
        }
    });
});

// Form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        if (!this.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            // Here you would typically handle the form submission
            // For example, sending the data to a server
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        }
        
        this.classList.add('was-validated');
    });
}

// Add animation to form fields
const formFields = document.querySelectorAll('.form-control');
formFields.forEach((field, index) => {
    field.style.opacity = '0';
    field.style.transform = 'translateY(20px)';
    field.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
        field.style.opacity = '1';
        field.style.transform = 'translateY(0)';
    }, 200 * (index + 1));
});

// EmailJS Send Function
function sendEmail(e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    submitBtn.disabled = true;

    // Send email using EmailJS
    emailjs.send("service_g891euf", "template_pco3vpr", {
        to_email: "vgssurendra446@gmail.com", // Your email address where you want to receive messages
        from_name: name,
        from_email: email, // This is the email entered by the user in the form
        subject: subject,
        message: message,
        to_name: "Surendra",
        reply_to: email, // This ensures replies go to the sender
        user_email: email // Additional parameter to ensure the user's email is used
    })
    .then(function() {
        // Show success message
        alert('Message sent successfully!');
        // Reset form
        document.getElementById('contactForm').reset();
    })
    .catch(function(error) {
        // Show error message
        alert('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
    })
    .finally(function() {
        // Reset button state
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    });

    return false;
} 