import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { VscGithubAlt } from "react-icons/vsc";

function Links({ textColor, iconColor }) {
  const className = `${textColor} glass-effect flex justify-center items-center p-3 rounded-full`;
  const iconstyle = `${iconColor} icon-rounded`;
  return (
    <>
      <div className={className}>
        <a
          href="https://www.linkedin.com/in/abhishek-singh-2000/"
          target="_blank"
          rel="noreferrer"
          className={iconstyle}
        >
          <RiLinkedinLine />
        </a>
      </div>
      <div className={className}>
        <a
          href="https://github.com/AbhishekSingh0901"
          target="_blank"
          rel="noreferrer"
          className={iconstyle}
        >
          <VscGithubAlt />
        </a>
      </div>
      <div className={className}>
        <a
          href="https://twitter.com/Bazinga_09"
          target="_blank"
          rel="noreferrer"
          className={iconstyle}
        >
          <FaXTwitter />
        </a>
      </div>
      <div className={className}>
        <a
          href="https://leetcode.com/abhi_0901/"
          target="_blank"
          rel="noreferrer"
          className={iconstyle}
        >
          <SiLeetcode />
        </a>
      </div>
    </>
  );
}

export default Links;
