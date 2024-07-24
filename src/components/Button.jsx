import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white}) => {
    const renderButton = () => (
        <button>
            <span>{children}</span>
            {ButtonSvg(white)}
        </button>
    );

    return renderButton();
};

export default Button;
