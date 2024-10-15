import { App as AntdApp } from "antd";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Logo from "@/assets/images/logo.png";
import Router from "@/router";
import AntdConfig from "@/theme/antd";

function App() {
  return (
    <HelmetProvider>
      <AntdConfig>
        <AntdApp>
          <Helmet>
            <title>Slash Admin</title>
            <link rel="icon" href={Logo} />
          </Helmet>
          <Router />
        </AntdApp>
      </AntdConfig>
    </HelmetProvider>
  );
}

export default App;
