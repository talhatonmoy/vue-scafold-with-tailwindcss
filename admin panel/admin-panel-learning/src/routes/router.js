import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import TableComponent from '../components/plugins/table/TableComponent.vue'
import ChartComponent from '../components/plugins/chart/ChartComponent.vue'
import RichTextEditorComponent from '../components/plugins/richTextEditor/RichTextEditorComponent.vue'
import ToastNotificationComponent from '../components/plugins/toastNotification/ToastNotificationComponent.vue'
import Dashboard from '../components/allPages/Dashboard.vue'

const routes = [
    {
        path: '/',
        component: Dashboard,
        name: 'dashboardHome'
    },
    {
        path: '/table',
        component: TableComponent,
        name: 'tableComponent'
    },
    {
        path: '/toast-notification',
        component: ToastNotificationComponent,
        name: 'toastNotification'
    },
    {
        path: '/chart',
        component: ChartComponent,
        name: 'chart'
    },
    {
        path: '/rich-text-editor',
        component: RichTextEditorComponent,
        name: 'richTextEditor'
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router