# Deployment Guide for drabdulbasid.com (Hostinger)

This guide provides simple, step-by-step instructions to upload and launch your academic portfolio website on Hostinger web hosting.

---

## 1. Directory Structure

Ensure your website folder contains the following layout when uploading:

```text
public_html/
│
├── .htaccess                     # Apache configuration (HTTPS, caching, clean URLs)
├── index.html                    # Main website homepage
├── styles.css                    # Complete CSS stylesheet
├── script.js                     # Mobile navigation & form validation script
├── contact.php                   # Contact form mail processing script
├── robots.txt                    # Search engine crawler instructions
├── sitemap.xml                   # XML sitemap for Google & Bing
├── Dr-Abdulbasid-Banga-CV.pdf   # Academic curriculum vitae PDF file
│
└── images/                       # Folder for website images
    ├── portrait.jpg              # Profile photograph (recommended 800x1000px, 4:5 ratio)
    ├── project-1.jpg             # Patent / Hardware threat detection device visual (800x450px)
    ├── project-2.jpg             # Cyber Physical Systems book cover (800x450px)
    ├── project-3.jpg             # Architecture-centric IoT research visual (800x450px)
    └── project-4.jpg             # Self-healing critical infrastructure visual (800x450px)