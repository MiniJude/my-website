import { App as AntdApp } from "antd";
import { Helmet } from "react-helmet-async";

import Logo from "@/assets/images/logo.jpg";
import Router from "@/router";
import AntdConfig from "@/theme/antd";

function App() {
  return (
    <AntdConfig>
      <AntdApp>
        <Helmet>
          <title>Blog Admin</title>
          <link rel="icon" href={Logo} />
        </Helmet>
        <Router />
      </AntdApp>
    </AntdConfig>
  );
}

export default App;
