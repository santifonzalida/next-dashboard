import { Metadata } from 'next';
import Table from '@/app/ui/customers/table';
import Pagination from '@/app/ui/pagination';

//import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
//import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
//import { Suspense } from 'react';
import { fetchCustomersPages } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({ searchParams }: {
    searchParams?: {
        query: string;
        page: string;
    }
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page || 1);
    const totalPages = await fetchCustomersPages();

    return (
        <div className="w-full">              
          <Table query={query} currentPage={currentPage} />
          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
    );
}