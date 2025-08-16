import react from 'react'

const AllInOne = react.createContext({
    userId:'',
    restaurantDetails: '',
    menuData: '',
    menuDataStatus: '',
    tablesData: '',
    tablesDataStatus: '',
    areasData: '',
    areasDataStatus: '',
    waiterData: '',
    waiterDataStatus: '',
    menuCategories: '',
    menuCategoriesStatus: '',
    addingMenuFun: () => {},
    updateMenuItem:() => {},
    deleteMenuItem: () => {},
    addMenuCategory: () => {},
    updateMenuCategory: () => {},
    deleteMenuCategory: () => {},
    addTable: () => {},
    updateTable: () => {},
    deleteTable: () => {},
    addArea:() => {},
    updateArea:() => {},
    deleteArea:() => {}
})

export default AllInOne