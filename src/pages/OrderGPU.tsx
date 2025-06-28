// src/pages/OrderGPU.tsx
import { useEffect } from 'react';

export default function OrderGPU() {
  useEffect(() => {
    window.location.href =
      'https://acnaiopstest.service-now.com/sai_esc?id=sc_cat_item&sys_id=f53465171bb02a50ad5bea42b24bcb96&referrer=recent_items';
  }, []);

  return (
    <section className="py-20 px-6 text-center">
      <h1 className="text-2xl font-semibold text-brand-dark">Redirecting to order form...</h1>
      <p className="text-brand-gray mt-4">If you are not redirected automatically, <a className="text-brand-purple underline" href="https://acnaiopstest.service-now.com/sai_esc?id=sc_cat_item&sys_id=f53465171bb02a50ad5bea42b24bcb96&referrer=recent_items">click here</a>.</p>
    </section>
  );
}
