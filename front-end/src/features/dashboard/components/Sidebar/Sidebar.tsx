import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link } from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

const DASHBOARD_SIDEBAR = [
  {
    title: 'Nhắn tin',
    icon: <MailIcon />,
    href: '/dashboard/chat',
  },
  {
    title: 'Khóa học',
    icon: <MailIcon />,
    href: '/dashboard/courses',
  },
  {
    title: 'Luyện tập',
    icon: <MailIcon />,
    href: '/dashboard/practices',
  },
  {
    title: 'Hóa đơn',
    icon: <MailIcon />,
    href: '/dashboard/payments',
  },
  {
    title: 'Quản lý nhân viên',
    icon: <MailIcon />,
    href: '/dashboard/user-management',
  }
];

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div>
      <Divider />
      <List>
        {DASHBOARD_SIDEBAR.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton onClick={() => navigate(item.href)} >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
