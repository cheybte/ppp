// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Active navigation link highlighting
function updateActiveNavLink() {
  const sections = ["hero", "formation", "experience", "projets", "competences", "resources", "contact"]
  const navLinks = document.querySelectorAll(".nav-link")
  const scrollPosition = window.scrollY + 100

  sections.forEach((sectionId, index) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const { offsetTop, offsetHeight } = section
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        navLinks.forEach((link) => link.classList.remove("active"))
        if (navLinks[index]) {
          navLinks[index].classList.add("active")
        }
      }
    }
  })
}

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".card, .project-card, .skill-category, .timeline-item, .stat-item, .resource-card",
  )

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Initialize animations
function initAnimations() {
  const elements = document.querySelectorAll(
    ".card, .project-card, .skill-category, .timeline-item, .stat-item, .resource-card",
  )

  elements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })
}

// Counter animation for stats
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    const increment = target / 100
    let current = 0

    const updateCounter = () => {
      if (current < target) {
        current += increment
        counter.textContent = Math.ceil(current)
        setTimeout(updateCounter, 20)
      } else {
        counter.textContent = target
      }
    }

    // Start animation when element is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCounter()
          observer.unobserve(entry.target)
        }
      })
    })

    observer.observe(counter)
  })
}

// Typing effect for hero title
function initTypingEffect() {
  const typingElements = document.querySelectorAll(".typing-text")

  typingElements.forEach((element, index) => {
    const text = element.textContent
    element.textContent = ""

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    setTimeout(() => {
      typeWriter()
    }, index * 2000)
  })
}

// Particle system for background
function createParticles() {
  const particleContainer = document.querySelector(".data-particles")

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 4 + "s"
    particle.style.animationDuration = Math.random() * 3 + 2 + "s"
    particleContainer.appendChild(particle)
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  initAnimations()
  animateCounters()
  initTypingEffect()
  createParticles()

  // Add click event to navigation links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      scrollToSection(targetId)
    })
  })

  // Add scroll event listener
  window.addEventListener("scroll", () => {
    updateActiveNavLink()
    animateOnScroll()
  })

  // Initial call to set active link
  updateActiveNavLink()
  animateOnScroll()
})

// Add CSS for active nav link
const style = document.createElement("style")
style.textContent = `
    .nav-link.active {
        color: #00d4ff !important;
        background: rgba(0, 212, 255, 0.1);
    }
`
document.head.appendChild(style)
