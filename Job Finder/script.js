// script.js

document.getElementById('search-btn').addEventListener('click', async () => {
                 const role = document.getElementById('search-bar').value.trim();
                 if (!role) {
                     alert('Please enter a job role.');
                     return;
                 }
             
                 const resultContainer = document.getElementById('result-container');
                 resultContainer.innerHTML = '<p>Loading...</p>';
                 resultContainer.classList.remove('show');
             
                 try {
                     // Dummy data for demonstration
                     const data = {
                                  'Data Analyst': {
                                      roadmap: 'Learn data analysis tools and techniques. Start with Excel, then move on to SQL, Python, and data visualization tools like Tableau.',
                                      courses: ['Data Analysis with Python', 'SQL for Data Science', 'Introduction to Tableau'],
                                      tips: ['Focus on understanding data patterns', 'Build a strong portfolio with real-world projects'],
                                      skills: ['Data Cleaning', 'Data Visualization', 'Statistical Analysis']
                                  },
                                  'Software Engineer': {
                                      roadmap: 'Learn programming languages such as Python or JavaScript. Gain knowledge in algorithms, data structures, and software development principles.',
                                      courses: ['Introduction to Programming', 'Data Structures and Algorithms', 'Software Engineering Principles'],
                                      tips: ['Build and maintain personal projects', 'Stay updated with new technologies'],
                                      skills: ['Programming Languages', 'Algorithm Design', 'Software Development Life Cycle']
                                  },
                                  'Business Analyst': {
                                      roadmap: 'Learn business processes, data analysis, and tools like Excel, SQL, and BI tools.',
                                      courses: ['Business Analysis Fundamentals', 'SQL for Business Analysts', 'Power BI for Beginners'],
                                      tips: ['Understand the business domain', 'Focus on communication and stakeholder management'],
                                      skills: ['Requirement Gathering', 'Process Modeling', 'Data Analysis']
                                  },
                                  'HR Recruiter': {
                                      roadmap: 'Learn recruitment processes, ATS systems, and sourcing techniques.',
                                      courses: ['Recruitment and Selection', 'HR Management', 'LinkedIn Recruiting'],
                                      tips: ['Focus on candidate experience', 'Build strong networking skills'],
                                      skills: ['Sourcing', 'Interviewing', 'Onboarding']
                                  },
                                  'Talent Acquisition Specialist': {
                                      roadmap: 'Understand talent sourcing, employer branding, and ATS.',
                                      courses: ['Talent Acquisition Strategies', 'Employer Branding', 'Advanced Sourcing Techniques'],
                                      tips: ['Leverage social media for talent search', 'Focus on diversity and inclusion'],
                                      skills: ['Talent Sourcing', 'Employer Branding', 'Interviewing']
                                  },
                                  'Frontend Developer': {
                                      roadmap: 'Learn HTML, CSS, JavaScript, and frontend frameworks.',
                                      courses: ['HTML, CSS, and JavaScript for Web Developers', 'React - The Complete Guide', 'Advanced CSS and Sass'],
                                      tips: ['Focus on responsive design', 'Build interactive and user-friendly interfaces'],
                                      skills: ['HTML/CSS', 'JavaScript', 'React/Vue/Angular']
                                  },
                                  'Backend Developer': {
                                      roadmap: 'Learn server-side programming languages, databases, and APIs.',
                                      courses: ['Node.js, Express, MongoDB & More', 'Python for Backend Development', 'Java Spring Framework'],
                                      tips: ['Understand RESTful APIs', 'Focus on database management'],
                                      skills: ['Node.js/Python/Java', 'Database Management', 'API Development']
                                  },
                                  'Full Stack Developer': {
                                      roadmap: 'Learn both frontend and backend development.',
                                      courses: ['Full-Stack Web Development with React', 'The Complete 2023 Web Development Bootcamp', 'MERN Stack Front to Back'],
                                      tips: ['Understand both client-side and server-side development', 'Build end-to-end applications'],
                                      skills: ['HTML/CSS/JavaScript', 'Backend Development', 'Database Management']
                                  },
                                  'MERN Stack Developer': {
                                      roadmap: 'Learn MongoDB, Express.js, React, and Node.js.',
                                      courses: ['MERN Stack Front To Back: Full Stack React, Redux & Node.js', 'Complete MERN Stack Developer Bootcamp', 'React, NodeJS, Express & MongoDB - The MERN Fullstack Guide'],
                                      tips: ['Focus on building dynamic web applications', 'Understand the integration of all components'],
                                      skills: ['MongoDB', 'Express.js', 'React', 'Node.js']
                                  },
                                  'Business Development Executive': {
                                      roadmap: 'Learn sales techniques, CRM tools, and market research.',
                                      courses: ['Business Development for Startups and Tech Companies', 'Sales Training: Practical Sales Techniques', 'CRM Tools for Business Development'],
                                      tips: ['Focus on relationship building', 'Understand customer needs'],
                                      skills: ['Sales Techniques', 'Market Research', 'CRM Tools']
                                  },
                                  'Consultant': {
                                      roadmap: 'Learn problem-solving, industry knowledge, and client management.',
                                      courses: ['Management Consulting Essential Training', 'Problem Solving Techniques', 'Client Management Skills'],
                                      tips: ['Focus on analytical thinking', 'Develop strong communication skills'],
                                      skills: ['Problem-Solving', 'Analytical Skills', 'Client Management']
                                  },
                                  'US Recruiter': {
                                      roadmap: 'Learn US labor laws, recruitment processes, and ATS systems.',
                                      courses: ['US Recruitment and Staffing', 'Advanced Recruitment Techniques', 'HR Management'],
                                      tips: ['Understand the US job market', 'Focus on compliance and regulations'],
                                      skills: ['Sourcing', 'Interviewing', 'Onboarding']
                                  },
                                  'Management Consultant': {
                                      roadmap: 'Learn business strategy, management principles, and consulting frameworks.',
                                      courses: ['Management Consulting Essential Training', 'Business Strategy Specialization', 'Consulting Approach to Problem Solving'],
                                      tips: ['Develop industry-specific knowledge', 'Focus on delivering actionable insights'],
                                      skills: ['Strategic Planning', 'Business Analysis', 'Project Management']
                                  },
                                  'IT Consultant': {
                                      roadmap: 'Learn IT infrastructure, project management, and consulting skills.',
                                      courses: ['ITIL Foundation', 'Project Management Professional (PMP)', 'Technical Consulting Skills'],
                                      tips: ['Focus on understanding client IT needs', 'Develop strong technical knowledge'],
                                      skills: ['IT Infrastructure', 'Project Management', 'Technical Analysis']
                                  },
                                  'DevOps Engineer': {
                                      roadmap: 'Learn CI/CD, cloud platforms, and infrastructure automation.',
                                      courses: ['DevOps Fundamentals', 'Docker and Kubernetes: The Complete Guide', 'AWS Certified DevOps Engineer'],
                                      tips: ['Focus on automating processes', 'Understand cloud services'],
                                      skills: ['CI/CD', 'Docker/Kubernetes', 'Cloud Platforms (AWS, Azure, GCP)']
                                  },
                                  'iOS Developer': {
                                      roadmap: 'Learn Swift, Xcode, and iOS frameworks.',
                                      courses: ['iOS App Development for Beginners', 'The Complete iOS App Development Bootcamp', 'Advanced iOS Development'],
                                      tips: ['Focus on user experience', 'Build performance-optimized applications'],
                                      skills: ['Swift', 'Xcode', 'UIKit/SwiftUI']
                                  },
                                  'Java Developer': {
                                      roadmap: 'Learn Java, Spring Framework, and database management.',
                                      courses: ['Java Programming and Software Engineering Fundamentals', 'Spring Framework Masterclass', 'Java Database Connectivity'],
                                      tips: ['Focus on object-oriented programming', 'Develop scalable applications'],
                                      skills: ['Java', 'Spring Framework', 'Database Management']
                                  },
                                  'Data Scientist': {
                                      roadmap: 'Learn Python, machine learning, and statistical analysis.',
                                      courses: ['Data Science Specialization', 'Machine Learning by Stanford University', 'Python for Data Science'],
                                      tips: ['Focus on understanding data patterns', 'Build a strong portfolio with real-world projects'],
                                      skills: ['Data Cleaning', 'Data Visualization', 'Statistical Analysis', 'Machine Learning']
                                  }
                                  // Add more job roles as needed
                              };
                              
                     if (data[role]) {
                         const { roadmap, courses, tips, skills } = data[role];
                         resultContainer.innerHTML = `
                             <h2>${role}</h2>
                             <h3>Roadmap</h3>
                             <p>${roadmap}</p>
                             <h3>Recommended Courses</h3>
                             <ul>${courses.map(course => `<li>${course}</li>`).join('')}</ul>
                             <h3>Tips</h3>
                             <ul>${tips.map(tip => `<li>${tip}</li>`).join('')}</ul>
                             <h3>Required Skills</h3>
                             <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
                         `;
                     } else {
                         resultContainer.innerHTML = '<p>No information available for this job role.</p>';
                     }
                 } catch (error) {
                     resultContainer.innerHTML = '<p>An error occurred. Please try again later.</p>';
                 }
             
                 resultContainer.classList.add('show');
             });
             