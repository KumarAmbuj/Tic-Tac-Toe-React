import { FaRegCircle, FaTimes, FaPen } from "react-icons/fa";
const Icon = ({ name }) => {
  switch (name) {
    case "cross":
      return <FaTimes />;
    case "circle":
      return <FaRegCircle />;
    case "empty":
      return <FaPen />;
  }
};
export default Icon;
