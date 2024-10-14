import { Alert, Button, Checkbox, Col, Divider, Form, Input, Row } from "antd";
import { useTranslation } from 'react-i18next';

import { DEFAULT_USER, TEST_USER } from "@/_mock/assets";
import { useThemeToken } from '@/theme/hooks';
import ProTag from "@/theme/antd/components/tag";   

import { useLoginStateContext } from "./providers/LoginStateProvider";

function LoginForm() {
  const { t } = useTranslation();
  const themeToken = useThemeToken();
  const context = useLoginStateContext();

  const handleFinish = async () => {};

  return (
    <>
      <div className="mb-4 text-2xl font-bold xl:text-3xl">{t("sys.login.signInFormTitle")}</div>
      <Form
        name="login"
        size="large"
        initialValues={{
          remember: true,
          username: DEFAULT_USER.username,
          password: DEFAULT_USER.password,
        }}
        onFinish={handleFinish}
      >
        <div className="mb-4 flex flex-col">
          <Alert
            type="info"
            description={
              <div className="flex flex-col">
                <div className="flex">
                  <ProTag className="flex-shrink-0">Admin {t("sys.login.userName")}:</ProTag>
                  <strong className="ml-1" style={{ color: themeToken.colorInfoTextHover }}>
                    <span>{DEFAULT_USER.username}</span>
                  </strong>
                </div>

                <div className="flex">
                  <ProTag className="flex-shrink-0">Test {t("sys.login.userName")}:</ProTag>
                  <strong className="ml-1" style={{ color: themeToken.colorInfoTextHover }}>
                    <span>{TEST_USER.username}</span>
                  </strong>
                </div>

                <div>
                  <ProTag className="flex-shrink-0">{t("sys.login.password")}:</ProTag>
                  <strong className=" ml-1" style={{ color: themeToken.colorInfoTextHover }}>
                    {DEFAULT_USER.password}
                  </strong>
                </div>
              </div>
            }
            showIcon
          />
        </div>
      </Form>
    </>
  );
}

export default LoginForm;
