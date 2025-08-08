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
})

export default AllInOne