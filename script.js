document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileNavToggle.classList.toggle('active');
    });
  }

  // Header Scroll Effect
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 100);
    });
  }

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          mobileNavToggle.classList.remove('active');
        }
      }
    });
  });

  // Careers Page: Job Data and Filtering
  if (document.querySelector('.careers')) {
    const jobs = [
      {
        id: 1,
        title: "Web Designer",
        location: "Peterborough",
        type: "Full-time",
        salary: "£24,000 - £30,000 per year",
        description: `
          <p>You'll be involved in the technical and graphical aspects of pages and will determine the look of the website as well as how it works. You may also be responsible for the maintenance of an existing site.</p>
          <p>The term web developer is sometimes used interchangeably with web designer, but this is misguided. Web developing is a more specialist role, focusing on the back-end development of a website, using programming languages to make the web design a reality that works well.</p>
          <p>The growth in touchscreen phones and tablet devices has dictated a new way of designing websites, with the web designer needing to ensure that web pages are responsive no matter what type of device is being used. Therefore, the need to test websites at different stages of design and on a variety of devices, has become an important aspect of the job.</p>
          <p>We are seeking a talented Web Designer to work with our team of programmers, and to join our ever-expanding creative team.</p>
        `,
        responsibilities: [
          "Be working on a multitude of diverse creative projects for different audiences and markets",
          "Will be responsible for the production of digital assets and website designs",
          "Execute all visual design stages from concept to final hand-off to engineering",
          "Conceptualize original website design ideas that bring simplicity and user friendliness to complex roadblocks",
          "Create wireframes, storyboards, user flows, process flows and site maps to communicate interaction and design ideas",
          "Present and defend designs and key deliverables to peers and executive level stakeholders",
          "Establish and promote design guidelines, best practices and standards"
        ],
        essentials: [
          "Proficiency in Photoshop, Illustrator or other visual design and wire-framing tools",
          "Proficiency in HTML, CSS and JavaScript for rapid prototyping",
          "Experience working in an Agile/Scrum development process",
          "Excellent visual design skills with sensitivity to user-system interaction",
          "Ability to solve problems creatively and effectively",
          "Up-to-date with the latest Web trends, techniques and technologies",
          "Proven experience as a Digital / Web Designer – ideally with marketing agency experience. A portfolio of work will be required pre-interview",
          "High level of proficiency in Adobe Creative Suite (Photoshop, InDesign, Illustrator and XD)",
          "Solid experience in creating wireframes, storyboards, user flows, process flows and site maps",
          "A great team player",
          "Strong verbal and written communication skills",
          "High level of attention to detail and ability to stick to brand guidelines",
          "Proven ability to initiate and manage projects, including working to tight deadlines and managing your own workloads",
          "Demonstrable passion for new technologies and design trends"
        ],
        desirable: [
          "Experience using Figma",
          "Experience with client-facing communications",
          "Experience of UX / UI Research and Implementation"
        ],
        benefits: [
          "Competitive salary",
          "Additional Holiday to be taken on your birthday",
          "Company Bonus schemes",
          "Flexible working – 1 day per week guaranteed from home, if desired",
          "Regular team outings and socials",
          "A relaxed, fun and dynamic working environment"
        ],
        additionalInfo: `
          <h3>Job Types:</h3>
          <p>Full-time, Permanent</p>
          <h3>Salary:</h3>
          <p>£24,000.00-£30,000.00 per year</p>
          <h3>Additional pay:</h3>
          <ul>
            <li>Bonus scheme</li>
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
          <h3>Benefits:</h3>
          <ul>
            <li>Casual dress</li>
            <li>Company events</li>
            <li>Work from home</li>
          </ul>
          <h3>Schedule:</h3>
          <p>Monday to Friday</p>
        `
      },
      {
        id: 2,
        title: "Web Developer",
        location: "Peterborough",
        type: "Full-time",
        salary: "£28,000 - £35,000 per year",
        description: `
          <p>We are now looking to build our in-house systems development team with the appointment of a web developer.</p>
          <p>The successful candidate will help develop back and front-end systems for our clients including eCommerce and B2B systems where you can see your ideas come to life.</p>
          <p>As a small development team, you will have to opportunity to work across multiple technical domains developing a breadth of skills.</p>
        `,
        responsibilities: [
          "Your primary task as a web developer will be to create reliable and high-performing web-based applications and services",
          "Focusing solely on the underlying software and databases and working with other teams on the interface and visual design",
          "Establish and promote design guidelines, best practices and standards"
        ],
        essentials: [
          "Experience with HTML, CSS, & JavaScript",
          "Exposure or Experience with one or more procedural programming languages, such as PHP, Java, C# (.Net), Python, CFML",
          "Exposure or Experience with one or more associated technologies: Database technologies (SQL Server, MySQL), Windows Server or Linux Distributions, Development Tools, (IDEs, CLIs, Toolchains), Git (Or another VCS)",
          "An Organised and Pragmatic approach to Solving Problems",
          "The ability to work as part of a team including both technical and non-technical members",
          "Proven ability to initiate and manage projects, including working to tight deadlines and managing your own workloads",
          "Demonstrable passion for new technologies and design trends"
        ],
        desirable: [
          "Experience working with the Salesforce platform"
        ],
        benefits: [
          "Competitive salary",
          "Additional Holiday to be taken on your birthday",
          "Company Bonus schemes",
          "Flexible working – 1 day per week guaranteed from home, if desired",
          "Regular team outings and socials",
          "A relaxed, fun and dynamic working environment"
        ],
        additionalInfo: `
          <h3>Job Types:</h3>
          <p>Full-time, Permanent</p>
          <h3>Salary:</h3>
          <p>£28,000.00-£35,000.00 per year</p>
          <h3>Additional pay:</h3>
          <ul>
            <li>Bonus scheme</li>
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
          <h3>Benefits:</h3>
          <ul>
            <li>Casual dress</li>
            <li>Company events</li>
            <li>Work from home</li>
          </ul>
          <h3>Schedule:</h3>
          <p>Monday to Friday</p>
        `
      }
    ];

    // Function to display jobs
    function displayJobs(filteredJobs) {
      const jobList = document.querySelector('.job-list');
      if (!jobList) return;

      jobList.innerHTML = filteredJobs.length > 0
        ? filteredJobs.map(job => `
          <div class="job-card">
            <div class="job-header">
              <h3 class="job-title">${job.title}</h3>
              <span class="job-salary">${job.salary}</span>
            </div>
            <div class="job-meta">
              <span class="meta-item">📍 ${job.location}</span>
              <span class="meta-item">🕒 ${job.type}</span>
            </div>
            <div class="job-description">${job.description}</div>
            <a href="#" class="btn view-details" data-id="${job.id}">View Details</a>
          </div>
        `).join('')
        : '<p>No matching jobs found. Please try different search criteria.</p>';

    
      document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          showJobDetails(parseInt(e.target.getAttribute('data-id')));
        });
      });
    }

    function showJobDetails(jobId) {
      const job = jobs.find(j => j.id === jobId);
      if (!job) return;

      const modalContent = document.getElementById('jobModal');
      if (!modalContent) return;

      modalContent.innerHTML = `
        <div class="job-details-content">
          <span class="modal-close">×</span>
          <h2>${job.title}</h2>
          <div class="job-meta">
            <span class="meta-item">📍 ${job.location}</span>
            <span class="meta-item">🕒 ${job.type}</span>
            <span class="meta-item">💰 ${job.salary}</span>
          </div>
          <div class="job-description">${job.description}</div>
          <h3>You Will:</h3>
          <ul>${job.responsibilities.map(res => `<li>${res}</li>`).join('')}</ul>
          <h3>Essentials:</h3>
          <ul>${job.essentials.map(ess => `<li>${ess}</li>`).join('')}</ul>
          ${job.desirable && job.desirable.length > 0 ? `
            <h3>Desirable:</h3>
            <ul>${job.desirable.map(des => `<li>${des}</li>`).join('')}</ul>
          ` : ''}
          <h3>What We Offer:</h3>
          <ul>${job.benefits.map(ben => `<li>${ben}</li>`).join('')}</ul>
          ${job.additionalInfo || ''}
          <div class="job-actions">
            <a href="form.html?position=${encodeURIComponent(job.title)}" class="btn">Apply Now</a>
          </div>
        </div>
      `;

      modalContent.style.display = 'block';

      document.querySelector('.modal-close').addEventListener('click', () => {
        modalContent.style.display = 'none';
      });

      window.addEventListener('click', (event) => {
        if (event.target === modalContent) {
          modalContent.style.display = 'none';
        }
      });
    }

    const jobSearch = document.querySelector('#jobSearch');
    const locationFilter = document.querySelector('#locationFilter');
    const typeFilter = document.querySelector('#typeFilter');
    const jobSearchBtn = document.querySelector('.search-btn:not(#courseSearchBtn)');

    function filterJobs() {
      const searchTerm = jobSearch.value.toLowerCase();
      const location = locationFilter.value;
      const type = typeFilter.value;

      const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm) || 
                             job.description.toLowerCase().includes(searchTerm);
        const matchesLocation = location ? job.location === location : true;
        const matchesType = type ? job.type === type : true;
        return matchesSearch && matchesLocation && matchesType;
      });

      displayJobs(filteredJobs);
    }

    if (jobSearchBtn) jobSearchBtn.addEventListener('click', filterJobs);
    if (jobSearch) jobSearch.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') filterJobs();
    });
    if (locationFilter) locationFilter.addEventListener('change', filterJobs);
    if (typeFilter) typeFilter.addEventListener('change', filterJobs);

    if (document.querySelector('.careers')) {
      displayJobs(jobs);
    }

    if (document.querySelector('.courses')) {
      const courses = [
        // Local College and University Courses
        {
          id: 1,
          title: "Web Development Diploma",
          provider: "Peterborough College",
          category: "Local",
          duration: "1 year",
          rating: "4.5/5",
          description: "Comprehensive program covering HTML, CSS, and JavaScript.",
          url: "https://www.peterborough.ac.uk"
        },
        {
          id: 2,
          title: "BSc Computer Science",
          provider: "Anglia Ruskin University",
          category: "Local",
          duration: "3 years",
          rating: "4.7/5",
          description: "Degree program with web development specialization.",
          url: "https://www.aru.ac.uk"
        },
        {
          id: 3,
          title: "MSc Web Technologies",
          provider: "Coventry University",
          category: "Local",
          duration: "1 year",
          rating: "4.6/5",
          description: "Advanced course in modern web development frameworks.",
          url: "https://www.coventry.ac.uk"
        },
        {
          id: 4,
          title: "BA Digital Design",
          provider: "Northampton University",
          category: "Local",
          duration: "3 years",
          rating: "4.4/5",
          description: "Focus on UI/UX and web design principles.",
          url: "https://www.northampton.ac.uk"
        }
      ];

      function displayCourses(filteredCourses) {
        const courseList = document.querySelector('#onlineCourses');
        if (!courseList) return;

        const onlineCourses = filteredCourses.filter(course => course.category !== "Local");

        courseList.innerHTML = onlineCourses.length > 0
          ? onlineCourses.map(course => `
            <div class="course-card">
              <div class="course-content">
                <div class="course-provider">🎓 ${course.provider}</div>
                <h4 class="course-title">${course.title}</h4>
                <p class="course-desc">${course.description}</p>
                <div class="course-meta">
                  <span>⏱️ ${course.duration}</span>
                  <span>⭐ ${course.rating}</span>
                </div>
                <a href="${course.url}" class="btn" target="_blank">View Course</a>
              </div>
            </div>
          `).join('')
          : '<p>No matching online courses found. Please try different search criteria.</p>';
      }

      const courseSearch = document.querySelector('#courseSearch');
      const courseTabs = document.querySelectorAll('.tab-btn');
      const courseSearchBtn = document.querySelector('#courseSearchBtn');

      function filterCourses() {
        const searchTerm = courseSearch ? courseSearch.value.toLowerCase() : '';
        const activeTab = document.querySelector('.tab-btn.active');
        const category = activeTab ? activeTab.getAttribute('data-category') : 'all';

        const filteredCourses = courses.filter(course => {
          const matchesSearch = course.title.toLowerCase().includes(searchTerm) || 
                               course.description.toLowerCase().includes(searchTerm) ||
                               course.provider.toLowerCase().includes(searchTerm);
          const matchesCategory = category === 'all' ? true : course.category === category;
          return matchesSearch && matchesCategory;
        });

        displayCourses(filteredCourses);

        const localCourseCards = document.querySelectorAll('.course-grid:not(#onlineCourses) .course-card');
        localCourseCards.forEach(card => {
          const title = card.querySelector('.course-title').textContent.toLowerCase();
          const provider = card.querySelector('.course-provider').textContent.toLowerCase();
          const description = card.querySelector('.course-desc').textContent.toLowerCase();
          const matches = title.includes(searchTerm) || provider.includes(searchTerm) || description.includes(searchTerm);
          card.style.display = matches && (category === 'all' || category === 'Local') ? 'block' : 'none';
        });
      }

      // Event Listeners for Courses
      if (courseSearch) {
        courseSearch.addEventListener('keyup', (e) => {
          if (e.key === 'Enter') filterCourses();
        });
      }
      if (courseSearchBtn) {
        courseSearchBtn.addEventListener('click', filterCourses);
      }

      courseTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          courseTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          filterCourses();
        });
      });

      displayCourses(courses);
    }
  document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const resume = document.getElementById('resume').files[0];
    const coverLetter = document.getElementById('coverLetter').value;
    
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you, ${name}! Your application has been submitted successfully.`;
    responseMessage.style.color = 'green'; 


    document.getElementById('applicationForm').reset();
  });

  function submitApplication(event) {
    event.preventDefault();

    // Show the success message
    document.getElementById('successMessage').style.display = 'block';

    document.getElementById('applicationForm').reset();
  }

    if (document.getElementById('applicationForm')) {
      const form = document.getElementById('applicationForm');
      const formSteps = document.querySelectorAll('.form-step');
      const nextButtons = document.querySelectorAll('.btn-next');
      const prevButtons = document.querySelectorAll('.btn-prev');
      const progressSteps = document.querySelectorAll('.progress-step');
      const progressFill = document.querySelector('.progress-fill');
      let currentStep = 0;

      function updateFormSteps() {
        formSteps.forEach((step, index) => {
          step.classList.toggle('active', index === currentStep);
        });
        progressSteps.forEach((step, index) => {
          step.classList.toggle('active', index <= currentStep);
        });
        if (progressFill) {
          progressFill.style.width = `${(currentStep / (formSteps.length - 1)) * 100}%`;
        }
      }

      nextButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const currentStepInputs = formSteps[currentStep].querySelectorAll('[required]');
          let isValid = true;

          currentStepInputs.forEach(input => {
            if (!input.value.trim()) {
              input.classList.add('invalid');
              isValid = false;
            } else {
              input.classList.remove('invalid');
            }
          });

          if (isValid) {
            currentStep++;
            updateFormSteps();
          }
        });
      });

      prevButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          currentStep--;
          updateFormSteps();
        });
      });

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';

        try {
          await new Promise(resolve => setTimeout(resolve, 1500));
          const responseMessage = document.querySelector('.response-message');
          if (responseMessage) {
            responseMessage.textContent = 'Application submitted successfully!';
            responseMessage.style.color = 'var(--success)';
          }
          form.reset();
          currentStep = 0;
          updateFormSteps();
        } catch (error) {
          const responseMessage = document.querySelector('.response-message');
          if (responseMessage) {
            responseMessage.textContent = 'Error submitting application. Please try again.';
            responseMessage.style.color = 'var(--danger)';
          }
        } finally {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      });

      updateFormSteps();
    }
  } 
});