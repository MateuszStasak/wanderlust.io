'use client';
import { FormEvent } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { SearchKeys } from '../types';

export const Selector = () => {
  const router = useRouter();
  const pathNameParams = new URLSearchParams(usePathname()?.replace('/', ''));
  const { location, month, budget, activity } = Object.fromEntries(
    pathNameParams
  ) as Record<SearchKeys, string>;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const formProps = Object.fromEntries(formData);

    if (!formProps[SearchKeys.Location] || !formProps[SearchKeys.Month]) return;

    const newSearchParams = new URLSearchParams(
      formProps as Record<string, string>
    );

    router.push('/' + newSearchParams.toString());
  };

  return (
      <div className='flex flex-col gap-6 justify-center items-center shadow-lg p-6 w-full bg-base-100 rounded-lg'>
        <form onSubmit={submit} className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='text-sm text-gray-500' htmlFor='location'>Choose your current location</label>
              <input
                  type='text'
                  name={SearchKeys.Location}
                  placeholder='🌍 your current location *'
                  defaultValue={location}
                  id='location'
                  className='input input-bordered w-full'
              />
            </div>
           <div>
             <label className='text-sm text-gray-500' htmlFor='month'>Choose when do you want to move</label>
             <select
                 name={SearchKeys.Month}
                 id='month'
                 className='select select-bordered w-full'
                 defaultValue={month || '📅 month *'}
             >
               <option disabled>📅 month *</option>
               {months.map((month) => (
                   <option key={month}>{month}</option>
               ))}
             </select>
           </div>
           <div>
             <label className='text-sm text-gray-500' htmlFor='activities'>Choose your planned activities</label>
             <select
                 name={SearchKeys.Activity}
                 id='activities'
                 className='select select-bordered w-full'
                 defaultValue={activity || '🏄‍ some activities'}
             >
               <option disabled>🏄‍ some activities</option>
               <option>Snowboarding</option>
               <option>Skiing</option>
               <option>Surfing</option>
               <option>Chilling on the beach</option>
               <option>Hiking</option>
               <option>Shopping</option>
               <option>Sightseeing</option>
               <option>Mountain Biking</option>
               <option>Kiteboarding</option>
               <option>Windsurfing</option>
               <option>Wine Tasting</option>
               <option>Caving</option>
               <option>Photography Tours</option>
               <option>Skydiving</option>
             </select>
           </div>
            <div>
              <label className='text-sm text-gray-500' htmlFor='budget'>Choose your planned budget</label>
              <input
                  name={SearchKeys.Budget}
                  type='number'
                  id='budget'
                  placeholder='🤑 your budget in $/month'
                  className='input input-bordered w-full'
                  defaultValue={budget}
              />
            </div>
          </div>
          <div className='flex justify-end gap-4 mt-4'>
            <button className='btn btn-ghost' type='reset'>Reset</button>
            <button className='btn btn-primary' type='submit'>Suggest</button>
          </div>
        </form>
      </div>
  );
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
