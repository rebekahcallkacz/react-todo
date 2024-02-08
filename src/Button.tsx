import PropTypes from "prop-types";

type ButtonProps = {
  setCount: (count: number) => void;
  count: number;
};
const Button = ({ setCount, count }: ButtonProps) => {
  const brokenCount = count.map((i) => i + 0);
  console.log(brokenCount);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
};

Button.propTypes = {
  setCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default Button;
