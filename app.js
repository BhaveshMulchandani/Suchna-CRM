// CRM Application JavaScript

// Application State
const AppState = {
    currentUser: null,
    currentSection: 'dashboard',
    data: {
        users: [],
        contacts: [],
        leads: [],
        deals: [],
        activities: [],
        dashboardData: {}
    }
};

// Initialize sample data
const initializeData = () => {
    AppState.data = {
        users: [
            {
                id: 1,
                username: "admin",
                email: "admin@crm.com",
                role: "admin",
                firstName: "Admin",
                lastName: "User",
                password: "admin123",
                createdAt: "2024-01-01T00:00:00"
            },
            {
                id: 2,
                username: "john_sales",
                email: "john@crm.com",
                role: "sales_rep",
                firstName: "John",
                lastName: "Sales",
                password: "sales123",
                createdAt: "2024-01-01T00:00:00"
            },
            {
                id: 3,
                username: "sarah_manager",
                email: "sarah@crm.com",
                role: "manager",
                firstName: "Sarah",
                lastName: "Manager",
                password: "manager123",
                createdAt: "2024-01-01T00:00:00"
            }
        ],
        contacts: [
            {
                id: 1,
                firstName: "Alice",
                lastName: "Johnson",
                company: "TechCorp Solutions",
                title: "CTO",
                phone: "+1-555-0101",
                email: "alice.johnson@techcorp.com",
                address: "100 Tech Drive, Silicon Valley, CA 94025",
                tags: ["enterprise", "decision-maker"],
                notes: "Interested in our enterprise solution. Has budget approval authority.",
                source: "website",
                ownerId: 2,
                createdAt: "2024-01-15T09:00:00",
                lastActivity: "2024-01-20T14:30:00"
            },
            {
                id: 2,
                firstName: "Robert",
                lastName: "Chen",
                company: "DataFlow Inc",
                title: "VP Marketing",
                phone: "+1-555-0102",
                email: "robert.chen@dataflow.com",
                address: "200 Data Street, Austin, TX 78701",
                tags: ["prospect", "marketing"],
                notes: "Looking for marketing automation tools. Decision timeline Q2.",
                source: "referral",
                ownerId: 1,
                createdAt: "2024-01-18T11:15:00",
                lastActivity: "2024-01-22T10:00:00"
            },
            {
                id: 3,
                firstName: "Emily",
                lastName: "Rodriguez",
                company: "Global Dynamics",
                title: "Operations Manager",
                phone: "+1-555-0103",
                email: "emily.rodriguez@globaldynamics.com",
                address: "300 Business Blvd, Chicago, IL 60601",
                tags: ["qualified", "operations"],
                notes: "Needs scalable solution for team of 50+. Budget allocated.",
                source: "campaign",
                ownerId: 2,
                createdAt: "2024-01-12T16:20:00",
                lastActivity: "2024-01-19T13:45:00"
            },
            {
                id: 4,
                firstName: "Michael",
                lastName: "Thompson",
                company: "InnovateNow",
                title: "CEO",
                phone: "+1-555-0104",
                email: "michael.thompson@innovatenow.com",
                address: "400 Innovation Way, Seattle, WA 98101",
                tags: ["enterprise", "ceo"],
                notes: "Startup looking for growth tools. Limited budget but high potential.",
                source: "social_media",
                ownerId: 1,
                createdAt: "2024-01-10T08:30:00",
                lastActivity: "2024-01-21T15:20:00"
            },
            {
                id: 5,
                firstName: "Jessica",
                lastName: "Park",
                company: "HealthFirst Medical",
                title: "IT Director",
                phone: "+1-555-0105",
                email: "jessica.park@healthfirst.com",
                address: "500 Medical Center Dr, Boston, MA 02101",
                tags: ["healthcare", "it-decision-maker"],
                notes: "Compliance requirements are critical. HIPAA certification needed.",
                source: "trade_show",
                ownerId: 3,
                createdAt: "2024-01-14T12:00:00",
                lastActivity: "2024-01-18T16:15:00"
            }
        ],
        leads: [
            {
                id: 1,
                firstName: "David",
                lastName: "Wilson",
                company: "StartupXYZ",
                phone: "+1-555-0201",
                email: "david.wilson@startupxyz.com",
                status: "new",
                score: "warm",
                source: "website",
                value: 25000,
                ownerId: 2,
                createdAt: "2024-01-22T14:30:00",
                notes: "Downloaded whitepaper, visited pricing page multiple times"
            },
            {
                id: 2,
                firstName: "Lisa",
                lastName: "Garcia",
                company: "Enterprise Corp",
                phone: "+1-555-0202",
                email: "lisa.garcia@enterprisecorp.com",
                status: "contacted",
                score: "hot",
                source: "referral",
                value: 85000,
                ownerId: 1,
                createdAt: "2024-01-20T10:15:00",
                notes: "Referred by existing client. Very interested, needs demo scheduled"
            },
            {
                id: 3,
                firstName: "James",
                lastName: "Miller",
                company: "TechStart",
                phone: "+1-555-0203",
                email: "james.miller@techstart.com",
                status: "qualified",
                score: "hot",
                source: "campaign",
                value: 45000,
                ownerId: 2,
                createdAt: "2024-01-19T09:45:00",
                notes: "Attended webinar, has authority and budget confirmed"
            },
            {
                id: 4,
                firstName: "Maria",
                lastName: "Lopez",
                company: "Solutions Plus",
                phone: "+1-555-0204",
                email: "maria.lopez@solutionsplus.com",
                status: "contacted",
                score: "cold",
                source: "social_media",
                value: 15000,
                ownerId: 3,
                createdAt: "2024-01-17T13:20:00",
                notes: "Initial contact made, waiting for response from decision maker"
            }
        ],
        deals: [
            {
                id: 1,
                name: "TechCorp Enterprise License",
                contactId: 1,
                value: 125000,
                probability: 85,
                stage: "negotiation",
                expectedCloseDate: "2024-03-15",
                ownerId: 2,
                createdAt: "2024-01-15T09:00:00",
                notes: "Contract terms under review. Legal department involved."
            },
            {
                id: 2,
                name: "DataFlow Marketing Suite",
                contactId: 2,
                value: 65000,
                probability: 60,
                stage: "proposal",
                expectedCloseDate: "2024-04-30",
                ownerId: 1,
                createdAt: "2024-01-18T11:15:00",
                notes: "Proposal submitted, waiting for stakeholder review"
            },
            {
                id: 3,
                name: "Global Dynamics Implementation",
                contactId: 3,
                value: 95000,
                probability: 75,
                stage: "negotiation",
                expectedCloseDate: "2024-03-30",
                ownerId: 2,
                createdAt: "2024-01-12T16:20:00",
                notes: "Pricing finalized, discussing implementation timeline"
            },
            {
                id: 4,
                name: "InnovateNow Starter Package",
                contactId: 4,
                value: 35000,
                probability: 40,
                stage: "qualification",
                expectedCloseDate: "2024-05-15",
                ownerId: 1,
                createdAt: "2024-01-10T08:30:00",
                notes: "Budget constraints being discussed with investors"
            },
            {
                id: 5,
                name: "HealthFirst HIPAA Solution",
                contactId: 5,
                value: 110000,
                probability: 70,
                stage: "proposal",
                expectedCloseDate: "2024-04-15",
                ownerId: 3,
                createdAt: "2024-01-14T12:00:00",
                notes: "Compliance requirements being addressed in proposal"
            }
        ],
        activities: [
            {
                id: 1,
                type: "call",
                subject: "Discovery Call",
                description: "Discussed current challenges and requirements",
                relatedTo: "contact",
                relatedId: 1,
                ownerId: 2,
                scheduledDate: "2024-01-20T14:30:00",
                completed: true,
                createdAt: "2024-01-20T14:30:00"
            },
            {
                id: 2,
                type: "email",
                subject: "Proposal Follow-up",
                description: "Sent proposal document and pricing details",
                relatedTo: "deal",
                relatedId: 2,
                ownerId: 1,
                scheduledDate: "2024-01-22T10:00:00",
                completed: true,
                createdAt: "2024-01-22T10:00:00"
            },
            {
                id: 3,
                type: "meeting",
                subject: "Demo Presentation",
                description: "Product demonstration scheduled",
                relatedTo: "lead",
                relatedId: 2,
                ownerId: 1,
                scheduledDate: "2024-01-25T15:00:00",
                completed: false,
                createdAt: "2024-01-23T09:15:00"
            },
            {
                id: 4,
                type: "note",
                subject: "Budget Discussion",
                description: "Client confirmed budget allocation for Q2 implementation",
                relatedTo: "deal",
                relatedId: 3,
                ownerId: 2,
                scheduledDate: "2024-01-19T13:45:00",
                completed: true,
                createdAt: "2024-01-19T13:45:00"
            }
        ],
        dashboardData: {
            kpis: {
                totalContacts: 25,
                activeLeads: 12,
                dealsInPipeline: 8,
                revenueThisMonth: 45000
            },
            pipelineData: {
                prospecting: 1,
                qualification: 1,
                proposal: 2,
                negotiation: 2,
                closed_won: 0,
                closed_lost: 0
            },
            revenueData: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                data: [85000, 92000, 78000, 105000, 115000, 98000, 125000, 110000, 135000, 128000, 145000, 152000]
            },
            leadSourceData: {
                labels: ["Website", "Referral", "Campaign", "Social Media", "Trade Show"],
                data: [35, 25, 20, 15, 5]
            },
            activityData: {
                labels: ["Calls", "Emails", "Meetings", "Notes"],
                data: [45, 38, 22, 31]
            }
        }
    };
};

// Utility Functions
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

const generateId = () => {
    return Math.max(...AppState.data.contacts.map(c => c.id), 
                   ...AppState.data.leads.map(l => l.id),
                   ...AppState.data.deals.map(d => d.id),
                   ...AppState.data.activities.map(a => a.id), 0) + 1;
};

const getOwnerName = (ownerId) => {
    const owner = AppState.data.users.find(u => u.id === ownerId);
    return owner ? `${owner.firstName} ${owner.lastName}` : 'Unknown';
};

const getContactName = (contactId) => {
    const contact = AppState.data.contacts.find(c => c.id === contactId);
    return contact ? `${contact.firstName} ${contact.lastName}` : 'Unknown';
};

const getRelatedRecordName = (relatedTo, relatedId) => {
    if (relatedTo === 'contact') {
        return getContactName(relatedId);
    } else if (relatedTo === 'lead') {
        const lead = AppState.data.leads.find(l => l.id === relatedId);
        return lead ? `${lead.firstName} ${lead.lastName}` : 'Unknown';
    } else if (relatedTo === 'deal') {
        const deal = AppState.data.deals.find(d => d.id === relatedId);
        return deal ? deal.name : 'Unknown';
    }
    return 'Unknown';
};

// Authentication
const AuthModule = {
    showAuthModal() {
        const modal = document.getElementById('authModal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.style.display = 'flex';
        }
    },

    hideAuthModal() {
        const modal = document.getElementById('authModal');
        if (modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none';
        }
    },

    toggleAuthMode() {
        const title = document.getElementById('authTitle');
        const submitBtn = document.getElementById('authSubmit');
        const toggleBtn = document.getElementById('toggleAuth');
        const registerFields = document.getElementById('registerFields');
        
        if (title && submitBtn && toggleBtn && registerFields) {
            if (title.textContent === 'Login to CRM') {
                title.textContent = 'Register for CRM';
                submitBtn.textContent = 'Register';
                toggleBtn.textContent = 'Login';
                registerFields.style.display = 'block';
            } else {
                title.textContent = 'Login to CRM';
                submitBtn.textContent = 'Login';
                toggleBtn.textContent = 'Register';
                registerFields.style.display = 'none';
            }
        }
    },

    authenticate(username, password) {
        console.log('Attempting to authenticate:', username, password);
        const user = AppState.data.users.find(u => u.username === username && u.password === password);
        console.log('User found:', user);
        
        if (user) {
            AppState.currentUser = user;
            this.hideAuthModal();
            
            const app = document.getElementById('app');
            const currentUserEl = document.getElementById('currentUser');
            
            if (app) app.classList.remove('hidden');
            if (currentUserEl) currentUserEl.textContent = `${user.firstName} ${user.lastName}`;
            
            UIModule.showSection('dashboard');
            return true;
        }
        return false;
    },

    register(userData) {
        const newUser = {
            id: Math.max(...AppState.data.users.map(u => u.id), 0) + 1,
            username: userData.username,
            email: userData.email,
            password: userData.password,
            firstName: userData.firstName,
            lastName: userData.lastName,
            role: userData.role,
            createdAt: new Date().toISOString()
        };
        
        AppState.data.users.push(newUser);
        return this.authenticate(userData.username, userData.password);
    },

    logout() {
        AppState.currentUser = null;
        const app = document.getElementById('app');
        if (app) app.classList.add('hidden');
        
        this.showAuthModal();
        
        const authForm = document.getElementById('authForm');
        if (authForm) authForm.reset();
    }
};

// UI Module
const UIModule = {
    showSection(sectionName) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Remove active class from nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Show selected section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Add active class to corresponding nav link
        const navLink = document.querySelector(`[data-section="${sectionName}"]`);
        if (navLink) {
            navLink.classList.add('active');
        }
        
        AppState.currentSection = sectionName;
        
        // Initialize section-specific content
        switch(sectionName) {
            case 'dashboard':
                DashboardModule.init();
                break;
            case 'contacts':
                ContactsModule.init();
                break;
            case 'leads':
                LeadsModule.init();
                break;
            case 'deals':
                DealsModule.init();
                break;
            case 'activities':
                ActivitiesModule.init();
                break;
            case 'reports':
                ReportsModule.init();
                break;
        }
    },

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.toggle('show');
        }
    }
};

// Dashboard Module
const DashboardModule = {
    charts: {},

    init() {
        console.log('Initializing dashboard');
        this.updateKPIs();
        
        // Wait for DOM to be ready before initializing charts
        setTimeout(() => {
            this.initCharts();
        }, 100);
    },

    updateKPIs() {
        const totalContacts = document.getElementById('totalContacts');
        const activeLeads = document.getElementById('activeLeads');
        const dealsInPipeline = document.getElementById('dealsInPipeline');
        const revenueThisMonth = document.getElementById('revenueThisMonth');
        
        if (totalContacts) totalContacts.textContent = AppState.data.contacts.length;
        if (activeLeads) activeLeads.textContent = AppState.data.leads.filter(l => l.status !== 'lost').length;
        if (dealsInPipeline) dealsInPipeline.textContent = AppState.data.deals.filter(d => !['closed_won', 'closed_lost'].includes(d.stage)).length;
        
        const totalRevenue = AppState.data.deals
            .filter(d => d.stage === 'closed_won')
            .reduce((sum, deal) => sum + deal.value, 0);
        if (revenueThisMonth) revenueThisMonth.textContent = formatCurrency(totalRevenue);
    },

    initCharts() {
        console.log('Initializing charts');
        this.initPipelineChart();
        this.initRevenueChart();
        this.initLeadSourceChart();
        this.initActivityChart();
    },

    initPipelineChart() {
        const ctx = document.getElementById('pipelineChart');
        if (!ctx) return;
        
        if (this.charts.pipeline) {
            this.charts.pipeline.destroy();
        }

        const pipelineData = this.getPipelineData();
        
        this.charts.pipeline = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Prospecting', 'Qualification', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'],
                datasets: [{
                    label: 'Deals',
                    data: [
                        pipelineData.prospecting,
                        pipelineData.qualification,
                        pipelineData.proposal,
                        pipelineData.negotiation,
                        pipelineData.closed_won,
                        pipelineData.closed_lost
                    ],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    },

    initRevenueChart() {
        const ctx = document.getElementById('revenueChart');
        if (!ctx) return;
        
        if (this.charts.revenue) {
            this.charts.revenue.destroy();
        }
        
        this.charts.revenue = new Chart(ctx, {
            type: 'line',
            data: {
                labels: AppState.data.dashboardData.revenueData.labels,
                datasets: [{
                    label: 'Revenue',
                    data: AppState.data.dashboardData.revenueData.data,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return formatCurrency(value);
                            }
                        }
                    }
                }
            }
        });
    },

    initLeadSourceChart() {
        const ctx = document.getElementById('leadSourceChart');
        if (!ctx) return;
        
        if (this.charts.leadSource) {
            this.charts.leadSource.destroy();
        }
        
        this.charts.leadSource = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: AppState.data.dashboardData.leadSourceData.labels,
                datasets: [{
                    data: AppState.data.dashboardData.leadSourceData.data,
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    },

    initActivityChart() {
        const ctx = document.getElementById('activityChart');
        if (!ctx) return;
        
        if (this.charts.activity) {
            this.charts.activity.destroy();
        }
        
        this.charts.activity = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: AppState.data.dashboardData.activityData.labels,
                datasets: [{
                    label: 'Activities',
                    data: AppState.data.dashboardData.activityData.data,
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true
                    }
                }
            }
        });
    },

    getPipelineData() {
        const stages = ['prospecting', 'qualification', 'proposal', 'negotiation', 'closed_won', 'closed_lost'];
        const data = {};
        
        stages.forEach(stage => {
            data[stage] = AppState.data.deals.filter(deal => deal.stage === stage).length;
        });
        
        return data;
    }
};

// Contacts Module
const ContactsModule = {
    init() {
        this.renderContacts();
        this.setupFilters();
    },

    renderContacts(filteredContacts = null) {
        const contacts = filteredContacts || AppState.data.contacts;
        const tbody = document.getElementById('contactsTableBody');
        
        if (tbody) {
            tbody.innerHTML = contacts.map(contact => `
                <tr>
                    <td>${contact.firstName} ${contact.lastName}</td>
                    <td>${contact.company}</td>
                    <td>${contact.email}</td>
                    <td>${contact.phone}</td>
                    <td>${contact.source}</td>
                    <td>${getOwnerName(contact.ownerId)}</td>
                    <td>
                        <button class="btn btn--sm btn--outline action-btn" onclick="ContactsModule.editContact(${contact.id})">Edit</button>
                        <button class="btn btn--sm btn--outline action-btn" onclick="ContactsModule.deleteContact(${contact.id})">Delete</button>
                    </td>
                </tr>
            `).join('');
        }
    },

    setupFilters() {
        const searchInput = document.getElementById('contactSearch');
        const sourceFilter = document.getElementById('contactFilter');
        
        if (searchInput) searchInput.addEventListener('input', () => this.applyFilters());
        if (sourceFilter) sourceFilter.addEventListener('change', () => this.applyFilters());
    },

    applyFilters() {
        const searchInput = document.getElementById('contactSearch');
        const sourceFilter = document.getElementById('contactFilter');
        
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const sourceFilterValue = sourceFilter ? sourceFilter.value : '';
        
        let filtered = AppState.data.contacts.filter(contact => {
            const matchesSearch = !searchTerm || 
                contact.firstName.toLowerCase().includes(searchTerm) ||
                contact.lastName.toLowerCase().includes(searchTerm) ||
                contact.company.toLowerCase().includes(searchTerm) ||
                contact.email.toLowerCase().includes(searchTerm);
            
            const matchesSource = !sourceFilterValue || contact.source === sourceFilterValue;
            
            return matchesSearch && matchesSource;
        });
        
        this.renderContacts(filtered);
    },

    showAddModal() {
        const modalTitle = document.getElementById('contactModalTitle');
        const form = document.getElementById('contactForm');
        const modal = document.getElementById('contactModal');
        
        if (modalTitle) modalTitle.textContent = 'Add Contact';
        if (form) form.reset();
        
        const contactId = document.getElementById('contactId');
        if (contactId) contactId.value = '';
        
        if (modal) modal.classList.remove('hidden');
    },

    editContact(contactId) {
        const contact = AppState.data.contacts.find(c => c.id === contactId);
        if (!contact) return;
        
        const elements = {
            modalTitle: document.getElementById('contactModalTitle'),
            contactIdField: document.getElementById('contactId'),
            firstName: document.getElementById('contactFirstName'),
            lastName: document.getElementById('contactLastName'),
            company: document.getElementById('contactCompany'),
            title: document.getElementById('contactTitle'),
            email: document.getElementById('contactEmail'),
            phone: document.getElementById('contactPhone'),
            address: document.getElementById('contactAddress'),
            source: document.getElementById('contactSource'),
            tags: document.getElementById('contactTags'),
            notes: document.getElementById('contactNotes'),
            modal: document.getElementById('contactModal')
        };
        
        if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Contact';
        if (elements.contactIdField) elements.contactIdField.value = contact.id;
        if (elements.firstName) elements.firstName.value = contact.firstName;
        if (elements.lastName) elements.lastName.value = contact.lastName;
        if (elements.company) elements.company.value = contact.company;
        if (elements.title) elements.title.value = contact.title || '';
        if (elements.email) elements.email.value = contact.email;
        if (elements.phone) elements.phone.value = contact.phone || '';
        if (elements.address) elements.address.value = contact.address || '';
        if (elements.source) elements.source.value = contact.source;
        if (elements.tags) elements.tags.value = contact.tags ? contact.tags.join(', ') : '';
        if (elements.notes) elements.notes.value = contact.notes || '';
        if (elements.modal) elements.modal.classList.remove('hidden');
    },

    saveContact() {
        const contactIdField = document.getElementById('contactId');
        const contactId = contactIdField ? contactIdField.value : '';
        
        const contactData = {
            firstName: document.getElementById('contactFirstName')?.value || '',
            lastName: document.getElementById('contactLastName')?.value || '',
            company: document.getElementById('contactCompany')?.value || '',
            title: document.getElementById('contactTitle')?.value || '',
            email: document.getElementById('contactEmail')?.value || '',
            phone: document.getElementById('contactPhone')?.value || '',
            address: document.getElementById('contactAddress')?.value || '',
            source: document.getElementById('contactSource')?.value || 'website',
            tags: (document.getElementById('contactTags')?.value || '').split(',').map(tag => tag.trim()).filter(tag => tag),
            notes: document.getElementById('contactNotes')?.value || '',
            ownerId: AppState.currentUser.id,
            lastActivity: new Date().toISOString()
        };
        
        if (contactId) {
            // Edit existing contact
            const index = AppState.data.contacts.findIndex(c => c.id == contactId);
            if (index !== -1) {
                AppState.data.contacts[index] = { ...AppState.data.contacts[index], ...contactData };
            }
        } else {
            // Add new contact
            const newContact = {
                id: generateId(),
                ...contactData,
                createdAt: new Date().toISOString()
            };
            AppState.data.contacts.push(newContact);
        }
        
        this.hideModal();
        this.renderContacts();
        DashboardModule.updateKPIs();
    },

    deleteContact(contactId) {
        if (confirm('Are you sure you want to delete this contact?')) {
            AppState.data.contacts = AppState.data.contacts.filter(c => c.id !== contactId);
            this.renderContacts();
            DashboardModule.updateKPIs();
        }
    },

    hideModal() {
        const modal = document.getElementById('contactModal');
        if (modal) modal.classList.add('hidden');
    }
};

// Leads Module
const LeadsModule = {
    init() {
        this.renderLeads();
        this.setupFilters();
    },

    renderLeads(filteredLeads = null) {
        const leads = filteredLeads || AppState.data.leads;
        const tbody = document.getElementById('leadsTableBody');
        
        if (tbody) {
            tbody.innerHTML = leads.map(lead => `
                <tr>
                    <td>${lead.firstName} ${lead.lastName}</td>
                    <td>${lead.company}</td>
                    <td>${lead.email}</td>
                    <td><span class="status-badge status-badge--${lead.status}">${lead.status}</span></td>
                    <td><span class="score-badge score-badge--${lead.score}">${lead.score}</span></td>
                    <td>${formatCurrency(lead.value)}</td>
                    <td>${lead.source}</td>
                    <td>
                        <button class="btn btn--sm btn--outline action-btn" onclick="LeadsModule.editLead(${lead.id})">Edit</button>
                        <button class="btn btn--sm btn--primary action-btn" onclick="LeadsModule.convertLead(${lead.id})">Convert</button>
                        <button class="btn btn--sm btn--outline action-btn" onclick="LeadsModule.deleteLead(${lead.id})">Delete</button>
                    </td>
                </tr>
            `).join('');
        }
    },

    setupFilters() {
        const searchInput = document.getElementById('leadSearch');
        const statusFilter = document.getElementById('leadStatusFilter');
        const scoreFilter = document.getElementById('leadScoreFilter');
        
        if (searchInput) searchInput.addEventListener('input', () => this.applyFilters());
        if (statusFilter) statusFilter.addEventListener('change', () => this.applyFilters());
        if (scoreFilter) scoreFilter.addEventListener('change', () => this.applyFilters());
    },

    applyFilters() {
        const searchInput = document.getElementById('leadSearch');
        const statusFilter = document.getElementById('leadStatusFilter');
        const scoreFilter = document.getElementById('leadScoreFilter');
        
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const statusFilterValue = statusFilter ? statusFilter.value : '';
        const scoreFilterValue = scoreFilter ? scoreFilter.value : '';
        
        let filtered = AppState.data.leads.filter(lead => {
            const matchesSearch = !searchTerm || 
                lead.firstName.toLowerCase().includes(searchTerm) ||
                lead.lastName.toLowerCase().includes(searchTerm) ||
                lead.company.toLowerCase().includes(searchTerm) ||
                lead.email.toLowerCase().includes(searchTerm);
            
            const matchesStatus = !statusFilterValue || lead.status === statusFilterValue;
            const matchesScore = !scoreFilterValue || lead.score === scoreFilterValue;
            
            return matchesSearch && matchesStatus && matchesScore;
        });
        
        this.renderLeads(filtered);
    },

    showAddModal() {
        const modalTitle = document.getElementById('leadModalTitle');
        const form = document.getElementById('leadForm');
        const convertBtn = document.getElementById('convertToContact');
        const modal = document.getElementById('leadModal');
        
        if (modalTitle) modalTitle.textContent = 'Add Lead';
        if (form) form.reset();
        if (convertBtn) convertBtn.style.display = 'none';
        
        const leadId = document.getElementById('leadId');
        if (leadId) leadId.value = '';
        
        if (modal) modal.classList.remove('hidden');
    },

    editLead(leadId) {
        const lead = AppState.data.leads.find(l => l.id === leadId);
        if (!lead) return;
        
        const elements = {
            modalTitle: document.getElementById('leadModalTitle'),
            leadIdField: document.getElementById('leadId'),
            firstName: document.getElementById('leadFirstName'),
            lastName: document.getElementById('leadLastName'),
            company: document.getElementById('leadCompany'),
            email: document.getElementById('leadEmail'),
            phone: document.getElementById('leadPhone'),
            status: document.getElementById('leadStatus'),
            score: document.getElementById('leadScore'),
            source: document.getElementById('leadSource'),
            value: document.getElementById('leadValue'),
            notes: document.getElementById('leadNotes'),
            convertBtn: document.getElementById('convertToContact'),
            modal: document.getElementById('leadModal')
        };
        
        if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Lead';
        if (elements.leadIdField) elements.leadIdField.value = lead.id;
        if (elements.firstName) elements.firstName.value = lead.firstName;
        if (elements.lastName) elements.lastName.value = lead.lastName;
        if (elements.company) elements.company.value = lead.company;
        if (elements.email) elements.email.value = lead.email;
        if (elements.phone) elements.phone.value = lead.phone || '';
        if (elements.status) elements.status.value = lead.status;
        if (elements.score) elements.score.value = lead.score;
        if (elements.source) elements.source.value = lead.source;
        if (elements.value) elements.value.value = lead.value;
        if (elements.notes) elements.notes.value = lead.notes || '';
        if (elements.convertBtn) elements.convertBtn.style.display = 'inline-block';
        if (elements.modal) elements.modal.classList.remove('hidden');
    },

    saveLead() {
        const leadIdField = document.getElementById('leadId');
        const leadId = leadIdField ? leadIdField.value : '';
        
        const leadData = {
            firstName: document.getElementById('leadFirstName')?.value || '',
            lastName: document.getElementById('leadLastName')?.value || '',
            company: document.getElementById('leadCompany')?.value || '',
            email: document.getElementById('leadEmail')?.value || '',
            phone: document.getElementById('leadPhone')?.value || '',
            status: document.getElementById('leadStatus')?.value || 'new',
            score: document.getElementById('leadScore')?.value || 'cold',
            source: document.getElementById('leadSource')?.value || 'website',
            value: parseInt(document.getElementById('leadValue')?.value) || 0,
            notes: document.getElementById('leadNotes')?.value || '',
            ownerId: AppState.currentUser.id
        };
        
        if (leadId) {
            // Edit existing lead
            const index = AppState.data.leads.findIndex(l => l.id == leadId);
            if (index !== -1) {
                AppState.data.leads[index] = { ...AppState.data.leads[index], ...leadData };
            }
        } else {
            // Add new lead
            const newLead = {
                id: generateId(),
                ...leadData,
                createdAt: new Date().toISOString()
            };
            AppState.data.leads.push(newLead);
        }
        
        this.hideModal();
        this.renderLeads();
        DashboardModule.updateKPIs();
    },

    convertLead(leadId) {
        const lead = AppState.data.leads.find(l => l.id === leadId);
        if (!lead) return;
        
        if (confirm(`Convert lead ${lead.firstName} ${lead.lastName} to a contact?`)) {
            // Create new contact from lead
            const newContact = {
                id: generateId(),
                firstName: lead.firstName,
                lastName: lead.lastName,
                company: lead.company,
                title: '',
                email: lead.email,
                phone: lead.phone,
                address: '',
                tags: ['converted-lead'],
                notes: lead.notes,
                source: lead.source,
                ownerId: lead.ownerId,
                createdAt: new Date().toISOString(),
                lastActivity: new Date().toISOString()
            };
            
            AppState.data.contacts.push(newContact);
            
            // Remove lead
            AppState.data.leads = AppState.data.leads.filter(l => l.id !== leadId);
            
            this.renderLeads();
            DashboardModule.updateKPIs();
            
            alert('Lead successfully converted to contact!');
        }
    },

    deleteLead(leadId) {
        if (confirm('Are you sure you want to delete this lead?')) {
            AppState.data.leads = AppState.data.leads.filter(l => l.id !== leadId);
            this.renderLeads();
            DashboardModule.updateKPIs();
        }
    },

    hideModal() {
        const modal = document.getElementById('leadModal');
        if (modal) modal.classList.add('hidden');
    }
};

// Deals Module
const DealsModule = {
    init() {
        this.renderPipeline();
        this.setupDragAndDrop();
        this.populateContactsDropdown();
    },

    renderPipeline() {
        const stages = ['prospecting', 'qualification', 'proposal', 'negotiation', 'closed_won', 'closed_lost'];
        
        stages.forEach(stage => {
            const container = document.getElementById(`${stage}-deals`);
            if (!container) return;
            
            const deals = AppState.data.deals.filter(deal => deal.stage === stage);
            
            container.innerHTML = deals.map(deal => `
                <div class="deal-card" draggable="true" data-deal-id="${deal.id}">
                    <h4>${deal.name}</h4>
                    <div class="deal-value">${formatCurrency(deal.value)}</div>
                    <div class="deal-probability">${deal.probability}% probability</div>
                    <div class="deal-date">Close: ${formatDate(deal.expectedCloseDate)}</div>
                    <div style="margin-top: 8px;">
                        <button class="btn btn--sm btn--outline action-btn" onclick="DealsModule.editDeal(${deal.id})">Edit</button>
                        <button class="btn btn--sm btn--outline action-btn" onclick="DealsModule.deleteDeal(${deal.id})">Delete</button>
                    </div>
                </div>
            `).join('');
        });
        
        // Re-setup drag and drop after rendering
        this.setupDragAndDrop();
    },

    setupDragAndDrop() {
        // Need to re-setup event listeners after rendering
        setTimeout(() => {
            const dealCards = document.querySelectorAll('.deal-card');
            const stages = document.querySelectorAll('.pipeline-stage');
            
            dealCards.forEach(card => {
                card.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('text/plain', card.dataset.dealId);
                    card.classList.add('dragging');
                });
                
                card.addEventListener('dragend', () => {
                    card.classList.remove('dragging');
                });
            });
            
            stages.forEach(stage => {
                stage.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    stage.classList.add('drag-over');
                });
                
                stage.addEventListener('dragleave', () => {
                    stage.classList.remove('drag-over');
                });
                
                stage.addEventListener('drop', (e) => {
                    e.preventDefault();
                    stage.classList.remove('drag-over');
                    
                    const dealId = parseInt(e.dataTransfer.getData('text/plain'));
                    const newStage = stage.dataset.stage;
                    
                    this.moveDeal(dealId, newStage);
                });
            });
        }, 100);
    },

    moveDeal(dealId, newStage) {
        const deal = AppState.data.deals.find(d => d.id === dealId);
        if (deal && deal.stage !== newStage) {
            deal.stage = newStage;
            
            // Update probability based on stage
            const probabilityMap = {
                prospecting: 10,
                qualification: 25,
                proposal: 50,
                negotiation: 75,
                closed_won: 100,
                closed_lost: 0
            };
            
            deal.probability = probabilityMap[newStage] || deal.probability;
            
            this.renderPipeline();
            DashboardModule.updateKPIs();
            DashboardModule.initPipelineChart();
        }
    },

    populateContactsDropdown() {
        const dropdown = document.getElementById('dealContact');
        if (dropdown) {
            dropdown.innerHTML = '<option value="">Select Contact</option>' +
                AppState.data.contacts.map(contact => 
                    `<option value="${contact.id}">${contact.firstName} ${contact.lastName} - ${contact.company}</option>`
                ).join('');
        }
    },

    showAddModal() {
        const modalTitle = document.getElementById('dealModalTitle');
        const form = document.getElementById('dealForm');
        const modal = document.getElementById('dealModal');
        
        if (modalTitle) modalTitle.textContent = 'Add Deal';
        if (form) form.reset();
        
        const dealId = document.getElementById('dealId');
        if (dealId) dealId.value = '';
        
        this.populateContactsDropdown();
        
        if (modal) modal.classList.remove('hidden');
    },

    editDeal(dealId) {
        const deal = AppState.data.deals.find(d => d.id === dealId);
        if (!deal) return;
        
        const elements = {
            modalTitle: document.getElementById('dealModalTitle'),
            dealIdField: document.getElementById('dealId'),
            name: document.getElementById('dealName'),
            contact: document.getElementById('dealContact'),
            value: document.getElementById('dealValue'),
            probability: document.getElementById('dealProbability'),
            stage: document.getElementById('dealStage'),
            closeDate: document.getElementById('dealCloseDate'),
            notes: document.getElementById('dealNotes'),
            modal: document.getElementById('dealModal')
        };
        
        if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Deal';
        if (elements.dealIdField) elements.dealIdField.value = deal.id;
        if (elements.name) elements.name.value = deal.name;
        if (elements.contact) elements.contact.value = deal.contactId;
        if (elements.value) elements.value.value = deal.value;
        if (elements.probability) elements.probability.value = deal.probability;
        if (elements.stage) elements.stage.value = deal.stage;
        if (elements.closeDate) elements.closeDate.value = deal.expectedCloseDate;
        if (elements.notes) elements.notes.value = deal.notes || '';
        
        this.populateContactsDropdown();
        
        if (elements.modal) elements.modal.classList.remove('hidden');
    },

    saveDeal() {
        const dealIdField = document.getElementById('dealId');
        const dealId = dealIdField ? dealIdField.value : '';
        
        const dealData = {
            name: document.getElementById('dealName')?.value || '',
            contactId: parseInt(document.getElementById('dealContact')?.value) || 0,
            value: parseInt(document.getElementById('dealValue')?.value) || 0,
            probability: parseInt(document.getElementById('dealProbability')?.value) || 0,
            stage: document.getElementById('dealStage')?.value || 'prospecting',
            expectedCloseDate: document.getElementById('dealCloseDate')?.value || '',
            notes: document.getElementById('dealNotes')?.value || '',
            ownerId: AppState.currentUser.id
        };
        
        if (dealId) {
            // Edit existing deal
            const index = AppState.data.deals.findIndex(d => d.id == dealId);
            if (index !== -1) {
                AppState.data.deals[index] = { ...AppState.data.deals[index], ...dealData };
            }
        } else {
            // Add new deal
            const newDeal = {
                id: generateId(),
                ...dealData,
                createdAt: new Date().toISOString()
            };
            AppState.data.deals.push(newDeal);
        }
        
        this.hideModal();
        this.renderPipeline();
        DashboardModule.updateKPIs();
        DashboardModule.initPipelineChart();
    },

    deleteDeal(dealId) {
        if (confirm('Are you sure you want to delete this deal?')) {
            AppState.data.deals = AppState.data.deals.filter(d => d.id !== dealId);
            this.renderPipeline();
            DashboardModule.updateKPIs();
            DashboardModule.initPipelineChart();
        }
    },

    hideModal() {
        const modal = document.getElementById('dealModal');
        if (modal) modal.classList.add('hidden');
    }
};

// Activities Module
const ActivitiesModule = {
    init() {
        this.renderActivities();
        this.setupFilters();
        this.populateRelatedRecords();
    },

    renderActivities(filteredActivities = null) {
        const activities = (filteredActivities || AppState.data.activities)
            .sort((a, b) => new Date(b.scheduledDate) - new Date(a.scheduledDate));
        
        const container = document.getElementById('activitiesTimeline');
        if (!container) return;
        
        container.innerHTML = activities.map(activity => {
            const iconMap = {
                call: '📞',
                email: '✉️',
                meeting: '🤝',
                note: '📝'
            };
            
            return `
                <div class="activity-item">
                    <div class="activity-icon activity-icon--${activity.type}">
                        ${iconMap[activity.type]}
                    </div>
                    <div class="activity-content">
                        <h4>${activity.subject}</h4>
                        <p>${activity.description}</p>
                        <div class="activity-meta">
                            ${activity.type.toUpperCase()} • ${getRelatedRecordName(activity.relatedTo, activity.relatedId)} • 
                            ${formatDateTime(activity.scheduledDate)} • 
                            ${getOwnerName(activity.ownerId)} •
                            <span class="status-badge ${activity.completed ? 'status-badge--qualified' : 'status-badge--new'}">
                                ${activity.completed ? 'Completed' : 'Pending'}
                            </span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    },

    setupFilters() {
        const typeFilter = document.getElementById('activityTypeFilter');
        if (typeFilter) {
            typeFilter.addEventListener('change', () => this.applyFilters());
        }
    },

    applyFilters() {
        const typeFilter = document.getElementById('activityTypeFilter');
        const typeFilterValue = typeFilter ? typeFilter.value : '';
        
        let filtered = AppState.data.activities.filter(activity => {
            return !typeFilterValue || activity.type === typeFilterValue;
        });
        
        this.renderActivities(filtered);
    },

    populateRelatedRecords() {
        const relatedToSelect = document.getElementById('activityRelatedTo');
        const relatedIdSelect = document.getElementById('activityRelatedId');
        
        if (!relatedToSelect || !relatedIdSelect) return;
        
        relatedToSelect.addEventListener('change', () => {
            const relatedTo = relatedToSelect.value;
            let options = '<option value="">Select Record</option>';
            
            if (relatedTo === 'contact') {
                options += AppState.data.contacts.map(contact => 
                    `<option value="${contact.id}">${contact.firstName} ${contact.lastName} - ${contact.company}</option>`
                ).join('');
            } else if (relatedTo === 'lead') {
                options += AppState.data.leads.map(lead => 
                    `<option value="${lead.id}">${lead.firstName} ${lead.lastName} - ${lead.company}</option>`
                ).join('');
            } else if (relatedTo === 'deal') {
                options += AppState.data.deals.map(deal => 
                    `<option value="${deal.id}">${deal.name}</option>`
                ).join('');
            }
            
            relatedIdSelect.innerHTML = options;
        });
    },

    showAddModal() {
        const modalTitle = document.getElementById('activityModalTitle');
        const form = document.getElementById('activityForm');
        const modal = document.getElementById('activityModal');
        
        if (modalTitle) modalTitle.textContent = 'Add Activity';
        if (form) form.reset();
        
        const activityId = document.getElementById('activityId');
        if (activityId) activityId.value = '';
        
        if (modal) modal.classList.remove('hidden');
        
        this.populateRelatedRecords();
    },

    saveActivity() {
        const activityIdField = document.getElementById('activityId');
        const activityId = activityIdField ? activityIdField.value : '';
        
        const activityData = {
            type: document.getElementById('activityType')?.value || 'note',
            subject: document.getElementById('activitySubject')?.value || '',
            description: document.getElementById('activityDescription')?.value || '',
            relatedTo: document.getElementById('activityRelatedTo')?.value || 'contact',
            relatedId: parseInt(document.getElementById('activityRelatedId')?.value) || 0,
            scheduledDate: document.getElementById('activityScheduledDate')?.value || new Date().toISOString(),
            completed: document.getElementById('activityCompleted')?.checked || false,
            ownerId: AppState.currentUser.id
        };
        
        if (activityId) {
            // Edit existing activity
            const index = AppState.data.activities.findIndex(a => a.id == activityId);
            if (index !== -1) {
                AppState.data.activities[index] = { ...AppState.data.activities[index], ...activityData };
            }
        } else {
            // Add new activity
            const newActivity = {
                id: generateId(),
                ...activityData,
                createdAt: new Date().toISOString()
            };
            AppState.data.activities.push(newActivity);
        }
        
        this.hideModal();
        this.renderActivities();
    },

    hideModal() {
        const modal = document.getElementById('activityModal');
        if (modal) modal.classList.add('hidden');
    }
};

// Reports Module
const ReportsModule = {
    init() {
        this.updateReports();
    },

    updateReports() {
        // Calculate total revenue
        const totalRevenue = AppState.data.deals
            .filter(deal => deal.stage === 'closed_won')
            .reduce((sum, deal) => sum + deal.value, 0);
        
        const totalRevenueEl = document.getElementById('totalRevenue');
        if (totalRevenueEl) totalRevenueEl.textContent = formatCurrency(totalRevenue);
        
        // Calculate average deal size
        const wonDeals = AppState.data.deals.filter(deal => deal.stage === 'closed_won');
        const avgDealSize = wonDeals.length > 0 ? totalRevenue / wonDeals.length : 0;
        
        const avgDealSizeEl = document.getElementById('avgDealSize');
        if (avgDealSizeEl) avgDealSizeEl.textContent = formatCurrency(avgDealSize);
        
        // Calculate conversion rate (for display purposes, use a sample rate)
        const conversionRate = 25.5; // Sample conversion rate
        
        const conversionRateEl = document.getElementById('conversionRate');
        if (conversionRateEl) conversionRateEl.textContent = `${conversionRate}%`;
        
        // Activity statistics
        const totalActivitiesEl = document.getElementById('totalActivities');
        if (totalActivitiesEl) totalActivitiesEl.textContent = AppState.data.activities.length;
        
        const completedActivitiesEl = document.getElementById('completedActivities');
        if (completedActivitiesEl) completedActivitiesEl.textContent = AppState.data.activities.filter(a => a.completed).length;
        
        const pendingActivitiesEl = document.getElementById('pendingActivities');
        if (pendingActivitiesEl) pendingActivitiesEl.textContent = AppState.data.activities.filter(a => !a.completed).length;
    }
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app');
    initializeData();
    
    // Auth form handler
    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Auth form submitted');
            
            const username = document.getElementById('username')?.value || '';
            const password = document.getElementById('password')?.value || '';
            
            console.log('Credentials:', username, password);
            
            const title = document.getElementById('authTitle');
            if (title && title.textContent === 'Login to CRM') {
                // Login
                if (AuthModule.authenticate(username, password)) {
                    console.log('Login successful');
                } else {
                    console.log('Login failed');
                    alert('Invalid credentials. Try: admin / admin123');
                }
            } else {
                // Register
                const userData = {
                    username,
                    password,
                    email: document.getElementById('email')?.value || '',
                    firstName: document.getElementById('firstName')?.value || '',
                    lastName: document.getElementById('lastName')?.value || '',
                    role: document.getElementById('role')?.value || 'sales_rep'
                };
                
                if (AuthModule.register(userData)) {
                    console.log('Registration successful');
                } else {
                    alert('Registration failed');
                }
            }
        });
    }
    
    // Auth modal controls
    const toggleAuth = document.getElementById('toggleAuth');
    if (toggleAuth) {
        toggleAuth.addEventListener('click', (e) => {
            e.preventDefault();
            AuthModule.toggleAuthMode();
        });
    }
    
    const closeAuth = document.getElementById('closeAuth');
    if (closeAuth) {
        closeAuth.addEventListener('click', (e) => {
            e.preventDefault();
            // Allow closing modal for demo purposes
            AuthModule.hideAuthModal();
            // Auto-login as admin for demo
            AuthModule.authenticate('admin', 'admin123');
        });
    }
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            if (section) {
                UIModule.showSection(section);
            }
        });
    });
    
    // Header buttons
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            UIModule.toggleSidebar();
        });
    }
    
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            AuthModule.logout();
        });
    }
    
    // Dashboard quick actions
    const addContactBtn = document.getElementById('addContactBtn');
    if (addContactBtn) {
        addContactBtn.addEventListener('click', () => {
            ContactsModule.showAddModal();
        });
    }
    
    const addLeadBtn = document.getElementById('addLeadBtn');
    if (addLeadBtn) {
        addLeadBtn.addEventListener('click', () => {
            LeadsModule.showAddModal();
        });
    }
    
    const addDealBtn = document.getElementById('addDealBtn');
    if (addDealBtn) {
        addDealBtn.addEventListener('click', () => {
            DealsModule.showAddModal();
        });
    }
    
    // Modal handlers
    const setupModalHandlers = (moduleName, Module) => {
        // Add button
        const addBtn = document.getElementById(`add${moduleName}Modal`);
        if (addBtn) {
            addBtn.addEventListener('click', () => Module.showAddModal());
        }
        
        // Close button
        const closeBtn = document.getElementById(`close${moduleName}Modal`);
        if (closeBtn) {
            closeBtn.addEventListener('click', () => Module.hideModal());
        }
        
        // Cancel button
        const cancelBtn = document.getElementById(`cancel${moduleName}`);
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => Module.hideModal());
        }
        
        // Form submission
        const form = document.getElementById(`${moduleName.toLowerCase()}Form`);
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                if (Module.saveLead) Module.saveLead();
                else if (Module.saveContact) Module.saveContact();
                else if (Module.saveDeal) Module.saveDeal();
                else if (Module.saveActivity) Module.saveActivity();
            });
        }
    };
    
    setupModalHandlers('Contact', ContactsModule);
    setupModalHandlers('Lead', LeadsModule);
    setupModalHandlers('Deal', DealsModule);
    setupModalHandlers('Activity', ActivitiesModule);
    
    // Show login modal initially
    console.log('Showing auth modal');
    AuthModule.showAuthModal();
});