import type { AppRouteModule } from '/@/router/types'

import { getParentLayout, LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const deal: AppRouteModule = {
  path: '/deal',
  name: 'deal',
  component: LAYOUT,
  redirect: '/deal/sale/mySalesOrder',
  meta: {
    orderNo: 2000,
    icon: 'ion:cart',
    title: t('routes.deal.deal'),
  },
  children: [
    {
      path: 'sale',
      name: 'deal',
      component: getParentLayout('deal'),
      meta: {
        title: t('routes.deal.sale'),
      },
      redirect: '/deal/sale/mySalesOrder',
      children: [
        {
          path: 'mySalesOrder',
          name: 'mySalesOrder',
          component: () => import('/@/views/deal/sale/mySalesOrder.vue'),
          meta: {
            title: t('routes.deal.mySalesOrder'),
          },
        },
        {
          path: 'customerPaysOrder',
          name: 'customerPaysOrder',
          component: () => import('/@/views/deal/sale/customerPaysOrder.vue'),
          meta: {
            title: t('routes.deal.customerPaysOrder'),
          },
        },
        {
          path: 'customerInquiryQuotes',
          name: 'customerInquiryQuotes',
          component: () => import('/@/views/deal/sale/customerInquiryQuotes.vue'),
          meta: {
            title: t('routes.deal.customerInquiryQuotes'),
          },
        },
        {
          path: 'salesContract',
          name: 'salesContract',
          component: () => import('/@/views/deal/sale/salesContract.vue'),
          meta: {
            title: t('routes.deal.salesContract'),
          },
        },
      ],
    },
    {
      path: 'purchase',
      name: 'purchase',
      component: getParentLayout('deal'),
      meta: {
        title: t('routes.deal.purchase'),
      },
      redirect: '/deal/purchase/myPurchaseOrder',
      children: [
        {
          path: 'myPurchaseOrder',
          name: 'myPurchaseOrder',
          component: () => import('/@/views/deal/purchase/myPurchaseOrder.vue'),
          meta: {
            title: t('routes.deal.myPurchaseOrder'),
          },
        },
        {
          path: 'vendorSalesOrder',
          name: 'vendorSalesOrder',
          component: () => import('/@/views/deal/purchase/vendorSalesOrder.vue'),
          meta: {
            title: t('routes.deal.vendorSalesOrder'),
          },
        },
        {
          path: 'inquiryVendorQuotes',
          name: 'inquiryVendorQuotes',
          component: () => import('/@/views/deal/purchase/inquiryVendorQuotes.vue'),
          meta: {
            title: t('routes.deal.inquiryVendorQuotes'),
          },
        },
        {
          path: 'purchaseContract',
          name: 'purchaseContract',
          component: () => import('/@/views/deal/purchase/purchaseContract.vue'),
          meta: {
            title: t('routes.deal.purchaseContract'),
          },
        },
      ],
    },
  ],
}

export default deal
