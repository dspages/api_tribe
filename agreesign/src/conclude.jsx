
import React, { Component } from 'react';
import './number.css';
import { Link } from 'react-router-dom';

class Conclude extends Component{

  render(){
    return(
      <Link to={`/`}>
        <div className="window">
          <h2>Mail sent!</h2>
          <h3>Tap to return to start</h3>
            <div>
              <text>GigSign Powered By</text>
              <img
                height="50px"
                width="200px"
                src="https://files.mtstatic.com/site_5803/22494/0?Expires=1506281151&Signature=ZmEA8ugzWcExIet6SYpfLrABU9of7tB8mrTJyvOD2Iasu5i3ON2rfOGk0UND5QkSaou2DRkPCkdWKpJutoYHNj5x21bzxujBTynBj~iLkMvHINXkwZI2MK5PyaNXCNKldMaDYutcermpK2S~~Au9bKn5e~4jX5xM6ZnOPOYldBlZXexOJOjMScB3noMJpVB~02KlJ0lUSHn863x1ihzlA~8QagKr0rFCy1jV-9HThK144tzIPuaHrGnHxLdsMXr2zLv14xBY1NxeX87lKvhnj9-fT1N1cm~umxlaARzlxyGrK0~bVeCr-~BDRiHtoAZZujksUtzPOEG3eX9Hktq-iArIV98rZ1YWH-tX~ER9kp-WAXJN7YSwTW~xo7JiBjoaDTIi4Zoau-6TluIRj~Xts4pyJkoZ5QaDBzJsTSfgKmzA5-YU8wcxkbQjXXiX3NIkASV8~1DC4tEsmSzMN7eUQEmXEiU5ySnqpR8L0upNPxpt63fqj38gz0bNlALzcuUdsNYbexECzV7mC9xXRinr9uYhpoJgYIVl09XL5KkN87leCWD30zkneMdyX6bcuUNtmAIVldPvZdGFvh1G3IiwsTb3RSJ2r6eJKd0yb2Jm7X7JMhq6XB5R1ossmCIN7cYgDxXAEachCMMsLnftBG2nYqf9rlJRdBKNAlwhoOKwIX4_&Key-Pair-Id=APKAIX7ZMYEQ4P6XATFQ"></img>
              <img
                height="150px"
                width="150px"
                src="https://i.forbesimg.com/media/lists/companies/telesign_416x416.jpg"></img>

          </div>
        </div>
      </Link>
    );
  }
}

export default Conclude;
