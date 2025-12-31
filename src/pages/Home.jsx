import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  FiBook,
  FiUsers,
  FiCheckCircle,
  FiArrowRight,
  FiBarChart2,
  FiShield,
  FiAward
} from 'react-icons/fi';

const Home = () => {
  const features = [
    {
      icon: <FiUsers size={24} />,
      title: 'Portal Management',
      description: 'Dedicated spaces for Admins, Teachers, Students, and Parents.',
      color: 'var(--primary-color)'
    },
    {
      icon: <FiBook size={24} />,
      title: 'Digital Assignments',
      description: 'Paperless assignment tracking and submission system.',
      color: 'var(--secondary-color)'
    },
    {
      icon: <FiBarChart2 size={24} />,
      title: 'Analytics',
      description: 'Real-time performance insights and academic tracking.',
      color: 'var(--accent-color)'
    }
  ];

  return (
    <div className="home-page" style={{ overflowX: 'hidden' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        padding: '8rem 0 6rem',
        background: 'radial-gradient(circle at top center, rgba(16, 185, 129, 0.1) 0%, transparent 60%)',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="fade-in-up">
            <span className="badge badge-success" style={{ marginBottom: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary-color)' }}>
              <FiCheckCircle size={14} style={{ marginRight: '0.5rem' }} /> Smart School Management
            </span>

            <h1 className="hero-title" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              letterSpacing: '-0.03em'
            }}>
              The Future of <br className="hidden-mobile" />
              <span className="text-gradient">Education Technology</span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.6
            }}>
              Streamline administration, empower teachers, and connect with parents using our comprehensive, free-forever platform.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/register" className="btn btn-primary btn-lg">
                Get Started Now <FiArrowRight />
              </Link>
              <a href="#features" className="btn btn-secondary btn-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Everything you need</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Powerful tools to manage your entire institution.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {features.map((feature, index) => (
              <div key={index} className="card glass" style={{
                border: '1px solid rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--bg-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: feature.color
                }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Stats/Trust Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-color)' }}>100%</div>
              <div style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Secure</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-color)' }}>24/7</div>
              <div style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Support</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--secondary-color)' }}>Free</div>
              <div style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
