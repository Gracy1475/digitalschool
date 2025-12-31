import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 0 2rem',
            background: '#000000',
            color: '#ffffff',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    marginBottom: '4rem'
                }}>
                    <div style={{ maxWidth: '300px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <img
                                src="/logo.jpeg"
                                alt="SmartShala"
                                style={{ height: '32px', borderRadius: '50%', border: '1px solid #333' }}
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <span style={{
                                fontWeight: 700,
                                fontSize: '1.25rem',
                                color: '#ffffff'
                            }}>SmartShala</span>
                        </div>
                        <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>
                            Empowering education through technology.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                        <div>
                            <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888' }}>Platform</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <Link to="/login" style={{ color: '#e0e0e0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#e0e0e0'}>Login</Link>
                                <Link to="/register" style={{ color: '#e0e0e0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#e0e0e0'}>Register</Link>
                            </div>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888' }}>Legal</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <span style={{ color: '#e0e0e0', cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#e0e0e0'}>Privacy</span>
                                <span style={{ color: '#e0e0e0', cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#e0e0e0'}>Terms</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #333',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    color: '#888',
                    fontSize: '0.875rem'
                }}>
                    &copy; 2025 SmartShala. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
