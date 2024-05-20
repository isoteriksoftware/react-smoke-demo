/* eslint-disable @next/next/no-img-element */
const GITHUB_USERNAME = "isoteriksoftware";
const LIBRARY_NAME = "react-smoke";

export const Footer = () => {
  return (
    <footer
      style={{
        background: "#292828",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        columnGap: "10px",
        paddingTop: "16px",
        paddingBottom: "10px",
      }}
    >
      <a href={`https://www.npmjs.com/package/${LIBRARY_NAME}`} target="_blank">
        <img
          src={`https://img.shields.io/npm/v/${LIBRARY_NAME}.svg`}
          alt="NPM"
        />
      </a>

      <img
        src={`https://img.shields.io/npm/dt/${LIBRARY_NAME}.svg`}
        alt="NPM"
      />

      <a
        href={`https://github.com/${GITHUB_USERNAME}/${LIBRARY_NAME}`}
        target="_blank"
      >
        <img
          src={`https://img.shields.io/github/stars/${GITHUB_USERNAME}/${LIBRARY_NAME}?style=social`}
          alt="GitHub stars"
        />
      </a>
    </footer>
  );
};
