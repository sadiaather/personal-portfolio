import React, { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

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

const LinkedinIcon = ({ size = 18, ...props }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API request (Express.js backend contact endpoint)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="main-content animate-fade-in">
      <div className="section-header text-center mb-8">
        <span className="badge badge-purple">Get In Touch</span>
        <h2 className="mt-4" style={{ fontSize: '2.5rem' }}>Let's Connect</h2>
        <p style={{ maxWidth: '600px', margin: '12px auto 0' }}>
          Have a question or want to work together? Feel free to drop a message, and I'll get back to you!
        </p>
      </div>

      <div className="grid-cols-2" style={{ width: '100%', gap: '32px' }}>
        {/* Contact Info Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="feature-icon-wrapper purple-glow" style={{ width: '48px', height: '48px', flexShrink: 0 }}>
              <Mail size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Email Me</h4>
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=ishmalsiddiqui59@gmail.com"   style={{ fontSize: '0.95rem' }}>ishmalsiddiqui59@gmail.com</a>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="feature-icon-wrapper cyan-glow" style={{ width: '48px', height: '48px', flexShrink: 0 }}>
              <MapPin size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Location</h4>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>Karachi, Pakistan</p>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              Find Me On
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <a
                href="https://github.com/sadiaather"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ justifyContent: 'center', gap: '8px', fontSize: '0.9rem' }}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sadia-ather-563340378/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ justifyContent: 'center', gap: '8px', fontSize: '0.9rem' }}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '20px', textAlign: 'center' }}>
              Active on GitHub showing daily commits & progress.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          {submitSuccess ? (
            <div className="animate-slide-up" style={{ textAlign: 'center', padding: '40px 0' }}>
              <CheckCircle size={56} style={{ color: 'var(--secondary)', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Message Sent!</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                Thank you for contacting me. I have received your message and will respond shortly.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="btn btn-secondary"
                style={{ padding: '8px 20px', fontSize: '0.9rem' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="John Doe"
                  style={{ border: errors.name ? '1px solid var(--accent)' : '1px solid var(--border-color)' }}
                />
                {errors.name && (
                  <span className="form-error">
                    <AlertCircle size={12} /> {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="john@example.com"
                  style={{ border: errors.email ? '1px solid var(--accent)' : '1px solid var(--border-color)' }}
                />
                {errors.email && (
                  <span className="form-error">
                    <AlertCircle size={12} /> {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Opportunity for MERN Stack Developer"
                  style={{ border: errors.subject ? '1px solid var(--accent)' : '1px solid var(--border-color)' }}
                />
                {errors.subject && (
                  <span className="form-error">
                    <AlertCircle size={12} /> {errors.subject}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Tell me about your project or job opening..."
                  style={{
                    border: errors.message ? '1px solid var(--accent)' : '1px solid var(--border-color)',
                    resize: 'vertical',
                    minHeight: '120px'
                  }}
                />
                {errors.message && (
                  <span className="form-error">
                    <AlertCircle size={12} /> {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ width: '100%', gap: '8px', marginTop: '10px' }}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner" style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTop: '2px solid #ffffff',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
      
      {/* CSS injection specifically for spinner keyframe since it's an inline helper */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
