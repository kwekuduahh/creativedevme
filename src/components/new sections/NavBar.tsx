import { motion } from "framer-motion";
import kwekuLogo from "/favicon.svg";
function Navbar() {
  return (
    <nav className="flex gap-8">
      <motion.div
        className="flex flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}>
        <div className="gap-3 md:inline-block max-w-fit">
          <a className="flex items-center justify-start gap-2 no-underline">
            <img
              src={kwekuLogo}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h4 className="font-bold">Kweku Duah</h4>
              <p className="text-xs font-light">Creative Developer</p>
            </div>
          </a>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
