export interface User {
  id?: string | number;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  picture?: string;
  [key: string]: any;
}

export interface AuthState {
  user: User | null;
  token: string | null;
}

export interface UserState {
  user: User | null;
  message: string | null;
  createModal: boolean;
  roleModal: boolean;
  openModal: boolean;
  activeModal: boolean;
  disableModal: boolean;
  deleteModal: boolean;
  updateProfileModal: boolean;
  loading: boolean;
}

export interface RouteItem {
  name: string;
  layout: string;
  path: string;
  icon?: React.ReactNode;
  component?: React.ReactNode;
  secondary?: boolean;
}

export interface NavbarProps {
  onOpenSidenav?: () => void;
  brandText?: string;
  logoText?: string;
  secondary?: boolean;
}

export interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export interface WidgetProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string | number;
}
