import UserClass from "./User";
const About = () =>{

    return (
        <><div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            padding: '2.5rem',
            maxWidth: '600px',
            margin: '3rem auto',
            fontFamily: 'Segoe UI, Arial, sans-serif'
        }}>
            <h2 style={{
                color: '#4f46e5',
                fontSize: '2.5rem',
                marginBottom: '1rem',
                letterSpacing: '2px',
                textAlign: 'center',
                fontWeight: 700,
                textShadow: '0 2px 8px rgba(79,70,229,0.08)'
            }}>
                About Us
            </h2>
            <p style={{
                color: '#334155',
                fontSize: '1.2rem',
                lineHeight: 1.7,
                marginBottom: '1.2rem',
                textAlign: 'center'
            }}>
                Welcome to our website! <span role="img" aria-label="sparkles">✨</span> We are passionate about building <b>great web applications</b> using <span style={{ color: '#4f46e5' }}>React</span>.
            </p>
            <p style={{
                color: '#64748b',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                textAlign: 'center'
            }}>
                Our team is dedicated to providing the <b>best user experience</b> and <b>high-quality content</b>.<br />
                <span role="img" aria-label="rocket">🚀</span>
            </p>
        </div><UserClass name={"Sourabh"} loaction={"Panchkula"} /></>
    )
}

export default About;