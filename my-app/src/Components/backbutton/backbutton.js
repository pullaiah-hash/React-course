import React, { useState } from "react"


import { useHistory } from "react-router-dom";

 const Item = () => {
    let history = useHistory();
    return (
        <>
          <button onClick={() => history.goBack()}>Back</button>
        </>
    );
};

export default Item