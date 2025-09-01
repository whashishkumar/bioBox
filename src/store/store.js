import { configureStore } from '@reduxjs/toolkit';
import landinPageReducer from './features/landingPage/landingPageSlice';
import productCategoriesReducer from './features/productCategory/categorySlice';
import aboutUsReducer from './features/aboutUs/aboutUsPageSlice';
import productTypeReducer from './features/productTypes/productTypeSlice';
import whyChooseUsReducer from './features/whyToChooseus/whyToChooseUsSlice';
import ourCertifacationReduceer from './features/ourCertifacation/ourCertifacation';
import pdcBusinessOppurnityReducer from './features/pcdBusinessOpportunity/pcdBusinessOpportunitySlice';
import foterReducer from './features/footer/footerSlice';
import ourProductsReducer from './features/ourProducts/ourProductsSlice';
import partnerBenifitsReducer from './features/partnerBenifits/partnerBenifitsSlice';
import ourServicesReducer from './features/ourServices/ourServicesSlice';
import contactUsReducer from './features/contactUs/contactusSlice';

const store = configureStore({
  reducer: {
    landingPage: landinPageReducer,
    categories: productCategoriesReducer,
    aboutUs: aboutUsReducer,
    productType: productTypeReducer,
    chooseUs: whyChooseUsReducer,
    ourCertifacation: ourCertifacationReduceer,
    pdcOppurnity: pdcBusinessOppurnityReducer,
    footerInfo: foterReducer,
    allProducts: ourProductsReducer,
    partnerBenifitsInfo: partnerBenifitsReducer,
    ourServices: ourServicesReducer,
    contactUs: contactUsReducer,
  },
});

export default store;
