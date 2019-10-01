import {Role} from '../model/role';

export class RoleUtils {
  public static fromRoleToString(role: Role): string {
    console.log(role);
    if (role === Role.ROLE_ADMIN) {
      return 'Admin';
    } else {
      return 'User';
    }
  }

  public static fromStringToRole(role: string): Role {
    if (role === 'ROLE_ADMIN') {
      return Role.ROLE_ADMIN;
    } else {
      return Role.ROLE_USER;
    }
  }

}
