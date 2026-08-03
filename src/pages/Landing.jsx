import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Server, Database, Layers, Play, CheckCircle, ChevronRight, Terminal, Globe, Heart } from 'lucide-react';

// Scenarios for MERN sandbox
const SANDBOX_SCENARIOS = {
  fetchProjects: {
    name: 'Fetch Projects',
    description: 'Queries the database to load projects to display in the React UI.',
    steps: [
      {
        node: 'react',
        title: 'React Client',
        log: 'Dispatching HTTP GET to /api/projects...',
        code: `// Client-side fetch
useEffect(() => {
  axios.get('/api/projects')
    .then(res => setProjects(res.data))
    .catch(err => console.error(err));
}, []);`
      },
      {
        node: 'express',
        title: 'Express Router & Middleware',
        log: 'Route GET /api/projects matched. Running CORS and rate-limiter middleware...',
        code: `// router.js
const express = require('express');
const router = express.Router();
const { getProjects } = require('../controllers/projectController');

router.get('/projects', getProjects);`
      },
      {
        node: 'node',
        title: 'Node.js Controller',
        log: 'Executing getProjects() controller. Constructing Mongoose database query...',
        code: `// projectController.js
const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ date: -1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};`
      },
      {
        node: 'mongodb',
        title: 'MongoDB Database',
        log: 'db.projects.find() executed. Sorting by "date" in index. 3 records found. (0.8ms)',
        code: `// MongoDB Query Execution
db.projects.find().sort({ date: -1 })
// Status: 200 OK
// Response Size: 4.8 KB`
      }
    ]
  },
  createUser: {
    name: 'Register User',
    description: 'Saves a new user profile with password encryption to MongoDB.',
    steps: [
      {
        node: 'react',
        title: 'React Register Form',
        log: 'Validating form. Dispatching HTTP POST to /api/auth/register with user credentials...',
        code: `// authActions.js
const registerUser = async (userData) => {
  const res = await axios.post('/api/auth/register', userData);
  return res.data; // JWT Token & User Data
};`
      },
      {
        node: 'express',
        title: 'Express Auth Router',
        log: 'Route POST /api/auth/register matched. Executing validations check...',
        code: `// authRouter.js
const { registerValidation } = require('../middleware/validation');
const { register } = require('../controllers/authController');

router.post('/register', registerValidation, register);`
      },
      {
        node: 'node',
        title: 'Node.js Auth Controller',
        log: 'Salting password with bcrypt. Creating User instance. Triggering database save...',
        code: `// authController.js
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();
  res.status(201).json({ message: "Registration successful" });
};`
      },
      {
        node: 'mongodb',
        title: 'MongoDB Users Collection',
        log: 'db.users.insertOne() triggered. Index verification on "email". Success! (2.1ms)',
        code: `// MongoDB Query Execution
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  password: "$2a$10$hashed..."
})`
      }
    ]
  },
  submitContact: {
    name: 'Submit Message',
    description: 'Saves user contact form submission.',
    steps: [
      {
        node: 'react',
        title: 'React Contact Form',
        log: 'Submitting Message. Dispatching HTTP POST to /api/contact...',
        code: `// Contact.jsx form handler
const sendContactMessage = (msg) => {
  axios.post('/api/contact', msg)
    .then(res => setSuccess(true));
};`
      },
      {
        node: 'express',
        title: 'Express Contact Router',
        log: 'Route POST /api/contact matched. Running anti-spam check middleware...',
        code: `// contactRouter.js
const { contactLimiter } = require('../middleware/rateLimit');
const { saveMessage } = require('../controllers/msgController');

router.post('/contact', contactLimiter, saveMessage);`
      },
      {
        node: 'node',
        title: 'Node.js Message Controller',
        log: 'Validating email content. Instantiating Message model and saving to database...',
        code: `// msgController.js
const Message = require('../models/Message');

exports.saveMessage = async (req, res) => {
  const { name, email, message } = req.body;
  const newMsg = new Message({ name, email, message });
  await newMsg.save();
  res.status(201).json({ success: true });
};`
      },
      {
        node: 'mongodb',
        title: 'MongoDB Messages',
        log: 'db.messages.insertOne() executed. Logged successfully. (1.4ms)',
        code: `// MongoDB Query Execution
db.messages.insertOne({
  name: "Jane Smith",
  message: "Hi Sadia, I would like to..."
})`
      }
    ]
  }
};

export default function Landing() {
  const [selectedScenario, setSelectedScenario] = useState('fetchProjects');
  const [activeStep, setActiveStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState([]);

  useEffect(() => {
    if (isPlaying) {
      setActiveStep(0);
      setConsoleLogs([`[System] Starting simulation: ${SANDBOX_SCENARIOS[selectedScenario].name}`]);
    } else {
      setActiveStep(-1);
      setConsoleLogs([]);
    }
  }, [isPlaying, selectedScenario]);

  useEffect(() => {
    if (isPlaying && activeStep >= 0 && activeStep < 4) {
      const stepData = SANDBOX_SCENARIOS[selectedScenario].steps[activeStep];
      setConsoleLogs(prev => [...prev, `[${stepData.title}] ${stepData.log}`]);
      
      const timer = setTimeout(() => {
        if (activeStep < 3) {
          setActiveStep(prev => prev + 1);
        } else {
          setConsoleLogs(prev => [...prev, `[System] Simulation completed successfully.`]);
          setIsPlaying(false);
        }
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isPlaying, activeStep, selectedScenario]);

  const runSimulation = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setTimeout(() => setIsPlaying(true), 100);
    } else {
      setIsPlaying(true);
    }
  };

  const currentStepData = activeStep >= 0 ? SANDBOX_SCENARIOS[selectedScenario].steps[activeStep] : null;

  return (
    <div className="main-content animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section text-center" style={{ padding: '40px 0 20px' }}>
        <span className="badge badge-purple hero-badge animate-slide-up">
          Open For Opportunities
        </span>
        <h1 className="hero-title animate-slide-up" style={{ fontSize: '3.5rem', lineHeight: '1.2' }}>
          Sadia Ather <br />
          <span className="text-gradient">MERN Stack Developer</span>
        </h1>
        <p className="hero-description animate-slide-up" style={{ maxWidth: '650px', margin: '20px auto 30px' }}>
          Self-taught web engineer who specializes in MongoDB, Express.js, React, and Node.js. 
          I build efficient, responsive, and secure full stack applications with clean database architectures.
        </p>
        <div className="hero-ctas animate-slide-up" style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link to="/projects" className="btn btn-primary">
            <span>View Projects</span>
            <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            <span>Get In Touch</span>
          </Link>
        </div>
      </section>

      {/* Quick Metrics Section */}
      <section className="stats-section glass-panel mb-8" style={{ width: '100%' }}>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-value text-gradient">20+</span>
            <span className="stat-label">GitHub Repos</span>
          </div>
          <div className="stat-item">
            <span className="stat-value text-gradient">5+</span>
            <span className="stat-label">MERN Apps</span>
          </div>
          <div className="stat-item">
            <span className="stat-value text-gradient">A+</span>
            <span className="stat-label">Intermediate ICS Grade</span>
          </div>
          <div className="stat-item">
            <span className="stat-value text-gradient">100%</span>
            <span className="stat-label">Self-Driven Learning</span>
          </div>
        </div>
      </section>

      {/* Core Stack Architecture Sandbox */}
      <section className="features-section" style={{ width: '100%', marginBottom: '40px' }}>
        <div className="section-header text-center">
          <span className="badge badge-purple">Interactive Sandbox</span>
          <h2 className="mt-4">MERN Stack Request Sandbox</h2>
          <p style={{ maxWidth: '600px', margin: '8px auto' }}>
            Click simulate to visualize the flow of data across the MERN stack architectural nodes in real-time.
          </p>
        </div>

        {/* Control Box */}
        <div className="glass-panel" style={{ padding: '20px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {Object.keys(SANDBOX_SCENARIOS).map((key) => (
              <button
                key={key}
                className={`btn ${selectedScenario === key ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                onClick={() => {
                  setSelectedScenario(key);
                  setIsPlaying(false);
                }}
              >
                {SANDBOX_SCENARIOS[key].name}
              </button>
            ))}
          </div>

          <button
            onClick={runSimulation}
            className="btn btn-accent"
            style={{ padding: '10px 20px', fontSize: '0.9rem', display: 'flex', gap: '8px' }}
          >
            <Play size={16} fill="#ffffff" />
            <span>{isPlaying ? 'Re-run' : 'Simulate API Call'}</span>
          </button>
        </div>

        {/* Visual Flow diagram container */}
        <div className="glass-panel" style={{ padding: '30px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', width: '100%', overflowX: 'auto', padding: '20px 0' }}>
            
            {/* Visual connector lines */}
            <div style={{
              position: 'absolute',
              top: '50px',
              left: '50px',
              right: '50px',
              height: '3px',
              background: 'rgba(255,255,255,0.06)',
              zIndex: 1
            }} />

            {/* Simulated Animated Pulse Packet */}
            {isPlaying && activeStep >= 0 && (
              <div
                className={`pulse-packet node-step-${activeStep}`}
                style={{
                  position: 'absolute',
                  top: '47px',
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  boxShadow: '0 0 12px 3px var(--primary-hover)',
                  zIndex: 2,
                  transition: 'all 2.4s linear',
                }}
              />
            )}

            {/* Node 1: React */}
            <div className={`sandbox-node ${activeStep === 0 ? 'active' : ''}`} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '120px', position: 'relative', zIndex: 3
            }}>
              <div className="node-icon-holder" style={{
                width: '64px', height: '64px', borderRadius: '50%', background: activeStep === 0 ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.03)',
                border: activeStep === 0 ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)'
              }}>
                <Code size={24} style={{ color: activeStep === 0 ? 'var(--primary)' : 'var(--text-secondary)' }} />
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>React (Frontend)</span>
            </div>

            {/* Node 2: Express */}
            <div className={`sandbox-node ${activeStep === 1 ? 'active' : ''}`} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '120px', position: 'relative', zIndex: 3
            }}>
              <div className="node-icon-holder" style={{
                width: '64px', height: '64px', borderRadius: '50%', background: activeStep === 1 ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255,255,255,0.03)',
                border: activeStep === 1 ? '2px solid var(--secondary)' : '1px solid var(--border-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)'
              }}>
                <Layers size={24} style={{ color: activeStep === 1 ? 'var(--secondary)' : 'var(--text-secondary)' }} />
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Express (Router)</span>
            </div>

            {/* Node 3: Node.js */}
            <div className={`sandbox-node ${activeStep === 2 ? 'active' : ''}`} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '120px', position: 'relative', zIndex: 3
            }}>
              <div className="node-icon-holder" style={{
                width: '64px', height: '64px', borderRadius: '50%', background: activeStep === 2 ? 'rgba(244, 63, 94, 0.2)' : 'rgba(255,255,255,0.03)',
                border: activeStep === 2 ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)'
              }}>
                <Server size={24} style={{ color: activeStep === 2 ? 'var(--accent)' : 'var(--text-secondary)' }} />
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Node.js (Server)</span>
            </div>

            {/* Node 4: MongoDB */}
            <div className={`sandbox-node ${activeStep === 3 ? 'active' : ''}`} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '120px', position: 'relative', zIndex: 3
            }}>
              <div className="node-icon-holder" style={{
                width: '64px', height: '64px', borderRadius: '50%', background: activeStep === 3 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255,255,255,0.03)',
                border: activeStep === 3 ? '2px solid #22c55e' : '1px solid var(--border-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)'
              }}>
                <Database size={24} style={{ color: activeStep === 3 ? '#22c55e' : 'var(--text-secondary)' }} />
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>MongoDB (DB)</span>
            </div>

          </div>
        </div>

        {/* Logs and Code details */}
        <div className="grid-cols-2" style={{ gap: '24px' }}>
          
          {/* Terminal Console Logs */}
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '320px', background: '#020617', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}>
              <Terminal size={14} />
              <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>Telemetry Console</span>
            </div>
            
            <div style={{ flexGrow: 1, padding: '16px', overflowY: 'auto', fontFamily: 'monospace', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '8px', color: '#38bdf8' }}>
              {consoleLogs.map((log, index) => (
                <div key={index} style={{ lineBreak: 'anywhere' }}>
                  {log}
                </div>
              ))}
              {!isPlaying && consoleLogs.length === 0 && (
                <div style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '80px' }}>
                  Simulation idle. Click "Simulate API Call" above to begin.
                </div>
              )}
            </div>
          </div>

          {/* Active step Code Preview */}
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '320px', background: '#090d16', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                {currentStepData ? `${currentStepData.title} Snippet` : 'Source Code Inspector'}
              </span>
              <span style={{ fontSize: '0.75rem' }}>JavaScript</span>
            </div>

            <div style={{ flexGrow: 1, padding: '16px', overflowY: 'auto' }}>
              {currentStepData ? (
                <pre style={{ margin: 0, color: '#f3f4f6', fontFamily: 'monospace', fontSize: '0.8rem', lineHeight: '1.45', whiteSpace: 'pre-wrap' }}>
                  <code>{currentStepData.code}</code>
                </pre>
              ) : (
                <div style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '80px', fontSize: '0.9rem' }}>
                  Code details will display dynamically as the packet passes through each architectural stage.
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Embedded style elements for layout transitions & positioning */}
      <style>{`
        .pulse-packet.node-step-0 { left: calc(10% - 10px); }
        .pulse-packet.node-step-1 { left: calc(37% - 5px); transition: left 2.5s ease-in-out; }
        .pulse-packet.node-step-2 { left: calc(64% - 5px); transition: left 2.5s ease-in-out; }
        .pulse-packet.node-step-3 { left: calc(90% - 5px); transition: left 2.5s ease-in-out; }
        
        .sandbox-node.active .node-icon-holder {
          box-shadow: 0 0 15px 3px rgba(139, 92, 246, 0.4);
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}
