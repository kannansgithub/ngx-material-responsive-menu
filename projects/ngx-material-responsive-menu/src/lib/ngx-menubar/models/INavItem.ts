export interface INavItem {
  order: number;
  id: string;
  displayName: string;
  disabled?: boolean;
  iconName?: string;
  route?: string;
  children?: INavItem[];
}
