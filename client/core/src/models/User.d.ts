import Gender from "./Gender";
import { UnifiedModel } from "./UnifiedModel";
import Preferences from "./Preferences";
export default interface User extends UnifiedModel {
    address?: string;
    website?: string;
    email: string;
    password?: string;
    name: string;
    avatarUrl: string;
}