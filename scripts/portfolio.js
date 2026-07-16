// Primary Portfolio Data Configuration
// Edit this data object below to add, remove, or modify items!
const PORTFOLIO_DATA = {
    bio: {
        name: "Sam K",
        username: "thinksideways",
        githubUrl: "https://github.com/thinksideways",
        title: "DevOps Engineer & Software Developer"
    },
    repositories: [
        {
            title: "Plaited",
            description: "An AI-enabled meal planner application built using Flutter and Dart. Automates healthy dietary choices with intelligent calendar scheduling.",
            url: "https://github.com/thinksideways/ai-meal-planner",
            tags: ["Flutter", "Dart", "AI", "Mobile"],
            icon: "bi-calendar-heart",
            category: "flutter"
        },
        {
            title: "Food Tracker Summary Apps Script",
            description: "A Google Apps Script enabled food tracker integrated seamlessly with Google Sheets and Google Calendar to log and visualize macros.",
            url: "https://github.com/thinksideways/food-tracker-summary-apps-script",
            tags: ["Apps Script", "Google Sheets", "Google Calendar", "Automation"],
            icon: "bi-table",
            category: "apps-script"
        }
    ],
    skills: [
        // Languages
        { name: "JavaScript (ES6+)", icon: "bi-code-slash", category: "Languages" },
        { name: "Node.js", icon: "bi-hexagon-fill", category: "Languages" },
        { name: "Python", icon: "bi-code", category: "Languages" },
        { name: "PHP", icon: "bi-code-slash", category: "Languages" },
        { name: ".NET / C#", icon: "bi-braces", category: "Languages" },
        { name: "Java / Spring Boot", icon: "bi-cup-hot-fill", category: "Languages" },
        { name: "SQL", icon: "bi-database-fill", category: "Languages" },
        { name: "HTML5 / CSS3", icon: "bi-filetype-html", category: "Languages" },
        // Architecture & Cloud
        { name: "Microservices", icon: "bi-cpu", category: "Architecture & Cloud" },
        { name: "REST APIs", icon: "bi-hdd-network-fill", category: "Architecture & Cloud" },
        { name: "Domain-Driven Design", icon: "bi-bezier2", category: "Architecture & Cloud" },
        { name: "MVC", icon: "bi-layout-three-columns", category: "Architecture & Cloud" },
        { name: "Cloud Integrations", icon: "bi-cloud-fill", category: "Architecture & Cloud" },
        // DevOps & Containers
        { name: "Docker", icon: "bi-box-seam-fill", category: "DevOps & Containers" },
        { name: "CI/CD Pipelines", icon: "bi-infinity", category: "DevOps & Containers" },
        { name: "Git / GitLab / Bitbucket", icon: "bi-git", category: "DevOps & Containers" },
        { name: "Linux Administration", icon: "bi-terminal-fill", category: "DevOps & Containers" },
        // Integrations & Tools
        { name: "SFCC SFRA", icon: "bi-shop", category: "Integrations & Tools" },
        { name: "Jira / Confluence", icon: "bi-kanban-fill", category: "Integrations & Tools" },
        { name: "Middleware Integrations", icon: "bi-arrow-left-right", category: "Integrations & Tools" }
    ]
};

// Interactive Terminal CLI Simulator Data
const TERMINAL_OUTPUTS = {
    about: {
        cmd: `➜ 🔥¯\_(ツ)_/¯🔥 echo $ABOUT`,
        res: `> Sam K is a versatile DevOps Engineer & Software Developer.<br>` +
             `> • He started building custom splash pages & property IT network dashboards for Hotel WiFi in 2018.<br>` +
             `> • In 2022 he transitioned to DevOps and applications support for over 20 global Salesforce Commerce Cloud stores.<br>` +
             `> • In late 2025 he decided to pursue a degree in software development.`
    },
    goals: {
        cmd: `➜ 🔥¯\_(ツ)_/¯🔥 echo $GOALS`,
        res: `> Active Summer Targets:<br>` +
             `> • <b>Spreadsheet Mastery</b>: Drastically improve speed, muscle memory, and hotkeys in Sheets & Excel.<br>` +
             `> • <b>Academic Excellence</b>: Execute high-quality homework repositories and core algorithmic concepts.<br>` +
             `> • <b>DevOps Expansion</b>: Leverage advanced shell scripts and Gemini AI automation loops.`
    },
    status: {
        cmd: `➜ 🔥¯\_(ツ)_/¯🔥 echo $HOBBIES`,
        res: `> <span class="text-accent">Hobbies and Interests:</span><br>` +
             `> * Gym and Fitness<br>` +
             `> * Pianos and Ukuleles<br>` +
             `> * Sci-fi and fantasy novels<br>` +
             `> * My goldendoodle, Rawry<br>` +
             `> * Building cool things on my Mac`
    }
};

// DOM Ready Handler
$(document).ready(function() {
    // 1. Render Repositories
    function renderRepositories(repos) {
        const $container = $('#repos-container');
        $container.empty();
        
        if (repos.length === 0) {
            $container.html(`
                <div class="col-12 text-center py-5">
                    <i class="bi bi-search text-muted fs-1 mb-3 d-block"></i>
                    <p class="text-muted">No repositories match your search or filter criteria.</p>
                </div>
            `);
            return;
        }
        
        repos.forEach(repo => {
            const tagBadges = repo.tags.map(t => `<span class="badge bg-dark-subtle text-accent border border-accent-subtle me-1 mb-1" style="font-size: 0.75rem;">${t}</span>`).join('');
            
            $container.append(`
                <div class="col-12 col-md-6 mb-4">
                    <div class="card custom-card h-100">
                        <div class="card-body d-flex flex-column justify-content-between p-4">
                            <div>
                                <div class="d-flex justify-content-between align-items-start">
                                    <div class="card-icon">
                                        <i class="bi ${repo.icon}"></i>
                                    </div>
                                    <a href="${repo.url}" target="_blank" class="btn btn-outline-accent btn-sm rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;" title="View Repository">
                                        <i class="bi bi-box-arrow-up-right"></i>
                                    </a>
                                </div>
                                <h4 class="card-title fw-bold mt-3 text-white" style="font-size: 1.25rem;">${repo.title}</h4>
                                <p class="card-text text-body-secondary mt-2 fs-6 lh-base">${repo.description}</p>
                            </div>
                            <div class="mt-4">
                                <div class="d-flex flex-wrap mb-3">
                                    ${tagBadges}
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-3 border-top border-secondary-subtle">
                                    <span class="text-body-secondary small"><i class="bi bi-github me-1 text-accent"></i> thinksideways</span>
                                    <a href="${repo.url}" target="_blank" class="text-accent text-decoration-none fw-semibold small hover-arrow">
                                        Explore Repo <i class="bi bi-arrow-right-short"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    // Initial Repo Render
    renderRepositories(PORTFOLIO_DATA.repositories);

    // 2. Render Skills
    function renderSkills() {
        const $container = $('#skills-container');
        $container.empty();
        
        // Group skills by category
        const categorized = {};
        PORTFOLIO_DATA.skills.forEach(skill => {
            if (!categorized[skill.category]) {
                categorized[skill.category] = [];
            }
            categorized[skill.category].push(skill);
        });

        Object.keys(categorized).forEach(cat => {
            const skillsHtml = categorized[cat].map(s => `
                <div class="col-6 col-md-3">
                    <div class="skill-card p-3 rounded-3 text-center border">
                        <i class="bi ${s.icon} text-accent mb-2 d-block fs-3"></i>
                        <span class="text-white fw-semibold small d-block">${s.name}</span>
                    </div>
                </div>
            `).join('');

            $container.append(`
                <div class="col-12 mb-5">
                    <h5 class="text-white-50 fw-bold mb-3" style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 1px;">
                        <i class="bi bi-tag text-purple me-2"></i> ${cat}
                    </h5>
                    <div class="row g-3">
                        ${skillsHtml}
                    </div>
                </div>
            `);
        });
    }

    // Render Skills
    renderSkills();

    // 3. Setup Search and Filtering for Repositories
    function applyFilters() {
        const activeFilter = $('.btn-filter.active').data('filter');
        const searchQuery = $('.search-bar').val().toLowerCase();
        
        const filtered = PORTFOLIO_DATA.repositories.filter(repo => {
            const matchesCategory = activeFilter === 'all' || repo.category === activeFilter;
            const matchesSearch = repo.title.toLowerCase().includes(searchQuery) || 
                                  repo.description.toLowerCase().includes(searchQuery) ||
                                  repo.tags.some(tag => tag.toLowerCase().includes(searchQuery));
            return matchesCategory && matchesSearch;
        });
        
        renderRepositories(filtered);
    }

    $(document).on('click', '.btn-filter', function() {
        $('.btn-filter').removeClass('active');
        $(this).addClass('active');
        applyFilters();
    });

    $(document).on('input', '.search-bar', function() {
        applyFilters();
    });

    // 4. Interactive Terminal Triggers
    $(document).on('click', '.terminal-cmd-btn', function() {
        $('.terminal-cmd-btn').removeClass('btn-accent').addClass('btn-outline-secondary');
        $(this).removeClass('btn-outline-secondary').addClass('btn-accent');
        
        const action = $(this).data('action');
        const output = TERMINAL_OUTPUTS[action];
        
        if (output) {
            $('#terminal-prompt').html(`<span class="text-secondary">$</span> ${output.cmd}`);
            $('#terminal-response').fadeOut(100, function() {
                $(this).html(output.res).fadeIn(150);
            });
        }
    });

    // Simple active state listener for scrolling navbar elements
    $(window).on('scroll', function() {
        const scrollPos = $(window).scrollTop() + 100;
        $('section').each(function() {
            const top = $(this).offset().top;
            const bottom = top + $(this).outerHeight();
            const id = $(this).attr('id');
            
            if (scrollPos >= top && scrollPos <= bottom) {
                $('.navbar-nav .nav-link').removeClass('active');
                $(`.navbar-nav .nav-link[href="#${id}"]`).addClass('active');
            }
        });
    });
});
