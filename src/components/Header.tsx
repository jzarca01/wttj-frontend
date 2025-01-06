import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import "./Header.css";

export const Header = () => (
  <>
    <div className="flex lg:flex-1 justify-center">
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <a href="https://www.welcometothejungle.com" target="_blank">
        <img
          src="https://cdn.welcometothejungle.com/wttj-front/production/assets/images/logos/wttj-2.svg"
          className="logo"
          alt="WTTJ logo"
        />
      </a>
    </div>
    <h1>WTTJ Frontend test</h1>
  </>
);
