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
})

export default AllInOne