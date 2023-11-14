import { reactive } from 'vue'


/**
 * Menu Collapse Reactivity Store
 */

const menuCollapsStore = reactive({
    isCollapse: false,
    changeMenuState() {
        this.isCollapse = !this.isCollapse
    }
})








/**
 * Exporting All Stores as a module
 */
export {menuCollapsStore}