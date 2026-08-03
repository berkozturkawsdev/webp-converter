import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">
                    <h3>Boz Software</h3>
                    <p>
                        Building simple, fast, and reliable software solutions
                        for the modern web.
                    </p>
                </div>


                <div className="footer-links">

                    <div>
                        <h4>Connect</h4>
                        <a href="https://berkozturk.bozapps.com/">Portfolio</a>
                        <a href="https://github.com/berkozturkawsdev">GitHub</a>
                        <a href="https://www.linkedin.com/in/berk-ozturk-56a764a8/">LinkedIn</a>
                        <a href="mailto:berkozturkdev@gmail.com">Email</a>
                    </div>

                </div>

            </div>


            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Boz Software. All rights reserved.
                </p>
            </div>

        </footer>
    );
}