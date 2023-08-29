import { ChangePasswordForm } from "../../components";

import PageWithSideMenu from "../PageWithSideMenu/PageWithSideMenu";

function ChangePassword() {
  return (
    <PageWithSideMenu>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Change Password</h2>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5 xxl:col-span-9">
          <ChangePasswordForm />
        </div>
      </div>
    </PageWithSideMenu>
  );
}
export { ChangePassword };
