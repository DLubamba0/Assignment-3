# Reflection on Mini Instagram Clone

## 1. What did you ask Copilot to help you build? How did you break down the problem?

I asked GitHub Copilot to help me build a basic Instagram-like web application with the following features:  
- Scrollable feed with multiple posts  
- Each post containing a user avatar, username, image, caption, a like button, and a comment section  
- Dynamic like counter and comment submission  
- Responsive layout for desktop and mobile

I broke the problem down by first creating the main page structure (header, feed, footer), then building a post component template, adding like button functionality, adding comment functionality, and finally making the layout responsive with CSS.



---

## 2. How did your approach to asking questions change as you worked?

Initially, I asked Copilot to help me build the app feature by feature. Later, due to time constraints, I asked Copilot to generate the full application in a single prompt with all core features included.



---

## 3. What parts of the development process with GitHub Copilot surprised you?

- Copilot generated functional HTML, CSS, and JavaScript with interactive features almost immediately.  
- The like button and comment input worked with very little modification.  
- Copilot suggested clean ways to structure the feed and posts dynamically.



![Copilot like button](images/copilot_like_button.png)

---

## 4. What did you learn about the technology you used that you didn't know before?

- How to dynamically create HTML elements and attach event listeners in JavaScript.  
- Handling likes and comments interactively without a backend.  
- Applying responsive design techniques for a social media-style layout using only CSS.



---

## 5. What would you do differently if you had to build this again?

- Split the HTML, CSS, and JavaScript into separate files for better organization.  
- Implement persistent storage (e.g., localStorage) so likes and comments are saved.  
- Add more advanced features like multiple users, timestamps for posts, or image uploads.




