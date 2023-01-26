


function SocialMediaButton(props) {

    const {path, color, icon} = props;

    return (
        <a href={path} target="_blank">
            <div className={`social-media-button ${color}`}>
                <img src={icon} className="social-media-icon" alt="icon" />
            </div>
        </a>
    );
  
}

export default SocialMediaButton;