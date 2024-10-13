import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: ['USER', 'ADMIN'],
        subMenu: [],
    },
    {
        key: 'database',
        path: '/database',
        title: 'Database',
        translateKey: 'Database',
        icon: 'database',
        type: NAV_ITEM_TYPE_ITEM,
        authority: ['USER', 'ADMIN'],
        subMenu: [],
    },
    {
        key: 'treatment-centers',
        path: '/treatment-centers',
        title: 'Treatment Centers',
        translateKey: 'Treatment Centers',
        icon: 'hospital',
        type: NAV_ITEM_TYPE_ITEM,
        authority: ['USER', 'ADMIN'],
        subMenu: [],
    },
    // {
    //     key: 'ngo',
    //     path: '/ngo',
    //     title: 'NGO',
    //     translateKey: 'NGO',
    //     icon: 'ngo',
    //     type: NAV_ITEM_TYPE_ITEM,
    //     authority: [ 'USER', 'ADMIN' ],
    //     subMenu: [],
    // },
    {
        key: 'home-remedies',
        path: '/home-remedies',
        title: 'Home Remedies',
        translateKey: 'Home Remedies',
        icon: 'medicine',
        type: NAV_ITEM_TYPE_ITEM,
        authority: ['USER', 'ADMIN'],
        subMenu: [],
    },
    {
        key: 'Doctor',
        path: '/Doctor',
        title: 'Doctor Appointment',
        translateKey: 'Doctor Appointment',
        icon: 'doctor',
        type: NAV_ITEM_TYPE_ITEM,
        authority: ['USER', 'ADMIN'],
        subMenu: [],
    },
    {
        key: 'register',
        path: '/Register',
        title: 'Manage NMK',
        translateKey: 'Register',
        icon: 'users',
        type: NAV_ITEM_TYPE_ITEM,
        authority: ['ADMIN'],
        subMenu: [],
    },
    {
        key: 'approval',
        path: '/superadmin',
        title: 'Approval',
        translateKey: 'Approval',
        icon: 'Approval',
        type: NAV_ITEM_TYPE_ITEM,
        authority: ['SUPERADMIN'],
        subMenu: [],
    }
]
export default navigationConfig
