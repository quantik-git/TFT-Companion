import { sheetUrl } from "../utils/fetchData";

export const Navbar = ({ lastUpdate }) => {
  return (
    <nav className="bg-white w-full py-4 px-6 mb-8 flex justify-between">
      <a
        className="hover:underline"
        href={sheetUrl}
        target="_blank"
        rel="noreferrer"
      >
        Last Update: {lastUpdate}
      </a>

      <a
        className="hover:underline"
        href="https://www.twitch.tv/sologesang"
        target="_blank"
        rel="noreferrer"
      >
        Sologesang
      </a>
    </nav>
  );
};
