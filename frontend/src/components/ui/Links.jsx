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
        <button className={iconstyle}>
          <RiLinkedinLine />
        </button>
      </div>
      <div className={className}>
        <button className={iconstyle}>
          <VscGithubAlt />
        </button>
      </div>
      <div className={className}>
        <button className={iconstyle}>
          <FaXTwitter />
        </button>
      </div>
      <div className={className}>
        <button className={iconstyle}>
          <SiLeetcode />
        </button>
      </div>
    </>
  );
}

export default Links;
