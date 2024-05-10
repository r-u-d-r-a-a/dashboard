import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '../../lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';
import { InvoiceSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
import { CardSkeleton } from '@/app/ui/skeletons';
 
export default async function Page() {

  //const revenue = await fetchRevenue();
  //const latestInvoices = await fetchLatestInvoices();
  //const cardDetails = await fetchCardData();
  

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton/>} >
          <CardWrapper/>
        </Suspense>
        {/* <Card title="Collected" value={cardDetails.totalPaidInvoices} type="collected" />
        <Card title="Pending" value={cardDetails.totalPendingInvoices} type="pending" /> 
         <Card title="Total Invoices" value={cardDetails.numberOfInvoices} type="invoices" />
         <Card
          title="Total Customers"
          value={cardDetails.numberOfCustomers}
          type="customers"
        />  */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        <Suspense fallback={<RevenueChartSkeleton/>} >
          <RevenueChart />
        </Suspense>

        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
        <Suspense fallback={<InvoiceSkeleton/>} >
          <LatestInvoices></LatestInvoices>
        </Suspense>
      </div>
    </main>
  );
}