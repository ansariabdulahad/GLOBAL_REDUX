import { useSelector, useDispatch } from "react-redux";

const User = () => {
    const dispatch = useDispatch();
    const response = useSelector(response => response);
    const design = (
        <>
            {
                JSON.stringify(response)
            }
            <h1>Welcome to the USER COMPONENT.</h1>
            <button
                onClick={() => dispatch({
                    type: "Testing"
                })}
            >Click Me</button>
        </>
    );
    return design;
}

export default User;