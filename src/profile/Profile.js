import './Profile.css';
import Image from '../Image';
import PropTypes from "prop-types";


const profileStyle = {
    width: '500px',
    height: '4OOpx',
    border:  '1px solid blue',
    margin: '5px',
    padding: '5px',
    borderRadius: '5px',
    fontFamily : 'calibri'
}

function Profile(props) {
    const {fullName, bio, profession} = props;
    const handleName = (e) => {
        e.preventDefault();
        alert(fullName);
    }
    return (
        <div style={profileStyle}>
            <div>
                <h3>Full Name</h3>
                <p>{fullName}</p>
            </div>
            <hr/>
            <div> 
                <h3>Profession</h3>
                <p>{profession}</p>
            </div>
            <hr/>
            <div>
                <h3>Bio</h3>
                <p>{bio}</p>
            </div>  
            <Image>
                <img src="https://picsum.photos/seed/picsum/400/300"/>
            </Image> 
            <button onClick={handleName}>Profile Name</button>
        </div>
    )
}

Profile.defaultProps = {
    fullName: "Raphael Amath Soucka Faye",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper velit ac ipsum pharetra consequat. Nulla quis sem lectus. Nulla semper mi et orci maximus, sed ornare elit imperdiet.",
    profession: "Student in Javascript Full Stack Development"
};

Profile.propTypes = {
    stringProp: PropTypes.string,
};

export default Profile
