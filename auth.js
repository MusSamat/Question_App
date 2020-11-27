export function getAuthForm() {
    return `
             <form id="auth-form" class="mui-form">
                <div class="mui-textfield mui-textfield--float-label">
                    <input id="email" type="email" required>
                    <label for="email">Email</label>
                </div>
                <div class="mui-textfield mui-textfield--float-label">
                    <input id="password" type="password" required>
                    <label for="email">password</label>
                </div>
                <button id="submit" 
                 type="submit" class="mui-btn mui-btn--raised 
                 mui-btn--primary" >Sign in</button>
            </form>
    `
}