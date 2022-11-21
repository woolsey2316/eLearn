type UserInfo = {
  _id: string;
  roleId: number;
  address: string;
  area: string;
  className: string;
  gender: string;
  email: string;
  mobile: string;
  name: string;
  pincode: string;
  school: string;
  state: string;
};

type EditableUserInfo = {
  address: string;
  area: string;
  className: string;
  gender: string;
  email: string;
  mobile: string;
  name: string;
  pincode: string;
  school: string;
  state: string;
};

export const UserInfo;
export const EditableUserInfo;
