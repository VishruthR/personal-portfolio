const Footer = () => (
    <footer className="w-full pt-20 py-6 px-6 text bg-beige flex justify-center">
        <div className="w-full max-w-2xl text-left">
            <p className="text-brownMuted text-sm font-playfair">
            Built by{" "}
            <a href="/" className="underline hover:text-brownDark transition-colors">
                me
            </a>
            , designs inspired by{" "}
            <a
                href="https://paulstamatiou.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brownDark transition-colors"
            >
                paulstamatiou.com
            </a>
            {" · "}
            <a
                href="mailto:vishraj248@gmail.com"
                className="underline hover:text-brownDark transition-colors"
            >
                vishraj248@gmail.com
            </a>
            </p>
        </div>
    </footer>
);

export default Footer;