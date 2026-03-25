import { NavLink } from 'react-router-dom';
import {
  CalendarDaysIcon,
  ClockIcon,
  PlusCircleIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: CalendarDaysIcon },
  { to: '/add-medicine', label: 'Add Medicine', icon: PlusCircleIcon },
  { to: '/history', label: 'History', icon: ClockIcon },
  { to: '/profile', label: 'Profile', icon: UserCircleIcon }
];

export default function AppShell({ children }) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass medical-icon-pattern relative flex flex-col justify-between rounded-[2rem] p-6 lg:min-h-[calc(100vh-3rem)] lg:w-80"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/70">Care Hub</p>
            <h1 className="mt-3 text-3xl font-extrabold text-white">Online Medicine Reminder</h1>
            <p className="mt-3 text-sm text-cyan-50/85">
              Smart reminders, caregiver support, low-stock alerts, and health snapshots in one place.
            </p>

            <nav className="mt-8 space-y-3">
              {links.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-white/20 text-white shadow-lg'
                        : 'text-cyan-50/80 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="rounded-3xl bg-slate-950/20 p-4 text-sm text-cyan-50/90">
            <p className="font-semibold">{user?.name}</p>
            <p className="mt-1 text-cyan-100/70">{user?.email}</p>
            <button
              onClick={logout}
              className="mt-4 rounded-xl bg-white/15 px-4 py-2 font-semibold text-white transition hover:bg-white/25"
            >
              Sign out
            </button>
          </div>
        </motion.aside>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

