import Vue from 'vue'
import VueRouter from 'vue-router'
import BuyPage from '../views/BuySell/BuyPage.vue'
import WebChart from '../views/Portfolio/WebChart.vue'
import ProfileLayoutNew from '../components/ProfileLayoutNew.vue'
import SideNavLayout from '../components/SideNavLayout.vue'
import AccounPage from '../views/ProfilePage/AccounPage.vue'
import BankAccount from '../views/ProfilePage/BankAccount.vue'
import SetAutopay from '../views/ProfilePage/SetAutopay.vue'
import NotificationSettings from '../views/ProfilePage/NotificationSettings.vue'
import SecuFund from '../views/ProfilePage/SecuFund.vue'
import ManageFunds from '../views/ProfilePage/ManageFunds.vue'
// import SideNav from '../components/SideNav.vue'
import LayOut from '../components/LayOut.vue'
import HomeView from '../components/HomeView.vue'
import HoldingLayout from '../components/HoldingLayout.vue'
// import WatchListLayout from '../components/WatchListLayout.vue'
// import AppBar from '../components/AppBar.vue'
import PortFolio from '../views/Portfolio/PortfolioView.vue'
import WatchliS from '../views/Watchlist/WatchliS.vue'
import AfterLogin from '../views/AfterLogin.vue'
import StockDetailes from '../views/Stocks pages/StockDetailes.vue'
import CollecTion from '../views/Collection/CollecTion.vue'
import ReF from '../views/ReF.vue'
// Positions
import StocksPositions from '../views/Positions/StocksPositions.vue'
import SingleEtfs from '../views/SingleEtfs.vue'
// import NoHolding from '../views/NoHolding.vue'
// import BlogPolicy from '../views/BlogPolicy.vue'
// import BankDetailes from '../views/BankDetailes.vue'
// import DisposaL from '../views/DisposaL.vue'
// import NpsCal from '../views/NpsCal.vue'
// stocks
import StocksView from '../views/Stocks pages/StocksView.vue'
// import StocksOptionchainr from '../views/Stocks pages/StocksOptionchainr.vue'

// mutual fundd
import MutualfundView from '../views/Mutual Fund/MutualfundView.vue'
import MutualfundAmc from '../views/Mutual Fund/MutualfundAmc.vue'
import MutualFundCate from '../views/Mutual Fund/MutualFundCate.vue'
import SingleFund from '../views/Mutual Fund/SingleFund.vue'
// IPO
import IpoNew from '../views/IPO/IpoNew.vue'
import IposView from '../views/IPO/IposView.vue'
import PerforMance from '../views/IPO/PerforMance.vue'
import IpoOpen from '../views/IPO/IpoOpen.vue'
import IpoClose from '../views/IPO/IpoClose.vue'
// commodities
import CommoDities from '../views/Commodities/CommoDities.vue'
import CommoditesCategery from '../views/Commodities/CommoditesCategery.vue'
import CommodititesDetailes from '../views/Commodities/CommodititesDetailes.vue'
// Gold Bond
import GoldBondview from '../views/Gold bond/GoldBondview.vue'
import GoldBondsCategory from '../views/Gold bond/GoldBondsCategory.vue'
import GoldBonddetailes from '../views/Gold bond/GoldBonddetailes.vue'
// Currency
import CurrencyView from '../views/Currency/CurrencyView.vue'
import CurrencyDetailespage from '../views/Currency/CurrencyDetailespage.vue'
// Us stocks
import UsStockview from '../views/US stocks/UsStockview.vue'
// GovtSec
import GovtSec from '../views/Govt. Sec/GovtSec.vue'
//super star
// import SuperStar from '../views/Collection/SuperStar'
//collectioncat
import CollectionCat from '../views/Collection/CollectionCat'
//collection single
import CollectionSingle from '../views/Collection/CollectionSingle'




//collection single
import CollEctionSingleSS from '../views/Collection/CollEctionSingleSS.vue'
// F&o
import FAndoView from '../views/F&O/FAndoView.vue'
import FandOdetailespage from '../views/F&O/FandOdetailespage.vue'
import StocksFandO from '../views/F&O/StocksFandO.vue'
import StocksOptionChain from '../views/F&O/StocksOptionChain.vue'
// import GoldBondsCategory from '../views/Gold bond/GoldBondsCategory.vue'
import SuperStar from '../views/superstarpages/SuperStar.vue'
import SuperstarDetailesPage from '../views/superstarpages/SuperstarDetailesPage.vue'
// Orderbook

import StocksOrderbook from '../views/orderbook/StocksOrderbook.vue'

// holdings stocks
import StockPage from '../views/Holding/StockPage.vue'
import HoldingMutualfund from '../views/Holding/HoldingMutualfund.vue'
// import SingleFund from '../views/Mutual Fund/SingleFund.vue'
import IposClose from '../views/IPO/IposClose.vue'
Vue.use(VueRouter)
const routes = [
    {
        path: '/stockdetailes',
        name: 'StockDetailes',
        component: StockDetailes
    },
    {
        path: '/buy',
        name: 'BuyPage',
        component: BuyPage
    },
    
    
  
    {
        path: '/ref',
        name: 'ReF',
        component: ReF
    },
    {
        path:'/website',
        name: 'website',
        component: WebChart,
},



    {
        path: 'accountpage',
        redirect: 'accountpage',
        name: 'ProfileLayoutNew',
        component: ProfileLayoutNew,
        children: [
            {
                path: '/bbbb',
                redirect: 'bbb',
                name: 'SideNavLayout',
                component: SideNavLayout,  

        children: [
            {
                path: '/accountpage',
                name: 'AccounPage',
                component: AccounPage,
            },
            {
                path: '/bankaccount',
                name: 'BankAccount',
                component: BankAccount,
            },
            {
                path: '/autopay',
                name: 'SetAutopay',
                component: SetAutopay,
            },

            {
                path: '/noticationsettings',
                name: 'NotificationSettings',
                component: NotificationSettings,
            },
            {
                path: '/secufund',
                name: 'SecuFund',
                component: SecuFund,
            },
            {
                path: '/managefund',
                name: 'ManageFunds',
                component: ManageFunds,
            },

        
            


            
        ]


    }
]
    },

{
        path: '/singleetf',
        name: 'SingleEtfs',
        component: SingleEtfs
    },
    
    {
        path: '/',
        redirect: 'Stock',
        name: 'LayOut',
        component: LayOut,
        children: [
            {
                path: '/dashboard',
                redirect: 'HomeView',
                name: 'HomeView',
                component: HomeView,
                
                children: [
                    {
                        path: '/afterlogin',
                        name: 'AfterLogin',
                        component: AfterLogin
                    },
                    
                    {
                        path: '/stock',
                        name: 'StocksView',
                        component: StocksView
                    },
                    // {
                    //     path: '/stocksoptionchain',
                    //     name: 'StocksOptionchainr',
                    //     component: StocksOptionchainr
                    // },
                  
                     {
                        path: '/mfamc',
                        name: 'MutualfundAmc',
                        component: MutualfundAmc
                    },
                    {
                        path: '/mutualfund',
                        name: 'MutualfundView',
                        component: MutualfundView
                    },
                    {
                        path: '/mutualfundcat',
                        name: 'MutualFundCate',
                        component: MutualFundCate
                    },
                   
                      {
                        path: '/ipo',
                        name: 'IposView',
                        component: IposView
                    },
                    {
                        path: '/iponew',
                        name: 'IpoNew',
                        component: IpoNew
                    },
                    {
                        path: '/ipoperformance',
                        name: 'PerforMance',
                        component: PerforMance
                    },
                    {
                        path: '/ipoopen',
                        name: 'IpoOpen',
                        component: IpoOpen
                    },
                    {
                        path: '/ipoclose',
                        name: 'IpoClose',
                        component: IpoClose
                    },
                    {
                        path: '/goldbond',
                        name: 'GoldBondview',
                        component: GoldBondview
                    },
                    {
                        path: '/goldbondcategory',
                        name: 'GoldBondsCategory',
                        component: GoldBondsCategory
                    },
                    {
                        path: '/goldbonddetailes',
                        name: 'GoldBonddetailes',
                        component: GoldBonddetailes
                    },
                    {
                        path: '/commoditie',
                        name: 'CommoDities',
                        component: CommoDities
                    },
                    {
                        path: '/currency',
                        name: 'CurrencyView',
                        component: CurrencyView
                    },
                    {
                        path: '/currencydetailes',
                        name: 'CurrencyDetailespage',
                        component: CurrencyDetailespage
                    },
                    {
                        path: '/usstock',
                        name: 'UsStockview',
                        component: UsStockview
                    },
                    {
                        path: '/fo',
                        name: 'FAndoView',
                        component:FAndoView
                    },
                    {
                        path: '/fodetailes',
                        name: 'FandOdetailespage',
                        component:FandOdetailespage
                    },
                    {
                        path: '/stocksfo',
                        name: 'StocksFandO',
                        component:StocksFandO
                    },
                    {
                        path: '/StckOptinchain',
                        name: 'StocksOptionChain',
                        component:StocksOptionChain
                    },
                    {
                        path: '/commoditescategory',
                        name: 'CommoditesCategery',
                        component: CommoditesCategery
                    },
                    {
                        path: '/commodititesdetailes',
                        name: 'CommodititesDetailes',
                        component: CommodititesDetailes
                    },
                    {
                        path: '/govtsec',
                        name: 'GovtSec',
                        component: GovtSec
                    },
                    {
                        path: '/collection',
                        name: 'CollecTion',
                        component: CollecTion
                    },
                    {
                        path: '/collectioncat',
                        name: 'Collectioncategories',
                        component: CollectionCat
                    },
                    {
                        path: '/collectionsingle',
                        name: 'collectionsingle',
                        component: CollectionSingle
                    },
                    {
                        path: '/superstar',
                        name: 'SuperStar',
                        component: SuperStar
                    },
                    {
                        path: '/superstardetailes',
                        name: 'SuperstarDetailesPage',
                        component: SuperstarDetailesPage
                    },
                   {
                        path: '/collectionnew',
                        name: 'CollEctionSingleSS',
                        component: CollEctionSingleSS
                    },
                    {
                        path: '/singlefund',
                        name: 'SingleFund',
                        component: SingleFund
                    },
                    {
                        path: '/iposclose',
                        name:   "Iposclose",
                        component: IposClose
                    }
                ]
            },

            {
                path: '/portfolio',
                redirect: 'portfolio',
                name: 'PortFolio',
                component: PortFolio,
                children: [
                    {
                        path: '/',
                        name: 'portfolio',
                        component: PortFolio
                    },
                ]
            },


            {
                path: '/positions',
                redirect: 'positions',
                name: 'StocksPositions',
                component: StocksPositions,
                children: [
                    {
                        path: '/',
                        name: 'StocksPositions',
                        component: StocksPositions
                    },
                ]
            },
            {
                path: '/orderbook',
                redirect: 'orderbook',
                name: 'StocksOrderbook',
                component: StocksOrderbook,
                children: [
                    {
                        path: '/',
                        name: 'StocksOrderbook',
                        component: StocksOrderbook
                    },
                ]
            },
            {
                path: '/watchlist',
                redirect: 'watchlist',
                name: 'WatchliS',
                component: WatchliS,
                children: [
                    {
                        path: '/',
                        name: 'WatchliS',
                        component: WatchliS
                    },
                ]
            },

            {
                path: '/holdings',
                redirect: 'holdings',
                name: 'HoldingLayout',
                component: HoldingLayout,
                children: [
                  
                    {
                        path: '/holdingstock',
                        name: 'StockPage',
                        component: StockPage
                    },
                    {
                        path: '/holdingmutual',
                        name: 'HoldingMutualfund',
                        component: HoldingMutualfund
                    },
                    
                    
                ]
            },


            
        ]
    },
 

   
    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        window.scrollTo(0, 0);
    }
})

export default router