import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Edit customer',
};

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customer', href: '/dashboard/customer' },
          {
            label: 'Edit customer',
            href: `/dashboard/customer/${id}/edit`,
            active: true,
          },
        ]}
      />
     
    </main>
  );
}