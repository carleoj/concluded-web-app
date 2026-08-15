export default function Footer() {
     const underlineEffect =
        "relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full";

    return (
        
        <footer className="grid grid-cols-1 gap-1 p-4 md:grid-cols-3 md:items-center">
            <p className="text-center text-sm md:text-left">
                Developed by:{" "}
                <a
                    href="https://github.com/carleoj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={underlineEffect}
                >
                    Carl P.
                </a>
            </p>

            <div className="text-center text-sm">
                <a
                    href="https://carlp.is-a.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={underlineEffect}
                >
                    More Apps
                </a>
            </div>

            <p className="text-center text-sm md:text-right">
                © {new Date().getFullYear()} Concluded. All rights reserved.
            </p>
        </footer>
    );
}