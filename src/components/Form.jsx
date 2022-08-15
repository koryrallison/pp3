import React from 'react'
import popsicle from "../assets/te-pops.png" 


function Form(){
    return (
        <main>
            <form>

                <h2>Contact Us</h2>
                <label for="name">Name:</label><br/>
                <input type="text" id="name" name="name" /><br/><br/>


                <label for="referral">How did you hear of us?</label><br />
                <select id="referral-field" name="referral">
                <option value="pm">Popsicle Monthly</option>
                <option value="te">Tech Elevator</option>
                </select>
                <br /><br />



                <label for="color">What color is your favorite popsicle?</label><br/>
                <input type="color" id="color" value="#00afef"/><br/><br/>

                <label for="comment">Please let us know any comments you have:</label><br/>
                <textarea name="comment" id="comment" cols="60" rows="10"></textarea><br/>

                <button class="submit"><a href="#">Submit</a></button>
            </form>

        </main>


    )

}

export default Form