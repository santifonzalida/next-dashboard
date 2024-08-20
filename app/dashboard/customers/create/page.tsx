import { Metadata } from 'next';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/app/ui/customers/create-form';
 
export const metadata: Metadata = {
  title: 'Create customer',
};

export default async function Page() {

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Customers', href: '/dashboard/customers' },
                    {
                        label: 'Create customer',
                        href: '/dashboard/customers/create',
                        active: true,
                    },
                ]}
            />        
            <Form />
        </main>
    )
}