const login = async (ctx) => {
  ctx.response.body = `<h1>注册或登录</h1>
      <form action="/user" method="get">
          <p>Name: <input name="username" value="hehe"></p>
          <p>Password: <input name="password" type="password"></p>
          <p><input type="submit" value="登录"></p>
      </form>`;
};

module.exports = { login }
