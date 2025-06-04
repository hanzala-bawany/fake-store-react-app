import "./NavBar2.css"
import * as React from 'react';

const NavBar2 = () => {
    return (
        <div className='navbar2Container'>
            <div className='navbar2'>

                <div class="input-group mb-3 inputContainer">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1">Enter</button>
                    <input type="text" class="form-control" placeholder="Enter Your City" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>

            </div>
        </div>
    )
}

export default NavBar2