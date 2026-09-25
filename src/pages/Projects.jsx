import React, { useState } from 'react';
import { Layers, Search, Server, Database, Code } from 'lucide-react';

const GithubIcon = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const PROJECTS_DATA = [
  {
    id: 'todo-app',
    title: 'To-Do-App',
    subtitle: 'Real-Time changes & Collaboration Platform',
    category: ['React, JavaScript, Todo App, Task Management, CRUD Operations, Responsive Design, Local Storage, React Hooks, UI/UX, Productivity, Frontend Development'],
    description: "A responsive Todo App built with React that helps users create, organize, update, and manage daily tasks efficiently. It features task creation, editing, deletion, and completion tracking with a clean, user-friendly interface to improve productivity.",
    tech: ['React', 'react-router-dom', 'JavaScript', 'CSS Flexbox', 'Local Storage'],
    
    github: 'https://sadiaather.github.io/to-do-task/',
    demo: '#',
    challenges: 'Implementing real-time updates and ensuring data persistence across sessions while maintaining a responsive and intuitive user interface.',
    solutions: 'Implemented real-time updates using React state management and local storage to persist tasks across sessions. Designed a collaborative interface that allows multiple users to interact with the task list simultaneously.',
    highlights: [
      
   
      'Created a beautiful interface using  React state logic.'
    ],
    schema: `const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  tasks: [{
    title: String,
    status: { type: String, enum: ['Todo', 'Progress', 'Done'] },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }],
  messages: [{
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
    timestamp: { type: Date, default: Date.now }
  }]
});`
  },
  {id: 'portfolio',
    title: 'Portfolio Website',
    subtitle: 'Curated showcase of my projects and skills',
    category: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
    description: 'A customer support ticketing system that allows users to submit support requests, track their status, and communicate with support agents. Built with React for the frontend and Node.js/Express for the backend, with MongoDB for data storage.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Frontend Development'],
    subtitle: 'A curated showcase of my projects and skills.',
    challenges: 'Designing a system that efficiently aggregates and displays my projects and skills while maintaining performance and responsiveness.',
    solutions: 'Utilized HTML, CSS, and JavaScript aggregation pipelines ($group, $project, $sort)and showcase my projects.',    
   
    
    github:'https://sadiaather.github.io/code-alpha-portfolio/',
    demo: '#' ,
    highlights: [
      
      'Fully responsive UI styled with CSS Grid and modern custom variables.'
      
    ],
    schema: `// Express routing for Stripe Checkout Session
router.post('/checkout', authMiddleware, async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body.items,
    success_url: '\${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: '\${process.env.CLIENT_URL}/cart',
  });
  res.json({ id: session.id });
});`
  },
  { id: 'counter app',
    title: 'Counter App',
    subtitle: 'Simple Interactive Counter Application',
     category: ['React', 'JavaScript', 'Frontend'],
    description: 'A simple and responsive Counter App built with React that allows users to increment, decrement, and reset the counter value. The project demonstrates React state management using Hooks (useState) and provides a clean, user-friendly interface.',
    tech: ['React, JavaScript,  Frontend Development'],
   
    challenges: 'Designing a system that efficiently increases or decreases counter values while maintaining performance and responsiveness.'                                                                                                                                          ,
    solutions: 'Utilized React state management with useState to handle counter value changes and implemented event handlers for incrementing, decrementing, and resetting the counter.',
    github: 'https://counter-app-beta-eight-30.vercel.app/',
    demo: '#',
    highlights: [
      'Dynamic charts powered by Chart.js reacting to user inputs.',
      'Mobile-first design with responsive sliding drawers for inputs.'
    ],
    schema: `//  Aggregation Pipeline for Weekly counter.aggregate([
  { $match: { userId: mongoose.Types.ObjectId(userId), date: { $gte: startDate } } },
  { $group: {
      _id: { $dayOfWeek: "$date" },
      totalCalories: { $sum: "$caloriesBurned" },
      avgDuration: { $avg: "$durationMinutes" }
    }
  },
  { $sort: { "_id": 1 } }
])`
  },
  {id: 'support flow desk',
    title: 'Support Flow Desk',
    subtitle: 'Customer Support Ticketing System',
    category: ['React', 'Node.js', 'MongoDB', 'Frontend'],
    description: 'A customer support ticketing system that allows users to submit support requests, track their status, and communicate with support agents. Built with React for the frontend and Node.js/Express for the backend, with MongoDB for data storage.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'CSS Flexbox'],
    subtitle: 'A customer support ticketing system that allows users to submit support requests, track their status, and communicate with support agents.',
    challenges: 'Designing a system that efficiently aggregates and displays user activity data while maintaining performance and responsiveness.',
    solutions: 'Utilized MongoDB aggregation pipelines ($group, $project, $sort) to summarize metrics on the server-side, serving Chart.js with pre-formatted monthly lists.',    
   
    
    github:'https://sadiaather-final-hackathon.vercel.app/',
    demo: '#' ,
    highlights: [
      'Stripe Integration with support for webhook payment status tracking.',
      'Fully responsive UI styled with CSS Grid and modern custom variables.',
      'Role-based middleware in Express to separate admin order processing.'
    ],
    schema: `// Express routing for Stripe Checkout Session
router.post('/checkout', authMiddleware, async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body.items,
    success_url: '\${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: '\${process.env.CLIENT_URL}/cart',
  });
  res.json({ id: session.id });
});`
  },
  {id: 'grosery store',
    title: 'Grosery Store',
    subtitle: 'Online Grocery Shopping Platform',
    category: ['React', 'Node.js', 'MongoDB', 'Frontend'],
    description: 'An online grocery shopping platform that allows users to browse products, add items to their cart, and complete purchases. Built with React for the frontend and Node.js/Express for the backend, with MongoDB for data storage.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'CSS Flexbox'],
    subtitle: 'An online grocery shopping platform that allows users to browse products, add items to their cart, and complete purchases        .',
    challenges: 'Designing a system that efficiently aggregates and displays user activity data while maintaining performance and responsiveness.',
    solutions: 'Utilized MongoDB aggregation pipelines ($group, $project, $sort) to summarize metrics on the server-side, serving Chart.js with pre-formatted monthly lists.',    
   
    
    github:'https://groscery-store.vercel.app',
    demo: '#' ,
    highlights: [
      'Stripe Integration with support for webhook payment status tracking.',
      'Fully responsive UI styled with CSS Grid and modern custom variables.',
      'Role-based middleware in Express to separate admin order processing.'
    ],
    schema: `// Express routing for Stripe Checkout Session
router.post('/checkout', authMiddleware, async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body.items,
    success_url: '\${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: '\${process.env.CLIENT_URL}/cart',
  });
  res.json({ id: session.id });
});`
  },
  {id: 'calculator app',
    title: 'Calculator App',
    subtitle: 'A simple calculator application built with React that allows users to perform basic arithmetic operations. The app features a clean and intuitive interface, supporting addition, subtraction, multiplication, and division.',
    category: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
    description: 'A simple calculator application built with React that allows users to perform basic arithmetic operations. The app features a clean and intuitive interface, supporting addition, subtraction, multiplication, and division.',
    tech: ['html ','css', 'JavaScript', 'Frontend Development'],
    subtitle: 'A simple calculator application built with React that allows users to perform basic arithmetic operations. The app features a clean and intuitive interface, supporting addition, subtraction, multiplication, and division.',
    challenges: 'Designing a system that efficiently displays user activity data while maintaining performance and responsiveness.',
    solutions: 'Utilized html,css,javascript pipelines ($group, $project, $sort).',    
   
    
    github:'https://sadiaather.github.io/code-alpha-calculator/',
    demo: '#' ,
    highlights: [
      'Stripe Integration with support for webhook payment status tracking.',
      'Fully responsive UI styled with CSS Grid and modern custom variables.',
      'Role-based middleware in Express to separate admin order processing.'
    ],
    schema: `// Express routing for Stripe Checkout Session
router.post('/checkout', authMiddleware, async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body.items,
    success_url: '\${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: '\${process.env.CLIENT_URL}/cart',
  });
  res.json({ id: session.id });
});`
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProject, setExpandedProject] = useState(null);

  const categories = ['All', 'React', 'Node.js', 'MongoDB', 'Fullstack'];

  const filteredProjects = PROJECTS_DATA.filter(project => {
    const matchesCategory = filter === 'All' || project.category.includes(filter);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="main-content animate-fade-in">
      <div className="section-header text-center mb-8">
        <span className="badge badge-purple">My Work</span>
        <h2 className="mt-4" style={{ fontSize: '2.5rem' }}>MERN Stack Projects</h2>
        <p style={{ maxWidth: '600px', margin: '12px auto 0' }}>
          A curated collection of full stack applications demonstrating API development, database schema design, and interactive frontend UI.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="portfolio-toolbar glass-panel mb-8" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 24px',
        width: '100%',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
        {/* Categories */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn \${filter === cat ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search tech or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control"
            style={{
              paddingLeft: '36px',
              width: '240px',
              fontSize: '0.875rem',
              height: '38px',
              background: 'rgba(15, 23, 42, 0.4)'
            }}
          />
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid-cols-3" style={{ width: '100%', gap: '24px' }}>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="feature-card glass-panel"
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '24px',
              height: '100%',
              transition: 'var(--transition)'
            }}
          >
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              {project.tech.slice(0, 3).map((t, i) => (
                <span key={i} className="badge badge-purple" style={{ textTransform: 'none', fontSize: '0.65rem' }}>
                  {t}
                </span>
              ))}
            </div>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>
              {project.title}
            </h3>
            
            <p style={{ fontSize: '0.9rem', marginBottom: '16px', flexGrow: 1 }}>
              {project.description}
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 'auto',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-color)'
            }}>
              <button
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                className="btn btn-secondary"
                style={{ padding: '6px 12px', fontSize: '0.8rem', display: 'flex', gap: '4px' }}
              >
                <Layers size={14} />
                <span>{expandedProject === project.id ? 'Close Details' : 'View Architecture'}</span>
              </button>

              <div style={{ display: 'flex', gap: '8px' }}>
                <a href={project.github} target="_blank" rel="noreferrer" className="social-link" title="Source Code">
                  <GithubIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredProjects.length === 0 && (
        <div className="glass-panel text-center" style={{ width: '100%', padding: '60px 24px' }}>
          <p>No projects found matching the selection criteria.</p>
        </div>
      )}

      {/* Expanded Details Drawer/Modal */}
      {expandedProject && (() => {
        const proj = PROJECTS_DATA.find(p => p.id === expandedProject);
        return (
          <div className="glass-panel animate-slide-up" style={{
            width: '100%',
            marginTop: '32px',
            padding: '32px',
            borderLeft: '4px solid var(--primary)',
            textAlign: 'left'
          }}>
            <div style={{ display: 'flex', justifycontent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h4 style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}>{proj.title} Architecture Details</h4>
                <p style={{ color: 'var(--text-secondary)' }}>{proj.subtitle}</p>
              </div>
              <button
                onClick={() => setExpandedProject(null)}
                className="btn btn-secondary"
                style={{ padding: '6px 12px', fontSize: '0.8rem' }}
              >
                Hide Sandbox
              </button>
            </div>

            <div className="grid-cols-2 mt-4" style={{ gap: '32px', marginTop: '24px' }}>
              {/* Technical Specifications */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h5 style={{ fontSize: '1rem', color: 'var(--primary-hover)', marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Code size={16} /> Implementation Highlights
                  </h5>
                  <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    {proj.highlights.map((h, i) => (
                      <li key={i} style={{ marginBottom: '6px' }}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 style={{ fontSize: '1rem', color: 'var(--secondary)', marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Server size={16} /> Technical Challenge
                  </h5>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {proj.challenges}
                  </p>
                </div>

                <div>
                  <h5 style={{ fontSize: '1rem', color: 'var(--accent-hover)', marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Database size={16} /> MERN Solution
                  </h5>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {proj.solutions}
                  </p>
                </div>
              </div>

              {/* Code Sandbox Preview */}
              <div style={{ background: '#020617', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                  <span>{proj.id === 'studysync' || proj.id === 'smartfit' ? 'Schema Model (Mongoose)' : 'API Route Handler (Express)'}</span>
                  <span>JavaScript</span>
                </div>
                <pre style={{
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  overflowX: 'auto',
                  color: '#93c5fd',
                  lineHeight: '1.4'
                }}>
                  <code>{proj.schema}</code>
                </pre>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
