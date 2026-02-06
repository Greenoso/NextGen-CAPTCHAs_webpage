// ========================================
// Next-Gen CAPTCHAs - Main JavaScript
// Modern animations and interactions
// ========================================

// CAPTCHA Data - 27 types with metadata from the paper
const captchaData = [
    {
        id: "3D_Viewpoint",
        name: "3D Viewpoint",
        description: "Select all views showing the same colored-edge wireframe from different angles",
        gaps: ["G1", "G4", "G5"],
        answerType: "Select",
        generative: true
    },
    {
        id: "Backmost_Layer",
        name: "Backmost Layer",
        description: "Click cells where the backmost (occluded) shape matches the reference",
        gaps: ["G1"],
        answerType: "Select",
        generative: true
    },
    {
        id: "Box_Folding",
        name: "Box Folding",
        description: "Choose the folded cube that matches the given 2D net",
        gaps: ["G1", "G4"],
        answerType: "Select",
        generative: true
    },
    {
        id: "Color_Counting",
        name: "Color Counting",
        description: "Select cells that meet the rule about the number of colors in each cell",
        gaps: ["G3"],
        answerType: "Select",
        generative: true
    },
    {
        id: "Dice_Roll_Path",
        name: "Dice Roll Path",
        description: "Roll a die along a shown path and report the final top face",
        gaps: ["G3", "G4", "G5"],
        answerType: "Numeric",
        generative: true
    },
    {
        id: "Dynamic_Jigsaw",
        name: "Dynamic Jigsaw",
        description: "Drag and drop animated GIF pieces to complete a 3×3 jigsaw puzzle",
        gaps: ["G2", "G4", "G5"],
        answerType: "Drag-and-drop",
        generative: true
    },
    {
        id: "Hole_Counting",
        name: "Hole Counting",
        description: "Count topological holes in presented glyphs and shapes",
        gaps: ["G1", "G3"],
        answerType: "Numeric",
        generative: true
    },
    {
        id: "Illusory_Ribbons",
        name: "Illusory Ribbons",
        description: "Select cells containing exactly the target number of ribbon loops",
        gaps: ["G1", "G3"],
        answerType: "Select",
        generative: true
    },
    {
        id: "Layered_Stack",
        name: "Layered Stack",
        description: "Select cells where top shape and counts in lower layers meet a rule",
        gaps: ["G1", "G3"],
        answerType: "Select",
        generative: true
    },
    {
        id: "Mirror",
        name: "Mirror",
        description: "Find mirror options that do not match the reflected reference",
        gaps: ["G1"],
        answerType: "Select",
        generative: false
    },
    {
        id: "Multi_Script",
        name: "Multi Script",
        description: "Select cells containing any target characters across multiple writing systems",
        gaps: ["G1"],
        answerType: "Select",
        generative: true
    },
    {
        id: "Occluded_Pattern_Counting",
        name: "Occluded Pattern Counting",
        description: "Count two specified shapes under a semi-transparent occluder",
        gaps: ["G1", "G3"],
        answerType: "Numeric",
        generative: true
    },
    {
        id: "Red_Dot",
        name: "Red Dot",
        description: "Timed clicks on appearing red dots until hit quota - tests reaction speed",
        gaps: ["G5"],
        answerType: "Click position",
        generative: true
    },
    {
        id: "Rotation_Match",
        name: "Rotation Match",
        description: "Select tiles of the most frequent shape, ignoring rotation/color/texture",
        gaps: ["G1", "G4"],
        answerType: "Select",
        generative: true
    },
    {
        id: "Shadow_Direction",
        name: "Shadow Direction",
        description: "Match light-source direction from photorealistic 3D shadows",
        gaps: ["G1"],
        answerType: "Select",
        generative: true
    },
    {
        id: "Shadow_Plausible",
        name: "Shadow Plausible",
        description: "Pick images with physically plausible shadows in a grid",
        gaps: ["G1"],
        answerType: "Select",
        generative: false
    },
    {
        id: "Spooky_Circle",
        name: "Spooky Circle",
        description: "Count circles only visible via motion-contrast noise",
        gaps: ["G2"],
        answerType: "Numeric",
        generative: true
    },
    {
        id: "Spooky_Circle_Grid",
        name: "Spooky Circle Grid",
        description: "Count how many grid cells contain motion-contrast circles",
        gaps: ["G2", "G3"],
        answerType: "Numeric",
        generative: true
    },
    {
        id: "Spooky_Jigsaw",
        name: "Spooky Jigsaw",
        description: "Drag and drop motion-contrast pieces to complete the jigsaw",
        gaps: ["G2", "G4", "G5"],
        answerType: "Drag-and-drop",
        generative: true
    },
    {
        id: "Spooky_Shape_Grid",
        name: "Spooky Shape Grid",
        description: "Select spooky cells with the target shape and rotation direction",
        gaps: ["G2"],
        answerType: "Select",
        generative: true
    },
    {
        id: "Spooky_Size",
        name: "Spooky Size",
        description: "Click largest/smallest target shape visible only via motion contrast",
        gaps: ["G2", "G5"],
        answerType: "Click position",
        generative: true
    },
    {
        id: "Spooky_Text",
        name: "Spooky Text",
        description: "Read and type text visible only via motion contrast",
        gaps: ["G2"],
        answerType: "Text entry",
        generative: true
    },
    {
        id: "Static_Jigsaw",
        name: "Static Jigsaw",
        description: "Drag and drop static pieces to complete a jigsaw puzzle",
        gaps: ["G4", "G5"],
        answerType: "Drag-and-drop",
        generative: true
    },
    {
        id: "Structure_From_Motion",
        name: "Structure From Motion",
        description: "Select GIF cells whose dot motion reflects the same rigid 3D shape",
        gaps: ["G2"],
        answerType: "Select",
        generative: true
    },
    {
        id: "Subway_Paths",
        name: "Subway Paths",
        description: "Select maps with the specified count of valid routes under stamp rules",
        gaps: ["G3", "G4"],
        answerType: "Select",
        generative: true
    },
    {
        id: "Temporal_Object_Continuity",
        name: "Temporal Object Continuity",
        description: "Select GIF cells where identity changes behind occluders",
        gaps: ["G2", "G4"],
        answerType: "Select",
        generative: true
    },
    {
        id: "Trajectory_Recovery",
        name: "Trajectory Recovery",
        description: "Watch a reference trajectory GIF; select matching trajectory plots",
        gaps: ["G2", "G4"],
        answerType: "Select",
        generative: true
    }
];

// Results data from Table 2 in the paper
const resultsData = [
    { type: "3D_Viewpoint", human: 100.0, gpt52: 0.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Backmost_Layer", human: 100.0, gpt52: 20.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Box_Folding", human: 100.0, gpt52: 20.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Color_Counting", human: 100.0, gpt52: 40.0, gemini3flash: 5.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 5.0 },
    { type: "Dice_Roll_Path", human: 100.0, gpt52: 0.0, gemini3flash: 15.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 5.0, qwen3: 15.0 },
    { type: "Dynamic_Jigsaw", human: 100.0, gpt52: 0.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Hole_Counting", human: 100.0, gpt52: 0.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Illusory_Ribbons", human: 100.0, gpt52: 0.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Layered_Stack", human: 100.0, gpt52: 0.0, gemini3flash: 10.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Mirror", human: 90.0, gpt52: 20.0, gemini3flash: 18.2, claudeopus: 0.0, gemini3pro: 9.1, doubao: 9.1, qwen3: 0.0 },
    { type: "Multi_Script", human: 100.0, gpt52: 0.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Occluded_Pattern_Counting", human: 100.0, gpt52: 20.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 5.0, doubao: 15.0, qwen3: 0.0 },
    { type: "Red_Dot", human: 100.0, gpt52: 0.0, gemini3flash: 15.0, claudeopus: 20.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Rotation_Match", human: 100.0, gpt52: 20.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Shadow_Direction", human: 100.0, gpt52: 20.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Shadow_Plausible", human: 100.0, gpt52: 0.0, gemini3flash: 12.5, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Spooky_Circle", human: 100.0, gpt52: 0.0, gemini3flash: 5.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 5.0, qwen3: 0.0 },
    { type: "Spooky_Circle_Grid", human: 100.0, gpt52: 0.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 5.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Spooky_Jigsaw", human: 90.0, gpt52: 0.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Spooky_Shape_Grid", human: 100.0, gpt52: 0.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Spooky_Size", human: 100.0, gpt52: 0.0, gemini3flash: 5.0, claudeopus: 0.0, gemini3pro: 10.0, doubao: 0.0, qwen3: 5.0 },
    { type: "Spooky_Text", human: 100.0, gpt52: 0.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Static_Jigsaw", human: 100.0, gpt52: 0.0, gemini3flash: 0.0, claudeopus: 60.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Structure_From_Motion", human: 90.0, gpt52: 0.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 5.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Subway_Paths", human: 100.0, gpt52: 0.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Temporal_Object_Continuity", human: 100.0, gpt52: 0.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 },
    { type: "Trajectory_Recovery", human: 100.0, gpt52: 0.0, gemini3flash: 0.0, claudeopus: 0.0, gemini3pro: 0.0, doubao: 0.0, qwen3: 0.0 }
];

// Gap category names for display
const gapNames = {
    "G1": "Scene Structure",
    "G2": "Temporal",
    "G3": "Numerosity",
    "G4": "State Tracking",
    "G5": "Action"
};

// Gap colors
const gapColors = {
    "G1": "#3b82f6",
    "G2": "#8b5cf6",
    "G3": "#ec4899",
    "G4": "#f59e0b",
    "G5": "#10b981"
};

// Leaderboard data - models with their scores
const leaderboardData = [
    { rank: 0, model: "Human", org: "human", orgDisplay: "Human Baseline", score: 98.8, std: 0.2, reasoning: false, logo: "assets/logos/human.png" },
    { rank: 1, model: "GPT-5.2 (xHigh)", org: "openai", orgDisplay: "OpenAI", score: 5.9, std: 0.5, reasoning: true, logo: "assets/logos/openai.png" },
    { rank: 2, model: "Gemini-3-Flash (High)", org: "google", orgDisplay: "Google", score: 3.2, std: 0.3, reasoning: true, logo: "assets/logos/gemini.png" },
    { rank: 3, model: "Claude Opus 4.5 (Extended High)", org: "anthropic", orgDisplay: "Anthropic", score: 3.0, std: 1.4, reasoning: true, logo: "assets/logos/claude.png" },
    { rank: 4, model: "Gemini-3-Pro (High)", org: "google", orgDisplay: "Google", score: 1.3, std: 0.2, reasoning: true, logo: "assets/logos/gemini.png" },
    { rank: 5, model: "Doubao-Seed-1.8 (High)", org: "bytedance", orgDisplay: "ByteDance", score: 1.3, std: 0.6, reasoning: true, logo: "assets/logos/doubao.png" },
    { rank: 6, model: "Qwen3-VL-Plus (High)", org: "alibaba", orgDisplay: "Alibaba", score: 0.9, std: 0.3, reasoning: true, logo: "assets/logos/qwen.png" }
];

// ========================================
// Initialize on DOM ready
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    renderCaptchaGallery();
    renderLeaderboard();
    setupFilterButtons();
    setupLeaderboardFilters();
    setupScrollAnimations();
    setupNavigation();
    setupBarChartAnimation();
});

// ========================================
// Sticky Navigation
// ========================================
function setupNavigation() {
    const nav = document.getElementById('nav');
    const hero = document.querySelector('.hero');

    if (!nav || !hero) return;

    const heroHeight = hero.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > heroHeight * 0.5) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }
    }, { passive: true });
}

// ========================================
// Scroll Reveal Animations
// ========================================
function setupScrollAnimations() {
    // Elements to animate
    const animatedElements = document.querySelectorAll(
        '.captcha-card, .category-card, .insight-card, .reveal, .reveal-left, .reveal-scale'
    );

    if (!animatedElements.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible', 'active');
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
}

// ========================================
// Bar Chart Animation
// ========================================
function setupBarChartAnimation() {
    const barChart = document.querySelector('.bar-chart');
    if (!barChart) return;

    const bars = barChart.querySelectorAll('.bar');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                animateBars(bars);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(barChart);
}

function animateBars(bars) {
    bars.forEach((bar, index) => {
        const height = bar.style.getPropertyValue('--height');
        bar.style.setProperty('--target-height', `calc(${height} * 2.5)`);
        bar.style.height = '0';

        setTimeout(() => {
            bar.classList.add('animated');
            bar.style.height = `calc(${height} * 2.5)`;
        }, index * 100);
    });
}

// ========================================
// Render CAPTCHA Gallery
// ========================================
function renderCaptchaGallery() {
    const grid = document.getElementById('captcha-grid');
    if (!grid) return;

    grid.innerHTML = captchaData.map((captcha, index) => {
        const gapTags = captcha.gaps.map(g =>
            `<span class="captcha-tag gap-tag" style="background: linear-gradient(135deg, ${gapColors[g]}, ${adjustColor(gapColors[g], 30)})">${g}</span>`
        ).join('');

        // Use first GIF for preview (index 0)
        const gifPath = `assets/gifs/${captcha.id}_0.gif`;

        return `
            <div class="captcha-card" data-gaps="${captcha.gaps.join(',')}" style="animation-delay: ${index * 0.05}s">
                <div class="captcha-preview">
                    <img src="${gifPath}" alt="${captcha.name}" loading="lazy" onload="this.parentElement.classList.remove('loading')" onerror="this.style.display='none'">
                </div>
                <div class="captcha-info">
                    <div class="captcha-name">${captcha.name}</div>
                    <div class="captcha-desc">${captcha.description}</div>
                    <div class="captcha-tags">
                        ${gapTags}
                        <span class="captcha-tag">${captcha.answerType}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Add loading class to previews
    document.querySelectorAll('.captcha-preview').forEach(el => {
        el.classList.add('loading');
    });
}

// Helper function to adjust color brightness
function adjustColor(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
    ).toString(16).slice(1);
}

// ========================================
// Render Results Table
// ========================================
// ========================================
// Leaderboard Rendering
// ========================================
function renderLeaderboard(orgFilter = 'all', modeFilter = 'all') {
    const list = document.getElementById('leaderboard-list');
    if (!list) return;

    // Filter data
    let filtered = leaderboardData.filter(item => {
        const orgMatch = orgFilter === 'all' || item.org === orgFilter;
        const modeMatch = modeFilter === 'all' ||
            (modeFilter === 'reasoning' && item.reasoning) ||
            (modeFilter === 'standard' && !item.reasoning);
        return orgMatch && modeMatch;
    });

    // Generate HTML
    let html = filtered.map((item, index) => {
        const isHuman = item.org === 'human';
        const displayRank = isHuman ? '-' : item.rank;
        const barClass = isHuman ? 'bar-human' : `bar-${item.org}`;
        const badgeClass = item.reasoning ? 'badge-reasoning' : 'badge-standard';
        const badgeText = item.reasoning ? 'Reasoning' : 'Standard';

        return `
            <div class="leaderboard-row ${isHuman ? 'human-row' : ''}" data-org="${item.org}" data-mode="${item.reasoning ? 'reasoning' : 'standard'}">
                <div class="row-rank ${!isHuman && item.rank <= 3 ? 'top-3' : ''}">${displayRank}</div>
                <div class="row-model">
                    <img src="${item.logo}" alt="${item.model}" class="model-logo">
                    <span class="model-name">
                        ${item.model}
                        ${!isHuman ? `<span class="model-badge ${badgeClass}">${badgeText}</span>` : ''}
                    </span>
                </div>
                <div class="row-org">${item.orgDisplay}</div>
                <div class="row-score">
                    <span class="score-value">${item.score.toFixed(1)}%</span>
                    <div class="score-bar-container">
                        <div class="score-bar ${barClass}" style="width: 0%" data-width="${item.score}%"></div>
                    </div>
                </div>
                <button class="row-expand" aria-label="Expand details">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
            </div>
        `;
    }).join('');

    list.innerHTML = html;

    // Animate bars after render
    setTimeout(() => {
        list.querySelectorAll('.score-bar').forEach(bar => {
            bar.style.width = bar.dataset.width;
        });
    }, 100);

    // Setup expand buttons
    list.querySelectorAll('.row-expand').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const row = this.closest('.leaderboard-row');
            row.classList.toggle('expanded');
        });
    });
}

// ========================================
// Leaderboard Filter Setup
// ========================================
function setupLeaderboardFilters() {
    const orgFilters = document.querySelectorAll('.org-filter');
    const modeFilters = document.querySelectorAll('.mode-filter');

    let currentOrg = 'all';
    let currentMode = 'all';

    orgFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            orgFilters.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentOrg = this.dataset.org;
            renderLeaderboard(currentOrg, currentMode);
        });
    });

    modeFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            modeFilters.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentMode = this.dataset.mode;
            renderLeaderboard(currentOrg, currentMode);
        });
    });
}


// ========================================
// Filter Functionality
// ========================================
function setupFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.captcha-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;

            // Filter cards with animation
            cards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                    // Re-trigger animation
                    card.style.animation = 'none';
                    card.offsetHeight; // Trigger reflow
                    card.style.animation = null;
                } else {
                    const cardGaps = card.dataset.gaps.split(',');
                    if (cardGaps.includes(filter)) {
                        card.classList.remove('hidden');
                        card.style.animation = 'none';
                        card.offsetHeight;
                        card.style.animation = null;
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
}

// ========================================
// Copy BibTeX
// ========================================
function copyBibtex() {
    const bibtex = `@article{liu2026nextgen,
  title={Next-Gen CAPTCHAs: Leveraging the Cognitive Gap for
         Scalable and Diverse GUI-Agent Defense},
  author={Liu, Jiacheng and Luo, Yaxin and Cui, Jiacheng and
          Shang, Xinyi and Zhao, Xiaohan and Shen, Zhiqiang},
  year={2026}
}`;

    navigator.clipboard.writeText(bibtex).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ========================================
// Smooth scroll for anchor links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.getElementById('nav')?.offsetHeight || 0;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Parallax effect for hero orbs (subtle)
// ========================================
window.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.hero-orb');
    if (!orbs.length) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    orbs.forEach((orb, index) => {
        const factor = (index + 1) * 0.5;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
}, { passive: true });
