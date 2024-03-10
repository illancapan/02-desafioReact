import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const SocialButton = ({ iconos = [faFacebook, faLinkedinIn, faGithub] }) => (
  <div>
    {iconos.map((icon, index) => (
      <FontAwesomeIcon
        key={index}
        icon={icon}
        className="iconSocialBlock p-3 m-3 rounded-circle border border-info"
      />
    ))}
  </div>
);
 
export default SocialButton;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faLinkedinIn,
//   faGithub,
// } from "@fortawesome/free-brands-svg-icons";
// import "./SocialButton.css";

// const SocialButton = () => {
//   return (
//     <>
//       <div className="iconSocialBlock d-flex justify-content-center m-5">
//         <FontAwesomeIcon
//           icon={faFacebook}
//           className="iconSocial p-5 m-5 rounded-circle border border-info"
//         />
//         <FontAwesomeIcon
//           icon={faLinkedinIn}
//           className="iconSocial p-5 m-5 rounded-circle border border-info"
//         />
//         <FontAwesomeIcon
//           icon={faGithub}
//           className="iconSocial p-5 m-5 rounded-circle border border-info"
//         />
//       </div>
//     </>
//   );
// };

// export default SocialButton;