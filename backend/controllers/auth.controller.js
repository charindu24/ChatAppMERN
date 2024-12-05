export const signup = async (req, res) => {
    try {
        const{fullName, username, password, confirmPassword, gender} = req.body;
    } catch (error) {
        
    }
    console.log("SignupUser"); // Logs "SignupUser" to the console
};

export const login = (req, res) => {
    res.send("LoginUser");
    console.log("LoginUser"); // Logs "LoginUser" to the console
};

export const logout = (req, res) => {
    res.send("LogoutUser");
    console.log("LogoutUser"); // Logs "LogoutUser" to the console
};
