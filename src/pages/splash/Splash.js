import { Component } from "react";
import Lottie from "react-lottie";
import { Redirect } from "react-router-dom";
import "./Splash.css";
// Import your loader animation
import animationData from "../../assets/images/loader.json";

function AnimatedSplash(props) {
  const defaultOptions = {
    loop: true, // Loop the animation
    autoplay: true, // Start automatically
    animationData: animationData, // Your Lottie animation JSON
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="logo_wrapper">
      <div className="screen"> {/* No theme styling at all */}
        <div className="lottie-container">
          <Lottie 
            options={defaultOptions}
            height={400} // Adjust size as needed
            width={400}  // Adjust size as needed
          />
        </div>
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    // You can adjust the timing (5500ms = 5.5 seconds)
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;