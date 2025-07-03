const Contact = () =>{
    return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "2rem" }}>
        <h2>Contact Us</h2>
        <form>
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
                    required
                />
            </div>
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
                    required
                />
            </div>
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
                    required
                />
            </div>
            <button type="submit" style={{ padding: "0.75rem 1.5rem" }}>
                Send
            </button>
        </form>
    </div>
    )
}

export default Contact;