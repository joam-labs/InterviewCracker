import React from "react";

const AddCompany = () => {
  //dispatch

  return (
    <>
      <div class="addCompany">

        <label for='Company'>Company</label>
        <input type="text" id='Company' />
        
        <label for="team">Team</label>
        <input type="text" id="team" name="fname"/>

        <label for="role">Role</label>
        <input type="text" id="role" name="fname"/>

      </div>

    </>
  )
}

export default AddCompany;