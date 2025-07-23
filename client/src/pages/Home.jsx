import Navbar from "../components/Navbar";
import './Home.css';

const Home = () => {
    return (
        <div className="page-container">
            <Navbar />

            {/* ───────────── HERO ───────────── */}
            <section className="hero">
                <h1>Streamline Your Employee Onboarding</h1>
                <p>
                    Onboarding Tracker helps HR teams create a structured and efficient onboarding experience for new employees.
                    Assign tasks, track progress, and ensure every step is covered — all from a single dashboard.
                </p>
                
            </section>

            {/* ───────────── BENEFITS ───────────── */}
            <section className="benefits alternate" id="benefits">
                <h2 className="section-title">Why Choose Onboarding Tracker?</h2>
                <div className="circle-flow">
                    <div className="card">
                        <h3>📋 Personalized Task Lists</h3>
                        <p>Create and assign onboarding checklists tailored to roles or departments. Ensure nothing gets missed.</p>
                    </div>
                    <div className="card">
                        <h3>📊 Real-Time Progress Monitoring</h3>
                        <p>Track employee progress instantly. Know who's completed their onboarding and who needs guidance.</p>
                    </div>
                    <div className="card">
                        <h3>⏱ Save Time & Stay Organized</h3>
                        <p>Forget spreadsheets and manual tracking. Automate reminders, completion logs, and follow-ups.</p>
                    </div>
                    <div className="card">
                        <h3>🔐 Role-Based Dashboard</h3>
                        <p>Admins manage onboarding workflows; employees get their own space to complete and review tasks.</p>
                    </div>
                </div>
            </section>





            {/* ───────────── HOW IT WORKS ───────────── */}
            <section className="how-it-works">
                <h2 className="section-title">How It Works</h2>
                <div className="steps">
                    <div className="step">
                        <h3>1. Admin Login</h3>
                        <p>Choose "Admin" when logging in to start managing tasks, teams, and timelines.</p>
                    </div>
                    <div className="step">
                        <h3>2. Add Employees</h3>
                        <p>Input basic employee details like name and email to bring them into the platform.</p>
                    </div>
                    <div className="step">
                        <h3>3. Assign Tasks</h3>
                        <p>Pick from templates such as IT setup, HR paperwork, and intro meetings — or create custom ones.</p>
                    </div>
                    <div className="step">
                        <h3>4. Employees Log In</h3>
                        <p>They view assigned onboarding tasks and mark them complete when done.</p>
                    </div>
                    <div className="step">
                        <h3>5. Track & Report</h3>
                        <p>Admins see task completion, send reminders, and complete onboarding faster.</p>
                    </div>
                </div>
            </section>

            {/* ───────────── TESTIMONIALS ───────────── */}
            <section className="testimonial-section">
                <h2 className="section-title">What Our Clients Say 💬</h2>
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <p>“The Onboarding Tracker transformed our messy onboarding into a clear, repeatable, and proactive process. Our new hires love it too!”</p>
                        <div className="testimonial-info">
                            <img src="https://i.pravatar.cc/100?u=a1" alt="Priya" />
                            <div>
                                <strong>Priya K.</strong>
                                <span>VP HR, CloudCore</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p>“We onboard over 30 employees a month, and this tool has saved us hundreds of hours and improved our HR visibility dramatically.”</p>
                        <div className="testimonial-info">
                            <img src="https://i.pravatar.cc/100?u=a2" alt="Carlos" />
                            <div>
                                <strong>Carlos M.</strong>
                                <span>HR Lead, Finexus</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p>“The simplicity of the UI is a big win. The team instantly understood how to use it. Setup took minutes — onboarding is no longer a chore!”</p>
                        <div className="testimonial-info">
                            <img src="https://i.pravatar.cc/100?u=a3" alt="Sarah" />
                            <div>
                                <strong>Sarah J.</strong>
                                <span>Talent Manager, NovaSpark</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p>“Love the dashboards! It's so easy to see who’s on track, and who needs a nudge. Simple, effective, and beautiful.”</p>
                        <div className="testimonial-info">
                            <img src="https://i.pravatar.cc/100?u=a4" alt="James" />
                            <div>
                                <strong>James L.</strong>
                                <span>People Ops, Devorama</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ───────────── CONTACT ───────────── */}
            <section className="contact-page">
                <div className="contact-hero">
                    <h1>Contact <span className="highlight">Our Team</span></h1>
                    <p><span className="lead-text">We ♥️ to connect!</span> <br />Choose your preferred option below, or drop us a quick message.</p>
                </div>

                <div className="contact-cards">
                    <div className="contact-card">
                        <span role="img" aria-label="Email">📧</span>
                        <h3>Email</h3>
                        <a href="mailto:contact@onboardingtracker.com">contact@onboardingtracker.com</a>
                    </div>
                    <div className="contact-card">
                        <span role="img" aria-label="Phone">📞</span>
                        <h3>Phone</h3>
                        <a href="tel:+18001234567">+1 (800) 123-4567</a>
                    </div>
                    <div className="contact-card">
                        <span role="img" aria-label="Location">📍</span>
                        <h3>Office</h3>
                        <a href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer">123 Main Street, Suite 200</a>
                    </div>
                </div>

                <form className="contact-form">
                    <h4><strong>Send Us a Message</strong></h4>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="How can we help you?" required></textarea>
                    <button type="submit">Send Message</button>
                </form>


                <div className="contact-socials">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 <span>Twitter</span></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">💼 <span>LinkedIn</span></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘 <span>Facebook</span></a>
                </div>
            </section>



            {/* ───────────── FOOTER ───────────── */}
            <footer>
                <p>&copy; {new Date().getFullYear()} Saksham Bansal | Onboarding Tracker. All rights reserved.</p>
                <p>
                    <a href="/">Home</a> |
                    <a href="#benefits">Benefits</a> |
                    <a href="#contact">Contact</a>
                </p>
            </footer>
        </div>
    );
};

export default Home;
